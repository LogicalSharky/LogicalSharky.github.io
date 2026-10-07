const fs = require("fs");
const path = require("path");

const plantsInfoDirectory =
    "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\plant-database\\data\\plants-info";

const indexFile =
    "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\plant-database\\data\\plants-index.json";

const files = fs
    .readdirSync(plantsInfoDirectory)
    .filter(file => file.toLowerCase().endsWith(".json"));

const plants = [];

function fixImagePath(imagePath) {
    if (!imagePath) return "";

    return String(imagePath)
        .replace(/\\/g, "/")
        .replace(/^\/+/, "");
}

for (const file of files) {
    const filePath = path.join(plantsInfoDirectory, file);

    try {
        const content = fs.readFileSync(filePath, "utf8");
        const plant = JSON.parse(content);

        if (!plant.id) {
            plant.id = path.basename(file, ".json");
        }

        if (!plant.base) {
            plant.base = {};
        }

        if (!plant.base.scientificName) {
            plant.base.scientificName = plant.id;
        }

        if (!plant.base.commonName) {
            plant.base.commonName = "";
        }

        if (!plant.base.commonNameNl) {
            plant.base.commonNameNl = "";
        }

        if (!plant.base.family) {
            plant.base.family = "";
        }

        if (!Array.isArray(plant.hardinessZones)) {
            plant.hardinessZones = [];
        }

        plant.mainImage = fixImagePath(plant.mainImage);

        delete plant.images;

        plants.push(plant);

        console.log("Added: " + file);

    } catch (error) {
        console.error("ERROR reading: " + file);
        console.error(error.message);
    }
}

plants.sort((a, b) =>
    String(a.base.scientificName || "").localeCompare(
        String(b.base.scientificName || "")
    )
);

const output =
    "[\n" +
    plants.map(plant => JSON.stringify(plant)).join(",\n") +
    "\n]";

fs.writeFileSync(indexFile, output, "utf8");

console.log("");
console.log("========================================");
console.log("Plant index updated successfully!");
console.log("========================================");
console.log("Plants indexed: " + plants.length);
console.log("Only mainImage is included.");
console.log("Image paths have no leading /.");
console.log("========================================");