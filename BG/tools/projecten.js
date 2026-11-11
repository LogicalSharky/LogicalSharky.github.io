#!/usr/bin/env node
/*
  Projectnummers beheren zonder browser (alternatief voor de knop PROJECT UPLOADEN).
  Uitvoeren vanuit de hoofdmap van de website (waar index.html en de map data staan):

    node tools/projecten.js toevoegen <nummer> <export.pdf>     nummer toevoegen aan alle planten uit de PDF
    node tools/projecten.js verwijderen <nummer> [export.pdf]   nummer weghalen (zonder PDF: bij alle planten)
    node tools/projecten.js init                                 lege "projects": [] toevoegen waar die nog ontbreekt
    node tools/projecten.js sync                                 projectnummers uit de plantfiches overnemen in plants-index.json

  Elke wijziging past zowel data/plants-info/<id>.json als data/plants-index.json aan.
*/
'use strict';

const fs = require('fs');
const path = require('path');

const DATA_KEY = 'BuroGroenData';
const PROJ_RE = /^\d[\d.\-_]*$/;

function findDataDir() {
  for (const dir of [path.join(process.cwd(), 'data'), path.join(__dirname, '..', 'data'), process.cwd()]) {
    if (fs.existsSync(path.join(dir, 'plants-index.json'))) return dir;
  }
  fail('Map "data" met plants-index.json niet gevonden. Voer het script uit vanuit de hoofdmap van de website.');
}

function fail(msg) { console.error('Fout: ' + msg); process.exit(1); }

const fmt = {
  index: arr => '[\n' + arr.map(o => JSON.stringify(o)).join(',\n') + '\n]\n',
  detail: obj => fmt.value(obj, '') + '\n',
  value(v, ind) {
    const pad = ind + '  ';
    if (Array.isArray(v)) {
      if (!v.length) return '[]';
      if (v.every(x => x === null || typeof x !== 'object')) {
        const one = '[' + v.map(x => JSON.stringify(x)).join(', ') + ']';
        if (one.length <= 120) return one;
      }
      return '[\n' + v.map(x => pad + fmt.value(x, pad)).join(',\n') + '\n' + ind + ']';
    }
    if (v && typeof v === 'object') {
      const keys = Object.keys(v);
      if (!keys.length) return '{}';
      return '{\n' + keys.map(k => `${pad}${JSON.stringify(k)}: ${fmt.value(v[k], pad)}`).join(',\n') + '\n' + ind + '}';
    }
    return JSON.stringify(v);
  }
};

function readPdfIds(file) {
  if (!fs.existsSync(file)) fail(`PDF niet gevonden: ${file}`);
  const text = fs.readFileSync(file).toString('latin1');
  const m = text.match(new RegExp(`/${DATA_KEY}\\s*\\(([A-Za-z0-9+/=\\s]*)\\)`));
  if (!m) fail(`In "${file}" staan geen rastergegevens (enkel PDF's die met de nieuwe versie geëxporteerd zijn).`);
  let data;
  try { data = JSON.parse(Buffer.from(m[1].replace(/\s+/g, ''), 'base64').toString('utf8')); } catch (_) { fail('Rastergegevens onleesbaar.'); }
  return [...new Set((data.pages || []).flatMap(pg => (pg.cells || []).filter(Boolean).map(c => String(c.id))))];
}

function editProjects(obj, num, add) {
  const list = Array.isArray(obj.projects) ? obj.projects.map(String) : [];
  const had = list.includes(num);
  const next = add ? (had ? list : [...list, num]) : list.filter(v => v !== num);
  next.sort((a, b) => a.localeCompare(b, 'nl', { numeric: true }));
  obj.projects = next;
  return had;
}

function load(dataDir) {
  const indexFile = path.join(dataDir, 'plants-index.json');
  const index = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
  const infoDir = path.join(dataDir, 'plants-info');
  const detailFile = id => path.join(infoDir, `${id}.json`);
  return { index, indexFile, infoDir, detailFile };
}

function main() {
  const [cmd, num, pdf] = process.argv.slice(2);
  const dataDir = findDataDir();
  const db = load(dataDir);
  const known = new Set(db.index.map(p => p.id));

  if (cmd === 'toevoegen' || cmd === 'verwijderen') {
    const add = cmd === 'toevoegen';
    if (!num || !PROJ_RE.test(num)) fail('Geef een projectnummer dat met een cijfer begint, bv. 2405.');
    if (add && !pdf) fail('Geef ook de geëxporteerde PDF op.');
    const ids = pdf ? readPdfIds(pdf) : db.index.filter(p => (p.projects || []).map(String).includes(num)).map(p => p.id);
    const unknown = ids.filter(id => !known.has(id));
    const wanted = new Set(ids.filter(id => known.has(id)));
    let changed = 0;
    for (const entry of db.index) {
      if (!Array.isArray(entry.projects)) entry.projects = [];
      if (!wanted.has(entry.id)) continue;
      const had = editProjects(entry, num, add);
      if (add ? !had : had) changed++;
    }
    const noDetail = [];
    for (const id of wanted) {
      const f = db.detailFile(id);
      if (!fs.existsSync(f)) { noDetail.push(id); continue; }
      const obj = JSON.parse(fs.readFileSync(f, 'utf8'));
      editProjects(obj, num, add);
      fs.writeFileSync(f, fmt.detail(obj));
    }
    fs.writeFileSync(db.indexFile, fmt.index(db.index));
    console.log(`${add ? 'Toegevoegd aan' : 'Weggehaald bij'} ${changed} plant(en) (projectnummer ${num}).`);
    if (unknown.length) console.log(`Niet in de database: ${unknown.join(', ')}`);
    if (noDetail.length) console.log(`Geen plantfiche gevonden (enkel index aangepast): ${noDetail.join(', ')}`);
    return;
  }

  if (cmd === 'init') {
    let files = 0;
    if (fs.existsSync(db.infoDir)) {
      for (const name of fs.readdirSync(db.infoDir).filter(n => n.endsWith('.json'))) {
        const f = path.join(db.infoDir, name);
        const obj = JSON.parse(fs.readFileSync(f, 'utf8'));
        if (Array.isArray(obj.projects)) continue;
        obj.projects = [];
        fs.writeFileSync(f, fmt.detail(obj));
        files++;
      }
    }
    db.index.forEach(e => { if (!Array.isArray(e.projects)) e.projects = []; });
    fs.writeFileSync(db.indexFile, fmt.index(db.index));
    console.log(`"projects" toegevoegd aan ${files} plantfiche(s); index bijgewerkt.`);
    return;
  }

  if (cmd === 'sync') {
    let n = 0;
    for (const entry of db.index) {
      const f = db.detailFile(entry.id);
      const obj = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null;
      const list = Array.isArray(obj?.projects) ? obj.projects.map(String) : (entry.projects || []);
      if (JSON.stringify(list) !== JSON.stringify(entry.projects)) n++;
      entry.projects = list;
    }
    fs.writeFileSync(db.indexFile, fmt.index(db.index));
    console.log(`Index bijgewerkt (${n} plant(en) gewijzigd).`);
    return;
  }

  console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0].replace('#!/usr/bin/env node\n/*', '').trim());
}

main();
