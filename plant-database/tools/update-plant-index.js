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

function getArray(value) {
    return Array.isArray(value) ? value : [];
}

function getValue(value, fallback = null) {
    return value !== undefined ? value : fallback;
}

for (const file of files) {
    const filePath = path.join(plantsInfoDirectory, file);

    try {
        const content = fs.readFileSync(filePath, "utf8");
        const plant = JSON.parse(content);

        // ------------------------------------------------------------
        // Basic values
        // ------------------------------------------------------------

        const id = plant.id || path.basename(file, ".json");

        const base = plant.base || {};
        const siteConditions = plant.siteConditions || {};
        const size = plant.size || {};
        const flowers = plant.flowers || {};
        const leaves = plant.leaves || {};
        const stemAndBark = plant.stemAndBark || {};
        const fruit = plant.fruit || {};
        const variegation = plant.variegation || {};
        const ecology = plant.ecology || {};
        const practical = plant.practical || {};

        // ------------------------------------------------------------
        // Create ONLY the fields needed by the index/sorting/filtering
        // ------------------------------------------------------------

        const indexPlant = {
            id: id,

            mainImage: fixImagePath(plant.mainImage),

            hardinessZones: getArray(plant.hardinessZones),

            base: {
                scientificName: base.scientificName || id,
                commonName: base.commonName || "",
                commonNameNl: base.commonNameNl || "",
                family: base.family || "",
                type: getArray(base.type),
                application: getArray(base.application)
            },

            siteConditions: {
                sunlight: getArray(siteConditions.sunlight),
                soil: getArray(siteConditions.soil),
                moisture: getArray(siteConditions.moisture),
                ph: getArray(siteConditions.ph),
                nutrients: getArray(siteConditions.nutrients),
                extremes: getArray(siteConditions.extremes)
            },

            size: {
                heightExclFlowers: getValue(size.heightExclFlowers),
                heightInclFlowers: getValue(size.heightInclFlowers),
                climbingHeight: getValue(size.climbingHeight),
                width: getValue(size.width),
                largeLeaves: getArray(size.largeLeaves)
            },

            flowers: {
                floweringMonths: getArray(flowers.floweringMonths),
                floweringColour: getArray(flowers.floweringColour),
                shape: getArray(flowers.shape),
                orientation: getArray(flowers.orientation),
                other: getArray(flowers.other)
            },

            leaves: {
                leafColour: getArray(leaves.leafColour),
                autumnColour: getArray(leaves.autumnColour),
                evergreen: getArray(leaves.evergreen),
                texture: getArray(leaves.texture),
                structure: getArray(leaves.structure)
            },

            stemAndBark: {
                barkColour: getArray(stemAndBark.barkColour),
                barkTexture: getArray(stemAndBark.barkTexture)
            },

            fruit: {
                fruitingMonths: getArray(fruit.fruitingMonths),
                fruitColour: getArray(fruit.fruitColour),
                fruitType: getArray(fruit.fruitType),
                edible: getArray(fruit.edible),
                ediblePartsRaw: getArray(fruit.ediblePartsRaw)
            },

            variegation: {
                variegated: getArray(variegation.variegated),
                variegationColour: getArray(variegation.variegationColour),
                variegationType: getArray(variegation.variegationType)
            },

            warnings: getArray(plant.warnings),

            ecology: {
                habitat: getArray(ecology.habitat),
                nativeRange: getArray(ecology.nativeRange),
                successionalStage: getArray(ecology.successionalStage),
                valueToAnimals: getArray(ecology.valueToAnimals)
            },

            practical: {
                rarity: getArray(practical.rarity),
                obtainability: getArray(practical.obtainability)
            }
        };

        plants.push(indexPlant);

        console.log("Added: " + file);

    } catch (error) {
        console.error("ERROR reading: " + file);
        console.error(error.message);
    }
}

// ------------------------------------------------------------
// Sort by scientific name
// ------------------------------------------------------------

plants.sort((a, b) =>
    String(a.base.scientificName || "").localeCompare(
        String(b.base.scientificName || "")
    )
);

// ------------------------------------------------------------
// Write master index
// ------------------------------------------------------------

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
console.log("Only sorting/filtering fields are included.");
console.log("Image paths have no leading /.");
console.log("========================================");