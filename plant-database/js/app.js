const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const label = k => LBL[k] || k.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, c => c.toUpperCase());
const SEASONS = ['winter', 'early spring', 'spring', 'early summer', 'summer', 'late summer', 'autumn'];
const DEFAULT_ZONE = '8';
let lang = 'en', NL = { t: {} };
const tr = s => (lang === 'nl' && NL.t[s]) || s;
const cn = p => (lang === 'nl' && p.base.commonNameNl) || p.base.commonName;

let plants = [];
let sel = {}, chosen = new Set(); 
let selectionView = false;
const defs = [];
const ranges = []; let rng = {};
const STOPS = [0, 10, 25, 50, 100, 150, 200, 300, 500, 800, 1200, 2000];
const LAST = STOPS.length - 1;
const fmt = c => (c < 100 ? c + ' cm' : c / 100 + ' m');

function vals(p, id) {
  if (id === 'zones') return p.hardinessZones;
  const [a, b] = id.split('.');
  return b ? p[a][b] : p[a];
}

function buildDefs(t) {
  for (const [sec, obj] of Object.entries(t)) {
    if (Array.isArray(obj) && sec === 'warnings') defs.push({ id: sec, sec: 'Warnings', key: sec, label: 'Warnings', values: obj });
    else if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
      for (const [key, v] of Object.entries(obj)) {
        if (v === null) { ranges.push({ id: `${sec}.${key}`, sec: label(sec), label: label(key) }); rng[`${sec}.${key}`] = { lo: 0, hi: LAST }; }
        if (Array.isArray(v) && typeof v[0] === 'string') defs.push({ id: `${sec}.${key}`, sec: label(sec), key, label: label(key), values: v });
        if (key === 'floweringMonths') defs.push({ id: `${sec}.floweringSeasons`, sec: label(sec), key, label: 'Flowering season', values: SEASONS });
        if (key === 'fruitingMonths') defs.push({ id: `${sec}.fruitingSeasons`, sec: label(sec), key, label: 'Fruiting season', values: SEASONS });
      }
    }
  }
}

const row = (id, v) =>
  `<label class="v"><input type="checkbox" data-id="${esc(id)}" data-t="inc" data-v="${esc(v)}" title="Include">` +
  `<input type="checkbox" class="exc" data-id="${esc(id)}" data-t="exc" data-v="${esc(v)}" title="Exclude"><span data-k="${esc(v)}">${esc(tr(v))}</span></label>`;

const slider = d => `<div class="grp"><span data-k="${esc(d.label)}">${esc(tr(d.label))}</span> <span class="rv" data-out="${esc(d.id)}">any</span></div><div class="rng">` +
  ['lo', 'hi'].map(e => `<input type="range" min="0" max="${LAST}" value="${e === 'lo' ? 0 : LAST}" data-r="${esc(d.id)}" data-e="${e}">`).join('') + `</div>`;

function buildMenu() {
  const bySec = {};
  [...defs, ...ranges].forEach(d => (bySec[d.sec] ??= []).push(d));
  $('#filters').innerHTML = Object.entries(bySec).map(([sec, ds]) =>
    `<details><summary data-k="${esc(sec)}">${esc(tr(sec))}</summary>` +
    ds.map(d => d.values ? `<div class="grp" data-k="${esc(d.label)}">${esc(tr(d.label))}</div>${d.values.map(v => row(d.id, v)).join('')}` : slider(d)).join('') +
    `</details>`).join('');

  const zones = Array.from({ length: 13 }, (_, i) => String(i + 1));
  $('#zone').innerHTML = `<details><summary data-k="Winter hardiness zone">Winter hardiness zone</summary>` +
    `<label class="v"><input type="checkbox" id="zoneAll" title="Show all"><span data-k="Show all">Show all</span></label>` +
    zones.map(z => row('zones', z)).join('') + `</details>`;
  syncMenu();
}

