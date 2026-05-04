const fs = require('fs');
const path = require('path');

const imagesRoot = `C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\HouseplantDatabase\\images`;
const outputFolder = `C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\HouseplantDatabase\\plant-info`;

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

const plantFolders = fs.readdirSync(imagesRoot, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

plantFolders.forEach(folderName => {
    try {
        const folderPath = path.join(imagesRoot, folderName);

        const images = fs.readdirSync(folderPath)
            .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
            .sort((a, b) => {
                const numA = parseInt(a.match(/\d+/)?.[0] || 0);
                const numB = parseInt(b.match(/\d+/)?.[0] || 0);
                return numA - numB;
            });

        if (images.length === 0) {
            console.warn(`No images found for ${folderName}`);
            return;
        }

        const latinName = folderName;

        const mainImage = `images/${folderName}/${images[0]}`;
        const subImages = images.map(img => `images/${folderName}/${img}`);

        const fileName = latinName
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9\-\']/g, '') + '.json';

        const filePath = path.join(outputFolder, fileName);

        const content = `{
  "LATIN NAME": "${latinName}",
  "MAIN IMAGE": "${mainImage}",
  "SUB IMAGES": ${JSON.stringify(subImages, null, 4)}
}`;

        fs.writeFileSync(filePath, content, 'utf-8');

    } catch (err) {
        console.error('Error processing:', folderName, err);
    }
});

console.log('All clean JSON files created!');