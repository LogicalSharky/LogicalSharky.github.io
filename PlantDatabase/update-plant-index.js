const fs = require("fs");
const path = require("path");

const plantInfoDir = path.join(__dirname, "plant-info");
const outputFile = path.join(__dirname, "data", "plant-index.json");

const allTagKeys = [
  "FAMILY", "TYPE OF PLANT", "USE", "FLOWER COLOUR", "INDIVIDUAL FLOWER SHAPE","FLOWER CLUSTER SHAPE", "FLOWERING PERIOD",
  "FRUITS", "FRUITING PERIOD", "EDIBLE", "LEAF COLOUR", "AUTUMN COLOURS", "WINTER ASPECT", 
  "VALUE FOR INSECTS", "SPECIAL FEATURES", "PLANT WARNINGS", "HABITAT", "ORIGIN TO BELGIUM",
  "HARDINESS ZONE (BE 7-8)", "SUNLIGHT", "GROUND TYPE", "SOIL DRAINAGE", "SOIL MOISTURE", 
  "SOIL PH", "NUTRIENTS","LIFE CYCLE", "HEIGHT", "WIDTH", "GROWTH RATE", "ACCESSIBILITY", 
  "PLANTING DENSITY", "SCHOOL SUBJECT 2023-2025"
];

function extractJSON(content) {
  const firstBrace = content.indexOf("{");
  const lastBrace = content.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) return null;

  let jsonString = content.slice(firstBrace, lastBrace + 1);

  jsonString = jsonString.replace(/\/\/.*$/gm, "");

  return jsonString;
}

const plantFiles = fs.readdirSync(plantInfoDir).filter(f => f.endsWith(".json"));

const plantIndex = [];

plantFiles.forEach(file => {
  const filePath = path.join(plantInfoDir, file);
  const rawContent = fs.readFileSync(filePath, "utf-8");

  const cleanedJSON = extractJSON(rawContent);

  if (!cleanedJSON) {
    console.log(`Skipping invalid structure: ${file}`);
    return;
  }

  let data;

  try {
    data = JSON.parse(cleanedJSON);
  } catch (err) {
    console.log(`Skipping invalid JSON after cleaning: ${file}`);
    return;
  }

  const isTemplate =
    typeof data["FAMILY"] === "string" &&
    data["FAMILY"].trim().toLowerCase() === "text";

  let tags = [];

  if (!isTemplate) {
    allTagKeys.forEach(key => {
      const value = data[key];

      if (!value) return;

      if (Array.isArray(value)) {
        if (value.length === 0) return;
        tags.push(...value);
      } else {
        tags.push(value);
      }
    });
  } else {
    if (Array.isArray(data["SCHOOL SUBJECT"])) {
      tags.push(...data["SCHOOL SUBJECT"]);
    }
  }

  plantIndex.push({
    "LATIN NAME": data["LATIN NAME"] || "",
    "DUTCH NAME": data["DUTCH NAME"] || "",
    "MAIN IMAGE": data["MAIN IMAGE"] || "",
    "FILE": path.join("plant-info", file).replace(/\\/g, "/"),
    "TAGS": tags
  });
});

const fileContent =
  "[\n" +
  plantIndex.map(p => "  " + JSON.stringify(p)).join(",\n") +
  "\n]";

fs.writeFileSync(outputFile, fileContent, "utf-8");

console.log(`Plant index updated with ${plantIndex.length} plants!`);