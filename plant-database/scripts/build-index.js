const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dir = path.join(root, 'data', 'plants-info');

const SEASONS = [
  ['winter', [12, 1, 2]],
  ['early spring', [3]],
  ['spring', [4, 5]],
  ['early summer', [6]],
  ['summer', [7]],
  ['late summer', [8]],
  ['autumn', [9, 10, 11]],
];
const seasons = months => SEASONS.filter(([, ms]) => ms.some(m => months.includes(m))).map(([name]) => name);

const plants = fs.readdirSync(dir)
  .filter(f => f.endsWith('.json'))
  .map(f => {
    const p = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    if (p.id + '.json' !== f) console.warn(`Slug mismatch: id "${p.id}" in file ${f}`);
    p.flowers.floweringSeasons = seasons(p.flowers.floweringMonths);
    p.fruit.fruitingSeasons = seasons(p.fruit.fruitingMonths);
    return p;
  });

fs.writeFileSync(path.join(root, 'data', 'plants-index.json'), JSON.stringify(plants));
console.log(`${plants.length} plant(s) indexed -> data/plants-index.json`);
