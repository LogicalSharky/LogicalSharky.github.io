const fs = require("fs");
const path = require("path");

const imagesDirectory =
    "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\BG\\images\\plants";

const outputDirectory =
    "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\BG\\data\\plants-info";

const imageWebPath = "/images/plants";

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];


function formatScientificName(name) {
    return name
        .replace(/-/g, " ")
        .toLowerCase()
        .replace(/^(\s*\S)/, char => char.toUpperCase())
        .replace(/'([^']+)'/g, (match, text) => {
            return "'" + text.charAt(0).toUpperCase() + text.slice(1) + "'";
        });
}


const plantFolders = fs
    .readdirSync(imagesDirectory, { withFileTypes: true })
    .filter(entry => entry.isDirectory());

for (const plantFolder of plantFolders) {
    const plantName = plantFolder.name;
    const plantFolderPath = path.join(imagesDirectory, plantName);

    const images = fs
        .readdirSync(plantFolderPath, { withFileTypes: true })
        .filter(entry => {
            if (!entry.isFile()) return false;

            const extension = path.extname(entry.name).toLowerCase();
            return imageExtensions.includes(extension);
        })
        .map(entry => {
            return `${imageWebPath}/${plantName}/${entry.name}`;
        });

    images.sort();

    const plantData = {
        id: plantName,
        mainImage: images.length > 0 ? images[0] : "",
        images: images,

        hardinessZones: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],

        use: {
            scientificName: formatScientificName(plantName),

            commonName: "",
            commonNameNl: "",
            family: "",
            type: [
                "tree",
                "conifer",
                "palm tree",
                "shrub",
                "bamboo",
                "climbing plant",
                "herbaceous perennial",
                "ornamental grass",
                "fern",
                "ground cover",
                "bulb",
                "aquatic plant",
                "carnivorous plant",
                "succulent",
                "cacti"
            ],
            application: [
                "hedge plant",
                "pet safe",
            ]
        },

        siteConditions: {
            sunlight: [
                "full sun",
                "half shade",
                "shade"
            ],
            soil: [
                "clay",
                "loam",
                "sandy loam",
                "sand"
            ],
            moisture: [
                "wet",
                "moist",
                "dry"
            ],
            ph: [
                "acidic",
                "neutral",
                "alkaline"
            ],
            extremes: [
                "coastal area",
                "crevice and wall",
                "green joints",
                "street/paving",
                "tolerates brief flooding",
                "tolerates de-icing salt",
                "tolerates foot traffic and play",
                "tolerates wind exposure",
                "needs to be windsheltered",
                "vertical green & roof garden",
                "wadi",
                "climate adaptive"
            ],
        },

        size: {
            heightExclFlowers: null,
            heightInclFlowers: null,
            climbingHeight: null,
            width: null,
        },

        flowers: {
            floweringMonths: [
                1, 2, 3, 4, 5, 6,
                7, 8, 9, 10, 11, 12
            ],
            floweringColour: [
                "white",
                "yellow",
                "orange",
                "red",
                "pink",
                "purple",
                "blue",
                "green",
                "brown",
                "black"
            ],
            floweringSeason: [
                "winter (12-2)",
                "early spring (3)",
                "spring (4-5)",
                "early summer (6)",
                "summer (7-8)",
                "late summer (9)",
                "autumn (10-11)"
            ],
            shape: [
                "umbel, pseudanthium (incl. globose)",
                "campanulate, calyx, trumpet, cup",
                "whorl, corymb, spike, raceme, panicle",
                "actinomorphic",
                "zygomorphic"
            ],
            orientation: [
                "upright",
                "pendant"
            ],
            other: [
                "cut flowers",
                "fragrant flowers"
            ]
        },

        leaves: {
            leafMonths: [
                1, 2, 3, 4, 5, 6,
                7, 8, 9, 10, 11, 12
            ],
            leafColour: [
                "white",
                "grey",
                "yellow",
                "orange",
                "red",
                "pink",
                "purple",
                "blue",
                "green",
                "brown",
                "black"
            ],
            autumnMonths: [
                1, 2, 3, 4, 5, 6,
                7, 8, 9, 10, 11, 12
            ],
            autumnColour: [
                "yellow",
                "orange",
                "red"
            ],
            evergreen: [
                "evergreen",
                "semi-evergreen"
            ],
            structure: [
                "open",
                "dense"
            ]
        },

        stemAndBark: {
            barkColour: [
                "white",
                "grey",
                "brown",
                "black",
                "red",
                "orange",
                "green",
                "yellow",
                "multicoloured"
            ],
            barkTexture: [
                "smooth",
                "peeling",
                "fissured",
                "plated",
                "fibrous",
                "spiny"
            ]
        },

        fruit: {
            fruitingMonths: [
                1, 2, 3, 4, 5, 6,
                7, 8, 9, 10, 11, 12
            ],
            fruitType: [
                "fleshy fruit",
                "berries",
                "nuts",
                "cones",
                "samara"
            ],
            fruitColour: [
                "white/grey",
                "yellow",
                "orange",
                "red",
                "pink",
                "purple",
                "blue",
                "green",
                "brown",
                "black"
            ],
            fruitingSeason: [
                "winter (12-2)",
                "early spring (3)",
                "spring (4-5)",
                "early summer (6)",
                "summer (7-8)",
                "late summer (9)",
                "autumn (10-11)"
            ],
            edible: [
                "edible raw"
            ],
            ediblePartsRaw: [
                "edible fruit",
                "edible leaves",
                "edible flowers",
                "edible stem",
                "edible young shoots"
            ]
        },

        warnings: [
            "allergenic",
            "invasive roots (macho)",
            "toxic to humans",
            "skin irritant"
        ],

        ecology: {
            habitat: [
                "woodland",
                "rainforest",
                "forest edge",
                "shrubland",
                "grassland",
                "tundra",
                "arid land",
                "alpine",
                "rocky slopes",
                "dune habitat",
                "wetland",
                "riverbank",
                "freshwater aquatic",
                "saline habitat"
            ],
            nativeRange: [
                "native species",
                "naturalized",
                "invasive",
                "endangered"
            ],
            successionalStage: [
                "pioneer species",
                "intermediate species",
                "climax species",
                "support species"
            ],
            valueToAnimals: [
                "value to bees (BE)",
                "value to butterflies (BE)",
                "value to birds (BE)"
            ]
        },
    };

    const outputFile = path.join(
        outputDirectory,
        `${plantName}.json`
    );

    if (fs.existsSync(outputFile)) {
        console.log(`SKIPPED (already exists): ${plantName}.json`);
        continue;
    }

    fs.writeFileSync(
        outputFile,
        JSON.stringify(plantData, null, 2),
        "utf8"
    );

    console.log(`CREATED: ${plantName}.json`);
}

console.log("\nDone! Plant JSON files have been created.");