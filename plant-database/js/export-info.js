/* =====================================================================
   Studio Monstera – export "full info" (A4 portrait, one plant per page)
   ---------------------------------------------------------------------
   State (per tab, also embedded in the PDF):
     { items: [{ t: 'p', id, off, img } | { t: 'h', text }], hide: [partId, …] }
   t:'p' = plant page, t:'h' = title page (divider).
   Parts: 'image', 'commonName', 'family', 'zones', every field of the
   popup card (GROUPS in app.js) and 'disclaimer'.
   The page content scales down until it fits on one page.
   ===================================================================== */
(() => {
  'use strict';

  const { h, T } = SMX;
  const PT = 0.3528;

  const P = {
    W: 210, H: 297, M: 14, IMG: 64, IMG_GAP: 8,
    COL_GAP: 6, CARD_GAP: 4,
    PAD: 3.4, BAR: 1.3,
    FOOT_Y: 289, BOTTOM: 281
  };
  P.COL_W = (P.W - 2 * P.M - P.COL_GAP) / 2;
  P.FULL_W = P.W - 2 * P.M;

  const INK = [29, 42, 34];
  const GREY = [91, 107, 96];
  const VALUE = [62, 76, 67]; // field values: a touch lighter than the SemiBold field names
  const LEAF = [61, 107, 79];
  const LINE = [207, 216, 205];

  const HEAD_PARTS = ['image', 'commonName', 'family', 'zones'];
  const FOOT_PARTS = ['disclaimer'];
  const NOTE = 'discription.note';
  const DISCLAIMER = 'AI was used, be aware of potential mistakes';

  const partLabel = id => (id === 'image' ? T('Image') : id === 'disclaimer' ? T('Disclaimer') : SMX.fieldLabel(id));
  const groupSections = () => SMX.sections().filter(s => s.key !== 'General');
  const allParts = () => [...HEAD_PARTS, ...groupSections().flatMap(s => s.fields), ...FOOT_PARTS];

  /* ---------- colours ---------- */
  const hexRgb = hex => {
    const m = String(hex).replace('#', '');
    const v = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
    return [0, 2, 4].map(i => parseInt(v.slice(i, i + 2), 16) || 0);
  };
  const mix = (rgb, t) => rgb.map(c => Math.round(c * t + 255 * (1 - t)));
  const darken = (rgb, t) => rgb.map(c => Math.round(c * (1 - t)));
  const swatch = name => hexRgb(SOFT[String(name || '').split(/[\/,]/)[0].trim().toLowerCase()] || '#c5cac6');

  /* ---------- content of one plant page ---------- */
  function cardsFor(p, hide) {
    return groupSections().map(sec => {
      const rows = sec.fields.filter(f => !hide.has(f)).map(f => {
        if (f[0] === '@') {
          const [months, cols, aut = [], autCols = []] = periods(p, f);
          if (!months.length && !aut.length) return null;
          return { kind: 'diag', label: SMX.fieldLabel(f), months, cols, aut, autCols };
        }
        const text = SMX.fieldValue(p, f);
        if (!text) return null;
        const lab = SMX.fieldLabel(f);
        return { kind: 'text', label: f === NOTE || lab === sec.title ? '' : lab, text };
      }).filter(Boolean);
      return rows.length ? { key: sec.key, title: sec.title, colour: hexRgb(sec.colour), rows, full: sec.fields.includes(NOTE) } : null;
    }).filter(Boolean);
  }

  /* Measure a card at scale k; maxLines caps text rows (fallback when space is short). */
  function measureCard(doc, card, width, k, maxLines) {
    const inner = width - P.BAR - 2 * P.PAD;
    const S = {
      title: 10.5 * k, label: 7.4 * k, value: 8.8 * k,
      titleLh: 10.5 * k * PT * 1.25, labelLh: 7.4 * k * PT * 1.28, valueLh: 8.8 * k * PT * 1.32,
      rowGap: 1.7 * k, diagH: 5.2 * k
    };
    let hgt = P.PAD + S.titleLh + 1.2 * k;
    const rows = card.rows.map((r, i) => {
      const out = { ...r, y: hgt };
      if (r.label) hgt += S.labelLh;
      if (r.kind === 'diag') hgt += S.diagH + 0.4 * k;
      else {
        doc.setFont(...doc.F.light); doc.setFontSize(S.value);
        const cap = card.full ? (maxLines.note ?? Infinity) : (maxLines.row ?? Infinity);
        out.lines = SMX.wrap(doc, r.text, inner, cap);
        hgt += out.lines.length * S.valueLh;
      }
      if (i < card.rows.length - 1) hgt += S.rowGap;
      return out;
    });
    hgt += P.PAD - 0.6 * k;
    return { ...card, rows, h: hgt, w: width, inner, S };
  }

  function headerLayout(doc, p, hide) {
    const showImg = !hide.has('image');
    const x = showImg ? P.M + P.IMG + P.IMG_GAP : P.M;
    const w = P.W - P.M - x;
    let y = P.M + 1;
    const items = [];
    doc.setFont(...doc.F.semi);
    let sciPt = 20, sci;
    for (; sciPt >= 14; sciPt -= 1.5) { doc.setFontSize(sciPt); sci = doc.splitTextToSize(p.use.scientificName, w); if (sci.length <= 2) break; }
    sci = SMX.wrap(doc, p.use.scientificName, w, 3);
    const sciLh = sciPt * PT * 1.15;
    items.push({ font: 'semi', pt: sciPt, lines: sci, y: y + sciLh * 0.8, lh: sciLh, colour: INK });
    y += sci.length * sciLh + 1.2;
    const common = cn(p);
    if (!hide.has('commonName') && common) {
      doc.setFont(...doc.F.light); doc.setFontSize(13);
      const lines = SMX.wrap(doc, common, w, 2), lh = 13 * PT * 1.2;
      items.push({ font: 'light', pt: 13, lines, y: y + lh * 0.8, lh, colour: INK });
      y += lines.length * lh + 1.6;
    }
    if (!hide.has('family') && p.use.family) {
      const lh = 10 * PT * 1.2;
      items.push({ font: 'light', pt: 10, lines: [p.use.family], y: y + lh * 0.8, lh, colour: GREY });
      y += lh + 2.4;
    }
    let zones = null;
    if (!hide.has('zones') && (p.hardinessZones || []).length) {
      const lh = 6.8 * PT * 1.3;
      zones = { labelY: y + lh * 0.8, chipY: y + lh + 0.8 };
      const gap = 0.8, cw = Math.min(7.4, (w - 12 * gap) / 13);
      zones.cw = cw; zones.gap = gap; zones.ch = 6.2;
      y = zones.chipY + zones.ch;
    }
    const bottom = Math.max(showImg ? P.M + P.IMG : 0, y) + 7;
    return { showImg, x, w, items, zones, bottom };
  }

  /* Find the largest scale at which all cards fit under the header. */
  function pageLayout(doc, p, hide) {
    const head = headerLayout(doc, p, hide);
    const cards = cardsFor(p, hide);
    const avail = P.BOTTOM - head.bottom;
    const tryFit = (k, maxLines) => {
      const cols = [0, 0], placed = [];
      let note = null;
      cards.forEach(c => {
        if (c.full) { note = measureCard(doc, c, P.FULL_W, k, maxLines); return; }
        const m = measureCard(doc, c, P.COL_W, k, maxLines);
        const col = cols[0] <= cols[1] ? 0 : 1;
        placed.push({ ...m, x: P.M + col * (P.COL_W + P.COL_GAP), y: head.bottom + cols[col] });
        cols[col] += m.h + P.CARD_GAP * k;
      });
      const colsH = Math.max(0, Math.max(...cols) - P.CARD_GAP * k);
      if (note) {
        const ny = head.bottom + (colsH ? colsH + P.CARD_GAP * k : 0);
        placed.push({ ...note, x: P.M, y: ny });
        return { ok: ny + note.h <= P.BOTTOM + 0.01, placed, used: ny + note.h - head.bottom };
      }
      return { ok: colsH <= avail + 0.01, placed, used: colsH };
    };
    let res;
    for (let k = 1; k >= 0.6 - 1e-9; k -= 0.04) {
      res = tryFit(k, {});
      if (res.ok) return { head, ...res };
    }
    // Still too long at the smallest size: shorten the note first, then long rows.
    const k = 0.6;
    for (const row of [Infinity, 6, 4, 3, 2, 1]) {
      for (let note = 40; note >= 2; note--) {
        res = tryFit(k, { row, note });
        if (res.ok) return { head, ...res };
      }
    }
    return { head, ...res };
  }

  /* ---------- drawing ---------- */
  function drawDiagram(doc, x, y, w, hgt, k, months, cols, aut, autCols) {
    const gap = 0.55, bw = (w - 11 * gap) / 12;
    doc.setFont(...doc.F.semi);
    doc.setFontSize(6 * k);
    [...MONTHS].forEach((letter, i) => {
      const n = i + 1, bx = x + i * (bw + gap);
      const isA = aut.includes(n), on = isA || months.includes(n);
      const colours = (isA ? autCols : cols).map(swatch);
      if (on) {
        const list = colours.length ? colours : [[156, 202, 163]];
        doc.saveGraphicsState();
        doc.roundedRect(bx, y, bw, hgt, 0.7, 0.7, null);
        doc.clip();
        doc.discardPath();
        list.forEach((c, ci) => { doc.setFillColor(...c); doc.rect(bx + (ci * bw) / list.length, y, bw / list.length + 0.05, hgt, 'F'); });
        doc.restoreGraphicsState();
        doc.setDrawColor(150, 160, 152);
      } else {
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(bx, y, bw, hgt, 0.7, 0.7, 'F');
        doc.setDrawColor(...LINE);
      }
      doc.setLineWidth(0.15);
      doc.roundedRect(bx, y, bw, hgt, 0.7, 0.7, 'S');
      doc.setTextColor(...(on ? INK : [150, 160, 152]));
      doc.text(letter, bx + bw / 2, y + hgt / 2 + 6 * k * PT * 0.35, { align: 'center' });
    });
  }

  function drawCard(doc, c) {
    const { S } = c;
    const k = S.value / 8.8;
    doc.setFillColor(...mix(c.colour, 0.07));
    doc.roundedRect(c.x, c.y, c.w, c.h, 1.8, 1.8, 'F');
    doc.setFillColor(...c.colour);
    doc.saveGraphicsState();
    doc.roundedRect(c.x, c.y, c.w, c.h, 1.8, 1.8, null);
    doc.clip();
    doc.discardPath();
    doc.rect(c.x, c.y, P.BAR, c.h, 'F');
    doc.restoreGraphicsState();
    const x = c.x + P.BAR + P.PAD;
    doc.setFont(...doc.F.semi);
    doc.setFontSize(S.title);
    doc.setTextColor(...darken(c.colour, 0.18));
    doc.text(c.title, x, c.y + P.PAD + S.titleLh * 0.78);
    c.rows.forEach(r => {
      let y = c.y + r.y;
      if (r.label) {
        doc.setFont(...doc.F.semi);
        doc.setFontSize(S.label);
        doc.setTextColor(...INK);
        doc.text(r.label, x, y + S.labelLh * 0.8);
        y += S.labelLh;
      }
      if (r.kind === 'diag') {
        drawDiagram(doc, x, y + 0.3 * k, c.inner, S.diagH, k, r.months, r.cols, r.aut, r.autCols);
      } else {
        doc.setFont(...doc.F.light);
        doc.setFontSize(S.value);
        doc.setTextColor(...VALUE);
        r.lines.forEach((line, i) => doc.text(line, x, y + S.valueLh * (i + 0.78)));
      }
    });
  }

  async function drawPlantPage(doc, p, item, hide) {
    const L = pageLayout(doc, p, hide);
    const { head } = L;
    if (head.showImg) {
      const photos = SMX.photosOf(p);
      const src = item.img && photos.includes(item.img) ? item.img : photos[0];
      const img = await SMX.cropImage(src, P.IMG, P.IMG);
      if (img) doc.addImage(img.data, 'JPEG', P.M, P.M, P.IMG, P.IMG, img.alias, 'NONE');
      else { doc.setFillColor(235, 239, 233); doc.rect(P.M, P.M, P.IMG, P.IMG, 'F'); }
    }
    head.items.forEach(it => {
      doc.setFont(...doc.F[it.font]);
      doc.setFontSize(it.pt);
      doc.setTextColor(...it.colour);
      it.lines.forEach((line, i) => doc.text(line, head.x, it.y + i * it.lh));
    });
    if (head.zones) {
      const z = head.zones, on = new Set((p.hardinessZones || []).map(Number));
      doc.setFont(...doc.F.semi);
      doc.setFontSize(6.8);
      doc.setTextColor(...GREY);
      doc.text(SMX.fieldLabel('zones'), head.x, z.labelY);
      doc.setFontSize(7);
      for (let n = 1; n <= 13; n++) {
        const cx = head.x + (n - 1) * (z.cw + z.gap);
        if (on.has(n)) { doc.setFillColor(...LEAF); doc.roundedRect(cx, z.chipY, z.cw, z.ch, 0.8, 0.8, 'F'); doc.setTextColor(255, 255, 255); }
        else { doc.setDrawColor(...LINE); doc.setLineWidth(0.2); doc.setFillColor(255, 255, 255); doc.roundedRect(cx, z.chipY, z.cw, z.ch, 0.8, 0.8, 'FD'); doc.setTextColor(160, 170, 162); }
        doc.text(String(n), cx + z.cw / 2, z.chipY + z.ch / 2 + 7 * PT * 0.35, { align: 'center' });
      }
    }
    L.placed.forEach(c => drawCard(doc, c));
  }

  function drawTitlePage(doc, text) {
    const y = 128;
    doc.setFillColor(...LEAF);
    doc.rect(P.M + 4, y - 22, 32, 1.4, 'F');
    doc.setFont(...doc.F.semi);
    doc.setFontSize(30);
    doc.setTextColor(...INK);
    const lines = SMX.wrap(doc, text.trim() || ' ', P.W - 2 * P.M - 8, 4);
    lines.forEach((l, i) => doc.text(l, P.M + 4, y + i * 30 * PT * 1.15));
  }

  function drawFooters(doc, kinds, hide) {
    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFont(...doc.F.light);
      doc.setFontSize(7);
      doc.setTextColor(...GREY);
      doc.text(`${i} / ${n}`, P.W - P.M, P.FOOT_Y, { align: 'right' });
      if (kinds[i - 1] === 'p' && !hide.has('disclaimer')) doc.text(SMX.ellipsis(doc, T(DISCLAIMER), P.FULL_W - 20), P.M, P.FOOT_Y);
    }
  }

  async function makePdf(st, det, progress, only) {
    const doc = await SMX.newDoc('portrait');
    const hide = new Set(st.hide);
    const items = only ? [only] : st.items.filter(it => (it.t === 'h' ? true : !it.off && det.get(it.id)));
    if (!items.length) throw new Error(T('Nothing to export.'));
    const kinds = [];
    const total = items.filter(it => it.t === 'p').length;
    let done = 0;
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      if (i) doc.addPage('a4', 'portrait');
      kinds.push(it.t);
      if (it.t === 'h') drawTitlePage(doc, it.text);
      else { await drawPlantPage(doc, det.get(it.id), it, hide); progress?.(++done, total); }
    }
    drawFooters(doc, kinds, hide);
    const ids = st.items.filter(it => it.t === 'p').map(it => it.id);
    return SMX.finishPdf(doc, 'info', st, ids, T('Full info'));
  }

  async function exportState(st, det) {
    SMX.toast(T('Making PDF…'));
    const doc = await makePdf(st, det, (n, t) => SMX.toast(`${T('Making PDF…')} ${n} / ${t}`));
    doc.save(`${SMX.baseName()}-info.pdf`);
    SMX.toast(T('PDF downloaded'), { ms: 2500 });
  }

  const defaultState = () => ({ items: picks().map(p => ({ t: 'p', id: p.id, off: false, img: null })), hide: [] });

  async function exportAll() {
    SMX.toast(T('Loading plants…'));
    const st = defaultState();
    const det = await SMX.details(st.items.map(it => it.id), (n, t) => SMX.toast(`${T('Loading plants…')} ${n} / ${t}`));
    await exportState(st, det);
  }

  /* Normalise a stored/imported state and keep it in step with the selection. */
  function cleanState(raw, idMap) {
    const selected = SMX.selectedIds();
    const sel = new Set(selected);
    const parts = new Set(allParts());
    const st = { items: [], hide: Array.isArray(raw?.hide) ? raw.hide.filter(x => parts.has(x)) : [] };
    const seen = new Set();
    (Array.isArray(raw?.items) ? raw.items : []).forEach(it => {
      if (it?.t === 'h') st.items.push({ t: 'h', text: String(it.text || '') });
      else if (it?.t === 'p') {
        const id = idMap ? idMap.get(it.id) : it.id;
        if (!id || !sel.has(id) || seen.has(id)) return;
        seen.add(id);
        st.items.push({ t: 'p', id, off: !!it.off, img: it.img || null });
      }
    });
    selected.forEach(id => { if (!seen.has(id)) st.items.push({ t: 'p', id, off: false, img: null }); });
    return st;
  }

  /* ---------- editor ---------- */
  const E = { M: null, st: null, det: null, side: true, drag: null, preview: null };

  async function openEditor() {
    const tab = SMX.tabState();
    tab.info = cleanState(tab.info);
    E.st = tab.info;
    SMX.toast(T('Loading plants…'));
    try {
      E.det = await SMX.details(E.st.items.filter(it => it.t === 'p').map(it => it.id), (n, t) => SMX.toast(`${T('Loading plants…')} ${n} / ${t}`));
    } catch (err) {
      SMX.toast(err.message, { error: true, ms: 7000 });
      return;
    }
    SMX.toast('');
    if (!E.M) {
      E.M = SMX.modal('smx-info');
      E.M.el.addEventListener('click', onClick);
      E.M.el.addEventListener('input', onInput);
      E.M.el.addEventListener('change', onChange);
      E.M.el.addEventListener('pointerdown', e => { const li = e.target.closest('.smx-grip')?.closest('.smx-irow'); if (li) li.draggable = true; });
      E.M.el.addEventListener('dragstart', onDragStart);
      E.M.el.addEventListener('dragover', onDragOver);
      E.M.el.addEventListener('drop', onDrop);
      E.M.el.addEventListener('dragend', clearDrag);
      E.M.el.addEventListener('pointerup', () => { if (E.drag === null) E.M.el.querySelectorAll('.smx-irow[draggable="true"]').forEach(r => (r.draggable = false)); });
      const oldClose = E.M.close;
      E.M.close = () => { closePreviewUrl(); oldClose(); };
    }
    E.side = matchMedia('(min-width: 900px)').matches;
    E.M.open();
    renderAll();
  }

  function renderAll() {
    E.M.head.innerHTML = `
      <div class="smx-htitle"><h2>${h(T('Full info'))}</h2>
        <p>${h(T('Drag the rows to change the order, untick plants to leave them out and add title pages as dividers.'))}</p></div>
      <div class="smx-hacts">
        <button type="button" class="smx-sec${E.side ? ' on' : ''}" data-i-act="side">${h(T('Information to include'))}</button>
        <button type="button" class="smx-sec" data-i-act="reset">${h(T('Start over'))}</button>
        <button type="button" class="smx-x" data-i-act="close" aria-label="${h(T('Close'))}">×</button>
      </div>`;
    renderList();
    renderSide();
    renderFoot();
  }

  function renderFoot(msg) {
    const plantsN = E.st.items.filter(it => it.t === 'p' && !it.off).length;
    const titlesN = E.st.items.filter(it => it.t === 'h').length;
    E.M.foot.innerHTML = `
      <span class="smx-msg" aria-live="polite">${h(msg || `${plantsN} ${T(plantsN === 1 ? 'plant page' : 'plant pages')} · ${titlesN} ${T(titlesN === 1 ? 'title page' : 'title pages')}`)}</span>
      <div class="smx-actions">
        <button type="button" class="smx-sec" data-i-act="close">${h(T('Close'))}</button>
        <button type="button" class="smx-pri" data-i-act="export" ${plantsN + titlesN ? '' : 'disabled'}>${h(T('Export PDF'))}</button>
      </div>`;
  }

  function renderList() {
    const N = E.st.items.length;
    const rows = E.st.items.map((it, i) => {
      const moves = `<button type="button" data-i-act="up" data-i="${i}" ${i ? '' : 'disabled'} aria-label="${h(T('Move up'))}" title="${h(T('Move up'))}">↑</button>
        <button type="button" data-i-act="down" data-i="${i}" ${i < N - 1 ? '' : 'disabled'} aria-label="${h(T('Move down'))}" title="${h(T('Move down'))}">↓</button>`;
      if (it.t === 'h') {
        return `<li class="smx-irow head" data-i="${i}">
          <span class="smx-grip" title="${h(T('Drag'))}" aria-hidden="true">⋮⋮</span>
          <span class="smx-tag">${h(T('Title page'))}</span>
          <input type="text" class="smx-ititle" data-ititle="${i}" maxlength="80" value="${h(it.text)}" placeholder="${h(T('Title'))}" aria-label="${h(T('Title'))}">
          <span class="smx-iacts">${moves}<button type="button" data-i-act="preview" data-i="${i}">${h(T('Preview'))}</button><button type="button" data-i-act="del" data-i="${i}" aria-label="${h(T('Delete'))}" title="${h(T('Delete'))}">×</button></span>
        </li>`;
      }
      const p = E.det.get(it.id);
      if (!p) return '';
      const photos = SMX.photosOf(p);
      const img = it.img && photos.includes(it.img) ? it.img : photos[0];
      return `<li class="smx-irow${it.off ? ' off' : ''}" data-i="${i}">
        <span class="smx-grip" title="${h(T('Drag'))}" aria-hidden="true">⋮⋮</span>
        <input type="checkbox" data-on="${i}" ${it.off ? '' : 'checked'} title="${h(T('Include'))}" aria-label="${h(T('Include'))}">
        <button type="button" class="smx-ithumb" data-i-act="img" data-i="${i}" ${photos.length > 1 ? '' : 'disabled'} title="${h(T('Choose the image'))}">${img ? `<img loading="lazy" src="${h(SMX.imgUrl(img))}" alt="">` : ''}${photos.length > 1 ? `<small>${photos.length}</small>` : ''}</button>
        <span class="smx-iname"><i>${h(p.use.scientificName)}</i><small>${h(cn(p) || '')}</small></span>
        <span class="smx-iacts">
          <button type="button" data-i-act="title" data-i="${i}" title="${h(T('Add a title page above'))}">+ ${h(T('Title'))}</button>
          <button type="button" data-i-act="preview" data-i="${i}">${h(T('Preview'))}</button>${moves}
        </span>
      </li>`;
    }).join('');
    const scroll = E.M.body.scrollTop;
    E.M.body.innerHTML = `<div class="smx-ilistwrap"><ol class="smx-ilist">${rows}</ol>
      <button type="button" class="smx-sec smx-addpage" data-i-act="addtitle">+ ${h(T('Add title page at the end'))}</button></div>`;
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
    const hide = new Set(E.st.hide);
    const group = (key, title, colour, parts) => {
      const on = parts.filter(x => !hide.has(x)).length;
      return `<div class="smx-fsec" style="--c:${colour}">
        <label class="smx-chk grp"><input type="checkbox" data-grp="${h(key)}" ${on === parts.length ? 'checked' : ''} ${on && on < parts.length ? 'data-mixed="1"' : ''}><b>${h(title)}</b></label>
        ${parts.map(x => `<label class="smx-chk"><input type="checkbox" data-part="${h(x)}" ${hide.has(x) ? '' : 'checked'}><span>${h(partLabel(x))}</span></label>`).join('')}</div>`;
    };
    side.innerHTML = `
      <div class="smx-sidehead"><h3>${h(T('Information to include'))}</h3><button type="button" class="smx-x" data-i-act="side" aria-label="${h(T('Close'))}">×</button></div>
      <p class="smx-note">${h(T('Applies to every plant page. Text gets smaller when a plant has a lot of information, so everything fits on one page.'))}</p>
      ${group('@head', T('Header'), '#3d6b4f', HEAD_PARTS)}
      ${groupSections().map(s => group(s.key, s.title, s.colour, s.fields)).join('')}
      ${group('@foot', T('Footer'), '#6b7a70', FOOT_PARTS)}
      <button type="button" class="smx-sec smx-full" data-i-act="allparts">${h(T('Include everything'))}</button>`;
    side.querySelectorAll('[data-mixed]').forEach(i => (i.indeterminate = true));
  }

  const groupParts = key => (key === '@head' ? HEAD_PARTS : key === '@foot' ? FOOT_PARTS : groupSections().find(s => s.key === key)?.fields || []);

  function onChange(e) {
    const t = e.target;
    if (t.dataset.on !== undefined) {
      E.st.items[+t.dataset.on].off = !t.checked;
      t.closest('.smx-irow').classList.toggle('off', !t.checked);
      return renderFoot();
    }
    const hide = new Set(E.st.hide);
    if (t.dataset.part) t.checked ? hide.delete(t.dataset.part) : hide.add(t.dataset.part);
    else if (t.dataset.grp) groupParts(t.dataset.grp).forEach(x => (t.checked ? hide.delete(x) : hide.add(x)));
    else return;
    E.st.hide = allParts().filter(x => hide.has(x));
    renderSide();
  }

  function onInput(e) {
    const t = e.target.closest('[data-ititle]');
    if (t) E.st.items[+t.dataset.ititle].text = t.value;
  }

  function closePreviewUrl() {
    if (E.preview) URL.revokeObjectURL(E.preview);
    E.preview = null;
  }

  async function preview(i) {
    const it = E.st.items[i];
    E.M.dialog(`<div class="smx-dmsg">${h(T('Making preview…'))}</div>`, null, 'smx-preview');
    try {
      const doc = await makePdf(E.st, E.det, null, it);
      closePreviewUrl();
      E.preview = URL.createObjectURL(doc.output('blob'));
      if (E.M.layer.hidden) return; // closed meanwhile
      E.M.dialog(`
        <div class="smx-dhead"><h3>${h(T('Preview'))}</h3><button type="button" class="smx-x" data-d="cancel" aria-label="${h(T('Close'))}">×</button></div>
        <iframe class="smx-pdfview" src="${E.preview}#toolbar=0&navpanes=0&view=Fit" title="${h(T('Preview'))}"></iframe>`, null, 'smx-preview');
    } catch (err) {
      console.error(err);
      E.M.dialog(`<div class="smx-dmsg err">${h(err.message || T('The PDF could not be made.'))}</div><div class="smx-dfoot"><button type="button" class="smx-sec" data-d="cancel">${h(T('Close'))}</button></div>`);
    }
  }

  async function onClick(e) {
    const b = e.target.closest('[data-i-act]');
    if (!b || b.disabled) return;
    const st = E.st, i = +b.dataset.i;
    switch (b.dataset.iAct) {
      case 'close': return E.M.close();
      case 'side': E.side = !E.side; return renderAll();
      case 'allparts': st.hide = []; return renderSide();
      case 'reset':
        if (!confirm(T('Start over? Order, title pages and choices will be lost.'))) return;
        E.st = SMX.tabState().info = cleanState(null);
        return renderAll();
      case 'up': case 'down': {
        const to = b.dataset.iAct === 'up' ? i - 1 : i + 1;
        [st.items[i], st.items[to]] = [st.items[to], st.items[i]];
        renderList();
        return E.M.body.querySelector(`[data-i="${to}"][data-i-act="${b.dataset.iAct}"]:not([disabled])`)?.focus();
      }
      case 'title': case 'addtitle': {
        const at = b.dataset.iAct === 'title' ? i : st.items.length;
        st.items.splice(at, 0, { t: 'h', text: '' });
        renderList();
        renderFoot();
        return E.M.body.querySelector(`[data-ititle="${at}"]`)?.focus();
      }
      case 'del':
        st.items.splice(i, 1);
        renderList();
        return renderFoot();
      case 'img': {
        const it = st.items[i], p = E.det.get(it.id);
        const photos = SMX.photosOf(p);
        const src = await SMX.pickImage(E.M, p, it.img && photos.includes(it.img) ? it.img : photos[0]);
        if (src) { it.img = src === photos[0] ? null : src; renderList(); }
        return;
      }
      case 'preview': return preview(i);
      case 'export': {
        b.disabled = true;
        try { await exportState(st, E.det); renderFoot(T('PDF downloaded')); }
        catch (err) { console.error(err); renderFoot(err.message || T('The PDF could not be made.')); SMX.toast(err.message || T('The PDF could not be made.'), { error: true, ms: 7000 }); }
        b.disabled = false;
        return;
      }
    }
  }

  /* drag & drop of rows (grab the ⋮⋮ handle) */
  function clearDrag() {
    E.drag = null;
    E.M.el.querySelectorAll('.smx-irow').forEach(r => { r.draggable = false; r.classList.remove('dragging', 'before', 'after'); });
  }
  function onDragStart(e) {
    const row = e.target.closest?.('.smx-irow');
    if (!row || !row.draggable) return;
    E.drag = +row.dataset.i;
    row.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', 'row');
  }
  function onDragOver(e) {
    const row = e.target.closest?.('.smx-irow');
    if (!row || E.drag === null) return;
    e.preventDefault();
    const r = row.getBoundingClientRect();
    const after = e.clientY > r.top + r.height / 2;
    E.M.el.querySelectorAll('.smx-irow.before,.smx-irow.after').forEach(x => x.classList.remove('before', 'after'));
    row.classList.add(after ? 'after' : 'before');
  }
  function onDrop(e) {
    const row = e.target.closest?.('.smx-irow');
    if (!row || E.drag === null) return;
    e.preventDefault();
    const from = E.drag;
    let to = +row.dataset.i + (row.classList.contains('after') ? 1 : 0);
    clearDrag();
    if (to > from) to--;
    if (to !== from) {
      const [it] = E.st.items.splice(from, 1);
      E.st.items.splice(to, 0, it);
    }
    renderList();
  }

  /* ---------- register ---------- */
  SMX.kinds.info = {
    exportAll,
    openEditor,
    restore: async (data, idMap) => {
      SMX.tabState().info = cleanState(data, idMap);
      await openEditor();
    },
    onLanguage: () => { if (E.M?.isOpen()) renderAll(); }
  };
  SMX._info = { pageLayout, makePdf, P }; // for testing
})();
