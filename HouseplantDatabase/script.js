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

function updateMenuButtonVisibility() {
  if (window.innerWidth <= 800) {
    menuToggle.style.display =
      overlay.classList.contains("hidden") &&
      !sidebar.classList.contains("show")
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

let filteredPlants = [];
let currentPlantIndex = 0;
let currentImageIndex = 0;

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
        renderPlants(filterPlantsBySearch());
      });
    });

  tagFiltersDiv.appendChild(groupDiv);
}

function updateSearchBarFromCheckboxes() {
  const checkedTags = [
    ...document.querySelectorAll(".tag-checkbox:checked")
  ].map(cb => cb.value);

  searchBar.value = checkedTags.join(", ");
}

function filterPlantsBySearch() {
  const rawInput = searchBar.value.toLowerCase();
  if (!rawInput) return plants;

  const orGroups = rawInput.split("/")
    .map(g =>
      g
        .trim()
        .split(",")
        .map(t => t.trim())
        .filter(Boolean)
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

        const matchesPlant =
          Object.keys(plant).some(key => {
            if (key === "Other") return false;
            const value = plant[key];
            if (!value) return false;

            if (Array.isArray(value)) {
              return value.some(v => v.toLowerCase() === tagLower);
            }
            return value.toLowerCase() === tagLower;
          }) ||
          plant["Latin name"].toLowerCase().includes(tagLower) ||
          plant["Dutch name"].toLowerCase().includes(tagLower);

        return isExclusion ? !matchesPlant : matchesPlant;
      })
    )
  );
}

searchBar.addEventListener("input", () => {
  const tags = searchBar.value
    .toLowerCase()
    .split(/[,\/]/)
    .map(t => t.trim());

  document.querySelectorAll(".tag-checkbox").forEach(cb => {
    cb.checked = tags.includes(cb.value.toLowerCase());
  });

  renderPlants(filterPlantsBySearch());
});

function openOverlayByIndex(index) {
  currentPlantIndex = index;
  currentImageIndex = 0;
  openOverlay(filteredPlants[currentPlantIndex]);
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

function renderOverlayContent(plant) {
  const images = [
    plant["Main image"],
    ...(plant["Sub images"] || [])
  ];

  overlayImg.src = images[currentImageIndex];
  overlayImg.alt = plant["Latin name"];

  overlayDetails.innerHTML = `
    <p class="latin-name">${plant["Latin name"]}</p>
    <p class="dutch-name">${plant["Dutch name"]}</p>
  `;

  for (const key in plant) {
    if (
      ["Latin name", "Dutch name", "Main image", "Sub images", "SCHOOLYEAR"].includes(key)
    ) continue;

    const value = plant[key];
    if (!value || (Array.isArray(value) && value.length === 0)) continue;

    const valueStr = Array.isArray(value) ? value.join(", ") : value;

    overlayDetails.insertAdjacentHTML(
      "beforeend",
      `<div class="tag"><strong>${key}:</strong> <span>${valueStr}</span></div>`
    );
  }

  const googleLink = document.createElement("a");
  googleLink.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    plant["Latin name"]
  )}`;
  googleLink.target = "_blank";
  googleLink.textContent = "More images";
  googleLink.classList.add("more-images");

  overlayDetails.appendChild(googleLink);

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

  currentPlantIndex =
    (currentPlantIndex + direction + filteredPlants.length) %
    filteredPlants.length;

  currentImageIndex = 0;
  renderOverlayContent(filteredPlants[currentPlantIndex]);
}

function renderPlants() {
  gallery.innerHTML = "";
  filteredPlants = filterPlantsBySearch();

  filteredPlants.forEach((plant, index) => {
    const plantDiv = document.createElement("div");
    plantDiv.classList.add("plant");

    const img = document.createElement("img");
    img.src = plant["Main image"];
    img.alt = plant["Latin name"];
    img.addEventListener("click", () => openOverlayByIndex(index));

    const info = document.createElement("div");
    info.classList.add("plant-info");
    info.innerHTML = `
      <p><strong>${plant["Latin name"]}</strong></p>
      <p>${plant["Dutch name"]}</p>
    `;

    plantDiv.appendChild(img);
    plantDiv.appendChild(info);
    gallery.appendChild(plantDiv);
  });
}

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeOverlay();
});

closeBtn.addEventListener("click", closeOverlay);
prevArrow.addEventListener("click", () => navigatePlant(-1));
nextArrow.addEventListener("click", () => navigatePlant(1));

document.addEventListener("keydown", (e) => {
  if (overlay.classList.contains("hidden")) return;

  if (e.key === "ArrowLeft") navigatePlant(-1);
  if (e.key === "ArrowRight") navigatePlant(1);
  if (e.key === "Escape") closeOverlay();
});

renderPlants();
