/* =====================================================================
   Studio Monstera – export & import: shared core
   ---------------------------------------------------------------------
   Uses these globals from js/app.js: $, tr, lang, cn, label, plants,
   chosen, tabs, curTab, newState, loadTab, openSelectionPanel, picks,
   byId, loadPlantDetails, fieldText, periods, GROUPS, DIAG, MONTHS, SOFT.

   Export types register themselves in SMX.kinds (export-grid.js and
   export-info.js). Every PDF carries its editor state (base64 JSON in
   the PDF "Keywords" property) so the import can restore it exactly.
   ===================================================================== */
(() => {
  'use strict';

  const SMX = (window.SMX = { kinds: {} });

  /* ---------- small helpers ---------- */
  const h = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const T = s => tr(s);
  const imgUrl = src => (src ? encodeURI(src) : '');
  SMX.h = h;
  SMX.T = T;
  SMX.imgUrl = imgUrl;

  const MONTH_NAMES = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    nl: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
  };

  /* Consecutive numbers as ranges: [6,7,8,9,12] -> "6–9, 12".
     With wrap=true (months) Dec–Feb is joined into one range. */
  function runs(nums, wrap) {
    const list = [...new Set((nums || []).map(Number).filter(Number.isFinite))].sort((a, b) => a - b);
    if (!list.length) return [];
    const out = [];
    for (const n of list) {
      const last = out[out.length - 1];
      if (last && n === last[1] + 1) last[1] = n;
      else out.push([n, n]);
    }
    if (wrap && out.length > 1 && out[0][0] === 1 && out[out.length - 1][1] === 12) {
      const first = out.shift();
      out[out.length - 1][1] = first[1];
    }
    return out;
  }

  function monthText(months) {
    const names = MONTH_NAMES[lang] || MONTH_NAMES.en;
    const list = runs(months, true);
    if (list.length === 1 && list[0][1] - list[0][0] === 11) return `${names[0]}–${names[11]}`;
    return list.map(([a, b]) => (a === b ? names[a - 1] : `${names[a - 1]}–${names[b - 1]}`)).join(', ');
  }

  const zoneText = zones => runs(zones, false).map(([a, b]) => (a === b ? `${a}` : `${a}–${b}`)).join(', ');

  function periodText(p, id) {
    const [months, colours, autumn = [], autumnColours = []] = periods(p, id);
    const col = c => (c.length ? ` (${c.map(tr).join(', ')})` : '');
    const parts = [];
    if (months.length) parts.push(monthText(months) + col(colours));
    if (autumn.length) parts.push(`${T('autumn')}: ${monthText(autumn)}${col(autumnColours)}`);
    return parts.join('; ');
  }

  /* ---------- field catalogue (what the popup card shows) ---------- */
  const BASE_FIELDS = ['scientificName', 'commonName', 'family', 'zones'];
  const BASE_LABELS = { scientificName: 'Scientific name', commonName: 'Common name', family: 'Family', zones: 'Hardiness zones' };

  SMX.fieldLabel = id => {
    if (BASE_LABELS[id]) return T(BASE_LABELS[id]);
    if (id[0] === '@') return T(DIAG[id]);
    return T(label(id.split('.').pop()));
  };

  SMX.fieldValue = (p, id) => {
    switch (id) {
      case 'scientificName': return p.use?.scientificName || p.id;
      case 'commonName': return cn(p) || '';
      case 'family': return p.use?.family || '';
      case 'zones': return zoneText(p.hardinessZones);
    }
    if (id[0] === '@') return periodText(p, id);
    return fieldText(p, id);
  };

  /* Sections in popup order. Each: { key, title, colour, fields } */
  SMX.sections = () => [
    { key: 'General', title: T('General'), colour: '#3d6b4f', fields: BASE_FIELDS.slice() },
    ...GROUPS.map(([, colour, title, fields]) => ({ key: title, title: T(title), colour, fields: fields.slice() }))
  ];
  SMX.allFieldIds = () => SMX.sections().flatMap(s => s.fields);
  SMX.monthText = monthText;
  SMX.zoneText = zoneText;

  /* ---------- tab & selection helpers ---------- */
  SMX.tabState = () => (tabs[curTab].smx ||= {});
  SMX.selectedIds = () => picks().map(p => p.id);
  SMX.photosOf = p => [...new Set([p?.mainImage, ...(Array.isArray(p?.images) ? p.images : [])].filter(s => typeof s === 'string' && s.trim()))];

  SMX.baseName = () => {
    const name = (tabs[curTab]?.name || '').trim() || 'plant-selection';
    return name.replace(/[\\/:*?"<>|]+/g, '').replace(/\s+/g, '-').slice(0, 60) || 'plant-selection';
  };

  /* Full plant data for a list of ids (cached by app.js), max 8 requests at a time. */
  SMX.details = async (ids, onProgress) => {
    const unique = [...new Set(ids)];
    const out = new Map();
    let next = 0, done = 0;
    async function worker() {
      while (next < unique.length) {
        const id = unique[next++];
        const base = byId(id);
        if (!base) continue;
        try { out.set(id, await loadPlantDetails(base)); }
        catch (err) {
          console.warn(err);
          out.set(id, { ...base, images: base.mainImage ? [base.mainImage] : [] });
        }
        onProgress?.(++done, unique.length);
      }
    }
    await Promise.all(Array.from({ length: Math.min(8, unique.length) }, worker));
    return out;
  };

  /* ---------- files ---------- */
  SMX.save = (name, blob) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  };

  /* ---------- toast (progress / messages) ---------- */
  let toastTimer = null;
  SMX.toast = (msg, { error = false, ms = 0 } = {}) => {
    let el = document.getElementById('smxToast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'smxToast';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      document.body.appendChild(el);
    }
    clearTimeout(toastTimer);
    if (!msg) { el.classList.remove('on'); return; }
    el.textContent = msg;
    el.classList.toggle('err', error);
    el.classList.add('on');
    if (ms) toastTimer = setTimeout(() => el.classList.remove('on'), ms);
  };

  /* ---------- PDF library & fonts ---------- */
  const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  let jsPdfPromise = null;
  SMX.jsPDF = () => {
    if (window.jspdf?.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
    jsPdfPromise ||= new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = JSPDF_URL;
      s.onload = () => (window.jspdf?.jsPDF ? resolve(window.jspdf.jsPDF) : reject(new Error('jsPDF loaded without constructor')));
      s.onerror = () => { jsPdfPromise = null; s.remove(); reject(new Error(T('Could not load the PDF library (internet connection needed).'))); };
      document.head.appendChild(s);
    });
    return jsPdfPromise;
  };

  async function fontBase64(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error('font not found');
    const b = new Uint8Array(await r.arrayBuffer());
    const magic = ((b[0] << 24) | (b[1] << 16) | (b[2] << 8) | b[3]) >>> 0;
    if (magic !== 0x00010000 && magic !== 0x74727565) throw new Error('not a TTF');
    let s = '';
    for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
    return btoa(s);
  }
  let fontPromise = null;
  const loadFonts = () => (fontPromise ||= Promise.all([fontBase64('fonts/WorkSans-Light.ttf'), fontBase64('fonts/WorkSans-SemiBold.ttf')]).catch(() => null));

  /* New jsPDF document with Work Sans (falls back to Helvetica). doc.F holds the fonts. */
  SMX.newDoc = async (orientation = 'portrait') => {
    const JsPDF = await SMX.jsPDF();
    const doc = new JsPDF({ orientation, unit: 'mm', format: 'a4', compress: true });
    const fonts = await loadFonts();
    if (fonts) {
      doc.addFileToVFS('WorkSans-Light.ttf', fonts[0]);
      doc.addFont('WorkSans-Light.ttf', 'WorkSansLight', 'normal');
      doc.addFileToVFS('WorkSans-SemiBold.ttf', fonts[1]);
      doc.addFont('WorkSans-SemiBold.ttf', 'WorkSansSemiBold', 'normal');
      doc.F = { light: ['WorkSansLight', 'normal'], semi: ['WorkSansSemiBold', 'normal'], workSans: true };
    } else {
      doc.F = { light: ['helvetica', 'normal'], semi: ['helvetica', 'bold'], workSans: false };
    }
    return doc;
  };

  /* A document only used to measure text (editor previews). */
  let measurePromise = null;
  SMX.measureDoc = () => (measurePromise ||= SMX.newDoc('landscape').catch(err => { measurePromise = null; throw err; }));

  /* Cut text to maxW, ending in "…" */
  SMX.ellipsis = (doc, text, maxW) => {
    if (doc.getTextWidth(text) <= maxW) return text;
    let t = text;
    while (t.length > 1 && doc.getTextWidth(t.trimEnd() + '…') > maxW) t = t.slice(0, -1);
    return t.trimEnd() + '…';
  };

  /* Wrap text into at most maxLines lines (last line gets "…" when cut). */
  SMX.wrap = (doc, text, maxW, maxLines = Infinity) => {
    const lines = doc.splitTextToSize(String(text), maxW);
    if (lines.length <= maxLines) return lines;
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = SMX.ellipsis(doc, kept[maxLines - 1] + ' ' + lines[maxLines], maxW);
    return kept;
  };

  /* ---------- images: high quality crop (object-fit: cover) ---------- */
  const imgCache = new Map();
  SMX.loadImage = src => {
    if (!imgCache.has(src)) {
      imgCache.set(src, new Promise(resolve => {
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = imgUrl(src);
      }));
    }
    return imgCache.get(src);
  };

  const cropCache = new Map();
  /* Returns { data, alias } or null. At least 320 dpi at the printed size (print
     quality), never upscaled; JPEG quality 0.92 so photos stay sharp. */
  SMX.cropImage = async (src, wMm, hMm) => {
    if (!src) return null;
    const ratio = wMm / hMm;
    const key = `${src}|${ratio.toFixed(4)}|${Math.round(wMm)}`;
    if (cropCache.has(key)) return cropCache.get(key);
    const img = await SMX.loadImage(src);
    if (!img || !img.naturalWidth) return null;
    const iw = img.naturalWidth, ih = img.naturalHeight;
    let sw = iw, sh = ih, sx = 0, sy = 0;
    if (iw / ih > ratio) { sw = ih * ratio; sx = (iw - sw) / 2; } else { sh = iw / ratio; sy = (ih - sh) / 2; }
    const wantW = Math.max(800, Math.round((wMm / 25.4) * 320));
    const outW = Math.round(Math.min(sw, wantW));
    const outH = Math.max(1, Math.round(outW / ratio));
    const c = document.createElement('canvas');
    c.width = outW;
    c.height = outH;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, outW, outH);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, outW, outH);
    const res = { data: c.toDataURL('image/jpeg', 0.92), alias: 'img' + cropCache.size };
    cropCache.set(key, res);
    return res;
  };

  /* ---------- restore data embedded in the PDF ---------- */
  const MARK = 'SMXDATA1:';
  const APP_ID = 'studio-monstera-plants';

  function toBase64(str) {
    const bytes = new TextEncoder().encode(str);
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const fromBase64 = b64 => new TextDecoder().decode(Uint8Array.from(atob(b64), c => c.charCodeAt(0)));

  /* data: the editor state. Plant names travel along so plants can still be
     found if an id ever changes. */
  SMX.payload = (kind, data, ids) => {
    const names = {};
    ids.forEach(id => { const p = byId(id); if (p) names[id] = p.use.scientificName; });
    return MARK + toBase64(JSON.stringify({ app: APP_ID, v: 1, kind, sel: SMX.selectedIds(), names, data }));
  };

  SMX.finishPdf = (doc, kind, data, ids, title) => {
    doc.setProperties({
      title,
      subject: 'Studio Monstera plant database',
      creator: 'Studio Monstera plant database',
      keywords: SMX.payload(kind, data, ids)
    });
    return doc;
  };

  async function inflate(bytes) {
    const ds = new DecompressionStream('deflate');
    const stream = new Blob([bytes]).stream().pipeThrough(ds);
    return new Uint8Array(await new Response(stream).arrayBuffer());
  }

  const latin1 = bytes => {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return s;
  };
  const MARK_RE = /SMXDATA1:([A-Za-z0-9+/=]+)/;

  async function findPayload(bytes) {
    const text = latin1(bytes);
    let m = text.match(MARK_RE);
    if (!m && typeof DecompressionStream === 'function') {
      // The PDF was re-saved by another program: look inside compressed streams too.
      const re = /stream\r?\n/g;
      let hit;
      while (!m && (hit = re.exec(text))) {
        const start = hit.index + hit[0].length;
        let end = text.indexOf('endstream', start);
        if (end < 0) break;
        re.lastIndex = end;
        const dict = text.slice(Math.max(0, text.lastIndexOf(' obj', hit.index)), hit.index);
        if (!dict.includes('/FlateDecode') || dict.includes('/Subtype /Image') || dict.includes('/Subtype/Image')) continue;
        while (end > start && (bytes[end - 1] === 0x0a || bytes[end - 1] === 0x0d)) end--;
        try { m = latin1(await inflate(bytes.subarray(start, end))).match(MARK_RE); } catch { /* not readable */ }
      }
    }
    if (!m) return null;
    const obj = JSON.parse(fromBase64(m[1]));
    return obj && obj.app === APP_ID ? obj : null;
  }

  /* ---------- import ---------- */
  const norm = s => String(s || '')
    .normalize('NFC')
    .toLowerCase()
    .replace(/[‘’`´]/g, "'")
    .replace(/(^|\s)x(?=\s)/g, '$1×')
    .replace(/\s+/g, ' ')
    .trim();

  function nameIndex() {
    const map = new Map();
    plants.forEach(p => {
      map.set(norm(p.use.scientificName), p.id);
      map.set(norm(p.id.replace(/-/g, ' ')), p.id);
    });
    return map;
  }

  /* Map ids from a file onto the current database: by id, else by name. */
  function resolveIds(ids, names = {}) {
    const known = new Set(plants.map(p => p.id));
    const byName = nameIndex();
    const map = new Map();
    const missing = [];
    ids.forEach(id => {
      if (known.has(id)) map.set(id, id);
      else if (names[id] && byName.has(norm(names[id]))) map.set(id, byName.get(norm(names[id])));
      else missing.push(names[id] || id);
    });
    return { map, missing };
  }
  SMX.resolveIds = resolveIds;

  /* Put a restored selection in the current tab if it is empty, else in a new tab. */
  function applySelection(ids, name) {
    tabs[curTab].search = $('#search').value;
    if (tabs[curTab].chosen.size) {
      tabs.push(newState());
      curTab = tabs.length - 1;
      tabs[curTab].name = name;
    } else if (!tabs[curTab].name) {
      tabs[curTab].name = name;
    }
    ids.forEach(id => tabs[curTab].chosen.add(id));
    loadTab();
    openSelectionPanel();
  }

  function reportMissing(missing) {
    if (!missing.length) return;
    const list = missing.slice(0, 6).join(', ') + (missing.length > 6 ? ' …' : '');
    SMX.toast(`${missing.length} ${T('plant(s) from the file were not found in the database')}: ${list}`, { error: true, ms: 9000 });
  }

  async function importFile(file) {
    const name = file.name.replace(/\.[^.]+$/, '').slice(0, 40);
    const bytes = new Uint8Array(await file.arrayBuffer());
    const isPdf = latin1(bytes.subarray(0, 1024)).includes('%PDF');

    if (!isPdf) {
      const text = new TextDecoder().decode(bytes).replace(/^﻿/, '');
      const byName = nameIndex();
      const ids = [], missing = [];
      text.split(/\r?\n/).map(l => l.trim()).filter(Boolean).forEach(line => {
        const id = byName.get(norm(line));
        id ? ids.push(id) : missing.push(line);
      });
      if (!ids.length) throw new Error(T('No plants from this file were found in the database.'));
      applySelection([...new Set(ids)], name);
      SMX.toast(`${new Set(ids).size} ${T('plants imported')}`, { ms: 3000 });
      reportMissing(missing);
      return;
    }

    const data = await findPayload(bytes);
    if (!data || !SMX.kinds[data.kind]) throw new Error(T('This PDF was not exported from this plant database, so it cannot be restored.'));
    const fileIds = [...new Set([...(data.sel || []), ...Object.keys(data.names || {})])];
    const { map, missing } = resolveIds(fileIds, data.names);
    const selIds = (data.sel || []).map(id => map.get(id)).filter(Boolean);
    applySelection([...new Set(selIds)], name);
    SMX.toast('');
    await SMX.kinds[data.kind].restore(data.data, map);
    reportMissing(missing);
  }

  /* ---------- plain text export ---------- */
  function exportTxt() {
    const names = picks().map(p => p.use.scientificName);
    SMX.save(`${SMX.baseName()}.txt`, new Blob(['﻿' + names.join('\r\n') + '\r\n'], { type: 'text/plain;charset=utf-8' }));
  }

  /* ---------- selection panel menu ---------- */
  const KIND_LABEL = { grid: 'Grid of images (PDF)', info: 'Full info (PDF)', txt: 'Plain list (.txt)' };
  const menu = { step: 'root', kind: null };
  let fileInput = null;

  function renderMenu() {
    const acts = document.getElementById('selActs');
    if (!acts) return;
    const n = chosen.size;
    if (!n && menu.step !== 'root') menu.step = 'root';
    let html = '';
    if (menu.step === 'root') {
      html = `<button type="button" data-m="export" ${n ? '' : 'disabled'}>${h(T('Export'))}<span aria-hidden="true">›</span></button>
        <button type="button" data-m="import">${h(T('Import'))}</button>`;
    } else if (menu.step === 'export') {
      html = `<div class="smx-mhead"><button type="button" data-m="back" aria-label="${h(T('Back'))}">‹</button><span>${h(T('Export'))}</span></div>
        ${['grid', 'info', 'txt'].map(k => `<button type="button" data-m="kind" data-kind="${k}">${h(T(KIND_LABEL[k]))}</button>`).join('')}`;
    } else {
      html = `<div class="smx-mhead"><button type="button" data-m="back" aria-label="${h(T('Back'))}">‹</button><span>${h(T(KIND_LABEL[menu.kind]))}</span></div>
        <button type="button" data-m="all">${h(T('Export all selected'))}</button>
        <button type="button" data-m="choose">${h(T('Choose from selection'))}</button>`;
    }
    acts.innerHTML = html;
  }
  SMX.refreshMenu = renderMenu;
  SMX.resetMenu = () => { menu.step = 'root'; renderMenu(); };

  async function onMenuClick(e) {
    const b = e.target.closest('[data-m]');
    if (!b || b.disabled) return;
    const m = b.dataset.m;
    if (m === 'import') return fileInput.click();
    if (m === 'export') { menu.step = 'export'; return renderMenu(); }
    if (m === 'back') { menu.step = menu.step === 'mode' ? 'export' : 'root'; return renderMenu(); }
    if (m === 'kind') {
      if (b.dataset.kind === 'txt') { exportTxt(); return SMX.resetMenu(); }
      menu.kind = b.dataset.kind;
      menu.step = 'mode';
      return renderMenu();
    }
    const kind = SMX.kinds[menu.kind];
    if (!kind || !chosen.size) return;
    if (m === 'choose') return kind.openEditor();
    if (m === 'all') {
      b.disabled = true;
      try { await kind.exportAll(); SMX.resetMenu(); }
      catch (err) { console.error(err); SMX.toast(err.message || T('The PDF could not be made.'), { error: true, ms: 7000 }); b.disabled = false; }
    }
  }

  /* ---------- full-screen editor shell (used by both PDF editors) ---------- */
  const openModals = [];
  SMX.modal = cls => {
    const el = document.createElement('section');
    el.className = `smx-modal ${cls || ''}`;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.innerHTML = '<div class="smx-head"></div><div class="smx-main"><div class="smx-body"></div></div><div class="smx-foot"></div><div class="smx-layer" hidden></div>';
    document.body.appendChild(el);
    const M = {
      el,
      head: el.querySelector('.smx-head'),
      main: el.querySelector('.smx-main'),
      body: el.querySelector('.smx-body'),
      foot: el.querySelector('.smx-foot'),
      layer: el.querySelector('.smx-layer'),
      isOpen: () => el.classList.contains('on'),
      open() {
        el.classList.add('on');
        document.body.classList.add('smx-lock');
        if (!openModals.includes(M)) openModals.push(M);
      },
      close() {
        M.closeLayer();
        el.classList.remove('on');
        openModals.splice(openModals.indexOf(M), 1);
        if (!openModals.length) document.body.classList.remove('smx-lock');
      },
      /* Dialog on top of the editor. Resolves with the value passed to done(). */
      dialog(html, onClick, cls2 = '') {
        M.closeLayer();
        return new Promise(resolve => {
          M.layer.hidden = false;
          M.layer.innerHTML = `<div class="smx-dbox ${cls2}" role="dialog" aria-modal="true">${html}</div>`;
          const done = v => { M._resolve = null; M.closeLayer(); resolve(v); };
          M._resolve = () => resolve(null);
          M.layer.onclick = ev => {
            if (ev.target === M.layer || ev.target.closest('[data-d="cancel"]')) return done(null);
            onClick?.(ev, done);
          };
        });
      },
      closeLayer() {
        if (M.layer.hidden) return;
        const r = M._resolve;
        M._resolve = null;
        M.layer.hidden = true;
        M.layer.innerHTML = '';
        M.layer.onclick = null;
        r?.();
      }
    };
    return M;
  };

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !openModals.length) return;
    const M = openModals[openModals.length - 1];
    if (!M.layer.hidden) M.closeLayer();
    else M.onEscape ? M.onEscape() : M.close();
  });

  /* Pick one image of a plant. Resolves with the src or null. */
  SMX.pickImage = (M, plant, current) => {
    const imgs = SMX.photosOf(plant);
    return M.dialog(`
      <div class="smx-dhead"><h3><i>${h(plant.use.scientificName)}</i></h3><button type="button" class="smx-x" data-d="cancel" aria-label="${h(T('Close'))}">×</button></div>
      <p class="smx-dsub">${h(T('Choose the image'))}</p>
      <div class="smx-dscroll"><div class="smx-pstrip">${imgs.map(src => `<button type="button" class="smx-th${src === current ? ' sel' : ''}" data-src="${h(src)}"><img loading="lazy" src="${h(imgUrl(src))}" alt=""></button>`).join('')}</div></div>
      <div class="smx-dfoot"><button type="button" class="smx-sec" data-d="cancel">${h(T('Cancel'))}</button></div>`,
      (ev, done) => { const th = ev.target.closest('[data-src]'); if (th) done(th.dataset.src); }, 'smx-wide');
  };

  /* Pick a plant from a list of full plant objects. note(p) adds a hint (e.g. "page 2"). */
  SMX.pickPlant = (M, list, note = () => '') => {
    const p = M.dialog(`
      <div class="smx-dhead"><h3>${h(T('Choose a plant'))}</h3><button type="button" class="smx-x" data-d="cancel" aria-label="${h(T('Close'))}">×</button></div>
      <input type="search" class="smx-dsearch" placeholder="${h(T('Search in your selection…'))}" aria-label="${h(T('Search in your selection…'))}">
      <ul class="smx-plist">${list.map(pl => {
        const n = note(pl);
        return `<li><button type="button" data-plant="${h(pl.id)}"><img loading="lazy" src="${h(imgUrl(pl.mainImage))}" alt=""><span><i>${h(pl.use.scientificName)}</i><small>${h(cn(pl) || '')}</small></span>${n ? `<em>${h(n)}</em>` : ''}</button></li>`;
      }).join('')}</ul>
      <div class="smx-dfoot"><button type="button" class="smx-sec" data-d="cancel">${h(T('Cancel'))}</button></div>`,
      (ev, done) => { const b = ev.target.closest('[data-plant]'); if (b) done(b.dataset.plant); });
    const search = M.layer.querySelector('.smx-dsearch');
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase().trim();
      M.layer.querySelectorAll('.smx-plist li').forEach(li => (li.hidden = !!q && !li.textContent.toLowerCase().includes(q)));
    });
    if (matchMedia('(pointer:fine)').matches) search.focus();
    return p;
  };

  /* ---------- init ---------- */
  function init() {
    const acts = document.getElementById('selActs');
    acts.addEventListener('click', onMenuClick);
    fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.txt,application/pdf,text/plain';
    fileInput.hidden = true;
    document.body.appendChild(fileInput);
    fileInput.addEventListener('change', async () => {
      const file = fileInput.files[0];
      fileInput.value = '';
      if (!file) return;
      SMX.toast(T('Importing…'));
      try { await importFile(file); }
      catch (err) { console.warn(err); SMX.toast(err.message || T('This file could not be imported.'), { error: true, ms: 8000 }); }
    });
    document.getElementById('lang').addEventListener('change', () => {
      renderMenu();
      Object.values(SMX.kinds).forEach(k => k.onLanguage?.());
    });
    renderMenu();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
