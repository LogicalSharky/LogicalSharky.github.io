const imageCache = new Map();
let overlayRequestId = 0;
const gallery = document.getElementById("gallery");
const searchBar = document.getElementById("searchBar");
const tagFiltersDiv = document.getElementById("tagFilters");

const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const overlayDetails = document.querySelector(".overlay-details");
const thumbnailRow = document.getElementById("thumbnailRow");
const closeBtn = document.querySelector(".close-btn");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

/* =====================================================
   MENU / SIDEBAR (UNCHANGED)
===================================================== */

function updateMenuButtonVisibility() {
  if (window.innerWidth <= 800) {
    menuToggle.style.display =
      overlay.classList.contains("hidden") && !sidebar.classList.contains("show")
        ? "block"
        : "none";
  } else {
    menuToggle.style.display = "none";
  }
}

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  updateMenuButtonVisibility();
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 800 &&
    sidebar.classList.contains("show") &&
    !sidebar.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    sidebar.classList.remove("show");
    updateMenuButtonVisibility();
  }
});

window.addEventListener("resize", updateMenuButtonVisibility);
overlay.addEventListener("transitionend", updateMenuButtonVisibility);
overlay.addEventListener("click", updateMenuButtonVisibility);
document.addEventListener("DOMContentLoaded", updateMenuButtonVisibility);

/* =====================================================
   STATE
===================================================== */

let filteredPlants = [];
let currentPlantIndex = 0;
let currentImageIndex = 0;

/* =====================================================
   IMAGE HELPER (FINAL, WORKING)
===================================================== */

function getAllImagesFromSameFolder(mainImagePath, maxImages = 20) {
  const parts = mainImagePath.split("/");
  const folder = parts.slice(0, -1).join("/") + "/";
  const folderName = parts[parts.length - 2];

  const images = [];
  for (let i = 1; i <= maxImages; i++) {
    images.push(`${folder}${folderName} ${i}.jpg`);
  }
  return images;
}

/* =====================================================
   TAG DEFINITIONS (UNCHANGED)
===================================================== */

const allTags = {
  "TYPE OF PLANT": ["Aquatic plant","Bamboo","Biennial","Bush","Climbing plant","Flower bulb","Ground cover","Ornamental grass","Perennial","Pine tree","Shrub","Tree","Weeds"],
  "USE": ["Coastal area","Drought tolerant","Fragrant","Hardening tolerant","Hedge","Monkey proof","Pioneer species","Species for birds","Species for insects","Thickets","Vertical green & Roof garden","Wadi"],
  "--------------COLOUR---------------":[],
  "FLOWER COLOUR": ["Black flowers","Blue flowers","Brown flowers","Green flowers","Orange flowers","Pink flowers","Purple flowers","Red flowers","White flowers","Yellow flowers"],
  "LEAF COLOUR": ["Black leaves","Blue leaves","Brown leaves","Green leaves","Grey leaves","Pink leaves","Purple leaves","Red leaves","White leaves","Yellow leaves"],
  "FLOWERING PERIOD": ["April","August","December","February","January","July","June","March","May","November","October","September"],
  "-----------------SIZE-----------------":[],
  "HEIGHT": [">0.2m","0.2m","0.5m","1m","1.5m","2m","3m","5m","7-8m","10m","20m","+20m"],
  "WIDTH": ["2 meter","3 meter","5 meter","7-8 meter","10 meter","15 meter","20 meter","+20 meter"],
  "-------------LOCATION-------------":[],
  "SUNLIGHT": ["Full sunlight","Half shade","Shade"],
  "GROUND TYPE": ["Clay","Loam","Rocks","Sand","Sandy soil"],
  "MOISTURE LEVEL": ["Dry","Moist","Well-drained"],
  "PH VALUE": ["Acid","Lime","Neutral"],
  "LOCATION": ["Windscheltered"],
  "-------------FEATURES-------------":[],
  "WINTER FEATURES": ["Evergreen","No winterfeatures","Winter features"],
  "AUTUMN COLOURS": ["Orange autumn leaves","Red autumn leaves","Yellow autumn leaves"],
  "FRUITS": ["Berries","Catkins","Nuts","Pine cones","Seed pods","fruits"],
  "EDIBLE": ["Berries","Flowers","Fruits","Leaves","Nuts","Stem","after processing"],
  "ORIGIN": ["Introduced","Invasive","Native"],
  "SPECIAL FEATURES": ["Large leaves","Luminescent","Thorns","Toxic","Tropical look"],
  "---------------OTHER----------------":[],
  "PLANTING DENSITY": ["1/m²","2/m²","3/m²","4/m²","5/m²","6/m²","7/m²","8/m²","9/m²","10/m²","11/m²","12/m²","13/m²","14/m²","15/m²"],
  "AVERAGE PRICE P9 OR 10/12": ["€5","€10","€15","€20","€25","€30","€40","€50","€75","€100","€150","€200","€300","€500","€750","€1000","+€1000"],
  "SCHOOL SUBJECT": ["Plantenkennis 1","Plantecologie","Plantenkennis 2"],
  "NOTE": ["text"]
};

/* =====================================================
   TAG SIDEBAR GENERATION
===================================================== */

for (const group in allTags) {
  if (group === "NOTE") continue;

  const groupDiv = document.createElement("div");
  groupDiv.classList.add("tag-group");

  const title = document.createElement("p");
  title.textContent = group;
  title.classList.add("tag-group-title");
  groupDiv.appendChild(title);

  allTags[group].forEach((tag) => {
    const label = document.createElement("label");
    label.classList.add("tag-label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = tag;
    checkbox.classList.add("tag-checkbox");

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(tag));
    groupDiv.appendChild(label);

    checkbox.addEventListener("change", () => {
      updateSearchBarFromCheckboxes();
      renderPlants();
    });
  });

  tagFiltersDiv.appendChild(groupDiv);
}

