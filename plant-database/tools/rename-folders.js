const fs = require("fs");
const path = require("path");

const directory = "C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\plant-database\\images\\plants";

const entries = fs.readdirSync(directory, { withFileTypes: true });

for (const entry of entries) {
    if (!entry.isDirectory()) {
        continue;
    }

    const oldName = entry.name;

    const newName = oldName
        .replace(/ /g, "-")
        .toLowerCase();

    if (oldName === newName) {
        continue;
    }

    const oldPath = path.join(directory, oldName);
    const newPath = path.join(directory, newName);

    if (fs.existsSync(newPath)) {
        console.log("SKIPPED (already exists): " + oldName + " -> " + newName);
        continue;
    }

    fs.renameSync(oldPath, newPath);

    console.log(oldName + " -> " + newName);
}

console.log("Done! Only folder names were changed.");