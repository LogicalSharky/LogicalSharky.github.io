const fs = require("fs");
const path = require("path");

const folderPath = "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\PlantDatabase\\plant-info";
const outputFile = "latin_names.txt";

const latinNames = [];

fs.readdirSync(folderPath).forEach(file => {
    if (!file.endsWith(".json") && !file.endsWith(".txt")) return;

    const filePath = path.join(folderPath, file);

    try {
        const content = fs.readFileSync(filePath, "utf8");

        const match = content.match(/"LATIN NAME"\s*:\s*"([^"]+)"/);

        if (match) {
            latinNames.push(match[1]);
        } else {
            console.log(`No LATIN NAME found in ${file}`);
        }

    } catch (err) {
        console.log(`Skipped ${file}: ${err.message}`);
    }
});

const uniqueNames = [...new Set(latinNames)];

fs.writeFileSync(outputFile, uniqueNames.join("\n"), "utf8");

console.log(`Done! Saved ${uniqueNames.length} names to ${outputFile}`);