function onToggle(e) {
  const el = e.target;
  if (el.id === 'zoneAll') {
    tabs[curTab].all = el.checked;
    if (el.checked) { sel.zones.inc.clear(); sel.zones.exc.clear(); document.querySelectorAll('#zone [data-id="zones"]').forEach(i => (i.checked = false)); }
    return render();
  }
  if (!el.dataset.id) return;
  const s = sel[el.dataset.id], other = el.dataset.t === 'inc' ? 'exc' : 'inc';
  if (el.checked) {
    s[el.dataset.t].add(el.dataset.v); s[other].delete(el.dataset.v);
    el.closest('.v').querySelector(`[data-t="${other}"]`).checked = false;
    if (el.dataset.id === 'zones') { $('#zoneAll').checked = false; tabs[curTab].all = false; }
  } else s[el.dataset.t].delete(el.dataset.v);
  render();
}

function searchOk(p) {
  const q = $('#search').value.toLowerCase().trim();
  if (!q) return true;
  const hay = [p.base.scientificName, p.base.commonName, p.base.commonNameNl, p.base.family].join(' ').toLowerCase();
  return q.split(',').every(t => {
    t = t.trim();
    if (!t) return true;
    if (t[0] === '-') return !hay.includes(t.slice(1).trim());
    return t.split('/').some(a => hay.includes(a.trim()));
  });
}

function matches(p) {
  for (const [id, s] of Object.entries(sel)) {
    if (!s.inc.size && !s.exc.size) continue;
    const have = new Set((vals(p, id) || []).map(String));
    for (const v of s.inc) if (!have.has(v)) return false;
    for (const v of s.exc) if (have.has(v)) return false;
  }
  for (const [id, r] of Object.entries(rng)) {
    const v = vals(p, id);
    if (v == null) continue;
    if (v < STOPS[r.lo] || (r.hi < LAST && v > STOPS[r.hi])) return false;
  }
  return searchOk(p);
}

function render(reset = true) {
  let list;

  if (selectionView) {
    list = plants
      .filter(p => chosen.has(p.id))
      .sort((a, b) =>
        a.base.scientificName.localeCompare(b.base.scientificName)
      );
  } else {
    list = plants.filter(matches);
  }

  shown = list;

  if (reset) {
    renderedCount = 0;
    $('#grid').innerHTML = '';
  }

  const next = list.slice(
    renderedCount,
    renderedCount + RENDER_BATCH
  );

  $('#grid').insertAdjacentHTML(
    'beforeend',
    next.map(p =>
      `<article class="card" data-id="${esc(p.id)}"><label class="pick"><input type="checkbox" data-pick="${esc(p.id)}"${chosen.has(p.id) ? ' checked' : ''}></label><img loading="lazy" decoding="async" src="${esc(encodeURI(p.mainImage))}" alt="${esc(p.base.scientificName)}" onerror="this.style.visibility='hidden'">` +
      `<div><h3>${esc(p.base.scientificName)}</h3><p>${esc(cn(p))}</p><small>${tr('Zone')} ${esc(p.hardinessZones.join(', '))}</small></div></article>`
    ).join('')
  );

  renderedCount += next.length;

  $('#count').textContent =
    lang === 'nl'
      ? `${list.length} ${list.length === 1 ? 'plant' : 'planten'} getoond`
      : `Showing ${list.length} plant${list.length === 1 ? '' : 's'}`;

  const selectAll = $('#selectAll');

  if (selectAll) {
    selectAll.checked =
      list.length > 0 &&
      list.every(p => chosen.has(p.id));

    selectAll.indeterminate =
      list.some(p => chosen.has(p.id)) &&
      !list.every(p => chosen.has(p.id));

    selectAll.disabled = list.length === 0;
  }

  setupLoadMoreObserver();
}

function setupLoadMoreObserver() {
  const target = $('#loadMore');

  if (!target) return;

  if (loadMoreObserver) {
    loadMoreObserver.disconnect();
  }

  if (renderedCount >= shown.length) {
    target.style.display = 'none';
    return;
  }

  target.style.display = 'block';

  loadMoreObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;

    if (renderedCount >= shown.length) return;

    render(false);
  }, {
    rootMargin: '500px 0px',
    threshold: 0
  });

  loadMoreObserver.observe(target);
}

async function init() {
  const [t, idx, nl] = await Promise.all(['data/plant-template.json', 'data/plants-index.json', 'data/nl.json'].map(u => fetch(u).then(r => r.json())));
  NL = nl;
  plants = idx.sort((a, b) => a.base.scientificName.localeCompare(b.base.scientificName));
  buildDefs(t);
  tabs = [newState()]; curTab = 0;
  sel = tabs[0].sel; rng = tabs[0].rng; chosen = tabs[0].chosen;
  buildMenu(); drawTabs(); drawSel(); render();
}

