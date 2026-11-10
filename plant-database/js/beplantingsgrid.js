
(() => {
  'use strict';

  const PAGE_W = 420, PAGE_H = 297;
  const COL_X = [20, 116.25, 212.5, 308.75];
  const COL_W = 91.25;
  const MARGIN_MIN = 10;
  const LEAD = 4.657;
  const TEXT_PT = 11;
  const TITLE_PT = 13;

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

  const states = new WeakMap();
  const ui = { modal: null, body: null, foot: null, dialog: null };
  let S = null;
  let drag = null;

  const newPage = () => ({ titles: ['', '', '', ''], off: [0, 0, 0, 0], cells: new Array(LAYOUT[S.mode].cells.length).fill(null) });

  function esc(v) {
    return String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  const srcUrl = s => encodeURI(s);
  const nameOf = p => (window.PSE ? PSE.getName(p) : p?.use?.scientificName || p?.id || '');

  function photosOf(plant) {
    const list = [plant.mainImage, ...(Array.isArray(plant.images) ? plant.images : [])]
      .filter(s => typeof s === 'string' && s.trim());
    return [...new Set(list)];
  }

  function ensureButton() {
    const acts = document.querySelector('#selActs');
    if (!acts || acts.querySelector('[data-a="bg"]')) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.a = 'bg';
    b.textContent = 'BG';
    b.title = 'Beplantingsgrid maken';
    b.disabled = !(typeof chosen !== 'undefined' && chosen.size);
    acts.appendChild(b);
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('#selActs [data-a="bg"]');
    if (!b) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    openBG();
  }, true);

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
    m.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape' || !ui.modal.classList.contains('on')) return;
      if (!ui.dialog.hidden) closeDialog(); else closeBG();
    });
  }

  function openBG() {
    ensureModal();
    S = states.get(chosen);
    if (!S) { S = { mode: null, pages: [], page: 0, details: {} }; states.set(chosen, S); }
    if (S.mode) pruneRemoved();
    ui.modal.classList.add('on');
    document.body.classList.add('pse-lock');
    S.mode ? renderEditor() : renderChooser();
  }

  function closeBG() {
    ui.modal.classList.remove('on');
    document.body.classList.remove('pse-lock');
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
    S.pages = [newPage()];
    S.page = 0;
    renderEditor();
  }

  function placedIds() {
    const m = new Map();
    S.pages.forEach((pg, pi) => pg.cells.forEach(c => { if (c) m.set(c.id, pi + 1); }));
    return m;
  }

  function renderEditor() {
    const L = LAYOUT[S.mode];
    ui.head.innerHTML = `<div><h2>exporteren van selectie - ${esc(L.label)}</h2>
      <p>Klik op een vak om een plant te kiezen. Sleep een vak naar links of rechts om extra witruimte tussen de kolommen te maken. Vul eventueel boven een kolom een titel in.</p></div>
      <div class="bg-head-actions"><button type="button" class="bg-sec" data-bg="newgrid">Nieuw raster</button><button type="button" class="bg-x" data-bg="close" aria-label="Sluiten">×</button></div>`;
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
      <span class="bg-msg" aria-live="polite">${esc(msg || `${count} van ${choseCount()} geselecteerde planten geplaatst`)}</span>
      <div class="bg-actions"><button type="button" class="bg-sec" data-bg="close">Sluiten</button>
      <button type="button" class="bg-pri" data-bg="export" ${count ? '' : 'disabled'}>Exporteer A3-PDF</button></div>`;
  }
  const choseCount = () => chosen.size;

  function cellBox(i) {
    const L = LAYOUT[S.mode], c = L.cells[i];
    if (S.mode === 'single') {
      const top = c.img, bottom = c.name + L.lines * LEAD + 1.5;
      return { top, h: bottom - top };
    }
    const top = c.small, bottom = c.name + L.lines * LEAD + 1.5;
    return { top, h: bottom - top };
  }

  function textHtml(plant, c, box) {
    if (!plant) return '';
    const L = LAYOUT[S.mode];
    const rows = PSE.fieldRows(plant, S.mode === 'single' ? 'single' : 'elements');
    const topMm = c.name - 3.4 - box.top;
    return `<div class="bg-text" style="top:${pct(topMm, box.h)}">
      <b>${esc(nameOf(plant))}</b>${rows.slice(0, L.lines).map(([l, v]) => `<span>${esc(l)}: ${esc(v)}</span>`).join('')}</div>`;
  }

  function renderPage() {
    const L = LAYOUT[S.mode], pg = S.pages[S.page];
    const cellsHtml = L.cells.map((c, i) => {
      const box = cellBox(i), data = pg.cells[i], plant = data && S.details[data.id];
      let photos;
      if (S.mode === 'single') {
        photos = [{ y: c.img, h: L.imgH, src: data?.photo }];
      } else {
        photos = [{ y: c.small, h: L.smallH, src: data?.detail }, { y: c.big, h: L.bigH, src: data?.photo }];
      }
      const phHtml = photos.map(ph =>
        `<div class="bg-ph${ph.src ? '' : ' empty'}" style="top:${pct(ph.y - box.top, box.h)};height:${pct(ph.h, box.h)}">${ph.src ? `<img src="${esc(srcUrl(ph.src))}" alt="" draggable="false">` : ''}</div>`).join('');
      return `<div class="bg-cell${data ? ' filled' : ''}" data-cell="${i}" data-col="${c.col}" data-top="${box.top}" data-h="${box.h}"
          style="left:${pct(COL_X[c.col] + pg.off[c.col], PAGE_W)};top:${pct(box.top, PAGE_H)};width:${pct(COL_W, PAGE_W)};height:${pct(box.h, PAGE_H)}">
        ${phHtml}${data ? textHtml(plant, c, box) : `<span class="bg-plus" aria-label="Plant toevoegen">+</span>`}
      </div>`;
    }).join('');
    const titlesHtml = [0, 1, 2, 3].map(col =>
      `<input type="text" class="bg-title" data-col="${col}" maxlength="60" placeholder="Titel kolom ${col + 1}" value="${esc(pg.titles[col])}"
        style="left:${pct(COL_X[col] + pg.off[col], PAGE_W)};top:${pct(L.titleY - 5.2, PAGE_H)};width:${pct(COL_W, PAGE_W)};height:${pct(7.5, PAGE_H)}" aria-label="Titel kolom ${col + 1}">`).join('');
    ui.body.innerHTML = `<div class="bg-wrap"><div class="bg-page">${titlesHtml}${cellsHtml}</div></div>`;
  }

  function positionAll() {
    const pg = S.pages[S.page];
    ui.body.querySelectorAll('.bg-cell, .bg-title').forEach(el => {
      const col = +el.dataset.col;
      el.style.left = pct(COL_X[col] + pg.off[col], PAGE_W);
    });
  }

  function onPointerDown(e) {
    const cell = e.target.closest('.bg-cell');
    if (!cell || e.button > 0) return;
    const pageEl = cell.closest('.bg-page');
    drag = {
      i: +cell.dataset.cell, col: +cell.dataset.col, x0: e.clientX,
      scale: pageEl.getBoundingClientRect().width / PAGE_W,
      snap: S.pages[S.page].off.slice(), moved: false
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
    let d = dxPx / drag.scale;
    const pg = S.pages[S.page], off = drag.snap.slice();
    if (d < 0) {
      d = Math.max(d, (MARGIN_MIN - COL_X[0]) - off[0]);
      for (let k = 0; k <= drag.col; k++) off[k] += d;
    } else {
      d = Math.min(d, (PAGE_W - MARGIN_MIN - (COL_X[3] + COL_W)) - off[3]);
      for (let k = drag.col; k < 4; k++) off[k] += d;
    }
    pg.off = off.map(v => Math.round(v * 4) / 4);
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
    if (t) S.pages[S.page].titles[+t.dataset.col] = t.value;
  }

  function onClick(e) {
    const type = e.target.closest('[data-type]');
    if (type) return chooseType(type.dataset.type);
    const a = e.target.closest('[data-bg]');
    if (!a) return;
    switch (a.dataset.bg) {
      case 'close': return closeBG();
      case 'newgrid':
        if (placedIds().size && !confirm('Een nieuw raster maken? De huidige indeling gaat verloren.')) return;
        S.mode = null; S.pages = []; return renderChooser();
      case 'prev': S.page = Math.max(0, S.page - 1); return renderEditor();
      case 'next': S.page = Math.min(S.pages.length - 1, S.page + 1); return renderEditor();
      case 'addpage': S.pages.push(newPage()); S.page = S.pages.length - 1; return renderEditor();
      case 'delpage':
        if (S.pages[S.page].cells.some(Boolean) && !confirm('Deze pagina verwijderen?')) return;
        S.pages.splice(S.page, 1); S.page = Math.min(S.page, S.pages.length - 1); return renderEditor();
      case 'resetgap': S.pages[S.page].off = [0, 0, 0, 0]; return renderPage();
      case 'export': return runExport();
    }
  }

  function closeDialog() { ui.dialog.hidden = true; ui.dialog.innerHTML = ''; ui.dialog.onclick = null; }

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
        return `<li><button type="button" data-plant="${esc(p.id)}" class="${at ? 'used' : ''}"><i>${esc(nameOf(p))}</i><span>${esc(p.use?.commonNameNl || p.use?.commonName || '')}</span>${at ? `<em>staat op pagina ${at}</em>` : ''}</button></li>`;
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

  async function photoStep(i, id, existing) {
    ui.dialog.innerHTML = `<div class="bg-dbox"><div class="bg-dmsg">Foto’s laden…</div></div>`;
    let plant = S.details[id];
    if (!plant) {
      try {
        plant = await PSE.detailsFor(byId(id));
        S.details[id] = plant;
      } catch (err) {
        ui.dialog.innerHTML = `<div class="bg-dbox"><div class="bg-dmsg err">${esc(err.message || 'Plant kon niet geladen worden.')}</div><div class="bg-dfoot"><button type="button" class="bg-sec" data-d="close">Sluiten</button></div></div>`;
        return;
      }
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
        S.pages.forEach(pg => pg.cells.forEach((c, k) => { if (c && c.id === id) pg.cells[k] = null; }));
        S.pages[S.page].cells[i] = two ? { id, photo: pick.photo, detail: pick.detail } : { id, photo: pick.photo };
        closeDialog();
        renderPage();
        renderFoot();
      }
    };
  }

  const byId = id => plants.find(p => p.id === id) || picks().find(p => p.id === id);

  async function b64(file) {
    const r = await fetch(file);
    if (!r.ok) throw new Error('niet gevonden');
    const b = new Uint8Array(await r.arrayBuffer());
    const magic = b[0] * 16777216 + b[1] * 65536 + b[2] * 256 + b[3];
    if (magic !== 0x00010000 && magic !== 0x74727565) throw new Error('geen TTF');
    let s = '';
    for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
    return btoa(s);
  }

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
      let done = 0;
      const total = placedIds().size;
      for (let pi = 0; pi < pages.length; pi++) {
        const pg = pages[pi];
        if (pi) doc.addPage('a3', 'landscape');
        pg.titles.forEach((t, col) => {
          if (t.trim()) fitText(doc, F.semi, TITLE_PT, t.trim(), COL_X[col] + pg.off[col], L.titleY, COL_W, 8);
        });
        for (let i = 0; i < L.cells.length; i++) {
          const data = pg.cells[i];
          if (!data) continue;
          const c = L.cells[i], plant = S.details[data.id], x = COL_X[c.col] + pg.off[c.col];
          if (S.mode === 'single') {
            doc.addImage(await PSE.canvasImage(data.photo, COL_W, L.imgH), 'JPEG', x, c.img, COL_W, L.imgH, undefined, 'FAST');
          } else {
            doc.addImage(await PSE.canvasImage(data.detail, COL_W, L.smallH), 'JPEG', x, c.small, COL_W, L.smallH, undefined, 'FAST');
            doc.addImage(await PSE.canvasImage(data.photo, COL_W, L.bigH), 'JPEG', x, c.big, COL_W, L.bigH, undefined, 'FAST');
          }
          doc.setTextColor(0, 0, 0);
          fitText(doc, F.semi, TEXT_PT, nameOf(plant), x, c.name, COL_W);
          PSE.fieldRows(plant, S.mode === 'single' ? 'single' : 'elements').forEach(([l, v], n) => {
            fitText(doc, F.light, TEXT_PT, `${l}: ${v}`, x, c.name + LEAD * (n + 1), COL_W);
          });
          renderFoot(`PDF maken… ${++done} van ${total} planten`);
        }
      }
      doc.save(S.mode === 'single' ? 'beplantingsgrid-enkele-fotos.pdf' : 'beplantingsgrid-met-elementen.pdf');
      renderFoot('PDF gedownload');
    } catch (err) {
      console.error(err);
      renderFoot(err.message || 'De PDF kon niet worden gemaakt.');
      alert(err.message || 'De PDF kon niet worden gemaakt.');
    }
  }

  function init() {
    ensureButton();
    const acts = document.querySelector('#selActs');
    if (acts) new MutationObserver(ensureButton).observe(acts, { childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
