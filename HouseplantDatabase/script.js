    const gallery = document.getElementById("gallery");
    const searchBar = document.getElementById("searchBar");
    const tagFiltersDiv = document.getElementById("tagFilters");
    const resultsCounter = document.getElementById("resultsCounter");

    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");
    const overlayDetails = document.querySelector(".overlay-details");
    const thumbnailRow = document.getElementById("thumbnailRow");

    let isDown = false;
    let startX;
    let scrollLeft;

    thumbnailRow.addEventListener("mousedown", (e) => {
      if (e.button !== 1) return;

      e.preventDefault();

      isDown = true;
      thumbnailRow.classList.add("dragging");

      startX = e.clientX;
      scrollLeft = thumbnailRow.scrollLeft;
    });

    thumbnailRow.addEventListener("mousemove", (e) => {
      if (!isDown) return;

      const walk = (e.clientX - startX) * 2;
      thumbnailRow.scrollLeft = scrollLeft - walk;
    });

    function stopDrag() {
      isDown = false;
      thumbnailRow.classList.remove("dragging");
    }

    document.addEventListener("mouseup", stopDrag);

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
    let myList = new Set();

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
        if (index !== -1) openOverlayByIndex(index);
      }
    });

    window.addEventListener("resize", updateMenuButtonVisibility);
    overlay.addEventListener("transitionend", updateMenuButtonVisibility);
    overlay.addEventListener("click", updateMenuButtonVisibility);
    document.addEventListener("DOMContentLoaded", updateMenuButtonVisibility);

    const tagGroups = [
      { name: "TRAITS", tags: ["TYPE OF PLANT","LEAF COLOR","VARIEGATION COLOR","VARIEGATION TYPE","FLOWER COLOR","GROWTH TYPE","HEIGHT (excl. climbing)","WIDTH (excl. climbing)","LEAF SIZE (Maximum)","LEAF TEXTURE","SPECIAL FEATURES"] },
      { name: "CARE", tags: ["LIGHT","WATERING","SUBSTRATE","NUTRIENTS","RELATIVE HUMIDITY","TEMPERATURE"] },
      { name: "ORIGIN", tags: ["ORIGIN","HABITAT","ORIGIN STATUS"] },
      { name: "OTHER", tags: ["GROWTH RATE","RARITY","DIFFICULTY","NOTE"] }
    ];

  const allTags = {
    "FAMILY": "Text",
    "TYPE OF PLANT": ["Air plants","Aquatic plants","Aroids","Cacti","Carnivorous plants","Dry climate ornamentals","Ferns","Palms","(Sub)tropical ornamentals","Succulents"],
    "LEAF COLOR": ["Black","Blue","Brown","Green","Grey","Orange","Pink","Purple","Red","White","Yellow"],
    "VARIEGATION COLOR": ["Cream variegation","Green variegation","Orange variegation","Pink variegation","Purple variegation","Red variegation","Silver variegation","White variegation","Yellow variegation"],
    "VARIEGATION TYPE": ["Central variegation","Marbled variegation","Marginata variegation","Mosaic variegation","Mint variegation","Mottled variegation","Sectoral variegation","Splash variegation","Spotted variegation","Striped variegation"],
    "FLOWER COLOR": ["Black flowers","Blue flowers","Brown flowers","Green flowers","Orange flowers","Pink flowers","Purple flowers","Red flowers","White flowers","Yellow flowers"],
    "GROWTH TYPE": ["Bushy","Climbing plant","Crawling plant","Epiphyte","Hanging plant","Indoor tree"],
    "HEIGHT (excl. climbing)": [">10cm high","10-20cm high","20-50cm high","50-100cm high","1-2m high","2-5m high","+5m high"],
    "WIDTH (excl. climbing)": [">10cm wide","10-20cm wide","20-50cm wide","50-100cm wide","1-2m wide","2-5m wide"],
    "LEAF SIZE (Maximum)": ["1cm","1-10cm","10-25cm","25-50cm","50-100cm","1-2m","+2m"],
    "LEAF TEXTURE": ["Smooth","Glossy","Velvet","Corrugated","Thick","Delicate"],
    "SPECIAL FEATURES": ["Air purifying","Edible fruit","Fenestrations","Ornamental flowers","Pest sensitive","Pet friendly","Spikes","Variegated"],
    "LIGHT": ["Direct light","Bright indirect light","Indirect light"],
    "WATERING": ["Keep submerged or floating","Keep soil saturated","Keep soil moist but don't saturate","Water when top layer of soil is dry","Let soil dry out between watering","Infrequent thorough watering"],
    "SUBSTRATE": ["arid and water retentive (moss)","arid (bark)","arid soil (soil and perlite)","regular soil"],
    "NUTRIENTS": ["Nutrient-rich","Moderate nutrients","Nutrient-poor"],
    "RELATIVE HUMIDITY": ["20-40% RH","40-60% RH","60-80% RH",">80% RH"],
    "TEMPERATURE": ["0-5°C","5-12°C","12-18°C","18-25°C","25-30°C","+30°C"],
    "ORIGIN": ["Africa","Asia","Australia","Europe","North America","South America","Pacific Islands"],
    "HABITAT": ["Tropical rainforest","Tropical highland rainforest","Subtropical forest","Swamp and marshland","River and Lake","Desert","Savannah"],
    "ORIGIN STATUS": ["Cultivar","Hybrid","Wild plant"],
    "GROWTH RATE": ["Slow growth","Fast growth","Regular growth","Increased leaf size when climbing"],
    "RARITY": ["rarity 1-2/10","rarity 3-5/10","rarity 6-7/10","rarity 8-9/10","rarity 10/10"],
    "DIFFICULTY": ["Beginner friendly","Moderate","Challenging"],
    "NOTE": "Text"
  };

  function buildSidebar() {
    const myListBtn = document.createElement("label");
    myListBtn.classList.add("tag-label");

    const myListCheckbox = document.createElement("input");
    myListCheckbox.type = "checkbox";
    myListCheckbox.classList.add("tag-checkbox");
    myListCheckbox.value = "Your selected list";

    const text = document.createTextNode("Your selected list");

    myListBtn.appendChild(myListCheckbox);
    myListBtn.appendChild(text);
    myListBtn.style.cursor = "pointer";

    myListCheckbox.addEventListener("change", () => {
      updateSearchBarFromCheckboxes();
    });

    let exportBtn = document.createElement("button");
    exportBtn.textContent = "Export selected list as pdf with images";
    exportBtn.style.display = "none";
    exportBtn.classList.add("export-btn");
    exportBtn.addEventListener("click", exportMyList);
    tagFiltersDiv.appendChild(exportBtn);

  let exportTextBtn = document.createElement("button");
  exportTextBtn.textContent = "Export selected list as text file without images";
  exportTextBtn.style.display = "none";
  exportTextBtn.classList.add("export-btn");
  exportTextBtn.addEventListener("click", exportMyListText);
  tagFiltersDiv.appendChild(exportTextBtn);

function toggleExportButtons() {
  const yourListCheckbox = document.querySelector('.tag-checkbox[value="Your selected list"]');
  const show = yourListCheckbox && yourListCheckbox.checked;
  exportBtn.style.display = show ? "block" : "none";
  exportTextBtn.style.display = show ? "block" : "none";
}

myListCheckbox.addEventListener("change", toggleExportButtons);
toggleExportButtons();

    function toggleExportButton() {
      const yourListCheckbox = document.querySelector('.tag-checkbox[value="Your selected list"]');
      exportBtn.style.display = yourListCheckbox && yourListCheckbox.checked ? "block" : "none";
    }

    myListCheckbox.addEventListener("change", toggleExportButton);
    toggleExportButton();

    tagFiltersDiv.appendChild(myListBtn);

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

        const tagValues = allTags[tagGroupName];

        if (!Array.isArray(tagValues)) return;

        tagValues.forEach(tag => {
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

    async function loadPlantIndex() {
      try {
        const res = await fetch("data/plant-index.json");
        if (!res.ok) throw new Error("Failed to load plant index");
        plants = await res.json();

        plants.forEach(p => {
          // Collect ALL searchable values from the plant object
          let collectedTags = [];

          Object.entries(p).forEach(([key, value]) => {
            if (!value) return;

            if (Array.isArray(value)) {
              value.forEach(v => collectedTags.push(v.toString().toLowerCase()));
            } else {
              collectedTags.push(value.toString().toLowerCase());
            }
          });

          p.tagsLower = collectedTags;

          p.latinLower = (p["LATIN NAME"] || "").toString().trim().toLowerCase();
          p.generalLower = (p["GENERAL NAME"] || "").toString().trim().toLowerCase();
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

    function updateCounter() {
      resultsCounter.textContent = `Showing ${filteredPlants.length} plant${filteredPlants.length !== 1 ? "s" : ""}`;
    }

function filterPlantsBySearch() {
  const input = searchBar.value.toLowerCase().trim();

  let basePlants = plants.map((p, idx) => ({ ...p, globalIndex: idx }));

  if (!input) return basePlants;

  const orGroups = input.split("/").map(g =>
    g.trim().split(",").map(t => t.trim()).filter(Boolean)
  );

  return basePlants.filter(plant =>
    orGroups.some(group =>
      group.every(tag => {
        let isExclusion = false;
        if (tag.startsWith("-")) {
          tag = tag.slice(1).trim();
          isExclusion = true;
        }

        const tagLower = tag.toLowerCase();

        if (tagLower === "your selected list") {
          return isExclusion ? !myList.has(plant.globalIndex) : myList.has(plant.globalIndex);
        }

        const exactTagMatch =
        (plant.tagsLower || []).some(t => t === tagLower) ||
        Object.values(plant).some(val => {
          if (Array.isArray(val)) {
            return val.some(v => v.toString().toLowerCase() === tagLower);
          }
          return val && val.toString().toLowerCase() === tagLower;
        });

        const matchesPlant =
          exactTagMatch ||
          plant.latinLower.includes(tagLower) ||
          plant.generalLower.includes(tagLower);

        return isExclusion ? !matchesPlant : matchesPlant;
      })
    )
  );
}

    function createListButton(plant) {
      const btn = document.createElement("div");
      btn.classList.add("list-btn");
      btn.title = "Add to your list";
      btn.dataset.index = plant.globalIndex;

      function update() {
        btn.classList.toggle("active", myList.has(plant.globalIndex));
      }

      update();

      btn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (myList.has(plant.globalIndex)) {
        myList.delete(plant.globalIndex);
      } else {
        myList.add(plant.globalIndex);
      }

      updateAllListButtons();

      const yourListCheckbox = document.querySelector('.tag-checkbox[value="Your selected list"]');
      if (yourListCheckbox && yourListCheckbox.checked) {
        filteredPlants = filterPlantsBySearch();
        gallery.innerHTML = "";
        renderedCount = 0;
        renderNextBatch();
        updateCounter();
      }
    });

      return btn;
    }

    function updateAllListButtons() {
      document.querySelectorAll(".list-btn").forEach(btn => {
        const index = Number(btn.dataset.index);
        btn.classList.toggle("active", myList.has(index));
      });
    }

    function renderNextBatch() {
      const next = filteredPlants.slice(renderedCount, renderedCount + batchSize);
      next.forEach((plant, i) => {
        const plantDiv = document.createElement("div");
        plantDiv.classList.add("plant");

        if ((plant.tagsLower || []).includes("invasive")) {
          plantDiv.classList.add("invasive");
        }

        const img = document.createElement("img");
        img.loading = "lazy";
        img.src = plant["MAIN IMAGE"];
        img.alt = plant["LATIN NAME"];

        const filteredIndex = renderedCount + i;
        img.addEventListener("click", () => {
          if (window.innerWidth <= 800 && sidebar.classList.contains("show")) return;
          openOverlayByIndex(filteredIndex);
        });

        const info = document.createElement("div");
        info.classList.add("plant-info");
        info.innerHTML = `<p class="latin-name"><strong>${plant["LATIN NAME"]}</strong></p>
                  <p class="general-name">${plant["GENERAL NAME"]}</p>
                  ${plant["FAMILY"] ? `<p class="family-name">${plant["FAMILY"]}</p>` : ""}`;

        const listBtn = createListButton(plant);

        plantDiv.appendChild(img);
        plantDiv.appendChild(listBtn);
        plantDiv.appendChild(info);
        gallery.appendChild(plantDiv);
      });

      renderedCount += next.length;
    }

    gallery.addEventListener("scroll", () => {
      if (gallery.scrollTop + gallery.clientHeight >= gallery.scrollHeight - 200) renderNextBatch();
    });

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

    function renderOverlayContent(plant) {
      const subImages = Array.isArray(plant["SUB IMAGES"]) ? plant["SUB IMAGES"] : [];

      // Remove duplicates + remove main image from subs if present
      const uniqueSubs = subImages.filter(img => img && img !== plant["MAIN IMAGE"]);

      const images = [plant["MAIN IMAGE"], ...uniqueSubs];
      overlayImg.src = images[currentImageIndex];
      overlayImg.alt = plant["LATIN NAME"];

      overlayDetails.innerHTML = `<p class="latin-name">${plant["LATIN NAME"]}</p>
                                  <p class="general-name">${plant["GENERAL NAME"]}</p>
                                  ${plant["FAMILY"] ? `<p class="family-name">${plant["FAMILY"]}</p>` : ""}`;
      
    let existingBtn = overlay.querySelector(".overlay-image .list-btn");
    if (existingBtn) existingBtn.remove();

    const listBtn = createListButton(filteredPlants[currentPlantIndex]);

    const overlayImageContainer = overlay.querySelector(".overlay-image");
    overlayImageContainer.appendChild(listBtn);

      tagGroups.forEach(group => {
        const groupDiv = document.createElement("div");
        const groupHeader = document.createElement("p");
        groupHeader.textContent = group.name;
        groupHeader.classList.add("tag-group-divider");
        groupDiv.appendChild(groupHeader);

        group.tags.forEach(tagGroupName => {
          if (!(tagGroupName in plant)) return;
          const value = plant[tagGroupName];
          const valueStr = Array.isArray(value) ? value.join(", ") : value;
          const tagDiv = document.createElement("div");
          tagDiv.classList.add("tag");
          tagDiv.innerHTML = `<strong>${tagGroupName}:</strong> <span>${valueStr}</span>`;
          groupDiv.appendChild(tagDiv);
        });

        overlayDetails.appendChild(groupDiv);
      });

      let searchBtn = overlayDetails.querySelector(".search-more-btn");
      if (!searchBtn) {
        searchBtn = document.createElement("button");
        searchBtn.textContent = "Search more images";
        searchBtn.classList.add("search-more-btn");
        searchBtn.addEventListener("click", () => {
          const query = encodeURIComponent(plant["LATIN NAME"]);
          window.open(`https://www.google.com/search?tbm=isch&q=${query}`, "_blank");
        });
        overlayDetails.appendChild(searchBtn);
      }

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

    buildSidebar();
    loadPlantIndex();

async function exportMyList() {
  if (myList.size === 0) {
    alert("Your list is empty!");
    return;
  }

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = 210;
  const pageHeight = 297;

  const margin = 10;
  const spacingX = 5;
  const spacingY = 12;
  const cols = 4;
  const availableWidth = pageWidth - margin * 2 - spacingX * (cols - 1);
  const imgSize = availableWidth / cols; 
  const textHeight = 8;

  let x = margin;
  let y = margin;
  let colCount = 0;

  const selectedPlants = Array.from(myList).map(i => plants[i]);

  for (let plant of selectedPlants) {
    try {
      const imgData = await getCroppedImageDataURL(plant["MAIN IMAGE"], imgSize);
      pdf.addImage(imgData, "JPEG", x, y, imgSize, imgSize);
    } catch (err) {
      console.warn("Failed to load image for", plant["LATIN NAME"]);
    }

    pdf.setFontSize(10);
    pdf.text(`${plant["LATIN NAME"]}`, x + imgSize / 2, y + imgSize + 4, { align: "center" });
    pdf.text(`${plant["GENERAL NAME"]}`, x + imgSize / 2, y + imgSize + 8, { align: "center" });

    colCount++;
    if (colCount < cols) {
      x += imgSize + spacingX;
    } else {
      colCount = 0;
      x = margin;
      y += imgSize + textHeight + spacingY;
      if (y + imgSize + textHeight + spacingY > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
    }
  }

  pdf.save("Plant_list.pdf");
}

function exportMyListText() {
  if (myList.size === 0) {
    alert("Your list is empty!");
    return;
  }

  const selectedPlants = Array.from(myList).map(i => plants[i]);
  let textContent = selectedPlants.map(p => `${p["LATIN NAME"]} - ${p["GENERAL NAME"]}`).join("\n");

  const blob = new Blob([textContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Plant_list.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function getCroppedImageDataURL(url, targetSize) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const size = Math.min(img.width, img.height);
      const sx = (img.width - size) / 2;
      const sy = (img.height - size) / 2;

      const scaleFactor = 3;
      const canvas = document.createElement("canvas");
      canvas.width = targetSize * scaleFactor;
      canvas.height = targetSize * scaleFactor;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(img, sx, sy, size, size, 0, 0, canvas.width, canvas.height);

      resolve(canvas.toDataURL("image/jpeg", 1.0));
    };
    img.onerror = reject;
    img.src = url;
  });
}