$('#side').addEventListener('change', onToggle);
$('#side').addEventListener('input', e => {
  const el = e.target, id = el.dataset.r;
  if (!id) return;
  const r = rng[id], v = +el.value;
  if (el.dataset.e === 'lo') r.lo = Math.min(v, r.hi); else r.hi = Math.max(v, r.lo);
  const [lo, hi] = el.parentElement.querySelectorAll('input');
  lo.value = r.lo; hi.value = r.hi;
  rangeOut(id);
  render();
});
$('#search').addEventListener('input', render);
const side = $('#side');
const menuOverlay = $('#menuOverlay');

function closeMenu() {
  side.classList.remove('open');
  menuOverlay.classList.remove('on');
}

function toggleMenu() {
  const open = side.classList.toggle('open');
  menuOverlay.classList.toggle('on', open);
}

$('#menuBtn').addEventListener('click', toggleMenu);

menuOverlay.addEventListener('click', closeMenu);
init().catch(err => ($('#count').textContent = 'Could not load data. Open the site through Live Server. ' + err.message));

/* ---------- Popup card ---------- */
let shown = [], cur = 0, picked = 0;
let renderedCount = 0;
const RENDER_BATCH = 60;
let loadMoreObserver = null;
const detailCache = new Map();

const MONTHS = 'JFMAMJJASOND';

const LBL = {
  ph: 'pH',
  heightExclFlowers: 'Height (excl. flowers)',
  heightInclFlowers: 'Height (incl. flowers)',
  ediblePartsRaw: 'Edible parts (raw)',
  plantDensity: 'Plant density /m²',
  nativeTo: 'Native to',
  shape: 'Flower shape',
  orientation: 'Flower orientation',
  other: 'Other flower options',
  largeLeaves: 'Large leaves',
  structure: 'Structure'
};

const DIAG = {
  '@flowers': 'Flowering period',
  '@leaves': 'Leaf period',
  '@fruit': 'Fruiting period'
};

const GROUPS = [
  ['🌿', '#3d6b4f', 'Type and use', ['base.type', 'base.application']],
  ['☀️', '#c8923a', 'Site conditions', ['siteConditions.sunlight', 'siteConditions.soil', 'siteConditions.moisture', 'siteConditions.ph', 'siteConditions.nutrients', 'siteConditions.extremes', 'siteConditions.humidity']],
  ['📏', '#5a7fa8', 'Size', ['size.heightExclFlowers', 'size.heightInclFlowers', 'size.climbingHeight', 'size.width']],
  ['🌸', '#b8607f', 'Flowers', ['@flowers', 'flowers.other']],
  ['🍃', '#4f8a4f', 'Leaves', ['@leaves', 'leaves.evergreen', 'leaves.texture', 'leaves.fenestrations', 'leaves.structure', 'variegation.variegationType']],
  ['🪵', '#8a6a4a', 'Stem and bark', ['stemAndBark.barkColour', 'stemAndBark.barkTexture']],
  ['🍎', '#b3402f', 'Fruit', ['@fruit', 'fruit.fruitType', 'fruit.ediblePartsRaw']],
  ['⚠️', '#c0392b', 'Warnings', ['warnings']],
  ['🦋', '#6a5acd', 'Ecology', ['ecology.habitat', 'ecology.nativeTo', 'ecology.nativeRange', 'ecology.successionalStage', 'ecology.valueToAnimals']],
  ['📋', '#6b7a70', 'Practical', ['practical.spacing', 'practical.plantDensity', 'practical.rarity', 'practical.parentage']],
  ['💡', '#7a6845', 'Discription', ['discription.note']],
];

const css = c => {
  c = String(c || '').split(/[\/,]/)[0].trim().toLowerCase();
  return CSS.supports('color', c) ? c : '#999';
};

const txt = v =>
  (v == null || v === '' || (Array.isArray(v) && !v.length))
    ? ''
    : typeof v === 'number'
      ? fmt(v)
      : Array.isArray(v)
        ? v.map(tr).join(', ')
        : tr(v);

