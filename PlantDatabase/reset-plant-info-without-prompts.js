const fs = require('fs');
const path = require('path');

const inputFile = `C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\Backups\\v5 version before optimising changes\\images.js`;
const outputFolder = `C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\PlantDatabase\\plant-info`;

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

let data = fs.readFileSync(inputFile, 'utf-8');

data = data.replace(/\r?\n/g, ' ');

const plantObjects = data.match(/\{[^{}]*\}/g);

if (!plantObjects) {
    console.error('No plant objects found!');
    process.exit(1);
}

plantObjects.forEach(objText => {
    try {
        const plant = eval('(' + objText + ')');

        const fileName = plant['LATIN NAME'].replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-\']/g, '') + '.json';
        const filePath = path.join(outputFolder, fileName);

        const subImages = plant['SUB IMAGES'] || [];
        const schoolSubjects = Array.isArray(plant['SCHOOL SUBJECT']) ? plant['SCHOOL SUBJECT'] : [plant['SCHOOL SUBJECT']];

        const content = `
{
  "LATIN NAME": "${plant['LATIN NAME']}",
  "DUTCH NAME": "${plant['DUTCH NAME']}",
  "MAIN IMAGE": "${plant['MAIN IMAGE']}",
  "SCHOOL SUBJECT":${JSON.stringify(schoolSubjects)},
  "SUB IMAGES":${JSON.stringify(subImages, null, 4)}
}`;

        fs.writeFileSync(filePath, content, 'utf-8');

    } catch (err) {
        console.error('Failed to process plant:', objText, err);
    }
});

console.log('All plant files have been created!');