const gallery = document.getElementById("gallery");
const searchBar = document.getElementById("searchBar");
const tagFiltersDiv = document.getElementById("tagFilters");
const resultsCounter = document.getElementById("resultsCounter");

const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const overlayDetails = document.querySelector(".overlay-details");
const thumbnailRow = document.getElementById("thumbnailRow");

const closeBtn = document.querySelector(".close-btn");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

let plants = [];
let filteredPlants = [];
let plantCache = {};

let renderedCount = 0;
const batchSize = 30;

let currentPlantIndex = 0;
let currentImageIndex = 0;

// ----- MENU TOGGLE -----
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

menuToggle.addEventListener("click", (e) => {
  sidebar.classList.toggle("show");
  updateMenuButtonVisibility();
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  const sidebarWasOpen = sidebar.classList.contains("show");
  if (window.innerWidth <= 800 && sidebarWasOpen && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebar.classList.remove("show");
    updateMenuButtonVisibility();
    e.stopPropagation();
    return;
  }

  if (!overlay.classList.contains("hidden") || sidebar.classList.contains("show")) return;

  const plantDiv = e.target.closest(".plant");
  if (plantDiv) {
    const index = Array.from(gallery.children).indexOf(plantDiv);
    if (index !== -1) openOverlayByIndex(filteredPlants[index].globalIndex);
  }
});

window.addEventListener("resize", updateMenuButtonVisibility);
overlay.addEventListener("transitionend", updateMenuButtonVisibility);
overlay.addEventListener("click", updateMenuButtonVisibility);
document.addEventListener("DOMContentLoaded", updateMenuButtonVisibility);

// ----- TAGS -----
const tagGroups = [
  { name: "TRAITS", tags: ["TYPE OF PLANT","FLOWER COLOUR","FLOWER SHAPE","FLOWERING PERIOD","POLLINATORS","FRUITS","FRUITING PERIOD","EDIBLE","LEAF COLOUR","AUTUMN COLOURS","WINTER ASPECT","SPECIAL FEATURES","PLANT WARNINGS"] },
  { name: "GROWTH", tags: ["HEIGHT","WIDTH","GROWTH RATE"] },
  { name: "ENVIRONMENT", tags: ["USE","HABITAT","ORIGIN","HARDINESS ZONE (BE 7-8)","SUNLIGHT","GROUND TYPE","SOIL DRAINAGE","SOIL MOISTURE","SOIL PH"] },
  { name: "OTHER", tags: ["ACCESSIBILITY","PLANTING DENSITY","SCHOOL SUBJECT"] }
];