function fieldText(p, f) {
  if (f === 'discription.note') {
    return lang === 'nl'
      ? (p.discription.noteNL || p.discription.note || '')
      : (p.discription.note || '');
  }

  return txt(vals(p, f));
}

async function loadPlantDetails(p) {
  if (detailCache.has(p.id)) {
    return detailCache.get(p.id);
  }

  const url = `data/plants-info/${encodeURIComponent(p.id)}.json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not load plant information: ${p.id}.json`);
  }

  const details = await response.json();

  const fullPlant = {
    ...p,
    ...details
  };

  const fixImagePath = imagePath => {
    if (!imagePath) return '';

    return String(imagePath)
      .replace(/\\/g, '/')
      .replace(/^\/+/, '');
  };

  fullPlant.mainImage = fixImagePath(fullPlant.mainImage);

  if (Array.isArray(fullPlant.images)) {
    fullPlant.images = fullPlant.images
      .map(fixImagePath)
      .filter(Boolean);
  } else {
    fullPlant.images = [];
  }

  detailCache.set(p.id, fullPlant);

  return fullPlant;
}

const fill = cols => {
  const c = cols.map(css);

  if (c.length < 2) {
    return c[0] || '#999';
  }

  const s = 100 / c.length;

  return `linear-gradient(90deg,${c.map((x, i) =>
    `${x} ${i * s}% ${(i + 1) * s}%`
  ).join(',')})`;
};

function diag(p, k) {
  const d = periods(p, k);
  const [months, col, aut = [], aCol = []] = d;

  if (!months.length && !aut.length) {
    return '';
  }

  return `<div class="yr">${
    [...MONTHS].map((m, i) => {
      const n = i + 1;
      const isA = aut.includes(n);
      const on = isA || months.includes(n);

      return `<i style="${
        on
          ? `background:${fill(isA ? aCol : col)};border-color:#0005`
          : ''
      }">${m}</i>`;
    }).join('')
  }</div>`;
}

function infoHtml(p) {
  const groups = GROUPS.map(([icon, colour, title, fields]) => {
    const rows = fields.map(f => {
      if (f[0] === '@') {
        const d = diag(p, f);

        return d
          ? `<div class="f"><b>${tr(DIAG[f])}</b>${d}</div>`
          : '';
      }

      const t = fieldText(p, f);

      return t
        ? `<div class="f"><b>${esc(tr(label(f.split('.').pop())))}</b> ${esc(t)}</div>`
        : '';
    }).join('');

    return rows
      ? `<section class="g" style="--c:${colour}"><h4>${icon} ${tr(title)}</h4>${rows}</section>`
      : '';
  }).join('');

  const more =
    `<a class="more" href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(p.base.scientificName)}" target="_blank" rel="noopener">${tr('More images')}</a>`;

  return `
    <h2>${esc(p.base.scientificName)}</h2>
    <h3>${esc(cn(p))}</h3>
    <p class="fam">${esc(p.base.family)} · ${tr('Zone')} ${esc(p.hardinessZones.join(', '))}</p>
    <div class="ginfo">${groups}</div>
    <p class="disclaimer">${tr('Info generated by AI and double-checked by a human, but please be aware there could be mistakes.')}</p>
    ${more}
  `;
}

function draw() {
  const p = shown[cur];

  const images = Array.isArray(p.images) ? p.images : [];

  const imgs = [
    p.mainImage,
    ...images
  ]
    .filter(Boolean)
    .filter((value, index, array) => array.indexOf(value) === index);

  if (!imgs.length) {
    imgs.push(p.mainImage);
  }

  if (picked >= imgs.length) {
    picked = 0;
  }

  const src = i => esc(encodeURI(imgs[i]));

  $('#pop').innerHTML =
    `<button class="x" data-close aria-label="Close">×</button>` +
    `<div class="pbody">` +

      `<div class="gal">` +

        `<div class="thumbs">` +
          `<div>` +
            imgs.map((_, i) =>
              `<img data-i="${i}" class="${i === picked ? 'sel' : ''}" src="${src(i)}" alt="">`
            ).join('') +
          `</div>` +
        `</div>` +

        `<div class="bigw">` +
          `<img class="big" src="${src(picked)}" alt="${esc(p.base.scientificName)}">` +
          `<label class="pick tl">` +
            `<input type="checkbox" data-pick="${esc(p.id)}"${chosen.has(p.id) ? ' checked' : ''}>` +
          `</label>` +
        `</div>` +

      `</div>` +

      `<div class="info">${infoHtml(p)}</div>` +

    `</div>` +

    `<div class="pfoot">` +
      `<button data-go="-1" aria-label="Previous plant">‹</button>` +
      `<span>${cur + 1} / ${shown.length}</span>` +
      `<button data-go="1" aria-label="Next plant">›</button>` +
    `</div>`;

  $('#pop').dataset.imgs = JSON.stringify(imgs);
}

