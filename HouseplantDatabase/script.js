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
   MOBILE MENU
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
   IMAGE HELPER (FOLDER-BASED, WORKING VERSION)
===================================================== */

function getAllImagesFromSameFolder(imagePath, maxImages = 8) {
  const images = [];

  const lastSlash = imagePath.lastIndexOf("/");
  const folder = imagePath.slice(0, lastSlash + 1);
  const file = imagePath.slice(lastSlash + 1);

  const match = file.match(/^(.*)\.(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/);
  if (!match) return [];

  const baseName = match[1];
  const ext = match[2];

  for (let i = 1; i <= maxImages; i++) {
    images.push(`${folder}${baseName} ${i}.${ext}`);
  }

  images.push(`${folder}${baseName}.${ext}`);

  return images;
}

/* =====================================================
   TAG SIDEBAR (UNCHANGED)
===================================================== */

const allTags = {
  "PLANT GROUPS": ["Air plants", "Aquatic plants", "Aroids", "Cacti", "Carnivorous plants", "Dry climate ornamentals", "Ferns", "Palms", "Subtropical / Tropical ornamentals", "Succulents"],
  "------------FEATURES--------------": [],
  "COLOR": ["Black", "Blue", "Green", "Orange", "Pink", "Purple", "Red", "White", "Yellow"],
  "VARIEGATION": ["Variegated", "White variegated", "Pink variegated", "Aurea", "Mottled", "Mint", "Marginata"],
  "GROWTH TYPE": ["Bushy", "Climbing plant", "Crawling plant", "Epiphyte", "Hanging plant", "Indoor tree"],
  "HEIGHT (excl. climbing & crawling)": [">10cm high", "10-20cm high", "20-50cm high", "50-100cm high", "1-2m high", "2-5m high", "+5m high"],
  "WIDTH (excl. climbing & crawling)": [">10cm wide", "10-20cm wide", "20-50cm wide", "50-100cm wide", "1-2m wide", "2-5m wide"],
  "LEAF SIZE (Maximum)": ["1cm", "1-10cm", "10-25cm", "25-50cm", "50-100cm", "+1m"],
  "LEAF TEXTURE": ["Smooth", "Glossy", "Velvet", "Corrugated", "Thick", "Delicate"],
  "SPECIAL FEATURES": ["Air purifying", "Edible fruit", "Fenestrations", "Ornamental flowers", "Pest sensitive", "Pet friendly", "Spikes", "Sturdy", "Toxic/Irritating when cut"],
  "--------------CARE----------------": [],
  "LIGHT": ["Direct light", "Bright indirect light", "Indirect light"],
  "WATERING": ["Keep submerged or floating on water at all times", "Keep soil saturated", "Keep soil moist but don't saturate", "Water when top layer of soil is dry", "Let soil dry out completely between watering", "Infrequent but thorough watering"],
  "SUBSTRATE": ["arid and moisture retentive (moss)", "arid (bark)", "arid soil (soil and perlite)", "regular soil"],
  "NUTRIENTS": ["Nutrient-rich", "Moderate nutrients", "Nutrient-poor"],
  "RELATIVE HUMIDITY": ["20-40% RH", "40-60% RH", "60-80% RH", ">80% RH"],
  "TEMPERATURE": ["0-5°C", "5-12°C", "12-18°C", "18-25°C", "25-30°C", "+30°C"],
  "AIRFLOW": ["Prefers a little airflow"],
  "-------------ORIGIN---------------": [],
  "ORIGIN": ["Africa", "Asia", "Australia", "Europe", "North America", "South America", "Pacific Islands"],
  "HABITAT": ["Tropical rainforest", "Tropical highland rainforest", "Subtropical forest", "Swamp and marshland", "River and Lake", "Desert", "Savannah"],
  "ORIGIN STATUS": ["Cultivar", "Hybrid", "Wild plant"],
  "--------------VARIA---------------": [],
  "GROWTH SPEED": ["Slow growth", "Fast growth", "Regular growth", "Large increase in leaf size when climbing"],
  "RARITY": ["rarity 1-2/10", "rarity 3-5/10", "rarity 6-7/10", "rarity 8-9/10", "rarity 10/10"],
  "DIFFICULTY": ["Beginner friendly", "Moderate", "Challenging"],
  "OTHER": ["My houseplants", "Wishlist"],
  "NOTE": ["Parent plants, country of origin, flower color/duration/type, additional info, ..."]
};

for (const group in allTags) {
  if (group === "NOTE") continue;

  const groupDiv = document.createElement("div");
  groupDiv.classList.add("tag-group");

  const title = document.createElement("p");
  title.textContent = group;
  title.classList.add("tag-group-title");
  groupDiv.appendChild(title);

  allTags[group]
    .filter(tag => tag !== "Wishlist")
    .forEach(tag => {
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
  const checked = [...document.querySelectorAll(".tag-checkbox:checked")].map(cb => cb.value);
  searchBar.value = checked.join(", ");
}

/* =====================================================
   FILTERING
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
        const isExclusion = tag.startsWith("-");
        const tagLower = tag.replace("-", "").toLowerCase();

        const matches =
          Object.values(plant).some(val =>
            Array.isArray(val)
              ? val.some(v => v.toLowerCase() === tagLower)
              : typeof val === "string" && val.toLowerCase() === tagLower
          ) ||
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
  updateMenuButtonVisibility();
}

function closeOverlay() {
  overlay.classList.add("hidden");
  overlayImg.src = "";
  overlayDetails.innerHTML = "";
  thumbnailRow.innerHTML = "";
  updateMenuButtonVisibility();
}

function renderOverlayContent(plant) {
  const images = getAllImagesFromSameFolder(plant["Image path"]);

  overlayImg.src = images[currentImageIndex] || "";
  overlayImg.onerror = () => {
    currentImageIndex++;
    if (images[currentImageIndex]) overlayImg.src = images[currentImageIndex];
  };

  overlayDetails.innerHTML = `
    <p class="latin-name">${plant["Latin name"]}</p>
    <p class="dutch-name">${plant["Dutch name"]}</p>
  `;

  for (const key in plant) {
    if (["Latin name", "Dutch name", "Image path"].includes(key)) continue;
    const value = plant[key];
    if (!value || (Array.isArray(value) && value.length === 0)) continue;
    const valueStr = Array.isArray(value) ? value.join(", ") : value;
    overlayDetails.insertAdjacentHTML(
      "beforeend",
      `<div class="tag"><strong>${key}:</strong> <span>${valueStr}</span></div>`
    );
  }

  thumbnailRow.innerHTML = "";
  images.forEach((src, idx) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.onerror = () => thumb.remove();
    thumb.classList.toggle("selected", idx === currentImageIndex);
    thumb.addEventListener("click", () => {
      currentImageIndex = idx;
      renderOverlayContent(plant);
    });
    thumbnailRow.appendChild(thumb);
  });
}

/* =====================================================
   NAVIGATION
===================================================== */

function navigatePlant(dir) {
  currentPlantIndex =
    (currentPlantIndex + dir + filteredPlants.length) % filteredPlants.length;
  currentImageIndex = 0;
  renderOverlayContent(filteredPlants[currentPlantIndex]);
}

overlay.addEventListener("click", e => {
  if (e.target === overlay) closeOverlay();
});
closeBtn.addEventListener("click", closeOverlay);
prevArrow.addEventListener("click", () => navigatePlant(-1));
nextArrow.addEventListener("click", () => navigatePlant(1));

document.addEventListener("keydown", e => {
  if (overlay.classList.contains("hidden")) return;
  if (e.key === "Escape") closeOverlay();
  if (e.key === "ArrowLeft") navigatePlant(-1);
  if (e.key === "ArrowRight") navigatePlant(1);
});

renderPlants();
