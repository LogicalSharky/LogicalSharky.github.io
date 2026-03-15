const fs = require("fs");
const path = require("path");

const plantInfoDir = path.join(__dirname, "plant-info");
const outputFile = path.join(__dirname, "data", "plant-index.json");

// Keys to collect as tags
const allTagKeys = [
  "FAMILY", "TYPE OF PLANT", "USE", "FLOWER COLOUR", "INDIVIDUAL FLOWER SHAPE","FLOWER CLUSTER SHAPE", "FLOWERING PERIOD",
  "FRUITS", "FRUITING PERIOD", "EDIBLE", "LEAF COLOUR", "AUTUMN COLOURS", "WINTER ASPECT", 
  "VALUE FOR INSECTS", "SPECIAL FEATURES", "PLANT WARNINGS", "HABITAT", "ORIGIN TO BELGIUM",
  "HARDINESS ZONE (BE 7-8)", "SUNLIGHT", "GROUND TYPE", "SOIL DRAINAGE", "SOIL MOISTURE", 
  "SOIL PH", "LIFE CYCLE", "HEIGHT", "WIDTH", "GROWTH RATE", "ACCESSIBILITY", "PLANTING DENSITY",
  "SCHOOL SUBJECT"
];

// Read all JSON files from plant-info directory
const plantFiles = fs.readdirSync(plantInfoDir).filter(f => f.endsWith(".json"));

const plantIndex = [];

plantFiles.forEach(file => {
  const filePath = path.join(plantInfoDir, file);
  const rawContent = fs.readFileSync(filePath, "utf-8").trim();

  // Skip files that don't start with a JSON object
  if (!rawContent.startsWith("{")) {
    console.log(`Skipping template file: ${file}`);
    return;
  }

  let data;

  try {
    data = JSON.parse(rawContent);
  } catch (err) {
    console.log(`Skipping invalid JSON file: ${file}`);
    return;
  }

  // Collect tags
  const tags = [];

  allTagKeys.forEach(key => {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        tags.push(...data[key]);
      } else {
        tags.push(data[key]);
      }
    }
  });

  plantIndex.push({
    "LATIN NAME": data["LATIN NAME"] || "",
    "DUTCH NAME": data["DUTCH NAME"] || "",
    "MAIN IMAGE": data["MAIN IMAGE"] || "",
    "FILE": path.join("plant-info", file).replace(/\\/g, "/"),
    "TAGS": tags
  });
});

// Write output
const fileContent = "[\n" + plantIndex.map(p => "  " + JSON.stringify(p)).join(",\n") + "\n]";
fs.writeFileSync(outputFile, fileContent, "utf-8");

console.log(`Plant index updated with ${plantIndex.length} plants!`);