async function openPop(i) {
  cur = (i + shown.length) % shown.length;
  picked = 0;

  const indexPlant = shown[cur];

  $('#pop').innerHTML =
    `<button class="x" data-close aria-label="Close">×</button>` +
    `<div class="pbody">` +
      `<div class="info">Loading plant information...</div>` +
    `</div>`;

  $('#pop').classList.add('on');
  document.body.style.overflow = 'hidden';

  try {
    shown[cur] = await loadPlantDetails(indexPlant);
    draw();
  } catch (err) {
    $('#pop').innerHTML =
      `<button class="x" data-close aria-label="Close">×</button>` +
      `<div class="pbody">` +
        `<div class="info">Could not load plant information.</div>` +
      `</div>`;

    console.error(err);
  }
}

function closePop() {
  $('#pop').classList.remove('on');
  document.body.style.overflow = '';
}

$('#grid').addEventListener('click', e => {
  if (e.target.closest('.pick')) {
    return;
  }

  const c = e.target.closest('.card');

  if (c) {
    openPop(shown.findIndex(p => p.id === c.dataset.id));
  }
});

$('#pop').addEventListener('click', e => {
  const t = e.target;

  if (t.closest('[data-close]')) {
    closePop();
  }

  else if (t.dataset.go) {
    openPop(cur + +t.dataset.go);
  }

  else if (t.matches('.thumbs img')) {
    picked = +t.dataset.i;

    $('#pop .big').src =
      encodeURI(JSON.parse($('#pop').dataset.imgs)[picked]);

    document
      .querySelectorAll('#pop .thumbs img')
      .forEach((im, i) => im.classList.toggle('sel', i === picked));
  }
});

document.addEventListener('keydown', e => {
  if (!$('#pop').classList.contains('on')) {
    return;
  }

  if (e.key === 'Escape') {
    closePop();
  }

  else if (e.key === 'ArrowRight') {
    openPop(cur + 1);
  }

  else if (e.key === 'ArrowLeft') {
    openPop(cur - 1);
  }
});

/* ---------- Language ---------- */
function rangeOut(id) {
  const r = rng[id];
  document.querySelector(`[data-out="${id}"]`).textContent = r.lo === 0 && r.hi === LAST ? tr('any') : `${fmt(STOPS[r.lo])} ${tr('to')} ${r.hi === LAST ? tr('max') : fmt(STOPS[r.hi])}`;
}
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-k]').forEach(e => (e.textContent = tr(e.dataset.k)));
  $('#search').placeholder = tr('Search name or family');
  $('.contact').textContent = tr('Contact');
  Object.keys(rng).forEach(rangeOut);
  drawTabs(); drawSel();
  render();
  if ($('#pop').classList.contains('on')) draw();
}
$('#lang').addEventListener('change', e => { lang = e.target.value.toLowerCase(); applyLang(); });

/* ---------- Tabs ---------- */
let tabs = [], curTab = 0, tabCount = 0;
function newState() {
  const s = {}, g = {};
  defs.forEach(d => (s[d.id] = { inc: new Set(), exc: new Set() }));
  s.zones = { inc: new Set([DEFAULT_ZONE]), exc: new Set() };
  ranges.forEach(x => (g[x.id] = { lo: 0, hi: LAST }));
return {
  n: ++tabCount,
  name: '',
  sel: s,
  rng: g,
  chosen: new Set(),
  search: '',
  all: false
};
}