function updateSearchBarFromCheckboxes() {
  const checkedTags = [...document.querySelectorAll(".tag-checkbox:checked")].map(cb => cb.value);
  searchBar.value = checkedTags.join(", ");
}

/* =====================================================
   SEARCH & FILTER
===================================================== */

function filterPlantsBySearch() {
  const rawInput = searchBar.value.toLowerCase();
  if (!rawInput) return plants;

  const orGroups = rawInput.split("/").map(g =>
    g.split(",").map(t => t.trim()).filter(Boolean)
  );

  return plants.filter(plant =>
    orGroups.some(group =>
      group.every(tag => {
        let isExclusion = false;
        if (tag.startsWith("-")) {
          tag = tag.slice(1).trim();
          isExclusion = true;
        }

        const tagLower = tag.toLowerCase();

        const matches =
          Object.keys(plant).some(key => {
            if (key === "Other") return false;
            const value = plant[key];
            if (!value) return false;
            if (Array.isArray(value))
              return value.some(v => v.toLowerCase() === tagLower);
            return typeof value === "string" && value.toLowerCase() === tagLower;
          }) ||
          plant["Latin name"].toLowerCase().includes(tagLower) ||
          plant["Dutch name"].toLowerCase().includes(tagLower);

        return isExclusion ? !matches : matches;
      })
    )
  );
}

searchBar.addEventListener("input", () => {
  const tags = searchBar.value.toLowerCase().split(/[,\/]/).map(t => t.trim());
  document.querySelectorAll(".tag-checkbox").forEach(
    cb => (cb.checked = tags.includes(cb.value.toLowerCase()))
  );
  renderPlants();
});

/* =====================================================
   GALLERY
===================================================== */

function renderPlants() {
  gallery.innerHTML = "";
  filteredPlants = filterPlantsBySearch();

  filteredPlants.forEach((plant, index) => {
    const plantDiv = document.createElement("div");
    plantDiv.classList.add("plant");
    if (plant["ORIGIN"]?.includes("Invasive")) plantDiv.classList.add("invasive");

    const img = document.createElement("img");
    const images = getAllImagesFromSameFolder(plant["Image path"]);

    let imgIndex = 0;
    img.src = images[imgIndex] || "";

    img.onerror = () => {
      imgIndex++;
      if (images[imgIndex]) img.src = images[imgIndex];
    };

    img.alt = plant["Latin name"];
    img.addEventListener("click", () => openOverlayByIndex(index));

    const info = document.createElement("div");
    info.classList.add("plant-info");
    info.innerHTML = `<p><strong>${plant["Latin name"]}</strong></p><p>${plant["Dutch name"]}</p>`;

    plantDiv.appendChild(img);
    plantDiv.appendChild(info);
    gallery.appendChild(plantDiv);
  });
}

/* =====================================================
   OVERLAY
===================================================== */

function openOverlayByIndex(index) {
  currentPlantIndex = index;
  currentImageIndex = 0;
  overlay.classList.remove("hidden");
  renderOverlayContent(filteredPlants[index]);
}

function closeOverlay() {
  overlay.classList.add("hidden");
  overlayImg.src = "";
  overlayDetails.innerHTML = "";
  thumbnailRow.innerHTML = "";
}

function renderOverlayContent(plant) {
  const images = [
    plant["Image path"],
    ...(plant["Sub images"] || [])
  ];

  currentImageIndex = Math.min(currentImageIndex, images.length - 1);
  overlayImg.src = images[currentImageIndex];
  overlayImg.alt = plant["Latin name"];

  overlayDetails.innerHTML = `
    <p class="latin-name">${plant["Latin name"]}</p>
    <p class="dutch-name">${plant["Dutch name"]}</p>
  `;

  for (const key in plant) {
    if (["Latin name","Dutch name","Image path","Sub images","SCHOOL SUBJECT"].includes(key)) continue;
    const value = plant[key];
    if (!value || (Array.isArray(value) && value.length === 0)) continue;

    overlayDetails.insertAdjacentHTML(
      "beforeend",
      `<div class="tag"><strong>${key}:</strong> ${
        Array.isArray(value) ? value.join(", ") : value
      }</div>`
    );
  }

  thumbnailRow.innerHTML = "";
  images.forEach((src, idx) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.classList.toggle("selected", idx === currentImageIndex);
    thumb.addEventListener("click", () => {
      currentImageIndex = idx;
      overlayImg.src = src;
      document
        .querySelectorAll(".thumbnail-row img")
        .forEach(t => t.classList.remove("selected"));
      thumb.classList.add("selected");
    });
    thumbnailRow.appendChild(thumb);
  });
}

/* ===================================================== 
   NAVIGATION
===================================================== */

prevArrow.addEventListener("click", () => navigatePlant(-1));
nextArrow.addEventListener("click", () => navigatePlant(1));
closeBtn.addEventListener("click", closeOverlay);

overlay.addEventListener("click", e => {
  if (e.target === overlay) closeOverlay();
});

document.addEventListener("keydown", e => {
  if (overlay.classList.contains("hidden")) return;
  if (e.key === "Escape") closeOverlay();
  if (e.key === "ArrowLeft") navigatePlant(-1);
  if (e.key === "ArrowRight") navigatePlant(1);
});

function navigatePlant(dir) {
  currentPlantIndex =
    (currentPlantIndex + dir + filteredPlants.length) % filteredPlants.length;
  currentImageIndex = 0;
  renderOverlayContent(filteredPlants[currentPlantIndex]);
}

renderPlants();