const allTags = {
  "FAMILY": "text",
  "TYPE OF PLANT": ["Aquatic plant","Bamboo","Biennial","Climbing plant","Conifer","Fern","Flower bulb","Ground cover","Ornamental grass","Palm","Perennial","Shrub","Succulent","Tree","Weeds"],
  "FLOWER COLOUR": ["Black flowers","Blue flowers","Brown flowers","Green flowers","Orange flowers","Pink flowers","Purple flowers","Red flowers","White flowers","Yellow flowers"],
  "FLOWER SHAPE": ["Bell-shaped","Cup-shaped","Daisy-like","Funnel-shaped","Cone-shaped","Spike","Panicle","Umbel","Corymb","Other flower shape","Star-shaped","Tubular"],
  "FLOWERING PERIOD": ["Flowers Early Spring","Flowers Spring","Flowers Summer","Flowers Late Summer","Flowers Autumn","Flowers Winter"],
  "POLLINATORS": ["Bees","Butterflies","Hoverflies","Moths"],
  "FRUITS": ["Berries","Catkins","Fruit","Nuts","Pine cones","Seed pods"],
  "FRUITING PERIOD": ["Fruits Early Spring","Fruits Spring","Fruits Summer","Fruits Late Summer","Fruits Autumn","Fruits Winter"],
  "EDIBLE": ["Edible after processing","Edible berries","Edible flowers","Edible fruit","Edible leaves","Edible nuts","Edible stem"],
  "LEAF COLOUR": ["Black leaves","Blue leaves","Brown leaves","Green leaves","Grey leaves","Pink leaves","Purple leaves","Red leaves","White leaves","Yellow leaves"],
  "AUTUMN COLOURS": ["Orange autumn leaves","Red autumn leaves","Yellow autumn leaves"],
  "WINTER ASPECT": ["Decorative winter structure","Evergreen","No winter presence"],
  "SPECIAL FEATURES": ["Large leaves","Luminescent","Thorns","Tropical look"],
  "PLANT WARNINGS": ["Allergenic","Invasive roots","Needs wind shelter","Toxic","Susceptible to frost","Toxic to pets"],
  "HEIGHT": ["0-0.2 m","0.2-0.5 m","0.5-1 m","1-2 m","2-3 m","3-5 m","5-8 m","8-12 m","12-20 m","20-30 m","30+ m"],
  "WIDTH": ["0-0.2 m","0.2-0.5 m","0.5-1 m","1-2 m","2-3 m","3-5 m","5-8 m","8-12 m","12-20 m","20+ m"],
  "GROWTH RATE": ["Fast growing","Moderate growth","Slow growing"],
  "USE": ["Climate adaptive","Coastal area","Decorative flowers","Drought tolerant","Fragrant","Hedge","Playing pressure resistant","Pioneer species","Species for birds","Species for insects","Street / paving plant","Thickets","Vertical green & Roof garden","Wadi"],
  "HABITAT": ["Dune habitat","Forest edge","Grassland","Riverbank","Rock garden","Wetland","Woodland"],
  "ORIGIN":["Introduced","Invasive","Native"],
  "HARDINESS ZONE (BE 7-8)": ["Zone 3","Zone 4","Zone 5","Zone 6","Zone 7","Zone 8","Zone 9","Zone 10"],
  "SUNLIGHT": ["Full sunlight","Half shade","Shade"],
  "GROUND TYPE": ["Clay","Loam","Rocks","Sandy soil"],
  "SOIL DRAINAGE": ["Fast draining","Moderately drained","Poorly drained","Well drained"],
  "SOIL MOISTURE": ["Arid","Dry","Moderately moist","Damp","Waterlogged"],
  "SOIL PH": ["Acid","Lime","Neutral"],
  "ACCESSIBILITY": ["Accessible","Semi-rare","Hard to find"],
  "PLANTING DENSITY": ["0-0.1/m²","0.1-0.5/m²","0.5-1/m²","1-2/m²","2-3/m²","3-4/m²","4-5/m²","5-6/m²","6-7/m²","7-8/m²","8-9/m²","9-10/m²","10-12/m²","12-15/m²","15+ /m²"],
  "SCHOOL SUBJECT": ["Plantecologie","Plantenkennis 1","Plantenkennis 2"],
  "NOTE":"text"
};

// ----- BUILD SIDEBAR -----
function buildSidebar() {
  tagGroups.forEach(group => {
    const divider = document.createElement("div");
    divider.classList.add("tag-group-divider");
    divider.textContent = group.name;
    tagFiltersDiv.appendChild(divider);

    group.tags.forEach(tagGroupName => {
      const groupDiv = document.createElement("div");
      groupDiv.classList.add("tag-group");

      const title = document.createElement("p");
      title.textContent = tagGroupName;
      title.classList.add("tag-group-title");
      groupDiv.appendChild(title);

      (allTags[tagGroupName] || []).forEach(tag => {
        const label = document.createElement("label");
        label.classList.add("tag-label");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = tag;
        checkbox.classList.add("tag-checkbox");

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(tag));
        groupDiv.appendChild(label);

        checkbox.addEventListener("change", () => updateSearchBarFromCheckboxes());
      });

      tagFiltersDiv.appendChild(groupDiv);
    });
  });
}

// ----- SYNC & UPDATE SEARCH -----
function syncCheckboxesWithSearchBar() {
  const checkedTags = searchBar.value.split(",").map(t => t.trim().toLowerCase()).filter(Boolean);
  document.querySelectorAll(".tag-checkbox").forEach(cb => {
    cb.checked = checkedTags.includes(cb.value.toLowerCase());
  });
}