function syncMenu() {
  document.querySelectorAll('#side input[data-id]').forEach(i => (i.checked = sel[i.dataset.id][i.dataset.t].has(i.dataset.v)));
  document.querySelectorAll('#side input[data-r]').forEach(i => (i.value = rng[i.dataset.r][i.dataset.e]));
  $('#zoneAll').checked = tabs[curTab].all;
  Object.keys(rng).forEach(rangeOut);
}

function loadTab() {
  const t = tabs[curTab];
  sel = t.sel; rng = t.rng; chosen = t.chosen;
  $('#search').value = t.search;
  closePop(); syncMenu(); drawTabs(); drawSel(); render();
}

function drawTabs() {
  $('#tabs').innerHTML =
    tabs.map((t, i) => {
      const title = t.name || `${tr('Tab')} ${t.n}`;

      return `
        <div class="tab${i === curTab ? ' on' : ''}"
             data-tab="${i}"
             draggable="true">
          <span class="tabName">${esc(title)}</span>
          ${tabs.length > 1
            ? `<button data-x="${i}" aria-label="Close tab">×</button>`
            : ''}
        </div>
      `;
    }).join('') +
    `<button id="newTab" aria-label="New tab">+</button>`;
}

$('#tabs').addEventListener('click', e => {
  const x = e.target.closest('[data-x]'), t = e.target.closest('[data-tab]');
  tabs[curTab].search = $('#search').value;
  if (x) {
    const i = +x.dataset.x;
    if (tabs[i].chosen.size && !confirm(tr('Close this tab? Its selection will be lost.'))) return;
    tabs.splice(i, 1);
    if (i < curTab) curTab--;
    if (curTab >= tabs.length) curTab = tabs.length - 1;
    loadTab();
  } else if (e.target.closest('#newTab')) { tabs.push(newState()); curTab = tabs.length - 1; loadTab(); }
  else if (t && +t.dataset.tab !== curTab) { curTab = +t.dataset.tab; loadTab(); }
});

$('#tabs').addEventListener('dblclick', e => {
  const name = e.target.closest('.tabName');

  if (!name) return;

  const tab = e.target.closest('[data-tab]');
  if (!tab) return;

  const i = +tab.dataset.tab;
  const t = tabs[i];

  const input = document.createElement('input');

  input.type = 'text';
  input.value = t.name || `${tr('Tab')} ${t.n}`;
  input.className = 'tabRename';
  input.maxLength = 40;
  input.setAttribute('aria-label', 'Rename tab');

  name.replaceWith(input);

  input.focus();
  input.select();

  let finished = false;

  const finish = save => {
    if (finished) return;
    finished = true;

    if (save) {
      const value = input.value.trim();

      t.name = value;
    }

    drawTabs();
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      finish(true);
    }

    if (e.key === 'Escape') {
      finish(false);
    }
  });

  input.addEventListener('blur', () => {
    finish(true);
  });
});

let draggedTab = null;

$('#tabs').addEventListener('dragstart', e => {
  const tab = e.target.closest('.tab');

  if (!tab) return;

  draggedTab = +tab.dataset.tab;

  tab.classList.add('dragging');

  e.dataTransfer.effectAllowed = 'move';
});

$('#tabs').addEventListener('dragend', e => {
  const tab = e.target.closest('.tab');

  if (tab) {
    tab.classList.remove('dragging');
  }

  document
    .querySelectorAll('.tab.drag-over')
    .forEach(t => t.classList.remove('drag-over'));

  draggedTab = null;
});

$('#tabs').addEventListener('dragover', e => {
  const target = e.target.closest('.tab');

  if (!target || draggedTab === null) return;

  e.preventDefault();

  document
    .querySelectorAll('.tab.drag-over')
    .forEach(t => t.classList.remove('drag-over'));

  if (+target.dataset.tab !== draggedTab) {
    target.classList.add('drag-over');
  }

  e.dataTransfer.dropEffect = 'move';
});

$('#tabs').addEventListener('dragleave', e => {
  const target = e.target.closest('.tab');

  if (target) {
    target.classList.remove('drag-over');
  }
});

