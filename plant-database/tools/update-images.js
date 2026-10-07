const fs = require("fs");
const path = require("path");

const jsonDirectory =
    "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\plant-database\\data\\plants-info";

const imagesDirectory =
    "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\plant-database\\images\\plants";

const imageWebPath = "/images/plants";

const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".avif",
    ".bmp",
    ".tif",
    ".tiff",
    ".svg"
];

function isImageFile(filename) {
    const extension = path.extname(filename).toLowerCase();
    return imageExtensions.includes(extension);
}

function toWebPath(...parts) {
    return parts
        .map(part => part.replace(/\\/g, "/"))
        .join("/");
}

const jsonFiles = fs
    .readdirSync(jsonDirectory, { withFileTypes: true })
    .filter(entry =>
        entry.isFile() &&
        path.extname(entry.name).toLowerCase() === ".json"
    );

console.log(`Found ${jsonFiles.length} plant JSON files.\n`);

let updated = 0;
let skipped = 0;
let missingFolders = 0;
let emptyFolders = 0;

for (const jsonFile of jsonFiles) {

    const jsonPath = path.join(jsonDirectory, jsonFile.name);

    let plantData;

    try {
        const raw = fs.readFileSync(jsonPath, "utf8");
        plantData = JSON.parse(raw);
    } catch (error) {
        console.log(
            `ERROR: Could not read ${jsonFile.name}`
        );
        console.log(`       ${error.message}\n`);

        skipped++;
        continue;
    }

    const plantName = plantData.id;

    if (!plantName) {
        console.log(
            `SKIPPED: ${jsonFile.name} has no "id" property.\n`
        );

        skipped++;
        continue;
    }

    const plantFolderPath = path.join(
        imagesDirectory,
        plantName
    );

    if (!fs.existsSync(plantFolderPath)) {
        console.log(
            `WARNING: No image folder found for "${plantName}"`
        );
        console.log(
            `         Expected: ${plantFolderPath}\n`
        );

        missingFolders++;
        continue;
    }

    const images = fs
        .readdirSync(plantFolderPath, { withFileTypes: true })
        .filter(entry => {
            return entry.isFile() && isImageFile(entry.name);
        })
        .map(entry => {
            return toWebPath(
                imageWebPath,
                plantName,
                entry.name
            );
        });

    images.sort((a, b) =>
        a.localeCompare(b, undefined, {
            numeric: true,
            sensitivity: "base"
        })
    );

    if (images.length === 0) {
        console.log(
            `WARNING: No images found for "${plantName}"`
        );
        console.log(
            `         Folder: ${plantFolderPath}\n`
        );

        emptyFolders++;
        continue;
    }

    plantData.images = images;
    plantData.mainImage = images[0];

    fs.writeFileSync(
        jsonPath,
        JSON.stringify(plantData, null, 2),
        "utf8"
    );

    console.log(
        `UPDATED: ${plantName}`
    );

    console.log(
        `         Images: ${images.length}`
    );

    console.log(
        `         Main:   ${images[0]}\n`
    );

    updated++;
}

console.log("============================================================");
console.log("DONE");
console.log("============================================================");

console.log(`JSON files found:       ${jsonFiles.length}`);
console.log(`JSON files updated:     ${updated}`);
console.log(`Skipped:                ${skipped}`);
console.log(`Missing image folders:  ${missingFolders}`);
console.log(`Empty image folders:    ${emptyFolders}`);

console.log("============================================================");