function updateSearchBarFromCheckboxes() {
  const checkedTags = [...document.querySelectorAll(".tag-checkbox:checked")].map(cb => cb.value);
  searchBar.value = checkedTags.join(", ");
  filteredPlants = filterPlantsBySearch();
  gallery.innerHTML = "";
  renderedCount = 0;
  renderNextBatch();
  updateCounter();
}

searchBar.addEventListener("input", () => {
  syncCheckboxesWithSearchBar();
  filteredPlants = filterPlantsBySearch();
  gallery.innerHTML = "";
  renderedCount = 0;
  renderNextBatch();
  updateCounter();
});

// ----- LOAD PLANTS -----
async function loadPlantIndex() {
  try {
    const res = await fetch("data/plant-index.json");
    if (!res.ok) throw new Error("Failed to load plant index");
    plants = await res.json();

    plants.forEach(p => {
      p.tagsLower = Array.isArray(p.TAGS) ? p.TAGS.map(t => (t||"").toString().trim().toLowerCase()) : [];
      p.latinLower = (p["LATIN NAME"]||"").toString().trim().toLowerCase();
      p.dutchLower = (p["DUTCH NAME"]||"").toString().trim().toLowerCase();
    });

    filteredPlants = plants.map((p, idx) => ({ ...p, globalIndex: idx }));
    gallery.innerHTML = "";
    renderedCount = 0;
    renderNextBatch();
    updateCounter();
  } catch (err) {
    console.error("Plant index load error:", err);
  }
}

// ----- COUNTER -----
function updateCounter() {
  resultsCounter.textContent = `Showing ${filteredPlants.length} plant${filteredPlants.length !== 1 ? "s" : ""}`;
}

// ----- FILTER -----
function filterPlantsBySearch() {
  const input = searchBar.value.toLowerCase().trim();
  if (!input) return plants.map((p, idx) => ({ ...p, globalIndex: idx }));

  const orGroups = input.split("/").map(g =>
    g.trim().split(",").map(t => t.trim()).filter(Boolean)
  );

  return plants
    .map((p, idx) => ({ ...p, globalIndex: idx }))
    .filter(plant =>
      orGroups.some(group =>
        group.every(tag => {
          let isExclusion = false;
          if (tag.startsWith("-")) { tag = tag.slice(1).trim(); isExclusion = true; }
          const tagLower = tag.toLowerCase();
          const matchesPlant =
            (plant.tagsLower || []).some(t => t.includes(tagLower)) ||
            plant.latinLower.includes(tagLower) ||
            plant.dutchLower.includes(tagLower);
          return isExclusion ? !matchesPlant : matchesPlant;
        })
      )
    );
}

// ----- RENDER -----
function renderNextBatch() {
  const next = filteredPlants.slice(renderedCount, renderedCount + batchSize);
  next.forEach((plant) => {
    const plantDiv = document.createElement("div");
    plantDiv.classList.add("plant");
    if (plant["ORIGIN"] && plant["ORIGIN"].includes("Invasive")) plantDiv.classList.add("invasive");

    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = plant["MAIN IMAGE"];
    img.alt = plant["LATIN NAME"];

    img.addEventListener("click", () => {
      if (window.innerWidth <= 800 && sidebar.classList.contains("show")) return;
      openOverlayByIndex(plant.globalIndex);
    });

    const info = document.createElement("div");
    info.classList.add("plant-info");
    info.innerHTML = `<p><strong>${plant["LATIN NAME"]}</strong></p>
                      <p>${plant["DUTCH NAME"]}</p>
                      ${plant["FAMILY"] ? `<p class="family-name">${plant["FAMILY"]}</p>` : ""}`;

    plantDiv.appendChild(img);
    plantDiv.appendChild(info);
    gallery.appendChild(plantDiv);
  });

  renderedCount += next.length;
}

// ----- SCROLL LAZY LOAD -----
gallery.addEventListener("scroll", () => {
  if (gallery.scrollTop + gallery.clientHeight >= gallery.scrollHeight - 200) renderNextBatch();
});

