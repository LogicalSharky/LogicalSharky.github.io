const fs = require("fs");
const path = require("path");

const imagesDirectory =
    "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\plant-database\\images\\plants";

const outputDirectory =
    "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\plant-database\\data\\plants-info";

const imageWebPath = "/images/plants";

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];

function formatScientificName(name) {
    return name
        .replace(/-/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase());
}

if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
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

        base: {
            scientificName: formatScientificName(plantName),

            commonName: "",
            commonNameNl: "",
            family: "",
            type: [
                "tree",
                "conifer",
                "palm tree",
                "arborescent shrub",
                "large shrub",
                "small shrub",
                "bamboo",
                "climbing plant",
                "herbaceous perennial",
                "ornamental grass",
                "fern",
                "ground cover",
                "bulb",
                "aquatic plant",
                "carnivorous plant",
                "epiphyte",
                "succulent",
                "cacti"
            ],
            application: [
                "bonsai",
                "hedge plant",
                "house plant",
                "nitrogen-fixing",
                "oriental garden",
                "pet safe",
                "pollard",
                "topiary tree",
                "tropical look",
                "stinzen plants (historic estate plants BE)"
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
                "poorly drained",
                "moist but well drained",
                "well drained"
            ],
            ph: [
                "acidic",
                "neutral",
                "alkaline"
            ],
            nutrients: [
                "nutrient rich",
                "nutrient poor"
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
                "climate adaptive (zone 8 BE)"
            ],
            humidity: ""
        },

        size: {
            heightExclFlowers: null,
            heightInclFlowers: null,
            climbingHeight: null,
            width: null,
            largeLeaves: [
                "large leaves (+50cm)"
            ]
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
            texture: [
                "smooth",
                "glossy",
                "velvet",
                "corrugated",
                "thick",
                "delicate"
            ],
            fenestrations: "Gets fenestrations when sizing up",
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
            fruitType: [
                "fleshy fruit",
                "berries",
                "nuts",
                "cones",
                "samara"
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

        variegation: {
            variegated: [
                "variegated"
            ],
            variegationColour: [
                "cream",
                "green on green",
                "orange",
                "pink",
                "purple",
                "red",
                "silver",
                "white",
                "yellow"
            ],
            variegationType: [
                "central",
                "marbled",
                "marginata",
                "mosaic",
                "mint",
                "mottled",
                "sectoral",
                "splash",
                "striped"
            ]
        },

        warnings: [
            "allergenic",
            "invasive roots (macho)",
            "pest sensitive (outdoor)",
            "pest sensitive (indoor)",
            "toxic",
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
            nativeTo: "",
            nativeRange: [
                "native species",
                "cultivar or hybrid",
                "endangered in native country",
                "native (BE)",
                "naturalized (BE)",
                "invasive (BE)"
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

        practical: {
            spacing: "",
            plantDensity: "",
            rarity: [
                "accessible (BE)",
                "rare (BE)",
                "unobtainable (BE)"
            ],
            obtainability: [
                "obtainable from BE growers"
            ],
            parentage: "",
        },

        discription: {
            note: "",
            noteNL: ""
        }
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