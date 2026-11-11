/* =====================================================================
   Studio Monstera – export "grid of images" (A4 landscape, 2 × 4)
   ---------------------------------------------------------------------
   State (per tab, also embedded in the PDF):
     { fields: [fieldId, …], pages: [{ title, cells: [{ id, img } | null × 8] }] }

   Layout rule: the squares always have the same size (63.75 mm). The
   free space between the two rows shrinks as the text under the images
   grows (down to ROW_GAP). The field chooser blocks fields that would no
   longer fit, and text that is longer than the room left is cut off with
   "…", so nothing ever overlaps.

   Text style: field names in SemiBold, values in Light, same size —
   e.g. "Zonlicht: volle zon, halfschaduw" — so each field is easy to find.
   ===================================================================== */
(() => {
  'use strict';

  const { h, T } = SMX;
  const PT = 0.3528; // mm per point

  const G = {
    W: 297, H: 210, MX: 12,
    TITLE_Y: 16, TITLE_PT: 16,
    TOP: 21.5, BOTTOM: 7,
    COL_GAP: 6,
    TXT_GAP: 2.2, ROW_GAP: 3.5,
    NAME_PT: 9, TEXT_PT: 7.3, NAME_GAP: 0.6,
    MAX_LINES: 3
  };
  G.IMG = (G.W - 2 * G.MX - 3 * G.COL_GAP) / 4;      // 63.75, fixed
  G.CONTENT = G.H - G.TOP - G.BOTTOM;                // 181.5
  G.HALF = (G.CONTENT - G.ROW_GAP) / 2;              // room for one row
  G.NAME_LH = G.NAME_PT * PT * 1.18;
  G.TEXT_LH = G.TEXT_PT * PT * 1.2;
  G.TEXT_ROOM = G.HALF - G.IMG - G.TXT_GAP;          // max text height per cell (≈ 23 mm)

  const CELLS = 8;
  const DEFAULT_FIELDS = ['scientificName', 'commonName'];
  const blankPage = () => ({ title: '', cells: Array(CELLS).fill(null) });
  const defaultState = () => ({ fields: DEFAULT_FIELDS.slice(), pages: [blankPage()] });

  /* Fields that can go under an image (the long note is left out). */
  const allowedFields = () => SMX.allFieldIds().filter(id => id !== 'discription.note');
  const ordered = fields => allowedFields().filter(id => fields.includes(id));
  const styleOf = id => (id === 'scientificName' ? 'name' : id === 'commonName' || id === 'family' ? 'plain' : 'label');
  const labelOf = id => (id === 'zones' ? T('Zone') : SMX.fieldLabel(id));

  /* Height when every field takes one line: used to limit the number of fields. */
  function minHeight(fields) {
    const f = ordered(fields);
    let hgt = 0;
    f.forEach(id => (hgt += styleOf(id) === 'name' ? G.NAME_LH : G.TEXT_LH));
    if (f.includes('scientificName') && f.length > 1) hgt += G.NAME_GAP;
    return hgt;
  }
  const fits = fields => minHeight(fields) <= G.TEXT_ROOM + 0.001;

  /* ---------- text measuring & wrapping (same code for preview and PDF) ---------- */
  function wrapField(doc, plant, id, width, maxLines) {
    const value = SMX.fieldValue(plant, id);
    if (!value) return null;
    const style = styleOf(id);
    if (style === 'name') {
      doc.setFont(...doc.F.semi); doc.setFontSize(G.NAME_PT);
      return { id, style, lines: SMX.wrap(doc, value, width, maxLines) };
    }
    doc.setFont(...doc.F.light); doc.setFontSize(G.TEXT_PT);
    if (style === 'plain') return { id, style, lines: SMX.wrap(doc, value, width, maxLines) };
    return { id, style, ...wrapLabelled(doc, `${labelOf(id)}:`, value, width, maxLines) };
  }

  /* "Label: value" with the label in SemiBold and the value in Light.
     Returns { label, lw (label width + space), lines: [value text per line] };
     the first line starts after the label. */
  function wrapLabelled(doc, label, value, width, maxLines) {
    doc.setFont(...doc.F.semi);
    const lw = doc.getTextWidth(label) + doc.getTextWidth(' ');
    doc.setFont(...doc.F.light);
    const fitW = i => (i === 0 ? width - lw : width);
    const lines = [];
    let cur = '';
    for (const word of String(value).split(/\s+/).filter(Boolean)) {
      const test = cur ? `${cur} ${word}` : word;
      if (doc.getTextWidth(test) <= fitW(lines.length)) { cur = test; continue; }
      if (cur || lines.length === 0) { lines.push(cur); cur = ''; }
      let rest = word;
      while (doc.getTextWidth(rest) > fitW(lines.length)) { // a single word longer than a line
        let n = rest.length - 1;
        while (n > 1 && doc.getTextWidth(rest.slice(0, n)) > fitW(lines.length)) n--;
        lines.push(rest.slice(0, n));
        rest = rest.slice(n);
      }
      cur = rest;
    }
    if (cur || !lines.length) lines.push(cur);
    if (lines.length > maxLines) {
      const keep = lines.slice(0, maxLines);
      keep[maxLines - 1] = SMX.ellipsis(doc, `${keep[maxLines - 1]} ${lines[maxLines]}`.trim(), fitW(maxLines - 1));
      return { label, lw, lines: keep };
    }
    return { label, lw, lines };
  }

  const blockHeight = blocks => {
    let hgt = 0;
    blocks.forEach((b, i) => {
      hgt += b.lines.length * (b.style === 'name' ? G.NAME_LH : G.TEXT_LH);
      if (b.style === 'name' && i < blocks.length - 1) hgt += G.NAME_GAP;
    });
    return hgt;
  };

  function cellBlocks(doc, plant, fields, width, room) {
    const max = {};
    fields.forEach(id => (max[id] = G.MAX_LINES));
    let blocks = fields.map(id => wrapField(doc, plant, id, width, max[id])).filter(Boolean);
    if (room === undefined) return blocks;
    // Too much text: take lines away from the longest field until it fits.
    let guard = 60;
    while (blockHeight(blocks) > room + 0.001 && guard--) {
      const longest = blocks.reduce((a, b) => (b.lines.length > a.lines.length ? b : a), blocks[0]);
      if (!longest || longest.lines.length <= 1) break;
      max[longest.id] = longest.lines.length - 1;
      blocks = blocks.map(b => (b.id === longest.id ? wrapField(doc, plant, b.id, width, max[b.id]) : b));
    }
    return blocks;
  }

  /* Whole-document layout so every page has the same row positions. */
  function layout(doc, st, det) {
    const fields = ordered(st.fields);
    const s = G.IMG, room = G.TEXT_ROOM;
    const blocks = new Map();
    let need = minHeight(fields);
    st.pages.forEach((pg, pi) => pg.cells.forEach((c, ci) => {
      const p = c && det.get(c.id);
      if (!p) return;
      const b = cellBlocks(doc, p, fields, s, room);
      blocks.set(`${pi}:${ci}`, b);
      need = Math.max(need, blockHeight(b));
    }));
    const textH = Math.min(need, room);

    const cellH = s + G.TXT_GAP + textH;
    const extra = Math.max(0, G.CONTENT - 2 * cellH - G.ROW_GAP);
    const rowGap = G.ROW_GAP + extra / 2;
    const colGap = (G.W - 2 * G.MX - 4 * s) / 3;
    return {
      s, textH, cellH, fields, blocks,
      rows: [G.TOP, G.TOP + cellH + rowGap],
      cols: [0, 1, 2, 3].map(c => G.MX + c * (s + colGap))
    };
  }
  const cellPos = (L, ci) => ({ x: L.cols[ci % 4], y: L.rows[ci < 4 ? 0 : 1] });

  /* ---------- state helpers ---------- */
  function cleanState(raw, idMap) {
    const st = defaultState();
    if (raw && Array.isArray(raw.fields)) st.fields = ordered(raw.fields.filter(id => allowedFields().includes(id)));
    while (st.fields.length && !fits(st.fields)) st.fields.pop();
    if (raw && Array.isArray(raw.pages) && raw.pages.length) {
      st.pages = raw.pages.map(pg => ({
        title: String(pg?.title || ''),
        cells: Array.from({ length: CELLS }, (_, i) => {
          const c = pg?.cells?.[i];
          if (!c || !c.id) return null;
          const id = idMap ? idMap.get(c.id) : c.id;
          return id ? { id, img: c.img || null } : null;
        })
      }));
    }
    return st;
  }

  const placedIds = st => {
    const m = new Map();
    st.pages.forEach((pg, pi) => pg.cells.forEach(c => { if (c) { if (!m.has(c.id)) m.set(c.id, []); if (!m.get(c.id).includes(pi + 1)) m.get(c.id).push(pi + 1); } }));
    return m;
  };
  const placedCount = st => st.pages.reduce((n, pg) => n + pg.cells.filter(Boolean).length, 0);

  /* Image of a cell, falling back to the main image when the chosen one no longer exists. */
  function cellImg(c, det) {
    const p = det.get(c.id);
    if (!p) return null;
    const photos = SMX.photosOf(p);
    return c.img && photos.includes(c.img) ? c.img : photos[0] || null;
  }

  /* ---------- PDF ---------- */
  function drawBlocks(doc, blocks, x, y) {
    blocks.forEach((b, bi) => {
      const name = b.style === 'name';
      const lh = name ? G.NAME_LH : G.TEXT_LH;
      doc.setFontSize(name ? G.NAME_PT : G.TEXT_PT);
      doc.setTextColor(0, 0, 0);
      b.lines.forEach((line, li) => {
        const base = y + lh * 0.78;
        if (b.label && li === 0) {
          doc.setFont(...doc.F.semi);
          doc.text(b.label, x, base);
          doc.setFont(...doc.F.light);
          if (line) doc.text(line, x + b.lw, base);
        } else {
          doc.setFont(...(name ? doc.F.semi : doc.F.light));
          doc.text(line, x, base);
        }
        y += lh;
      });
      if (name && bi < blocks.length - 1) y += G.NAME_GAP;
    });
  }

  async function makePdf(st, det, progress) {
    const doc = await SMX.newDoc('landscape');
    const L = layout(doc, st, det);
    const total = placedCount(st);
    let done = 0;
    for (let pi = 0; pi < st.pages.length; pi++) {
      const pg = st.pages[pi];
      if (pi) doc.addPage('a4', 'landscape');
      if (pg.title.trim()) {
        doc.setFont(...doc.F.semi);
        doc.setFontSize(G.TITLE_PT);
        doc.setTextColor(0, 0, 0);
        doc.text(SMX.ellipsis(doc, pg.title.trim(), G.W - 2 * G.MX), G.MX, G.TITLE_Y);
      }
      for (let ci = 0; ci < CELLS; ci++) {
        const c = pg.cells[ci];
        if (!c || !det.get(c.id)) continue;
        const { x, y } = cellPos(L, ci);
        const img = await SMX.cropImage(cellImg(c, det), L.s, L.s);
        if (img) doc.addImage(img.data, 'JPEG', x, y, L.s, L.s, img.alias, 'NONE');
        else { doc.setFillColor(235, 239, 233); doc.rect(x, y, L.s, L.s, 'F'); }
        drawBlocks(doc, L.blocks.get(`${pi}:${ci}`) || [], x, y + L.s + G.TXT_GAP);
        progress?.(++done, total);
      }
    }
    const ids = [...placedIds(st).keys()];
    return SMX.finishPdf(doc, 'grid', st, ids, T('Grid of images'));
  }

  async function exportState(st, det) {
    SMX.toast(T('Making PDF…'));
    const doc = await makePdf(st, det, (n, t) => SMX.toast(`${T('Making PDF…')} ${n} / ${t}`));
    doc.save(`${SMX.baseName()}-grid.pdf`);
    SMX.toast(T('PDF downloaded'), { ms: 2500 });
  }

  async function exportAll() {
    SMX.toast(T('Loading plants…'));
    const list = picks();
    const det = await SMX.details(list.map(p => p.id));
    const st = defaultState();
    st.pages = [];
    list.forEach((p, i) => {
      if (i % CELLS === 0) st.pages.push(blankPage());
      st.pages[st.pages.length - 1].cells[i % CELLS] = { id: p.id, img: null };
    });
    await exportState(st, det);
  }

  /* ---------- editor ---------- */
  const E = { M: null, st: null, det: null, doc: null, L: null, side: false, drag: null };

  async function openEditor() {
    const tab = SMX.tabState();
    tab.grid = cleanState(tab.grid);
    const ids = new Set(SMX.selectedIds());
    tab.grid.pages.forEach(pg => pg.cells.forEach((c, i) => { if (c && !ids.has(c.id)) pg.cells[i] = null; }));
    E.st = tab.grid;
    SMX.toast(T('Loading plants…'));
    try {
      [E.det, E.doc] = await Promise.all([SMX.details([...ids], (n, t) => SMX.toast(`${T('Loading plants…')} ${n} / ${t}`)), SMX.measureDoc()]);
    } catch (err) {
      SMX.toast(err.message, { error: true, ms: 7000 });
      return;
    }
    SMX.toast('');
    if (!E.M) {
      E.M = SMX.modal('smx-grid');
      E.M.el.addEventListener('click', onClick);
      E.M.el.addEventListener('input', onInput);
      E.M.el.addEventListener('change', onChange);
      E.M.el.addEventListener('dragstart', onDragStart);
      E.M.el.addEventListener('dragover', onDragOver);
      E.M.el.addEventListener('dragleave', e => e.target.closest?.('.smx-cell')?.classList.remove('over'));
      E.M.el.addEventListener('drop', onDrop);
      E.M.el.addEventListener('keydown', e => {
        const cell = e.target.closest?.('.smx-cell');
        if (cell && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); cellClick(+cell.dataset.page, +cell.dataset.cell); }
      });
      E.M.el.addEventListener('dragend', () => { E.drag = null; E.M.el.querySelectorAll('.over,.dragging').forEach(x => x.classList.remove('over', 'dragging')); });
    }
    E.M.open();
    renderAll();
  }

  function renderAll() {
    const M = E.M;
    M.head.innerHTML = `
      <div class="smx-htitle"><h2>${h(T('Grid of images'))}</h2>
        <p>${h(T('Click an empty square to place a plant. Drag a placed plant onto another square to move it.'))}</p></div>
      <div class="smx-hacts">
        <button type="button" class="smx-sec${E.side ? ' on' : ''}" data-g="side">${h(T('Text under images'))}</button>
        <button type="button" class="smx-sec" data-g="autofill">${h(T('Fill empty squares'))}</button>
        <button type="button" class="smx-sec" data-g="reset">${h(T('Start over'))}</button>
        <button type="button" class="smx-x" data-g="close" aria-label="${h(T('Close'))}">×</button>
      </div>`;
    renderPages();
    renderSide();
    renderFoot();
  }

  function renderFoot(msg) {
    const n = placedCount(E.st);
    E.M.foot.innerHTML = `
      <span class="smx-msg" aria-live="polite">${h(msg || `${n} ${T(n === 1 ? 'plant placed' : 'plants placed')} · ${E.st.pages.length} ${T(E.st.pages.length === 1 ? 'page' : 'pages')}`)}</span>
      <div class="smx-actions">
        <button type="button" class="smx-sec" data-g="close">${h(T('Close'))}</button>
        <button type="button" class="smx-pri" data-g="export" ${n ? '' : 'disabled'}>${h(T('Export PDF'))}</button>
      </div>`;
  }

  const pc = (v, total) => `${((v / total) * 100).toFixed(4)}%`;

  function blocksHtml(blocks) {
    return blocks.map((b, bi) => {
      const name = b.style === 'name';
      const lh = name ? G.NAME_LH : G.TEXT_LH;
      const lines = b.lines.map((line, li) => {
        const inner = b.label && li === 0
          ? `<span class="lab" style="width:calc(var(--mm)*${b.lw})">${h(b.label)}</span>${h(line)}`
          : h(line);
        return `<div class="smx-tl${name ? ' nm' : ''}" style="height:calc(var(--mm)*${lh});font-size:calc(var(--mm)*${((name ? G.NAME_PT : G.TEXT_PT) * PT).toFixed(3)})">${inner}</div>`;
      }).join('');
      return lines + (name && bi < blocks.length - 1 ? `<div style="height:calc(var(--mm)*${G.NAME_GAP})"></div>` : '');
    }).join('');
  }

  function renderPages() {
    const st = E.st;
    E.L = layout(E.doc, st, E.det);
    const L = E.L;
    const font = E.doc.F.workSans ? 'ws' : 'hv';
    const N = st.pages.length;
    const html = st.pages.map((pg, pi) => {
      const cells = pg.cells.map((c, ci) => {
        const { x, y } = cellPos(L, ci);
        const p = c && E.det.get(c.id);
        const img = p && cellImg(c, E.det);
        const box = `left:${pc(x, G.W)};top:${pc(y, G.H)};width:${pc(L.s, G.W)};height:${pc(L.cellH, G.H)}`;
        const imgBox = `height:${pc(L.s, L.cellH)}`;
        if (!p) {
          return `<div class="smx-cell" data-page="${pi}" data-cell="${ci}" style="${box}" role="button" tabindex="0" aria-label="${h(T('Add a plant'))}">
            <div class="smx-ph empty" style="${imgBox}"><span class="smx-plus">+</span></div></div>`;
        }
        return `<div class="smx-cell filled" draggable="true" data-page="${pi}" data-cell="${ci}" style="${box}" role="button" tabindex="0" aria-label="${h(p.use.scientificName)}">
          <div class="smx-ph" style="${imgBox}">${img ? `<img src="${h(SMX.imgUrl(img))}" alt="" draggable="false" loading="lazy">` : ''}</div>
          <div class="smx-text" style="top:${pc(L.s + G.TXT_GAP, L.cellH)}">${blocksHtml(L.blocks.get(`${pi}:${ci}`) || [])}</div></div>`;
      }).join('');
      return `<div class="smx-pagewrap" data-page="${pi}">
        <div class="smx-pagebar"><span>${h(T('Page'))} ${pi + 1} / ${N}</span>
          <span class="smx-pacts">
            <button type="button" data-g="up" data-page="${pi}" ${pi ? '' : 'disabled'} title="${h(T('Move page up'))}" aria-label="${h(T('Move page up'))}">↑</button>
            <button type="button" data-g="down" data-page="${pi}" ${pi < N - 1 ? '' : 'disabled'} title="${h(T('Move page down'))}" aria-label="${h(T('Move page down'))}">↓</button>
            <button type="button" data-g="dup" data-page="${pi}">${h(T('Duplicate'))}</button>
            <button type="button" data-g="del" data-page="${pi}">${h(T('Delete'))}</button>
          </span></div>
        <div class="smx-sheet smx-land smx-f-${font}">
          <input type="text" class="smx-title" data-title="${pi}" maxlength="80" value="${h(pg.title)}" placeholder="${h(T('Page title (optional)'))}" aria-label="${h(T('Page title (optional)'))}"
            style="left:${pc(G.MX - 1, G.W)};top:${pc(G.TITLE_Y - 7, G.H)};width:${pc(G.W - 2 * G.MX + 2, G.W)};height:${pc(9.5, G.H)};font-size:calc(var(--mm)*${G.TITLE_PT * PT})">
          ${cells}
        </div></div>`;
    }).join('');
    const scroll = E.M.body.scrollTop;
    E.M.body.innerHTML = `<div class="smx-pages">${html}<button type="button" class="smx-sec smx-addpage" data-g="addpage">+ ${h(T('Add page'))}</button></div>`;
    E.M.body.scrollTop = scroll;
  }

  function renderSide() {
    let side = E.M.main.querySelector('.smx-side');
    if (!E.side) { side?.remove(); return; }
    if (!side) {
      side = document.createElement('div');
      side.className = 'smx-side';
      E.M.main.appendChild(side);
    }
    const fields = E.st.fields;
    const used = minHeight(fields), max = G.TEXT_ROOM;
    const pct = Math.min(100, (used / max) * 100);
    side.innerHTML = `
      <div class="smx-sidehead"><h3>${h(T('Text under each image'))}</h3><button type="button" class="smx-x" data-g="side" aria-label="${h(T('Close'))}">×</button></div>
      <p class="smx-note">${h(T('The images keep their size; the space between the rows gets smaller when more text is added. Fields that no longer fit are greyed out.'))}</p>
      <div class="smx-cap"><div style="width:${pct.toFixed(1)}%"></div></div>
      ${SMX.sections().map(sec => {
        const items = sec.fields.filter(id => allowedFields().includes(id));
        if (!items.length) return '';
        return `<div class="smx-fsec" style="--c:${sec.colour}"><b>${h(sec.title)}</b>${items.map(id => {
          const on = fields.includes(id);
          const ok = on || fits([...fields, id]);
          return `<label class="smx-chk${ok ? '' : ' off'}"><input type="checkbox" data-field="${h(id)}" ${on ? 'checked' : ''} ${ok ? '' : 'disabled'}><span>${h(SMX.fieldLabel(id))}</span></label>`;
        }).join('')}</div>`;
      }).join('')}
      <button type="button" class="smx-sec smx-full" data-g="fieldsdefault">${h(T('Back to default'))}</button>`;
  }

  function rerender(msg) {
    renderPages();
    if (E.side) renderSide();
    renderFoot(msg);
  }

  /* ---------- editor events ---------- */
  function onInput(e) {
    const t = e.target.closest('[data-title]');
    if (t) E.st.pages[+t.dataset.title].title = t.value;
  }

  function onChange(e) {
    const f = e.target.closest('[data-field]');
    if (!f) return;
    const id = f.dataset.field;
    const next = f.checked ? [...E.st.fields, id] : E.st.fields.filter(x => x !== id);
    if (f.checked && !fits(next)) { f.checked = false; return; }
    E.st.fields = ordered(next);
    rerender();
  }

  async function onClick(e) {
    const cell = e.target.closest('.smx-cell');
    if (cell && !e.target.closest('.smx-layer')) return cellClick(+cell.dataset.page, +cell.dataset.cell);
    const b = e.target.closest('[data-g]');
    if (!b || b.disabled) return;
    const st = E.st, pi = +b.dataset.page;
    switch (b.dataset.g) {
      case 'close': return E.M.close();
      case 'side': E.side = !E.side; return renderAll();
      case 'fieldsdefault': st.fields = DEFAULT_FIELDS.slice(); return rerender();
      case 'addpage':
        st.pages.push(blankPage());
        rerender();
        E.M.body.scrollTop = E.M.body.scrollHeight;
        return;
      case 'up': case 'down': {
        const to = b.dataset.g === 'up' ? pi - 1 : pi + 1;
        [st.pages[pi], st.pages[to]] = [st.pages[to], st.pages[pi]];
        return rerender();
      }
      case 'dup':
        st.pages.splice(pi + 1, 0, JSON.parse(JSON.stringify(st.pages[pi])));
        return rerender();
      case 'del': {
        const pg = st.pages[pi];
        if ((pg.cells.some(Boolean) || pg.title.trim()) && !confirm(T('Delete this page?'))) return;
        st.pages.splice(pi, 1);
        if (!st.pages.length) st.pages.push(blankPage());
        return rerender();
      }
      case 'autofill': return autofill();
      case 'reset':
        if (placedCount(st) && !confirm(T('Start over? The current layout will be lost.'))) return;
        E.st = SMX.tabState().grid = defaultState();
        return rerender();
      case 'export': {
        b.disabled = true;
        try { await exportState(st, E.det); renderFoot(T('PDF downloaded')); }
        catch (err) { console.error(err); renderFoot(err.message || T('The PDF could not be made.')); SMX.toast(err.message || T('The PDF could not be made.'), { error: true, ms: 7000 }); }
        return;
      }
    }
  }

  function autofill() {
    const st = E.st;
    const used = placedIds(st);
    const todo = picks().filter(p => !used.has(p.id) && E.det.get(p.id));
    if (!todo.length) return renderFoot(T('All plants of the selection are already placed.'));
    for (const pg of st.pages) {
      for (let i = 0; i < CELLS && todo.length; i++) if (!pg.cells[i]) pg.cells[i] = { id: todo.shift().id, img: null };
    }
    while (todo.length) {
      const pg = blankPage();
      for (let i = 0; i < CELLS && todo.length; i++) pg.cells[i] = { id: todo.shift().id, img: null };
      st.pages.push(pg);
    }
    rerender();
  }

  async function choosePlant(pi, ci) {
    const list = picks().map(p => E.det.get(p.id)).filter(Boolean);
    const used = placedIds(E.st);
    const id = await SMX.pickPlant(E.M, list, p => (used.has(p.id) ? `${T(used.get(p.id).length > 1 ? 'on pages' : 'on page')} ${used.get(p.id).join(', ')}` : ''));
    if (!id) return;
    const plant = E.det.get(id);
    const photos = SMX.photosOf(plant);
    let img = photos[0] || null;
    if (photos.length > 1) {
      img = await SMX.pickImage(E.M, plant, photos[0]);
      if (!img) return;
    }
    E.st.pages[pi].cells[ci] = { id, img };
    rerender();
  }

  async function cellClick(pi, ci) {
    const c = E.st.pages[pi].cells[ci];
    if (!c || !E.det.get(c.id)) return choosePlant(pi, ci);
    const plant = E.det.get(c.id);
    const cur = cellImg(c, E.det);
    const photos = SMX.photosOf(plant);
    const res = await E.M.dialog(`
      <div class="smx-dhead"><h3><i>${h(plant.use.scientificName)}</i></h3><button type="button" class="smx-x" data-d="cancel" aria-label="${h(T('Close'))}">×</button></div>
      ${photos.length > 1 ? `<p class="smx-dsub">${h(T('Choose the image'))}</p>` : ''}
      <div class="smx-dscroll"><div class="smx-pstrip">${photos.map(src => `<button type="button" class="smx-th${src === cur ? ' sel' : ''}" data-src="${h(src)}"><img loading="lazy" src="${h(SMX.imgUrl(src))}" alt=""></button>`).join('')}</div></div>
      <div class="smx-dfoot">
        <button type="button" class="smx-sec" data-d="remove">${h(T('Empty this square'))}</button>
        <button type="button" class="smx-sec" data-d="change">${h(T('Other plant'))}</button>
        <button type="button" class="smx-pri" data-d="cancel">${h(T('Done'))}</button>
      </div>`, (ev, done) => {
      const th = ev.target.closest('[data-src]');
      if (th) return done({ img: th.dataset.src });
      const d = ev.target.closest('[data-d]');
      if (d) done({ action: d.dataset.d });
    }, 'smx-wide');
    if (!res) return;
    if (res.img) { c.img = res.img; return rerender(); }
    if (res.action === 'remove') { E.st.pages[pi].cells[ci] = null; return rerender(); }
    if (res.action === 'change') return choosePlant(pi, ci);
  }

  function onDragStart(e) {
    const cell = e.target.closest?.('.smx-cell.filled');
    if (!cell) return;
    E.drag = [+cell.dataset.page, +cell.dataset.cell];
    cell.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', 'cell');
  }
  function onDragOver(e) {
    const cell = e.target.closest?.('.smx-cell');
    if (!cell || !E.drag) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    E.M.el.querySelectorAll('.smx-cell.over').forEach(x => x !== cell && x.classList.remove('over'));
    cell.classList.add('over');
  }
  function onDrop(e) {
    const cell = e.target.closest?.('.smx-cell');
    if (!cell || !E.drag) return;
    e.preventDefault();
    const [fp, fc] = E.drag, tp = +cell.dataset.page, tc = +cell.dataset.cell;
    E.drag = null;
    if (fp === tp && fc === tc) return rerender();
    const a = E.st.pages[fp].cells, b = E.st.pages[tp].cells;
    [a[fc], b[tc]] = [b[tc], a[fc]];
    rerender();
  }

  /* ---------- register ---------- */
  SMX.kinds.grid = {
    exportAll,
    openEditor,
    restore: async (data, idMap) => {
      SMX.tabState().grid = cleanState(data, idMap);
      await openEditor();
    },
    onLanguage: () => { if (E.M?.isOpen()) renderAll(); }
  };
  SMX._grid = { G, layout, minHeight, fits }; // for testing
})();