$('#tabs').addEventListener('drop', e => {
  const target = e.target.closest('.tab');

  if (!target || draggedTab === null) return;

  e.preventDefault();

  const from = draggedTab;
  const to = +target.dataset.tab;

  if (from === to) return;

  const [moved] = tabs.splice(from, 1);
  tabs.splice(to, 0, moved);

  if (curTab === from) {
    curTab = to;
  } else if (from < curTab && to >= curTab) {
    curTab--;
  } else if (from > curTab && to <= curTab) {
    curTab++;
  }

  draggedTab = null;

  drawTabs();
});

/* ---------- Selection ---------- */
const byId = id => plants.find(p => p.id === id);

const picks = () =>
  [...chosen]
    .map(byId)
    .filter(Boolean)
    .sort((a, b) =>
      a.base.scientificName.localeCompare(b.base.scientificName)
    );

function drawSel() {
  const n = chosen.size;

  $('#selBtn').textContent = `${tr('SELECTION')} (${n})`;

  $('#selList').innerHTML =
    picks()
      .map(p =>
        `<li><span>${esc(p.base.scientificName)}</span><button data-unpick="${esc(p.id)}" aria-label="Remove">×</button></li>`
      )
      .join('') ||
    `<li class="empty">${esc(tr('No plants selected yet'))}</li>`;

  document
    .querySelectorAll('#selActs button')
    .forEach(b => (b.disabled = !n));
}

const setPick = (id, on) => {
  on ? chosen.add(id) : chosen.delete(id);

  document
    .querySelectorAll(`[data-pick="${id}"]`)
    .forEach(i => (i.checked = on));

  drawSel();

  if (selectionView) {
    if (chosen.size === 0) {
      selectionView = false;
      $('#selPanel').hidden = true;
    }

    render();
  }
};

document.addEventListener('change', e => {
  if (e.target.dataset && e.target.dataset.pick) {
    setPick(e.target.dataset.pick, e.target.checked);
  }
});

$('#selectAll').addEventListener('change', e => {
  const on = e.target.checked;

  shown.forEach(p => {
    if (on) {
      chosen.add(p.id);
    } else {
      chosen.delete(p.id);
    }

    document
      .querySelectorAll(`[data-pick="${p.id}"]`)
      .forEach(i => (i.checked = on));
  });

  drawSel();
  render();
});


$('#selList').addEventListener('click', e => {
  const b = e.target.closest('[data-unpick]');

  if (b) {
    setPick(b.dataset.unpick, false);
  }
});

$('#selBtn').addEventListener('click', () => {
  if (chosen.size === 0) {
    return;
  }

  selectionView = !selectionView;

  const panel = $('#selPanel');

  if (selectionView) {
    panel.hidden = false;

    $('#selList').hidden = true;

    render();
  } else {
    panel.hidden = true;

    $('#selList').hidden = false;

    render();
  }
});

