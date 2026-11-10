(() => {
  'use strict';

  const ACTION_SINGLE = 'pse-single';
  const ACTION_ELEMENTS = 'pse-elements';
  const PAGE_W = 420;
  const PAGE_H = 297;
  const COL_X = [20, 116, 212, 308];
  const COL_W = 91.3;
  const MONTHS_IN_YEAR = 12;

  const SOIL_NL = {
    sand: 'zand', sandy: 'zand', 'loamy sand': 'lemig zand',
    'sandy loam': 'zandleem', loam: 'leem', silt: 'silt',
    'silt loam': 'siltige leem', 'clay loam': 'kleileem',
    'sandy clay loam': 'zandige kleileem', 'silty clay loam': 'siltige kleileem',
    clay: 'klei', 'sandy clay': 'zandige klei', 'silty clay': 'siltige klei',
    peat: 'veen', chalk: 'krijt', chalky: 'kalkrijk', rocky: 'stenig',
    gravel: 'grind', 'rocky soil': 'stenige bodem', 'well-drained soil': 'goed doorlatende bodem'
  };
  const PH_NL = { acidic: 'zuur', acid: 'zuur', neutral: 'neutraal', alkaline: 'basisch', basic: 'basisch' };
  const SUN_NL = {
    'full sun': { rank: 0, label: 'zon' }, sun: { rank: 0, label: 'zon' }, sunny: { rank: 0, label: 'zon' },
    'half shade': { rank: 1, label: 'halfschaduw' }, 'partial shade': { rank: 1, label: 'halfschaduw' },
    'part shade': { rank: 1, label: 'halfschaduw' }, 'dappled shade': { rank: 1, label: 'halfschaduw' },
    shade: { rank: 2, label: 'schaduw' }, 'full shade': { rank: 2, label: 'schaduw' }
  };

  const MOISTURE_MAP = {
    dry: [{ rank: 0, label: 'droog' }], drought: [{ rank: 0, label: 'droog' }],
    'well drained': [{ rank: 0, label: 'droog' }, { rank: 1, label: 'vochtig' }],
    'well-drained': [{ rank: 0, label: 'droog' }, { rank: 1, label: 'vochtig' }],
    'moist but well drained': [{ rank: 1, label: 'vochtig' }],
    'moist, well drained': [{ rank: 1, label: 'vochtig' }], moist: [{ rank: 1, label: 'vochtig' }],
    medium: [{ rank: 1, label: 'vochtig' }], fresh: [{ rank: 1, label: 'vochtig' }],
    wet: [{ rank: 2, label: 'nat' }], waterlogged: [{ rank: 2, label: 'nat' }],
    'poorly drained': [{ rank: 2, label: 'nat' }], 'badly drained': [{ rank: 2, label: 'nat' }],
    'moist to wet': [{ rank: 1, label: 'vochtig' }, { rank: 2, label: 'nat' }],
    'dry to moist': [{ rank: 0, label: 'droog' }, { rank: 1, label: 'vochtig' }],
    'moist to dry': [{ rank: 0, label: 'droog' }, { rank: 1, label: 'vochtig' }]
  };

  const state = { mode: null, entries: [], selections: [], modal: null, list: null, heading: null, status: null, exportButton: null };

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }

  function listify(value) {
    if (Array.isArray(value)) return value.filter(v => v !== null && v !== undefined && v !== '');
    if (value === null || value === undefined || value === '') return [];
    return [value];
  }

  function getName(p) {
    return p?.use?.scientificName || p?.scientificName || p?.name || p?.id || 'Onbekende plant';
  }

  function getId(p, index) {
    return String(p?.id || p?.use?.scientificName || `plant-${index}`);
  }

  function allImagePaths(p) {
    const arr = [...listify(p?.images), ...listify(p?.mainImage)];
    const seen = new Set();
    return arr.filter(src => {
      if (typeof src !== 'string' || !src.trim()) return false;
      const key = src.trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  async function getBaseSelections() {
    try {
      if (typeof picks === 'function') {
        const result = await picks();
        if (Array.isArray(result)) return result;
      }
    } catch (error) {
      console.warn('Kon picks() niet lezen:', error);
    }
    if (Array.isArray(window.selectedPlants)) return window.selectedPlants;
    throw new Error('De geselecteerde planten zijn niet bereikbaar. Controleer of picks() in js/app.js beschikbaar is.');
  }

  async function detailsFor(plant) {
    let detail = null;
    try {
      if (typeof loadPlantDetails === 'function') detail = await loadPlantDetails(plant);
    } catch (error) {
      console.warn('loadPlantDetails() mislukte; probeer JSON rechtstreeks:', error);
    }
    if (!detail || typeof detail !== 'object') {
      const id = plant?.id;
      if (id) {
        try {
          const response = await fetch(`data/plants-info/${encodeURIComponent(id)}.json`);
          if (response.ok) detail = await response.json();
        } catch (error) {
          console.warn('Plantdetails niet rechtstreeks geladen:', error);
        }
      }
    }
    return { ...(plant || {}), ...(detail || {}), use: { ...(plant?.use || {}), ...(detail?.use || {}) } };
  }

  function currentLanguage() {
    return String(document.querySelector('#lang')?.value || document.querySelector('#lang')?.selectedOptions?.[0]?.textContent || 'EN').toUpperCase();
  }

  function ensureButtons() {
    const acts = document.querySelector('#selActs');
    if (!acts || acts.dataset.pseReady === '1') return;
    acts.dataset.pseReady = '1';
    const single = document.createElement('button');
    single.type = 'button';
    single.dataset.a = ACTION_SINGLE;
    single.textContent = 'Export as single photos';
    const elements = document.createElement('button');
    elements.type = 'button';
    elements.dataset.a = ACTION_ELEMENTS;
    elements.textContent = 'Export as photos with elements';
    acts.append(single, elements);
    refreshButtonLabels();
  }

  function refreshButtonLabels() {
    const nl = currentLanguage() === 'NL';
    const single = document.querySelector(`#selActs [data-a="${ACTION_SINGLE}"]`);
    const elements = document.querySelector(`#selActs [data-a="${ACTION_ELEMENTS}"]`);
    if (single) single.textContent = nl ? "Exporteer als enkele foto's" : 'Export as single photos';
    if (elements) elements.textContent = nl ? "Exporteer als foto's met elementen" : 'Export as photos with elements';
  }

  function ensureModal() {
    if (state.modal) return;
    const modal = document.createElement('section');
    modal.id = 'pseModal';
    modal.className = 'pse-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'pseHeading');
    modal.innerHTML = `
      <div class="pse-head">
        <div><h2 id="pseHeading">Kies foto's</h2><p id="pseSubheading">Selecteer per plant de gewenste afbeelding.</p></div>
        <button type="button" class="pse-close" data-pse-close aria-label="Sluiten">×</button>
      </div>
      <div class="pse-status" id="pseStatus" aria-live="polite"></div>
      <div class="pse-list" id="pseList"></div>
      <footer class="pse-foot">
        <button type="button" class="pse-secondary" data-pse-close>Annuleren</button>
        <button type="button" class="pse-primary" id="pseGenerate" disabled>Genereer A3-PDF</button>
      </footer>`;
    document.body.appendChild(modal);
    state.modal = modal;
    state.list = modal.querySelector('#pseList');
    state.heading = modal.querySelector('#pseHeading');
    state.status = modal.querySelector('#pseStatus');
    state.exportButton = modal.querySelector('#pseGenerate');

    modal.addEventListener('click', event => {
      const close = event.target.closest('[data-pse-close]');
      if (close) { closeModal(); return; }
      const choice = event.target.closest('[data-photo-choice]');
      if (choice) choosePhoto(choice); 
    });
    state.exportButton.addEventListener('click', runPdfExport);
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && state.modal.classList.contains('on')) closeModal(); });
  }

  function openModal() { state.modal.classList.add('on'); document.body.classList.add('pse-lock'); }
  function closeModal() { state.modal.classList.remove('on'); document.body.classList.remove('pse-lock'); }

  async function startExport(mode) {
    ensureModal();
    state.mode = mode;
    const isSingle = mode === 'single';
    state.heading.textContent = isSingle ? "Kies één foto per plant" : 'Kies een detailfoto en een habitusfoto per plant';
    state.modal.querySelector('#pseSubheading').textContent = isSingle
      ? 'Klik op de foto die op de fiche moet verschijnen.'
      : 'Kies per plant één kleine detailfoto en één grote habitusfoto. Als er meerdere foto’s zijn, kies dan twee verschillende beelden.';
    state.list.innerHTML = '<p class="pse-loading">Geselecteerde planten en foto’s laden…</p>';
    state.status.textContent = '';
    state.exportButton.disabled = true;
    state.exportButton.textContent = 'Genereer A3-PDF';
    openModal();

    try {
      const chosen = await getBaseSelections();
      if (!chosen.length) throw new Error('Selecteer eerst minstens één plant in de database.');
      const plants = await Promise.all(chosen.map(detailsFor));
      state.entries = plants.map((plant, index) => {
        const photos = allImagePaths(plant);
        return { plant, id: getId(plant, index), name: getName(plant), photos };
      });
      state.selections = state.entries.map(() => ({ single: null, detail: null, habitus: null }));
      if (state.entries.some(entry => entry.photos.length === 0)) {
        throw new Error('Minstens één geselecteerde plant heeft geen foto in mainImage of images. Voeg voor die plant eerst een foto toe.');
      }
      renderEntries();
      updateSelectionStatus();
    } catch (error) {
      state.list.innerHTML = `<p class="pse-error">${esc(error?.message || 'Er ging iets mis bij het laden van de planten.')}</p>`;
      state.status.textContent = '';
      state.exportButton.disabled = true;
    }
  }

  function renderEntries() {
    const isSingle = state.mode === 'single';
    state.list.innerHTML = state.entries.map((entry, i) => {
      const cards = entry.photos.map((src, photoIndex) => {
        const labels = isSingle
          ? `<button type="button" class="pse-choice" data-photo-choice data-i="${i}" data-photo="${photoIndex}" data-role="single">Gebruik deze foto</button>`
          : `<div class="pse-role-buttons">
               <button type="button" class="pse-choice" data-photo-choice data-i="${i}" data-photo="${photoIndex}" data-role="detail">Kleine detailfoto</button>
               <button type="button" class="pse-choice" data-photo-choice data-i="${i}" data-photo="${photoIndex}" data-role="habitus">Grote habitusfoto</button>
             </div>`;
        return `<div class="pse-photo-option" data-option-photo="${photoIndex}">
          <img loading="lazy" src="${esc(src)}" alt="Foto ${photoIndex + 1} van ${esc(entry.name)}">
          <small>Foto ${photoIndex + 1}</small>${labels}
        </div>`;
      }).join('');
      return `<article class="pse-plant" data-i="${i}">
        <div class="pse-plant-title"><strong>${esc(entry.name)}</strong><span class="pse-picked" data-picked-label>Nog geen foto gekozen</span></div>
        <div class="pse-photo-grid">${cards}</div>
      </article>`;
    }).join('');
  }

  function choosePhoto(button) {
    const i = Number(button.dataset.i);
    const photo = Number(button.dataset.photo);
    const role = button.dataset.role;
    if (!state.entries[i] || !state.selections[i]) return;
    const pick = state.selections[i];
    if (role === 'single') {
      pick.single = photo;
    } else {
      pick[role] = photo;
      const opposite = role === 'detail' ? 'habitus' : 'detail';
      if (state.entries[i].photos.length > 1 && pick[opposite] === photo) pick[opposite] = null;
      if (state.entries[i].photos.length === 1) pick[opposite] = photo;
    }
    const card = state.list.querySelector(`.pse-plant[data-i="${i}"]`);
    card?.querySelectorAll('[data-photo-choice]').forEach(control => {
      const selected = Number(control.dataset.photo) === pick[control.dataset.role];
      control.classList.toggle('selected', selected);
    });
    updatePlantBadge(i);
    updateSelectionStatus();
  }

  function updatePlantBadge(i) {
    const badge = state.list.querySelector(`.pse-plant[data-i="${i}"] [data-picked-label]`);
    const sel = state.selections[i];
    if (!badge || !sel) return;
    let text = '';
    if (state.mode === 'single') text = sel.single === null ? 'Nog geen foto gekozen' : `Foto ${sel.single + 1} gekozen`;
    else if (sel.detail !== null && sel.habitus !== null) text = `Detail ${sel.detail + 1} · habitus ${sel.habitus + 1}`;
    else if (sel.detail !== null) text = `Detail ${sel.detail + 1} gekozen; kies nog habitus`;
    else if (sel.habitus !== null) text = `Habitus ${sel.habitus + 1} gekozen; kies nog detail`;
    else text = 'Nog geen foto’s gekozen';
    badge.textContent = text;
  }

  function isComplete() {
    return state.selections.length > 0 && state.selections.every(sel => state.mode === 'single'
      ? sel.single !== null
      : sel.detail !== null && sel.habitus !== null);
  }

  function updateSelectionStatus() {
    const complete = state.selections.filter(sel => state.mode === 'single'
      ? sel.single !== null
      : sel.detail !== null && sel.habitus !== null).length;
    state.status.textContent = `${complete} van ${state.entries.length} planten volledig gekozen`;
    state.exportButton.disabled = !isComplete();
  }

  function asStringList(value) { return listify(value).map(v => String(v).trim()).filter(Boolean); }
  function cleanKey(value) {
    return String(value ?? '')
      .trim()
      .toLowerCase()
      .replace(/[_\u2013\u2014-]/g, '-');
  }

  function rangeLabels(items, map, rankProp = 'rank') {
    const converted = [];
    for (const item of asStringList(items)) {
      const entry = map[cleanKey(item)];
      if (Array.isArray(entry)) converted.push(...entry);
      else if (entry) converted.push(entry);
    }
    const unique = [...new Map(converted.map(v => [v.label, v])).values()].sort((a, b) => a[rankProp] - b[rankProp]);
    if (!unique.length) return '—';
    if (unique.length === 1) return unique[0].label;
    return `${unique[0].label} - ${unique[unique.length - 1].label}`;
  }

  function sunlightValue(values) {
    const raw = asStringList(values);
    if (!raw.length) return '—';
    const mapped = raw.map(value => SUN_NL[cleanKey(value)]).filter(Boolean).sort((a, b) => a.rank - b.rank);
    if (!mapped.length) return raw.map(v => ({'sunny to partial shade':'zon - halfschaduw','sun to shade':'zon - schaduw'}[cleanKey(v)] || v)).join(', ');
    const unique = [...new Map(mapped.map(v => [v.label, v])).values()];
    return unique.length === 1 ? unique[0].label : `${unique[0].label} - ${unique[unique.length - 1].label}`;
  }

  function moistureValue(values) {
    const raw = asStringList(values);
    if (!raw.length) return '—';
    const converted = [];
    for (const value of raw) {
      const key = cleanKey(value);
      const val = MOISTURE_MAP[key];
      if (val) converted.push(...val);
      else if (key.includes('wet') || key.includes('waterlogged') || key.includes('poorly drained')) converted.push({ rank: 2, label: 'nat' });
      else if (key.includes('moist')) converted.push({ rank: 1, label: 'vochtig' });
      else if (key.includes('dry')) converted.push({ rank: 0, label: 'droog' });
    }
    const unique = [...new Map(converted.map(v => [v.label, v])).values()].sort((a, b) => a.rank - b.rank);
    if (!unique.length) return raw.join(', ');
    return unique.length === 1 ? unique[0].label : `${unique[0].label} - ${unique[unique.length - 1].label}`;
  }

  function dutchSoil(value) {
    const key = cleanKey(value);
    return SOIL_NL[key] || key;
  }
  function dutchPH(value) {
    const key = cleanKey(value);
    return PH_NL[key] || key;
  }

function soilValue(site) {
  const ph = site?.ph;

  if (ph == null || ph === "") {
    return " - ";
  }

  const phLabels = {
    acidic: "zuur",
    neutral: "neutraal",
    alkaline: "basisch",
  };

  const values = Array.isArray(ph) ? ph : String(ph).split(",");

  return values
    .map(value => {
      const key = String(value).trim().toLowerCase();
      return phLabels[key] ?? key;
    })
    .filter(Boolean)
    .join(" - ") || " - ";
}

  function formatCm(cm) {
    const n = Number(cm);
    if (!Number.isFinite(n) || n <= 0) return null;
    if (n >= 100) {
      const metres = n / 100;
      return `${Number(metres.toFixed(2)).toLocaleString('nl-BE', { maximumFractionDigits: 2 })} m`;
    }
    return `${Number(n.toFixed(1)).toLocaleString('nl-BE', { maximumFractionDigits: 1 })} cm`;
  }

  function lengthRange(values) {
    const nums = listify(values).map(Number).filter(v => Number.isFinite(v) && v > 0);
    if (!nums.length) return '—';
    const min = Math.min(...nums), max = Math.max(...nums);
    const low = formatCm(min), high = formatCm(max);
    return min === max ? low : `${low} - ${high}`;
  }

  function sizeValue(p) {
    const size = p?.size || {};
    const heights = [size.heightExclFlowers, size.heightInclFlowers].filter(v => v !== null && v !== undefined && v !== '');
    if (Array.isArray(size.height)) heights.push(...size.height);
    if (size.heightMin !== undefined) heights.push(size.heightMin);
    if (size.heightMax !== undefined) heights.push(size.heightMax);
    return lengthRange(heights);
  }

  function widthValue(p) {
    const size = p?.size || {};
    const values = [];
    if (Array.isArray(size.width)) values.push(...size.width);
    else if (size.width !== null && size.width !== undefined && size.width !== '') values.push(size.width);
    if (size.widthMin !== undefined) values.push(size.widthMin);
    if (size.widthMax !== undefined) values.push(size.widthMax);
    return lengthRange(values);
  }

  function floweringValue(p) {
    const months = listify(p?.flowers?.floweringMonths).map(Number).filter(v => Number.isInteger(v) && v >= 1 && v <= MONTHS_IN_YEAR);
    if (!months.length) return '—';
    const low = Math.min(...months), high = Math.max(...months);
    return low === high ? String(low) : `${low} - ${high}`;
  }

  function fieldRows(p, mode) {
    const site = p?.siteConditions || {};
    const fields = [
      ['standplaats', sunlightValue(site.sunlight)],
      ['vochtigheid', moistureValue(site.moisture)],
      ['bodem', soilValue(site)],
      ['hoogte', sizeValue(p)]
    ];
    if (mode === 'elements') fields.push(['breedte', widthValue(p)]);
    fields.push(['bloei', floweringValue(p)]);
    return fields;
  }

  function canvasImage(src, widthMm, heightMm) {
    const aspect = widthMm / heightMm;
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        try {
          const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
          if (!iw || !ih) throw new Error('Afbeelding heeft geen afmetingen.');
          const sourceAspect = iw / ih;
          let sx = 0, sy = 0, sw = iw, sh = ih;
          if (sourceAspect > aspect) {
            sw = ih * aspect;
            sx = (iw - sw) / 2;
          } else {
            sh = iw / aspect;
            sy = (ih - sh) / 2;
          }
          const canvas = document.createElement('canvas');
          canvas.width = 1200;
          canvas.height = Math.max(1, Math.round(1200 / aspect));
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Canvas is niet beschikbaar.');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', 0.92));
        } catch (error) { reject(error); }
      };
      img.onerror = () => reject(new Error(`Kon afbeelding niet laden: ${src}`));
      img.src = new URL(src, document.baseURI).href;
    });
  }

  async function getPdfConstructor() {
    if (typeof loadPdf === 'function') {
      try { await loadPdf(); } catch (error) { console.warn('Bestaande jsPDF-loader gaf een fout:', error); }
    }
    if (window.jspdf?.jsPDF) return window.jspdf.jsPDF;
    if (window.jsPDF) return window.jsPDF;
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      script.onload = resolve;
      script.onerror = () => reject(new Error('jsPDF kon niet worden geladen. Controleer de internetverbinding.'));
      document.head.appendChild(script);
    });
    const JsPDF = window.jspdf?.jsPDF || window.jsPDF;
    if (!JsPDF) throw new Error('jsPDF is geladen, maar de constructor is niet beschikbaar.');
    return JsPDF;
  }

  function fitText(doc, text, x, y, maxW, style = 'normal', startSize = 8, minSize = 5.2) {
    const value = String(text ?? '—');
    doc.setFont('helvetica', style);
    let size = startSize;
    doc.setFontSize(size);
    while (doc.getTextWidth(value) > maxW && size > minSize) {
      size -= 0.25;
      doc.setFontSize(size);
    }
    doc.text(value, x, y, { maxWidth: maxW });
  }

  function drawPlantFields(doc, entry, x, y, mode) {
    doc.setTextColor(25, 30, 25);
    fitText(doc, getName(entry.plant), x, y, COL_W, 'bold', 9.0, 6.4);
    const fields = fieldRows(entry.plant, mode);
    const lineY = y + 4.8;
    const lineStep = mode === 'single' ? 4.8 : 4.15;
    for (let i = 0; i < fields.length; i++) {
      const [label, value] = fields[i];
      const labelText = `${label}:`;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(mode === 'single' ? 8.0 : 7.7);
      doc.setTextColor(82, 88, 82);
      doc.text(labelText, x, lineY + i * lineStep);
      const labelW = doc.getTextWidth(labelText) + 1.4;
      doc.setTextColor(43, 48, 43);
      fitText(doc, value, x + labelW, lineY + i * lineStep, COL_W - labelW, 'normal', mode === 'single' ? 7.8 : 7.5, 5.1);
    }
  }

  async function paintSinglePlant(doc, entry, photoIndex, x, y) {
    const imgW = COL_W, imgH = 60.9;
    const data = await canvasImage(entry.photos[photoIndex], imgW, imgH);
    doc.addImage(data, 'JPEG', x, y, imgW, imgH, undefined, 'FAST');
    drawPlantFields(doc, entry, x, y + 66.0, 'single');
  }

  async function paintElementPlant(doc, entry, selection, x) {
    const smallW = COL_W, smallH = 45.7, largeW = COL_W, largeH = 144.5;
    const smallY = 47.4, largeY = 99.7;
    const small = await canvasImage(entry.photos[selection.detail], smallW, smallH);
    const large = await canvasImage(entry.photos[selection.habitus], largeW, largeH);
    doc.addImage(small, 'JPEG', x, smallY, smallW, smallH, undefined, 'FAST');
    doc.addImage(large, 'JPEG', x, largeY, largeW, largeH, undefined, 'FAST');
    drawPlantFields(doc, entry, x, 249.4, 'elements');
  }

  async function createPdf() {
    const JsPDF = await getPdfConstructor();
    const doc = new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a3', compress: true });
    doc.setProperties({ title: state.mode === 'single' ? 'Beplanting — plantfiches' : 'Planten met foto-elementen — plantfiches' });

    if (state.mode === 'single') {
      for (let start = 0; start < state.entries.length; start += 8) {
        if (start > 0) doc.addPage('a3', 'landscape');
        const pageEntries = state.entries.slice(start, start + 8);
        for (let i = 0; i < pageEntries.length; i++) {
          const col = i % 4;
          const row = Math.floor(i / 4);
          await paintSinglePlant(doc, pageEntries[i], state.selections[start + i].single, COL_X[col], row === 0 ? 52.4 : 150.9);
          state.status.textContent = `PDF maken… ${start + i + 1} van ${state.entries.length} planten`;
        }
      }
      doc.save('beplanting-enkele-fotos.pdf');
    } else {
      for (let start = 0; start < state.entries.length; start += 4) {
        if (start > 0) doc.addPage('a3', 'landscape');
        const pageEntries = state.entries.slice(start, start + 4);
        for (let i = 0; i < pageEntries.length; i++) {
          await paintElementPlant(doc, pageEntries[i], state.selections[start + i], COL_X[i]);
          state.status.textContent = `PDF maken… ${start + i + 1} van ${state.entries.length} planten`;
        }
      }
      doc.save('planten-met-foto-elementen.pdf');
    }
  }

  async function runPdfExport() {
    if (!isComplete()) return;
    state.exportButton.disabled = true;
    state.exportButton.textContent = 'PDF maken…';
    try {
      await createPdf();
      closeModal();
    } catch (error) {
      console.error(error);
      state.status.textContent = error?.message || 'De PDF kon niet worden gemaakt.';
      state.exportButton.disabled = false;
      state.exportButton.textContent = 'Opnieuw proberen';
    }
  }

  document.addEventListener('click', event => {
    const button = event.target.closest(`#selActs [data-a="${ACTION_SINGLE}"], #selActs [data-a="${ACTION_ELEMENTS}"]`);
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    startExport(button.dataset.a === ACTION_SINGLE ? 'single' : 'elements');
  }, true);

  window.PSE = { fieldRows, detailsFor, getName, canvasImage, getPdfConstructor };

  function init() {
    ensureButtons();
    ensureModal();
    refreshButtonLabels();
    document.querySelector('#lang')?.addEventListener('change', refreshButtonLabels);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
