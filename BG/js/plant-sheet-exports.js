/* Hulpfuncties voor de beplantingsgrid-export (window.PSE):
   plantdetails laden, kenmerkteksten opbouwen, foto's bijsnijden en jsPDF laden. */
(() => {
  'use strict';

  const MONTHS_IN_YEAR = 12;

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

  const SOIL_RANK = { clay: 0, loam: 1, 'sandy loam': 2, sand: 3 };
  const ANIMALS_NL = { 'value to bees (BE)': 'bijen', 'value to butterflies (BE)': 'vlinders', 'value to birds (BE)': 'vogels' };

  // vertaling via app.js (nl.json); valt terug op de oorspronkelijke waarde
  const t = v => (typeof tr === 'function' ? tr(v) : v);

  function listify(value) {
    if (Array.isArray(value)) return value.filter(v => v !== null && v !== undefined && v !== '');
    if (value === null || value === undefined || value === '') return [];
    return [value];
  }
  function asStringList(value) { return listify(value).map(v => String(v).trim()).filter(Boolean); }
  function cleanKey(value) {
    return String(value ?? '').trim().toLowerCase().replace(/[_–—-]/g, '-');
  }

  function getName(p) {
    return p?.use?.scientificName || p?.scientificName || p?.name || p?.id || 'Onbekende plant';
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

  /* ---------- waarden per kenmerk ---------- */

  const range = sorted => !sorted.length ? '—' : sorted.length === 1 ? sorted[0] : `${sorted[0]} - ${sorted[sorted.length - 1]}`;

  function sunlightValue(values) {
    const raw = asStringList(values);
    if (!raw.length) return '—';
    const mapped = raw.map(value => SUN_NL[cleanKey(value)]).filter(Boolean).sort((a, b) => a.rank - b.rank);
    if (!mapped.length) return raw.map(v => ({ 'sunny to partial shade': 'zon - halfschaduw', 'sun to shade': 'zon - schaduw' }[cleanKey(v)] || v)).join(', ');
    return range([...new Set(mapped.map(v => v.label))]);
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
    return range(unique.map(v => v.label));
  }

  // "bodem" toont de pH-range (zoals voorheen)
  function soilValue(site) {
    const ph = site?.ph;
    if (ph == null || ph === '') return ' - ';
    const phLabels = { acidic: 'zuur', neutral: 'neutraal', alkaline: 'basisch' };
    const values = Array.isArray(ph) ? ph : String(ph).split(',');
    return values
      .map(value => { const key = String(value).trim().toLowerCase(); return phLabels[key] ?? key; })
      .filter(Boolean)
      .join(' - ') || ' - ';
  }

  function soilTypeValue(site) {
    const raw = asStringList(site?.soil);
    if (!raw.length) return '—';
    const known = raw.filter(v => v in SOIL_RANK).sort((a, b) => SOIL_RANK[a] - SOIL_RANK[b]);
    if (!known.length) return raw.map(t).join(', ');
    return range(known.map(t));
  }

  function formatCm(cm) {
    const n = Number(cm);
    if (!Number.isFinite(n) || n <= 0) return null;
    if (n >= 100) return `${Number((n / 100).toFixed(2)).toLocaleString('nl-BE', { maximumFractionDigits: 2 })} m`;
    return `${Number(n.toFixed(1)).toLocaleString('nl-BE', { maximumFractionDigits: 1 })} cm`;
  }

  function lengthRange(values) {
    const nums = listify(values).map(Number).filter(v => Number.isFinite(v) && v > 0);
    if (!nums.length) return '—';
    const min = Math.min(...nums), max = Math.max(...nums);
    return min === max ? formatCm(min) : `${formatCm(min)} - ${formatCm(max)}`;
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

  // maanden als aaneengesloten periodes, ook over de jaarwissel (bv. 12 - 3)
  function monthsValue(values) {
    const set = new Set(listify(values).map(Number).filter(v => Number.isInteger(v) && v >= 1 && v <= MONTHS_IN_YEAR));
    if (!set.size) return '—';
    if (set.size === MONTHS_IN_YEAR) return `1 - ${MONTHS_IN_YEAR}`;
    const next = m => (m === MONTHS_IN_YEAR ? 1 : m + 1);
    const prev = m => (m === 1 ? MONTHS_IN_YEAR : m - 1);
    const runs = [];
    for (let m = 1; m <= MONTHS_IN_YEAR; m++) {
      if (!set.has(m) || set.has(prev(m))) continue;
      let end = m;
      while (set.has(next(end))) end = next(end);
      runs.push(end === m ? String(m) : `${m} - ${end}`);
    }
    return runs.join(', ');
  }

  const listValue = values => { const l = asStringList(values); return l.length ? l.map(t).join(', ') : '—'; };

  function leafHabit(p) {
    const e = asStringList(p?.leaves?.evergreen);
    if (e.includes('evergreen')) return 'groenblijvend';
    if (e.includes('semi-evergreen')) return 'halfgroenblijvend';
    return 'bladverliezend';
  }

  function fruitValue(p) {
    const types = asStringList(p?.fruit?.fruitType);
    const months = monthsValue(p?.fruit?.fruitingMonths);
    if (!types.length) return months === '—' ? '—' : months;
    return types.map(t).join(', ') + (months === '—' ? '' : ` (${months})`);
  }

  function zoneValue(p) {
    const z = listify(p?.hardinessZones).map(Number).filter(Number.isFinite);
    if (!z.length) return '—';
    const min = Math.min(...z), max = Math.max(...z);
    return `zone ${min === max ? min : `${min} - ${max}`}`;
  }

  /* ---------- catalogus van kenmerken die onder een foto kunnen staan ---------- */

  const FIELDS = [
    { key: 'standplaats', label: 'standplaats', title: 'Standplaats (zon – schaduw)', value: p => sunlightValue(p?.siteConditions?.sunlight) },
    { key: 'vochtigheid', label: 'vochtigheid', title: 'Vochtigheid (droog – nat)', value: p => moistureValue(p?.siteConditions?.moisture) },
    { key: 'bodem', label: 'bodem', title: 'Bodem (pH: zuur – basisch)', value: p => soilValue(p?.siteConditions) },
    { key: 'grondsoort', label: 'grondsoort', title: 'Grondsoort (klei – zand)', value: p => soilTypeValue(p?.siteConditions) },
    { key: 'hoogte', label: 'hoogte', title: 'Hoogte', value: sizeValue },
    { key: 'breedte', label: 'breedte', title: 'Breedte', value: widthValue },
    { key: 'klimhoogte', label: 'klimhoogte', title: 'Klimhoogte', value: p => lengthRange(p?.size?.climbingHeight) },
    { key: 'bloei', label: 'bloei', title: 'Bloei (maanden)', value: p => monthsValue(p?.flowers?.floweringMonths) },
    { key: 'bloeikleur', label: 'bloeikleur', title: 'Bloeikleur', value: p => listValue(p?.flowers?.floweringColour) },
    { key: 'bladkleur', label: 'bladkleur', title: 'Bladkleur', value: p => listValue(p?.leaves?.leafColour) },
    { key: 'herfstkleur', label: 'herfstkleur', title: 'Herfstkleur', value: p => listValue(p?.leaves?.autumnColour) },
    { key: 'blad', label: 'blad', title: 'Blad (groenblijvend / bladverliezend)', value: leafHabit },
    { key: 'vrucht', label: 'vrucht', title: 'Vrucht (type en maanden)', value: fruitValue },
    { key: 'naam', label: 'naam', title: 'Nederlandse naam', value: p => p?.use?.commonNameNl || p?.use?.commonName || '—' },
    { key: 'type', label: 'type', title: 'Type (boom, struik, …)', value: p => listValue(p?.use?.type) },
    { key: 'winterhardheid', label: 'winterhardheid', title: 'Winterhardheidszone', value: zoneValue },
    { key: 'inheems', label: 'status', title: 'Status (inheems, ingeburgerd, …)', value: p => listValue(p?.ecology?.nativeRange) },
    { key: 'dieren', label: 'waarde voor', title: 'Waarde voor bijen / vlinders / vogels', value: p => { const l = asStringList(p?.ecology?.valueToAnimals).map(v => ANIMALS_NL[v] || t(v)); return l.length ? l.join(', ') : '—'; } }
  ];
  const BY_KEY = Object.fromEntries(FIELDS.map(f => [f.key, f]));

  // standaardkenmerken per raster: exact zoals voorheen
  const DEFAULT_FIELDS = {
    single: ['standplaats', 'vochtigheid', 'bodem', 'hoogte', 'bloei'],
    elements: ['standplaats', 'vochtigheid', 'bodem', 'hoogte', 'breedte', 'bloei']
  };

  function fieldLine(p, key) {
    const f = BY_KEY[key];
    return f ? `${f.label}: ${f.value(p)}` : '';
  }

  /* ---------- foto's en PDF ---------- */

  function canvasImage(src, widthMm, heightMm) {
    const aspect = widthMm / heightMm;
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        try {
          const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
          if (!iw || !ih) throw new Error('Afbeelding heeft geen afmetingen.');
          let sx = 0, sy = 0, sw = iw, sh = ih;
          if (iw / ih > aspect) { sw = ih * aspect; sx = (iw - sw) / 2; }
          else { sh = iw / aspect; sy = (ih - sh) / 2; }
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

  window.PSE = {
    FIELDS: FIELDS.map(({ key, label, title }) => ({ key, label, title })),
    hasField: key => key in BY_KEY,
    defaultFields: mode => [...(DEFAULT_FIELDS[mode] || DEFAULT_FIELDS.single)],
    fieldLine,
    detailsFor,
    getName,
    canvasImage,
    getPdfConstructor
  };
})();