// ----- OVERLAY -----
async function loadPlantData(index) {
  const plant = filteredPlants[index];
  if (plantCache[plant.FILE]) return plantCache[plant.FILE];
  const res = await fetch(plant.FILE);
  const data = await res.json();
  plantCache[plant.FILE] = data;
  return data;
}

async function openOverlayByIndex(index) {
  currentPlantIndex = index;
  currentImageIndex = 0;
  const plant = await loadPlantData(index);
  openOverlay(plant);
}

function openOverlay(plant) {
  overlay.classList.remove("hidden");
  renderOverlayContent(plant);
  updateMenuButtonVisibility();
}

function closeOverlay() {
  overlay.classList.add("hidden");
  overlayImg.src = "";
  overlayDetails.innerHTML = "";
  thumbnailRow.innerHTML = "";
  updateMenuButtonVisibility();
}

// ----- RENDER OVERLAY -----
function renderOverlayContent(plant) {
  const images = [plant["MAIN IMAGE"], ...(plant["SUB IMAGES"] || [])];
  overlayImg.src = images[currentImageIndex];
  overlayImg.alt = plant["LATIN NAME"];

  // Latin, Dutch, Family
  overlayDetails.innerHTML = `<p class="latin-name">${plant["LATIN NAME"]}</p>
                              <p class="dutch-name">${plant["DUTCH NAME"]}</p>
                              ${plant["FAMILY"] ? `<p class="family-name">${plant["FAMILY"]}</p>` : ""}`;

  // Major categories dividers
  tagGroups.forEach(group => {
    const groupDiv = document.createElement("div");
    const groupHeader = document.createElement("p");
    groupHeader.textContent = group.name;
    groupHeader.classList.add("tag-group-divider");
    groupDiv.appendChild(groupHeader);

    group.tags.forEach(tagGroupName => {
      // Skip SCHOOL SUBJECT / YEAR in popup
      if (!plant[tagGroupName] || tagGroupName === "SCHOOL SUBJECT") return;

      const value = plant[tagGroupName];
      const valueStr = Array.isArray(value) ? value.join(", ") : value;
      const tagDiv = document.createElement("div");
      tagDiv.classList.add("tag");
      tagDiv.innerHTML = `<strong>${tagGroupName}:</strong> <span>${valueStr}</span>`;
      groupDiv.appendChild(tagDiv);
    });

    overlayDetails.appendChild(groupDiv);
  });

  // Show NOTE at the very end
  if (plant["NOTE"]) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("tag");
    noteDiv.innerHTML = `<strong>NOTE:</strong> <span>${plant["NOTE"]}</span>`;
    overlayDetails.appendChild(noteDiv);
  }

  // Thumbnails
  thumbnailRow.innerHTML = "";
  images.forEach((imgSrc, idx) => {
    const thumb = document.createElement("img");
    thumb.src = imgSrc;
    thumb.classList.toggle("selected", idx === currentImageIndex);
    thumb.addEventListener("click", () => {
      currentImageIndex = idx;
      renderOverlayContent(plant);
    });
    thumbnailRow.appendChild(thumb);
  });
}

function navigatePlant(direction) {
  if (filteredPlants.length === 0) return;
  currentPlantIndex = (currentPlantIndex + direction + filteredPlants.length) % filteredPlants.length;
  openOverlayByIndex(currentPlantIndex);
}

overlay.addEventListener("click", (e) => { if (e.target === overlay) closeOverlay(); });
closeBtn.addEventListener("click", closeOverlay);
prevArrow.addEventListener("click", () => navigatePlant(-1));
nextArrow.addEventListener("click", () => navigatePlant(1));

document.addEventListener("keydown", (e) => {
  if (overlay.classList.contains("hidden")) return;
  if (e.key === "ArrowLeft") navigatePlant(-1);
  if (e.key === "ArrowRight") navigatePlant(1);
  if (e.key === "Escape") closeOverlay();
});

// ----- INITIAL LOAD -----
buildSidebar();
loadPlantIndex();