/* ---------- Downloads ---------- */
const MN = { en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], nl: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'] };
const mtxt = ms => ms.map(m => MN[lang][m - 1]).join(', ');
const head = p => `${p.base.scientificName} - ${cn(p)}`;
function periods(p, k) {
  return { '@flowers': [p.flowers.floweringMonths, p.flowers.floweringColour],
    '@leaves': [p.leaves.leafMonths, p.leaves.leafColour, p.leaves.autumnMonths, p.leaves.autumnColour],
    '@fruit': [p.fruit.fruitingMonths, p.fruit.fruitColour] }[k];
}
function infoRows(p) {
  return GROUPS.map(([, colour, title, fields]) => ({ title: tr(title), colour, rows: fields.map(f => {
    if (f[0] === '@') {
      const [m, c, am = [], ac = []] = periods(p, f);
      const v = [m.length ? `${mtxt(m)} (${c.map(tr).join('/')})` : '', am.length ? `${tr('autumn')}: ${mtxt(am)} (${ac.map(tr).join('/')})` : ''].filter(Boolean).join('; ');
      return [tr(DIAG[f]), v];
    }
    return [tr(label(f.split('.').pop())), fieldText(p, f)];
  }).filter(r => r[1]) })).filter(g => g.rows.length);
}
function save(name, blob) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
const textFile = (name, s) => save(name, new Blob(['\ufeff' + s], { type: 'text/plain;charset=utf-8' }));
const loadPdf = () => window.jspdf ? Promise.resolve() : new Promise((ok, no) => {
  const s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  s.onload = ok; s.onerror = () => no(new Error('Could not load the PDF library (internet connection needed).'));
  document.head.appendChild(s);
});
const photo = src => new Promise(ok => {
  const i = new Image();
  i.onload = () => {
    const s = Math.min(i.naturalWidth, i.naturalHeight), c = document.createElement('canvas');
    c.width = c.height = Math.min(s, 900);
    c.getContext('2d').drawImage(i, (i.naturalWidth - s) / 2, (i.naturalHeight - s) / 2, s, s, 0, 0, c.width, c.height);
    ok(c.toDataURL('image/jpeg', 0.92));
  };
  i.onerror = () => ok(null);
  i.src = encodeURI(src);
});
async function pdfGrid(list) {
  await loadPdf();
  const doc = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4' });
  const M = 12, G = 6, cw = (210 - 2 * M - 2 * G) / 3, ch = cw + 16, rows = Math.floor((297 - 2 * M + G) / (ch + G));
  for (let i = 0; i < list.length; i++) {
    const k = i % (3 * rows);
    if (i && !k) doc.addPage();
    const x = M + (k % 3) * (cw + G), y = M + Math.floor(k / 3) * (ch + G), p = list[i], img = await photo(p.mainImage);
    if (img) doc.addImage(img, 'JPEG', x, y, cw, cw); else doc.rect(x, y, cw, cw);
    doc.setTextColor(30, 42, 34).setFont('helvetica', 'bolditalic').setFontSize(9).text(doc.splitTextToSize(p.base.scientificName, cw).slice(0, 2), x, y + cw + 4.5);
    doc.setFont('helvetica', 'normal').setFontSize(8.5).text(doc.splitTextToSize(cn(p), cw).slice(0, 2), x, y + cw + 12);
  }
  doc.save('plant-selection.pdf');
}
async function pdfInfo(list) {
  await loadPdf();
  const doc = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4' }), ink = [30, 42, 34];
  for (let i = 0; i < list.length; i++) {
    const p = list[i], img = await photo(p.mainImage);
    if (i) doc.addPage();
    if (img) doc.addImage(img, 'JPEG', 12, 14, 50, 50);
    const sl = doc.splitTextToSize(p.base.scientificName, 118), ny = 22 + sl.length * 7.5;
    doc.setTextColor(...ink).setFont('helvetica', 'bolditalic').setFontSize(18).text(sl, 68, 22);
    doc.setFont('helvetica', 'normal').setFontSize(12).text(cn(p), 68, ny);
    doc.setFontSize(10).text(p.base.family, 68, ny + 6).text(`${tr('Zone')} ${p.hardinessZones.join(', ')}`, 68, ny + 12);
    let y = 72;
    for (const g of infoRows(p)) {
      if (y > 262) { doc.addPage(); y = 14; }
      doc.setTextColor(g.colour).setFont('helvetica', 'bold').setFontSize(11).text(g.title, 12, y);
      y += 5.5;
      doc.setTextColor(...ink).setFont('helvetica', 'normal').setFontSize(9.5);
      for (const [l, v] of g.rows) {
        const ls = doc.splitTextToSize(`${l}: ${v}`, 182);
        if (y + ls.length * 4.6 > 284) { doc.addPage(); y = 14; }
        doc.text(ls, 16, y); y += ls.length * 4.6 + 1;
      }
      y += 3;
    }
  }
  doc.save('plant-selection-info.pdf');
}
$('#selActs').addEventListener('click', async e => {
  const act = e.target.dataset.a;
  if (!act || !chosen.size) return;
  const list = picks();
  e.target.disabled = true;
  try {
    if (act === 'txt') textFile('plant-selection.txt', list.map(head).join('\n'));
    else if (act === 'txti') textFile('plant-selection-info.txt', list.map(p => [head(p), `${p.base.family} | ${tr('Zone')} ${p.hardinessZones.join(', ')}`, '', ...infoRows(p).flatMap(g => [g.title.toUpperCase(), ...g.rows.map(([l, v]) => `  ${l}: ${v}`), ''])].join('\n')).join('\n' + '='.repeat(40) + '\n\n'));
    else if (act === 'pdf') await pdfGrid(list);
    else await pdfInfo(list);
  } catch (err) { alert(err.message); }
  drawSel();
});
