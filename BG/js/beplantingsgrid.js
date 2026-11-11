/* Beplantingsgrid: A3-raster samenstellen en als PDF exporteren,
   een geëxporteerde PDF terug inladen (IMPORT) en projectnummers aan planten
   toevoegen vanuit een geëxporteerde PDF (PROJECT UPLOADEN). */
(() => {
  'use strict';

  const PAGE_W = 420, PAGE_H = 297;
  const COL_W = 91.25;
  const BASE_GAP = 5;                                         // standaard tussenruimte tussen kolommen (mm)
  const GAP_WIDE = 10;                                        // vaste, bredere tussenruimte (mm); pas aan voor meer/minder witruimte
  const SNAP_MM = 3;                                          // zo ver moet je slepen (mm) voor de witruimte verspringt
  const MARGIN_MIN = 10;                                      // kleinste marge links en rechts
  const MAX_GAP_TOTAL = PAGE_W - 2 * MARGIN_MIN - 4 * COL_W;  // maximale totale tussenruimte (mm)
  const LEAD = 4.657;
  const TEXT_PT = 11;
  const TITLE_PT = 13;
  const MAX_SLOTS = 12;                                       // maximaal aantal kenmerkregels dat je kan kiezen
  const BOTTOM_LIMIT = PAGE_H - 10;                           // laagste toegelaten tekstregel op het blad (mm): zo blijft er 10 mm marge

  // gegevens die in de PDF worden meegeschreven, zodat ze terug ingelezen kunnen worden
  const DATA_KEY = 'BuroGroenData';
  const DATA_APP = 'beplantingsgrid';
  const DATA_VERSION = 1;

  const PROJ_RE = /^\d[\d.\-_]*$/;  // projectnummer: begint met een cijfer (bv. 2405, 24.031, 2024-15)

  const LAYOUT = {
    single: {
      label: "Enkele foto's",
      lines: 5,
      titleY: 46.75,
      cells: [0, 1, 2, 3, 4, 5, 6, 7].map(i => ({ col: i % 4, img: [52.75, 151.0][Math.floor(i / 4)], name: [121.16, 219.41][Math.floor(i / 4)] })),
      imgH: 60.5
    },
    elements: {
      label: "Foto's met elementen",
      lines: 6,
      titleY: 41.75,
      cells: [0, 1, 2, 3].map(i => ({ col: i, small: 47.75, big: 100.0, name: 252.85 })),
      smallH: 45.25,
      bigH: 144.25
    }
  };

  const pct = (v, total) => `${(v / total) * 100}%`;
  const has = (o, k) => !!o && Object.prototype.hasOwnProperty.call(o, k);

  const states = new WeakMap();
  const ui = { modal: null, head: null, body: null, foot: null, dialog: null, mini: null };
  let S = null;
  let drag = null;

  const newPage = () => ({ titles: ['', '', '', ''], gaps: [BASE_GAP, BASE_GAP, BASE_GAP], cells: new Array(LAYOUT[S.mode].cells.length).fill(null) });

  function esc(v) {
    return String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  const srcUrl = s => encodeURI(s);
  const nameOf = p => (window.PSE ? PSE.getName(p) : p?.use?.scientificName || p?.id || '');
  const normPath = s => String(s || '').replace(/\\/g, '/').replace(/^\/+/, '');

  function photosOf(plant) {
    const list = [plant.mainImage, ...(Array.isArray(plant.images) ? plant.images : [])]
      .filter(s => typeof s === 'string' && s.trim());
    return [...new Set(list)];
  }

  const byId = id => plants.find(p => p.id === id);

  /* ---------- kolomposities: altijd gecentreerd op het blad ---------- */

  function colXs(gaps) {
    const span = 4 * COL_W + gaps.reduce((a, b) => a + b, 0);
    let x = (PAGE_W - span) / 2;
    return [0, 1, 2, 3].map(c => { const here = x; x += COL_W + (gaps[c] || 0); return here; });
  }

  // Elke tussenruimte heeft maar twee mogelijke waarden: BASE_GAP (standaard) of GAP_WIDE (extra witruimte).
  // Drie brede tussenruimtes passen altijd op het blad (3 × GAP_WIDE ≤ MAX_GAP_TOTAL).
  const snapGap = v => (Number(v) >= (BASE_GAP + GAP_WIDE) / 2 ? GAP_WIDE : BASE_GAP);

  // kolom c over d mm verslepen: voorbij SNAP_MM springt de witruimte naar de vaste waarde.
  // Naar rechts slepen: de tussenruimte links van de kolom wordt breed, die rechts ervan weer standaard.
  // Naar links slepen: omgekeerd. Terugslepen naar het begin herstelt de oorspronkelijke toestand.
  function dragGaps(snap, c, d) {
    const g = snap.map(snapGap);
    if (d >= SNAP_MM) {
      if (c > 0) g[c - 1] = GAP_WIDE;
      if (c < 3) g[c] = BASE_GAP;
    } else if (d <= -SNAP_MM) {
      if (c < 3) g[c] = GAP_WIDE;
      if (c > 0) g[c - 1] = BASE_GAP;
    }
    return g;
  }

  // ook oudere PDF's (met vrije tussenruimtes) worden bij het inladen naar de dichtstbijzijnde vaste waarde gezet
  function cleanGaps(gaps) {
    return [0, 1, 2].map(i => snapGap(gaps?.[i]));
  }

  /* ---------- teksten per vak (standaard of manueel aangepast) ---------- */

  function defaultName(data) { return nameOf(S.details[data.id]); }
  function defaultLine(data, key) { return PSE.fieldLine(S.details[data.id], key); }

  // cap = maximaal aantal kenmerkregels dat onder deze plant past; de rest wordt weggelaten (cut = hoeveel)
  function linesFor(data, cap = Infinity) {
    const o = data.txt || {};
    const name = has(o, 'name') ? o.name : defaultName(data);
    const all = [];
    for (const key of S.fields) {
      const def = defaultLine(data, key);
      const text = has(o.rows, key) ? o.rows[key] : def;
      if (String(text).trim()) all.push({ key, text, edited: has(o.rows, key) });
    }
    const rows = all.slice(0, cap);
    return { name, nameEdited: has(o, 'name'), rows, cut: all.length - rows.length };
  }

  // aantal tekstregels onder de naam tot aan een bepaalde y-positie
  const rowsBetween = (nameY, limitY) => Math.max(0, Math.floor((limitY - nameY) / LEAD + 1e-6));

  /* ---------- verticale indeling (enkele foto's): onderste rij schuift mee naar beneden ---------- */

  // Bij "enkele foto's" staan er twee rijen onder elkaar. Heeft de bovenste rij meer regels nodig dan standaard,
  // dan schuift de onderste rij foto's (met haar tekst) naar beneden, met dezelfde witruimte als in de standaardindeling.
  // Past het niet meer op het blad, dan worden de overtollige regels weggelaten.
  const SGL = LAYOUT.single;
  const ROW_GAP = SGL.cells[4].img - (SGL.cells[0].name + SGL.lines * LEAD);   // witruimte tussen laatste regel en volgende foto
  const singleShift = n1 => Math.max(0, SGL.cells[0].name + n1 * LEAD + ROW_GAP - SGL.cells[4].img);
  const singleFits = (n1, n2, bottomUsed) => bottomUsed
    ? SGL.cells[4].name + singleShift(n1) + n2 * LEAD <= BOTTOM_LIMIT + 1e-6
    : n1 <= rowsBetween(SGL.cells[0].name, BOTTOM_LIMIT);

  // geeft per pagina: hoeveel de onderste rij opschuift (mm) en het maximum aantal regels per rij
  function geom(pg) {
    if (S.mode !== 'single') {
      const cap = rowsBetween(LAYOUT[S.mode].cells[0].name, BOTTOM_LIMIT);
      return { shift: 0, caps: [cap, cap] };
    }
    let n1 = 0, n2 = 0, bottomUsed = false;
    pg.cells.forEach((d, i) => {
      if (!d || !S.details[d.id]) return;
      const n = linesFor(d).rows.length;
      if (i < 4) n1 = Math.max(n1, n); else { bottomUsed = true; n2 = Math.max(n2, n); }
    });
    while (!singleFits(n1, n2, bottomUsed) && (n1 > 0 || n2 > 0)) { if (n1 >= n2 && n1 > 0) n1--; else n2--; }
    return { shift: singleShift(n1), caps: [n1, n2] };
  }

  // positie van vak i op deze pagina (de onderste rij kan opgeschoven zijn)
  function lay(pg, i, geo = geom(pg)) {
    const c = LAYOUT[S.mode].cells[i];
    return S.mode === 'single' && i >= 4 ? { ...c, img: c.img + geo.shift, name: c.name + geo.shift } : c;
  }

  // hoeveel kenmerkregels passen er onder het vak i?
  function rowCap(pg, i, geo = geom(pg)) {
    return geo.caps[S.mode === 'single' && i >= 4 ? 1 : 0];
  }

  function hasEdits(data) {
    const o = data?.txt;
    if (!o) return false;
    return has(o, 'name') || S.fields.some(k => has(o.rows, k));
  }

  function setLine(i, key, value) {
    const data = S.pages[S.page].cells[i];
    if (!data) return;
    const o = data.txt || (data.txt = {});
    if (key === '_name') {
      if (!value.trim() || value === defaultName(data)) delete o.name; else o.name = value;
    } else {
      o.rows = o.rows || {};
      if (value === defaultLine(data, key)) delete o.rows[key]; else o.rows[key] = value;
      if (!Object.keys(o.rows).length) delete o.rows;
    }
    if (!Object.keys(o).length) delete data.txt;
  }

  /* ---------- knoppen in het selectiemenu ---------- */

  const ACTIONS = [
    { a: 'bg', label: 'EXPORT', title: 'Beplantingsgrid maken', needSel: true, run: () => openBG() },
    { a: 'bg-import', label: 'IMPORT', title: 'Een geëxporteerde PDF terug inladen', run: () => pickImport() },
    { a: 'bg-project', label: 'PROJECT UPLOADEN', title: 'Projectnummer toevoegen aan de planten van een geëxporteerde PDF', run: () => openProject() }
  ];

  function ensureButton() {
    const acts = document.querySelector('#selActs');
    if (!acts) return;
    for (const def of ACTIONS) {
      if (acts.querySelector(`[data-a="${def.a}"]`)) continue;
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.a = def.a;
      b.textContent = def.label;
      b.title = def.title;
      if (def.needSel) {
        b.dataset.needsel = '';
        b.disabled = !(typeof chosen !== 'undefined' && chosen.size);
      }
      acts.appendChild(b);
    }
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('#selActs [data-a]');
    const def = b && ACTIONS.find(x => x.a === b.dataset.a);
    if (!def) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    def.run();
  }, true);

  /* ---------- editor ---------- */

  function ensureModal() {
    if (ui.modal) return;
    const m = document.createElement('section');
    m.id = 'bgModal';
    m.className = 'bg-modal';
    m.setAttribute('role', 'dialog');
    m.setAttribute('aria-modal', 'true');
    m.innerHTML = `<div class="bg-head"></div><div class="bg-body"></div><div class="bg-foot"></div><div class="bg-dialog" hidden></div>`;
    document.body.appendChild(m);
    ui.modal = m;
    ui.head = m.querySelector('.bg-head');
    ui.body = m.querySelector('.bg-body');
    ui.foot = m.querySelector('.bg-foot');
    ui.dialog = m.querySelector('.bg-dialog');

    m.addEventListener('click', onClick);
    m.addEventListener('input', onInput);
    m.addEventListener('change', onChange);
    m.addEventListener('keydown', onKey);
    m.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape' || !ui.modal.classList.contains('on')) return;
      if (e.target.closest?.('.bg-line, .bg-title')) return;
      if (!ui.dialog.hidden) closeDialog(); else closeBG();
    });
  }

  function openBG() {
    ensureModal();
    S = states.get(chosen);
    if (!S) { S = { mode: null, pages: [], page: 0, details: {}, fields: null }; states.set(chosen, S); }
    if (S.mode) {
      if (!S.fields) S.fields = PSE.defaultFields(S.mode);
      pruneRemoved();
    }
    ui.modal.classList.add('on');
    document.body.classList.add('bg-lock');
    S.mode ? renderEditor() : renderChooser();
  }

  function closeBG() {
    ui.modal.classList.remove('on');
    document.body.classList.remove('bg-lock');
    closeDialog();
  }

  function pruneRemoved() {
    S.pages.forEach(pg => pg.cells.forEach((c, i) => { if (c && !chosen.has(c.id)) pg.cells[i] = null; }));
  }

  function schematic(type) {
    if (type === 'single') {
      const r = [0, 1].flatMap(row => [0, 1, 2, 3].map(col => `<rect x="${4 + col * 22}" y="${6 + row * 28}" width="20" height="14" rx="1"/><path d="M${4 + col * 22} ${23 + row * 28}h14M${4 + col * 22} ${26 + row * 28}h10" />`)).join('');
      return `<svg viewBox="0 0 92 62" aria-hidden="true">${r}</svg>`;
    }
    const r = [0, 1, 2, 3].map(col => `<rect x="${4 + col * 22}" y="5" width="20" height="10" rx="1"/><rect x="${4 + col * 22}" y="18" width="20" height="30" rx="1"/><path d="M${4 + col * 22} ${52}h14M${4 + col * 22} ${55}h10"/>`).join('');
    return `<svg viewBox="0 0 92 62" aria-hidden="true">${r}</svg>`;
  }

  function renderChooser() {
    ui.head.innerHTML = `<div><h2>exporteren van selectie</h2><p>kies het type raster</p></div><button type="button" class="bg-x" data-bg="close" aria-label="Sluiten">×</button>`;
    ui.body.innerHTML = `<div class="bg-types">
      <button type="button" class="bg-type" data-type="single">${schematic('single')}<strong>enkele foto's</strong><span>4 kolommen, 2 rijen per pagina</span></button>
      <button type="button" class="bg-type" data-type="elements">${schematic('elements')}<strong>hoofdfoto en detailfoto</strong><span>4 kolommen, 2 foto's per plant</span></button>
    </div>`;
    ui.foot.innerHTML = `<span></span><button type="button" class="bg-sec" data-bg="close">Annuleren</button>`;
  }

  function chooseType(type) {
    S.mode = type;
    S.fields = PSE.defaultFields(type);
    S.pages = [newPage()];
    S.page = 0;
    renderEditor();
  }

  function placedIds() {
    // plant-id → lijst met paginanummers waarop de plant staat (een plant mag meerdere keer voorkomen)
    const m = new Map();
    S.pages.forEach((pg, pi) => pg.cells.forEach(c => {
      if (!c) return;
      const pages = m.get(c.id) || [];
      if (!pages.includes(pi + 1)) pages.push(pi + 1);
      m.set(c.id, pages);
    }));
    return m;
  }

  function renderEditor() {
    const L = LAYOUT[S.mode];
    ui.head.innerHTML = `<div><h2>exporteren van selectie - ${esc(L.label)}</h2>
      <p>Klik op een foto om een plant te kiezen. Klik in de tekst onder een foto om die voor die plant aan te passen (leegmaken of × = regel weglaten, ↺ = standaardtekst). Sleep een vak naar links of rechts om een vaste extra witruimte tussen de kolommen te zetten (of weer weg te halen); het geheel blijft gecentreerd. Dezelfde plant mag je zo vaak plaatsen als je wil.</p></div>
      <div class="bg-head-actions"><button type="button" class="bg-sec" data-bg="fields">Kenmerken</button><button type="button" class="bg-sec" data-bg="newgrid">Nieuw raster</button><button type="button" class="bg-x" data-bg="close" aria-label="Sluiten">×</button></div>`;
    renderPage();
    renderFoot();
  }

  function renderFoot(msg = '') {
    const n = S.pages.length;
    const count = placedIds().size;
    ui.foot.innerHTML = `
      <div class="bg-pager">
        <button type="button" class="bg-sec" data-bg="prev" ${S.page === 0 ? 'disabled' : ''} aria-label="Vorige pagina">‹</button>
        <span>Pagina ${S.page + 1} / ${n}</span>
        <button type="button" class="bg-sec" data-bg="next" ${S.page >= n - 1 ? 'disabled' : ''} aria-label="Volgende pagina">›</button>
        <button type="button" class="bg-sec" data-bg="addpage">+ Pagina</button>
        ${n > 1 ? '<button type="button" class="bg-sec" data-bg="delpage">Pagina verwijderen</button>' : ''}
        <button type="button" class="bg-sec" data-bg="resetgap">Witruimte herstellen</button>
      </div>
      <span class="bg-msg" aria-live="polite">${esc(msg || `${count} van ${chosen.size} geselecteerde planten geplaatst`)}</span>
      <div class="bg-actions"><button type="button" class="bg-sec" data-bg="close">Sluiten</button>
      <button type="button" class="bg-pri" data-bg="export" ${count ? '' : 'disabled'}>Exporteer A3-PDF</button></div>`;
  }

  function cellBox(c) {
    const L = LAYOUT[S.mode];
    const top = S.mode === 'single' ? c.img : c.small;
    const bottom = c.name + L.lines * LEAD + 1.5;
    return { top, h: bottom - top };
  }

  function textHtml(data, i, c, box, geo) {
    if (!data || !S.details[data.id]) return '';
    const { name, nameEdited, rows, cut } = linesFor(data, rowCap(S.pages[S.page], i, geo));
    const topMm = c.name - 3.4 - box.top;
    const input = (key, text, edited, cls = '') =>
      `<input type="text" class="bg-line${cls}${edited ? ' edited' : ''}" data-cell="${i}" data-key="${esc(key)}" value="${esc(text)}" spellcheck="false" autocomplete="off" aria-label="Tekst ${esc(key === '_name' ? 'plantnaam' : key)}">`;
    return `<div class="bg-text" style="top:${pct(topMm, box.h)}">
      ${input('_name', name, nameEdited, ' bg-name')}
      ${rows.map(r => `<div class="bg-row">${input(r.key, r.text, r.edited)}<button type="button" class="bg-del" data-line-del="${i}" data-key="${esc(r.key)}" title="Deze regel weglaten bij deze plant" aria-label="Regel weglaten">×</button></div>`).join('')}
      ${cut ? `<div class="bg-over">⚠ ${cut} regel${cut === 1 ? '' : 's'} passen niet meer op het blad en worden weggelaten</div>` : ''}
      ${hasEdits(data) ? `<button type="button" class="bg-reset" data-cell-reset="${i}" title="Standaardtekst van deze plant herstellen">↺ standaardtekst</button>` : ''}
    </div>`;
  }

  function renderPage() {
    const L = LAYOUT[S.mode], pg = S.pages[S.page];
    const xs = colXs(pg.gaps);
    const geo = geom(pg);
    const cellsHtml = L.cells.map((_, i) => {
      const c = lay(pg, i, geo);
      const box = cellBox(c), data = pg.cells[i];
      const photos = S.mode === 'single'
        ? [{ y: c.img, h: L.imgH, src: data?.photo }]
        : [{ y: c.small, h: L.smallH, src: data?.detail }, { y: c.big, h: L.bigH, src: data?.photo }];
      const phHtml = photos.map(ph =>
        `<div class="bg-ph${ph.src ? '' : ' empty'}" style="top:${pct(ph.y - box.top, box.h)};height:${pct(ph.h, box.h)}">${ph.src ? `<img src="${esc(srcUrl(ph.src))}" alt="" draggable="false">` : ''}</div>`).join('');
      return `<div class="bg-cell${data ? ' filled' : ''}" data-cell="${i}" data-col="${c.col}"
          style="left:${pct(xs[c.col], PAGE_W)};top:${pct(box.top, PAGE_H)};width:${pct(COL_W, PAGE_W)};height:${pct(box.h, PAGE_H)}">
        ${phHtml}${data ? textHtml(data, i, c, box, geo) : `<span class="bg-plus" aria-label="Plant toevoegen">+</span>`}
      </div>`;
    }).join('');
    const titlesHtml = [0, 1, 2, 3].map(col =>
      `<input type="text" class="bg-title" data-col="${col}" maxlength="60" placeholder="Titel kolom ${col + 1}" value="${esc(pg.titles[col])}"
        style="left:${pct(xs[col], PAGE_W)};top:${pct(L.titleY - 5.2, PAGE_H)};width:${pct(COL_W, PAGE_W)};height:${pct(7.5, PAGE_H)}" aria-label="Titel kolom ${col + 1}">`).join('');
    ui.body.innerHTML = `<div class="bg-wrap"><div class="bg-page">${titlesHtml}${cellsHtml}</div></div>`;
  }

  // opnieuw tekenen zonder de cursor kwijt te raken
  function rerenderKeepFocus() {
    const a = document.activeElement;
    const keep = a?.matches?.('.bg-line') ? { cell: a.dataset.cell, key: a.dataset.key, s: a.selectionStart, e: a.selectionEnd } : null;
    renderPage();
    if (!keep) return;
    const el = ui.body.querySelector(`.bg-line[data-cell="${keep.cell}"][data-key="${CSS.escape(keep.key)}"]`);
    if (el) { el.focus(); try { el.setSelectionRange(keep.s, keep.e); } catch (_) {} }
  }

  function positionAll() {
    const xs = colXs(S.pages[S.page].gaps);
    ui.body.querySelectorAll('.bg-cell, .bg-title').forEach(el => {
      el.style.left = pct(xs[+el.dataset.col], PAGE_W);
    });
  }

  function onPointerDown(e) {
    const cell = e.target.closest('.bg-cell');
    if (!cell || e.button > 0 || e.target.closest('.bg-text')) return;
    const pageEl = cell.closest('.bg-page');
    drag = {
      i: +cell.dataset.cell, col: +cell.dataset.col, x0: e.clientX,
      scale: pageEl.getBoundingClientRect().width / PAGE_W,
      snap: S.pages[S.page].gaps.slice(), moved: false
    };
    drag.ac = new AbortController();
    const o = { signal: drag.ac.signal };
    window.addEventListener('pointermove', onPointerMove, o);
    window.addEventListener('pointerup', onPointerUp, o);
    window.addEventListener('pointercancel', onPointerUp, o);
  }

  function onPointerMove(e) {
    if (!drag) return;
    const dxPx = e.clientX - drag.x0;
    if (!drag.moved && Math.abs(dxPx) < 5) return;
    drag.moved = true;
    ui.modal.classList.add('bg-dragging');
    S.pages[S.page].gaps = dragGaps(drag.snap, drag.col, dxPx / drag.scale);
    positionAll();
  }

  function onPointerUp() {
    const d = drag;
    if (d) d.ac.abort();
    ui.modal.classList.remove('bg-dragging');
    drag = null;
    if (d && !d.moved) openCellDialog(d.i);
  }

  function onInput(e) {
    const t = e.target.closest('.bg-title');
    if (t) { S.pages[S.page].titles[+t.dataset.col] = t.value; return; }
    const l = e.target.closest('.bg-line');
    if (l) setLine(+l.dataset.cell, l.dataset.key, l.value);
  }

  function onChange(e) {
    if (e.target.closest('.bg-line')) setTimeout(rerenderKeepFocus, 0);
  }

  function onKey(e) {
    if (!e.target.closest?.('.bg-line, .bg-title')) return;
    if (e.key === 'Enter' || e.key === 'Escape') { e.preventDefault(); e.target.blur(); }
  }

  function onClick(e) {
    const type = e.target.closest('[data-type]');
    if (type) return chooseType(type.dataset.type);
    const del = e.target.closest('[data-line-del]');
    if (del) { setLine(+del.dataset.lineDel, del.dataset.key, ''); return renderPage(); }
    const reset = e.target.closest('[data-cell-reset]');
    if (reset) {
      const data = S.pages[S.page].cells[+reset.dataset.cellReset];
      if (data) delete data.txt;
      return renderPage();
    }
    const a = e.target.closest('[data-bg]');
    if (!a) return;
    switch (a.dataset.bg) {
      case 'close': return closeBG();
      case 'fields': return openFieldsDialog();
      case 'newgrid':
        if (placedIds().size && !confirm('Een nieuw raster maken? De huidige indeling gaat verloren.')) return;
        S.mode = null; S.pages = []; S.fields = null; return renderChooser();
      case 'prev': S.page = Math.max(0, S.page - 1); return renderEditor();
      case 'next': S.page = Math.min(S.pages.length - 1, S.page + 1); return renderEditor();
      case 'addpage': S.pages.push(newPage()); S.page = S.pages.length - 1; return renderEditor();
      case 'delpage':
        if (S.pages[S.page].cells.some(Boolean) && !confirm('Deze pagina verwijderen?')) return;
        S.pages.splice(S.page, 1); S.page = Math.min(S.page, S.pages.length - 1); return renderEditor();
      case 'resetgap': S.pages[S.page].gaps = [BASE_GAP, BASE_GAP, BASE_GAP]; return renderPage();
      case 'export': return runExport();
    }
  }

  function closeDialog() { if (!ui.dialog) return; ui.dialog.hidden = true; ui.dialog.innerHTML = ''; ui.dialog.onclick = null; }

  /* ---------- kenmerken kiezen (geldt voor het hele raster) ---------- */

  function openFieldsDialog() {
    const L = LAYOUT[S.mode];
    const sample = S.pages.flatMap(pg => pg.cells).find(c => c && S.details[c.id]);
    let maxBoth = 0;
    for (let n = 1; n <= MAX_SLOTS; n++) if (singleFits(n, n, true)) maxBoth = n;
    const limitNote = S.mode === 'single'
      ? `Zijn er meer dan ${L.lines} regels, dan schuift de onderste rij foto's vanzelf naar beneden. Op een volle pagina passen er tot ${maxBoth} regels per plant; is de onderste rij leeg, dan kunnen de planten bovenaan er tot ${Math.min(MAX_SLOTS, rowsBetween(L.cells[0].name, BOTTOM_LIMIT))} hebben.`
      : `Er passen maximaal ${rowsBetween(L.cells[0].name, BOTTOM_LIMIT)} regels onder de plantnaam.`;
    const slot = (k, cur) => `<label class="bg-slot"><span>${k < L.lines ? `Regel ${k + 1}` : `Extra ${k + 1 - L.lines}`}</span>
      <select data-slot="${k}"><option value="">— weglaten —</option>${PSE.FIELDS.map(f =>
        `<option value="${f.key}"${cur === f.key ? ' selected' : ''}>${esc(f.title)}</option>`).join('')}</select>
      <em data-ex="${k}"></em></label>`;
    ui.dialog.hidden = false;
    ui.dialog.innerHTML = `<div class="bg-dbox" role="dialog" aria-modal="true">
      <div class="bg-dhead"><h3>Kenmerken onder de foto's</h3><button type="button" class="bg-x" data-d="close" aria-label="Sluiten">×</button></div>
      <div class="bg-dscroll">
        <p class="bg-note">Kies welke kenmerken onder elke plant komen. Dit geldt voor alle planten in dit raster. ${limitNote} Regels die bij een plant niet passen, worden bij die plant weggelaten (je ziet een waarschuwing).${sample ? ` Voorbeeld: <i>${esc(nameOf(S.details[sample.id]))}</i>.` : ''}</p>
        <div class="bg-slots">${Array.from({ length: MAX_SLOTS }, (_, k) => slot(k, S.fields[k] || '')).join('')}</div>
      </div>
      <div class="bg-dfoot"><button type="button" class="bg-sec" data-d="default">Standaard</button><button type="button" class="bg-sec" data-d="close">Annuleren</button><button type="button" class="bg-pri" data-d="apply">Toepassen</button></div></div>`;
    const selects = [...ui.dialog.querySelectorAll('select[data-slot]')];
    const example = () => selects.forEach(s => {
      const em = ui.dialog.querySelector(`[data-ex="${s.dataset.slot}"]`);
      em.textContent = sample && s.value ? PSE.fieldLine(S.details[sample.id], s.value) : '';
    });
    selects.forEach(s => s.addEventListener('change', example));
    example();
    ui.dialog.onclick = ev => {
      if (ev.target === ui.dialog) return closeDialog();
      const d = ev.target.closest('[data-d]');
      if (!d) return;
      if (d.dataset.d === 'close') return closeDialog();
      if (d.dataset.d === 'default') {
        const def = PSE.defaultFields(S.mode);
        selects.forEach((s, k) => (s.value = def[k] || ''));
        return example();
      }
      if (d.dataset.d === 'apply') {
        S.fields = [...new Set(selects.map(s => s.value).filter(Boolean))].slice(0, MAX_SLOTS);
        closeDialog();
        renderPage();
      }
    };
  }

  /* ---------- plant en foto's kiezen voor een vak ---------- */

  function openCellDialog(i) {
    const pg = S.pages[S.page];
    const cur = pg.cells[i];
    const list = picks();
    const placed = placedIds();
    ui.dialog.hidden = false;
    ui.dialog.innerHTML = `<div class="bg-dbox" role="dialog" aria-modal="true">
      <div class="bg-dhead"><h3>Kies een plant</h3><button type="button" class="bg-x" data-d="close" aria-label="Sluiten">×</button></div>
      <input type="search" class="bg-dsearch" placeholder="Zoek in je selectie…" aria-label="Zoek in je selectie">
      <ul class="bg-plist">${list.map(p => {
        const at = placed.get(p.id);
        return `<li><button type="button" data-plant="${esc(p.id)}" class="${at ? 'used' : ''}"><i>${esc(nameOf(p))}</i><span>${esc(p.use?.commonNameNl || p.use?.commonName || '')}</span>${at ? `<em>staat op pagina ${at.join(', ')}</em>` : ''}</button></li>`;
      }).join('')}</ul>
      <div class="bg-dfoot">
        ${cur ? '<button type="button" class="bg-sec" data-d="remove">Leeg maken</button><button type="button" class="bg-sec" data-d="photos">Foto’s wijzigen</button>' : ''}
        <button type="button" class="bg-sec" data-d="close">Annuleren</button>
      </div></div>`;
    const search = ui.dialog.querySelector('.bg-dsearch');
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase().trim();
      ui.dialog.querySelectorAll('.bg-plist li').forEach(li => (li.hidden = !!q && !li.textContent.toLowerCase().includes(q)));
    });
    search.focus();
    ui.dialog.onclick = async ev => {
      if (ev.target === ui.dialog) return closeDialog();
      const d = ev.target.closest('[data-d]');
      const pl = ev.target.closest('[data-plant]');
      if (d) {
        if (d.dataset.d === 'close') return closeDialog();
        if (d.dataset.d === 'remove') { pg.cells[i] = null; closeDialog(); renderPage(); return renderFoot(); }
        if (d.dataset.d === 'photos') return photoStep(i, cur.id, cur);
      }
      if (pl) photoStep(i, pl.dataset.plant, pl.dataset.plant === cur?.id ? cur : null);
    };
  }

  async function ensureDetails(id) {
    if (!S.details[id]) S.details[id] = await PSE.detailsFor(byId(id) || picks().find(p => p.id === id));
    return S.details[id];
  }

  async function photoStep(i, id, existing) {
    ui.dialog.innerHTML = `<div class="bg-dbox"><div class="bg-dmsg">Foto’s laden…</div></div>`;
    let plant;
    try {
      plant = await ensureDetails(id);
    } catch (err) {
      ui.dialog.innerHTML = `<div class="bg-dbox"><div class="bg-dmsg err">${esc(err.message || 'Plant kon niet geladen worden.')}</div><div class="bg-dfoot"><button type="button" class="bg-sec" data-d="close">Sluiten</button></div></div>`;
      return;
    }
    const imgs = photosOf(plant);
    if (!imgs.length) {
      ui.dialog.innerHTML = `<div class="bg-dbox"><div class="bg-dmsg err">${esc(nameOf(plant))} heeft geen foto’s.</div><div class="bg-dfoot"><button type="button" class="bg-sec" data-d="close">Sluiten</button></div></div>`;
      return;
    }
    const two = S.mode === 'elements';
    const pick = {
      photo: existing?.photo || imgs[0],
      detail: existing?.detail || imgs[1] || imgs[0]
    };
    const strip = (role, title) => `<div class="bg-plab">${title}</div><div class="bg-pstrip" data-role="${role}">${imgs.map(src =>
      `<button type="button" class="bg-th${pick[role] === src ? ' sel' : ''}" data-src="${esc(src)}"><img loading="lazy" src="${esc(srcUrl(src))}" alt=""></button>`).join('')}</div>`;
    ui.dialog.innerHTML = `<div class="bg-dbox">
      <div class="bg-dhead"><h3><i>${esc(nameOf(plant))}</i></h3><button type="button" class="bg-x" data-d="close" aria-label="Sluiten">×</button></div>
      <div class="bg-dscroll">${two ? strip('detail', 'Detailfoto (klein, bovenaan)') + strip('photo', 'Hoofdfoto (groot, onderaan)') : strip('photo', 'Kies een foto')}</div>
      <div class="bg-dfoot"><button type="button" class="bg-sec" data-d="back">Terug</button><button type="button" class="bg-pri" data-d="place">Plaats in vak</button></div></div>`;
    ui.dialog.onclick = ev => {
      if (ev.target === ui.dialog) return closeDialog();
      const th = ev.target.closest('.bg-th');
      if (th) {
        const strip = th.parentElement;
        pick[strip.dataset.role] = th.dataset.src;
        strip.querySelectorAll('.bg-th').forEach(b => b.classList.toggle('sel', b === th));
        return;
      }
      const d = ev.target.closest('[data-d]');
      if (!d) return;
      if (d.dataset.d === 'close') return closeDialog();
      if (d.dataset.d === 'back') return openCellDialog(i);
      if (d.dataset.d === 'place') {
        // dezelfde plant mag op meerdere plaatsen staan; aangepaste tekst blijft enkel behouden
        // als je de foto's van datzelfde vak wijzigt, een nieuw vak krijgt de standaardtekst
        const txt = existing?.txt;
        const cell = two ? { id, photo: pick.photo, detail: pick.detail } : { id, photo: pick.photo };
        if (txt) cell.txt = txt;
        S.pages[S.page].cells[i] = cell;
        closeDialog();
        renderPage();
        renderFoot();
      }
    };
  }

  /* ---------- PDF-export ---------- */

  async function b64(file) {
    const r = await fetch(file);
    if (!r.ok) throw new Error('niet gevonden');
    const b = new Uint8Array(await r.arrayBuffer());
    const magic = b[0] * 16777216 + b[1] * 65536 + b[2] * 256 + b[3];
    if (magic !== 0x00010000 && magic !== 0x74727565) throw new Error('geen TTF');
    return bytesToB64(b);
  }

  function bytesToB64(b) {
    let s = '';
    for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const textToB64 = str => bytesToB64(new TextEncoder().encode(str));
  const b64ToText = b => new TextDecoder().decode(Uint8Array.from(atob(b), c => c.charCodeAt(0)));

  async function setupFonts(doc) {
    try {
      const [light, semi] = await Promise.all([b64('fonts/WorkSans-Light.ttf'), b64('fonts/WorkSans-SemiBold.ttf')]);
      doc.addFileToVFS('WorkSans-Light.ttf', light);
      doc.addFont('WorkSans-Light.ttf', 'WorkSansLight', 'normal');
      doc.addFileToVFS('WorkSans-SemiBold.ttf', semi);
      doc.addFont('WorkSans-SemiBold.ttf', 'WorkSansSemiBold', 'normal');
      return { light: ['WorkSansLight', 'normal'], semi: ['WorkSansSemiBold', 'normal'], workSans: true };
    } catch (err) {
      return { light: ['helvetica', 'normal'], semi: ['helvetica', 'bold'], workSans: false };
    }
  }

  function fitText(doc, font, size, text, x, y, maxW, min = 7) {
    doc.setFont(...font);
    doc.setFontSize(size);
    let s = size;
    while (doc.getTextWidth(text) > maxW && s > min) { s -= 0.5; doc.setFontSize(s); }
    if (doc.getTextWidth(text) > maxW) {
      while (text.length > 1 && doc.getTextWidth(text + '…') > maxW) text = text.slice(0, -1);
      text = text.trim() + '…';
    }
    doc.text(text, x, y);
  }

  const tabName = () => (typeof tabs !== 'undefined' && tabs[curTab]?.name) || '';
  const slug = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  // alles wat nodig is om het raster later terug op te bouwen
  function exportData(pages) {
    return {
      app: DATA_APP,
      v: DATA_VERSION,
      name: tabName(),
      date: new Date().toISOString().slice(0, 10),
      mode: S.mode,
      fields: S.fields.slice(),
      pages: pages.map(pg => ({
        titles: pg.titles.slice(),
        gaps: pg.gaps.slice(),
        cells: pg.cells.map(c => c && {
          id: c.id,
          photo: c.photo,
          ...(c.detail ? { detail: c.detail } : {}),
          ...(c.txt ? { txt: JSON.parse(JSON.stringify(c.txt)) } : {})
        })
      }))
    };
  }

  async function runExport() {
    const btn = ui.foot.querySelector('[data-bg="export"]');
    if (btn) btn.disabled = true;
    try {
      const JsPDF = await PSE.getPdfConstructor();
      const doc = new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a3', compress: true });
      const F = await setupFonts(doc);
      doc.setTextColor(0, 0, 0);
      const L = LAYOUT[S.mode];
      const pages = S.pages.filter(pg => pg.cells.some(Boolean) || pg.titles.some(t => t.trim()));
      let done = 0, cutTotal = 0;
      const total = pages.reduce((n, pg) => n + pg.cells.filter(Boolean).length, 0);
      for (let pi = 0; pi < pages.length; pi++) {
        const pg = pages[pi], xs = colXs(pg.gaps), geo = geom(pg);
        if (pi) doc.addPage('a3', 'landscape');
        pg.titles.forEach((t, col) => {
          if (t.trim()) fitText(doc, F.semi, TITLE_PT, t.trim(), xs[col], L.titleY, COL_W, 8);
        });
        for (let i = 0; i < L.cells.length; i++) {
          const data = pg.cells[i];
          if (!data) continue;
          const c = lay(pg, i, geo), x = xs[c.col];
          if (S.mode === 'single') {
            doc.addImage(await PSE.canvasImage(data.photo, COL_W, L.imgH), 'JPEG', x, c.img, COL_W, L.imgH, undefined, 'FAST');
          } else {
            doc.addImage(await PSE.canvasImage(data.detail, COL_W, L.smallH), 'JPEG', x, c.small, COL_W, L.smallH, undefined, 'FAST');
            doc.addImage(await PSE.canvasImage(data.photo, COL_W, L.bigH), 'JPEG', x, c.big, COL_W, L.bigH, undefined, 'FAST');
          }
          doc.setTextColor(0, 0, 0);
          const { name, rows, cut } = linesFor(data, rowCap(pg, i, geo));
          cutTotal += cut;
          fitText(doc, F.semi, TEXT_PT, name, x, c.name, COL_W);
          rows.forEach((r, n) => fitText(doc, F.light, TEXT_PT, r.text, x, c.name + LEAD * (n + 1), COL_W));
          renderFoot(`PDF maken… ${++done} van ${total} planten`);
        }
      }
      const payload = textToB64(JSON.stringify(exportData(pages)));
      doc.internal.events.subscribe('putCatalog', () => doc.internal.write(`/${DATA_KEY} (${payload})`));
      doc.setProperties({ title: tabName() || 'Beplantingsgrid', subject: 'Beplantingsgrid – kan terug ingeladen worden via IMPORT', creator: 'Buro Groen plantendatabase' });
      const base = S.mode === 'single' ? 'beplantingsgrid-enkele-fotos' : 'beplantingsgrid-met-elementen';
      doc.save(`${slug(tabName()) ? `${base}-${slug(tabName())}` : base}.pdf`);
      renderFoot(cutTotal ? `PDF gedownload – ${cutTotal} regel${cutTotal === 1 ? '' : 's'} weggelaten omdat ze niet pasten` : 'PDF gedownload');
    } catch (err) {
      console.error(err);
      renderFoot(err.message || 'De PDF kon niet worden gemaakt.');
      alert(err.message || 'De PDF kon niet worden gemaakt.');
    }
  }

  /* ---------- geëxporteerde PDF terug lezen ---------- */

  async function readPdfData(file) {
    const text = new TextDecoder('latin1').decode(new Uint8Array(await file.arrayBuffer()));
    const m = text.match(new RegExp(`/${DATA_KEY}\\s*\\(([A-Za-z0-9+/=\\s]*)\\)`));
    if (!m) throw new Error(`In "${file.name}" staan geen rastergegevens. Enkel PDF's die met deze versie van de database geëxporteerd zijn, kunnen ingelezen worden.`);
    let data;
    try { data = JSON.parse(b64ToText(m[1].replace(/\s+/g, ''))); } catch (_) { data = null; }
    if (!data || data.app !== DATA_APP || !LAYOUT[data.mode] || !Array.isArray(data.pages)) {
      throw new Error(`De rastergegevens in "${file.name}" zijn onleesbaar.`);
    }
    return data;
  }

  const idsInData = data => [...new Set(data.pages.flatMap(pg => (pg.cells || []).filter(Boolean).map(c => String(c.id))))];

  function pickFile(accept) {
    return new Promise(resolve => {
      const inp = document.createElement('input');
      inp.type = 'file';
      inp.accept = accept;
      inp.addEventListener('change', () => resolve(inp.files[0] || null), { once: true });
      inp.click();
    });
  }

  /* ---------- IMPORT ---------- */

  async function pickImport() {
    const file = await pickFile('application/pdf,.pdf');
    if (!file) return;
    try {
      await importPdf(file);
    } catch (err) {
      console.error(err);
      alert(err.message || 'De PDF kon niet ingelezen worden.');
    }
  }

  async function importPdf(file) {
    const data = await readPdfData(file);
    const L = LAYOUT[data.mode];
    const all = idsInData(data);
    const ids = all.filter(id => byId(id));
    const missing = all.filter(id => !byId(id));

    const S2 = {
      mode: data.mode,
      page: 0,
      details: {},
      fields: (Array.isArray(data.fields) ? data.fields : PSE.defaultFields(data.mode)).filter(PSE.hasField).slice(0, MAX_SLOTS),
      pages: data.pages.map(pg => ({
        titles: [0, 1, 2, 3].map(k => String(pg.titles?.[k] ?? '')),
        gaps: cleanGaps(pg.gaps),
        cells: L.cells.map((_, k) => {
          const c = pg.cells?.[k];
          if (!c || !byId(String(c.id))) return null;
          const cell = { id: String(c.id), photo: c.photo };
          if (data.mode === 'elements') cell.detail = c.detail;
          if (c.txt && typeof c.txt === 'object') cell.txt = c.txt;
          return cell;
        })
      }))
    };
    if (!S2.pages.length) S2.pages = [{ titles: ['', '', '', ''], gaps: [BASE_GAP, BASE_GAP, BASE_GAP], cells: new Array(L.cells.length).fill(null) }];

    await Promise.all(ids.map(async id => { S2.details[id] = await PSE.detailsFor(byId(id)); }));

    // foto's die intussen hernoemd of verwijderd zijn → eerste beschikbare foto
    S2.pages.forEach(pg => pg.cells.forEach(c => {
      if (!c) return;
      const imgs = photosOf(S2.details[c.id]);
      const find = src => imgs.find(s => normPath(s) === normPath(src));
      c.photo = find(c.photo) || imgs[0];
      if (data.mode === 'elements') c.detail = find(c.detail) || imgs[1] || imgs[0];
    }));

    // in een nieuw tabblad (of het huidige, als dat nog leeg is)
    const name = data.name || file.name.replace(/\.pdf$/i, '');
    const cur = tabs[curTab];
    if (!(cur && !cur.chosen.size)) { tabs.push(newState()); curTab = tabs.length - 1; }
    const t = tabs[curTab];
    t.name = name;
    t.chosen = new Set(ids);
    states.set(t.chosen, S2);
    loadTab();
    openBG();
    if (missing.length) {
      renderFoot(`${missing.length} plant(en) uit de PDF staan niet meer in de database: ${missing.join(', ')}`);
    }
  }

  /* ---------- PROJECT UPLOADEN ---------- */

  function ensureMini() {
    if (ui.mini) return;
    const m = document.createElement('div');
    m.className = 'bg-mini';
    m.hidden = true;
    m.innerHTML = `<div class="bg-dbox" role="dialog" aria-modal="true" aria-labelledby="bgProjTitle"></div>`;
    document.body.appendChild(m);
    m.addEventListener('click', e => { if (e.target === m && !m.dataset.busy) closeMini(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !m.hidden && !m.dataset.busy) closeMini(); });
    ui.mini = m;
  }
  function closeMini() { ui.mini.hidden = true; ui.mini.firstElementChild.innerHTML = ''; document.body.classList.remove('bg-lock'); }

  const P = { file: null, ids: [], missing: [] };

  function openProject() {
    ensureMini();
    Object.assign(P, { file: null, ids: [], missing: [] });
    ui.mini.hidden = false;
    document.body.classList.add('bg-lock');
    renderProject();
  }

  function renderProject(msg = '', err = false) {
    const box = ui.mini.firstElementChild;
    const fsOk = 'showDirectoryPicker' in window;
    const list = P.ids.map(id => `<li><i>${esc(byId(id)?.use?.scientificName || id)}</i></li>`).join('');
    box.innerHTML = `
      <div class="bg-dhead"><h3 id="bgProjTitle">Project uploaden</h3><button type="button" class="bg-x" data-p="close" aria-label="Sluiten">×</button></div>
      <div class="bg-dscroll">
        <p class="bg-note">Kies een geëxporteerde PDF en geef het projectnummer in. Dat nummer wordt bij elke plant uit die PDF genoteerd (in de plantfiche én in de index), zodat je het daarna in de zoekbalk kunt opzoeken.</p>
        <div class="bg-prow"><button type="button" class="bg-sec" data-p="pdf">${P.file ? 'Andere PDF kiezen' : 'PDF kiezen'}</button><span>${P.file ? esc(P.file.name) : 'nog geen PDF gekozen'}</span></div>
        ${P.file ? `<p class="bg-plab">${P.ids.length} plant${P.ids.length === 1 ? '' : 'en'} gevonden${P.missing.length ? ` · ${P.missing.length} niet (meer) in de database: ${esc(P.missing.join(', '))}` : ''}</p><ul class="bg-pfound">${list}</ul>` : ''}
        <label class="bg-prow"><span>Projectnummer</span><input type="text" class="bg-pnum" inputmode="decimal" placeholder="bv. 2405" autocomplete="off"></label>
        ${fsOk ? '<p class="bg-hint">De eerste keer vraagt de browser om de map van de website te kiezen (de map waarin <code>data</code> staat) en om toestemming om te bewaren.</p>'
               : `<p class="bg-hint err">Deze browser kan geen bestanden bewaren. Gebruik Chrome of Edge, of voer in de websitemap uit:<br><code>node tools/projecten.js toevoegen &lt;nummer&gt; "${esc(P.file?.name || 'export.pdf')}"</code></p>`}
        <p class="bg-pmsg${err ? ' err' : ''}" aria-live="polite">${esc(msg)}</p>
      </div>
      <div class="bg-dfoot">
        <button type="button" class="bg-sec" data-p="remove" ${P.ids.length && fsOk ? '' : 'disabled'} title="Dit nummer weer weghalen bij deze planten">Nummer verwijderen</button>
        <button type="button" class="bg-sec" data-p="close">Sluiten</button>
        <button type="button" class="bg-pri" data-p="add" ${P.ids.length && fsOk ? '' : 'disabled'}>Nummer toevoegen</button>
      </div>`;
    box.onclick = onProjectClick;
    box.querySelector('.bg-pnum').addEventListener('keydown', e => { if (e.key === 'Enter') box.querySelector('[data-p="add"]')?.click(); });
  }

  async function onProjectClick(e) {
    const b = e.target.closest('[data-p]');
    if (!b || b.disabled) return;
    const box = ui.mini.firstElementChild;
    const num = (box.querySelector('.bg-pnum')?.value || '').trim();
    switch (b.dataset.p) {
      case 'close': return closeMini();
      case 'pdf': {
        const file = await pickFile('application/pdf,.pdf');
        if (!file) return;
        try {
          const data = await readPdfData(file);
          const all = idsInData(data);
          Object.assign(P, { file, ids: all.filter(id => byId(id)), missing: all.filter(id => !byId(id)) });
          renderProject(P.ids.length ? '' : 'Geen bekende planten in deze PDF.', !P.ids.length);
        } catch (err) {
          Object.assign(P, { file: null, ids: [], missing: [] });
          renderProject(err.message, true);
        }
        box.querySelector('.bg-pnum')?.focus();
        return;
      }
      case 'add':
      case 'remove': {
        if (!PROJ_RE.test(num)) {
          box.querySelector('.bg-pmsg').textContent = 'Geef een projectnummer in dat met een cijfer begint (cijfers, punt, - of _).';
          box.querySelector('.bg-pmsg').classList.add('err');
          return;
        }
        const add = b.dataset.p === 'add';
        if (!add && !confirm(`Projectnummer ${num} weghalen bij ${P.ids.length} planten?`)) return;
        ui.mini.dataset.busy = '1';
        box.querySelectorAll('button').forEach(x => (x.disabled = true));
        box.querySelector('.bg-pmsg').textContent = 'Bezig met bewaren…';
        try {
          const r = await saveProject(num, P.ids, add);
          const txt = add
            ? `Projectnummer ${num} toegevoegd aan ${r.changed} plant${r.changed === 1 ? '' : 'en'}${r.already ? ` (${r.already} had het al)` : ''}. Zoek op ${num} in de zoekbalk.`
            : `Projectnummer ${num} weggehaald bij ${r.changed} plant${r.changed === 1 ? '' : 'en'}.`;
          renderProject(txt + (r.noDetail.length ? ` Geen plantfiche gevonden voor: ${r.noDetail.join(', ')} (enkel de index is aangepast).` : ''));
          ui.mini.firstElementChild.querySelector('.bg-pnum').value = num;
        } catch (err) {
          console.error(err);
          renderProject(err.name === 'AbortError' ? 'Geannuleerd: er werd geen map gekozen.' : (err.message || 'Bewaren mislukt.'), true);
        } finally {
          delete ui.mini.dataset.busy;
        }
      }
    }
  }

  /* bestanden schrijven via de File System Access API (Chrome / Edge) */

  function idb(mode, fn) {
    return new Promise((resolve, reject) => {
      const open = indexedDB.open('buro-groen-plantendatabase', 1);
      open.onupgradeneeded = () => open.result.createObjectStore('kv');
      open.onerror = () => reject(open.error);
      open.onsuccess = () => {
        const tx = open.result.transaction('kv', mode);
        const req = fn(tx.objectStore('kv'));
        tx.oncomplete = () => resolve(req.result);
        tx.onerror = () => reject(tx.error);
      };
    });
  }

  async function findDataDir(root) {
    try {
      const data = await root.getDirectoryHandle('data');
      await data.getFileHandle('plants-index.json');
      return data;
    } catch (_) {}
    try { await root.getFileHandle('plants-index.json'); return root; } catch (_) {}
    return null;
  }

  async function getDataDir() {
    let root = await idb('readonly', s => s.get('siteDir')).catch(() => null);
    if (root) {
      const opt = { mode: 'readwrite' };
      try {
        if ((await root.queryPermission(opt)) !== 'granted' && (await root.requestPermission(opt)) !== 'granted') root = null;
      } catch (_) { root = null; }
    }
    let dataDir = root && await findDataDir(root);
    if (!dataDir) {
      root = await window.showDirectoryPicker({ id: 'buro-groen-site', mode: 'readwrite' });
      dataDir = await findDataDir(root);
      if (!dataDir) throw new Error('In die map staat geen data/plants-index.json. Kies de hoofdmap van de website (de map waarin index.html en data staan).');
      await idb('readwrite', s => s.put(root, 'siteDir')).catch(() => {});
    }
    return dataDir;
  }

  function editProjects(obj, num, add) {
    const list = Array.isArray(obj.projects) ? obj.projects.map(String) : [];
    const had = list.includes(num);
    const next = add ? (had ? list : [...list, num]) : list.filter(v => v !== num);
    next.sort((a, b) => a.localeCompare(b, 'nl', { numeric: true }));
    obj.projects = next;
    return had;
  }

  async function writeText(handle, text) {
    const w = await handle.createWritable();
    await w.write(text);
    await w.close();
  }

  async function saveProject(num, ids, add) {
    const dataDir = await getDataDir();
    const idxHandle = await dataDir.getFileHandle('plants-index.json');
    const index = JSON.parse(await (await idxHandle.getFile()).text());
    if (!Array.isArray(index)) throw new Error('plants-index.json heeft een onverwacht formaat.');
    const infoDir = await dataDir.getDirectoryHandle('plants-info').catch(() => null);
    const wanted = new Set(ids);

    // alles eerst inlezen en voorbereiden, daarna in één keer wegschrijven
    let changed = 0, already = 0;
    for (const entry of index) {
      if (!Array.isArray(entry.projects)) entry.projects = [];
      if (!wanted.has(entry.id)) continue;
      const had = editProjects(entry, num, add);
      if (add ? !had : had) changed++; else already++;
    }
    const writes = [{ handle: idxHandle, text: JsonFmt.index(index) }];
    const noDetail = [];
    for (const id of ids) {
      try {
        const fh = await infoDir.getFileHandle(`${id}.json`);
        const obj = JSON.parse(await (await fh.getFile()).text());
        editProjects(obj, num, add);
        writes.push({ handle: fh, text: JsonFmt.detail(obj) });
      } catch (_) { noDetail.push(id); }
    }

    const guard = e => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', guard);
    try {
      await Promise.all(writes.map(w => writeText(w.handle, w.text)));
    } finally {
      window.removeEventListener('beforeunload', guard);
    }

    // meteen bruikbaar in de zoekbalk, zonder herladen
    for (const entry of index) {
      if (!wanted.has(entry.id)) continue;
      const p = byId(entry.id);
      if (p) p.projects = entry.projects.slice();
      if (typeof detailCache !== 'undefined' && detailCache.has(entry.id)) detailCache.get(entry.id).projects = entry.projects.slice();
    }
    if (typeof render === 'function') render();
    return { changed, already, noDetail };
  }

  // JSON netjes wegschrijven in dezelfde stijl als de bestaande bestanden
  const JsonFmt = {
    index: arr => '[\n' + arr.map(o => JSON.stringify(o)).join(',\n') + '\n]\n',
    detail: obj => JsonFmt.value(obj, '') + '\n',
    value(v, ind) {
      const pad = ind + '  ';
      if (Array.isArray(v)) {
        if (!v.length) return '[]';
        if (v.every(x => x === null || typeof x !== 'object')) {
          const one = '[' + v.map(x => JSON.stringify(x)).join(', ') + ']';
          if (one.length <= 120) return one;
        }
        return '[\n' + v.map(x => pad + JsonFmt.value(x, pad)).join(',\n') + '\n' + ind + ']';
      }
      if (v && typeof v === 'object') {
        const keys = Object.keys(v);
        if (!keys.length) return '{}';
        return '{\n' + keys.map(k => `${pad}${JSON.stringify(k)}: ${JsonFmt.value(v[k], pad)}`).join(',\n') + '\n' + ind + '}';
      }
      return JSON.stringify(v);
    }
  };

  function init() {
    ensureButton();
    const acts = document.querySelector('#selActs');
    if (acts) new MutationObserver(ensureButton).observe(acts, { childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
