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
    // ⭐ MY LIST SYSTEM
    let myList = new Set();

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
        if (index !== -1) openOverlayByIndex(index);
      }
    });

    window.addEventListener("resize", updateMenuButtonVisibility);
    overlay.addEventListener("transitionend", updateMenuButtonVisibility);
    overlay.addEventListener("click", updateMenuButtonVisibility);
    document.addEventListener("DOMContentLoaded", updateMenuButtonVisibility);

    // ----- TAGS -----
    const tagGroups = [
      { name: "TRAITS", tags: ["TYPE OF PLANT","USE","FLOWER COLOUR","INDIVIDUAL FLOWER SHAPE","FLOWER CLUSTER SHAPE","FLOWERING PERIOD","FRUITS","FRUITING PERIOD","EDIBLE","LEAF COLOUR","AUTUMN COLOURS","WINTER ASPECT","VALUE FOR INSECTS","SPECIAL FEATURES","PLANT WARNINGS"] },
      { name: "ENVIRONMENT", tags: ["HABITAT","ORIGIN TO BELGIUM","HARDINESS ZONE (BE 7-8)","SUNLIGHT","GROUND TYPE","SOIL DRAINAGE","SOIL MOISTURE","SOIL PH"] },
      { name: "GROWTH", tags: ["LIFE CYCLE","HEIGHT","WIDTH","GROWTH RATE"] },
      { name: "OTHER", tags: ["ACCESSIBILITY","PLANTING DENSITY","SCHOOL SUBJECT"] }
    ];

    const allTags = {
      "FAMILY": "text",
      "TYPE OF PLANT": ["Aquatic plant","Bamboo","Climbing plant","Conifer","Fern","Flower bulb","Ground cover","Herbaceous plant","Ornamental grass","Palm tree","Shrub","Subshrub","Succulent","Tree"],
      "USE": ["Climate adaptive","Coastal area","Decorative flowers","Drought tolerant","Fragrant","Hedge","Key species for birds","Playing pressure resistant","Pioneer species","Salt tolerant","Street / paving plant","Thickets","Vertical green & Roof garden","Wadi"],
      "FLOWER COLOUR": ["Black flowers","Blue flowers","Brown flowers","Green flowers","Orange flowers","Pink flowers","Purple flowers","Red flowers","White flowers","Yellow flowers"],
      "INDIVIDUAL FLOWER SHAPE": ["Bell flowers","Cup flowers","Daisy flowers","Spathe-and-spadix","Star flowers","Tubular flowers","Inconspicuous flowers","Other flower shapes"],
      "FLOWER CLUSTER SHAPE": ["Ball flower clusters","Flat flower clusters","Hanging flower clusters","Plume flower clusters","Spike flower clusters","Upright spray flower clusters","Catkins","Other flower clusters"], 
      "FLOWERING PERIOD": ["Flowers Early Spring","Flowers Spring","Flowers Summer","Flowers Late Summer","Flowers Autumn","Flowers Winter"],
      "FRUITS":["Berries","Cones","Fleshy fruits","Nuts","Winged fruits","Pods","Fruits not pronounced"],
      "FRUITING PERIOD": ["Fruits Early Spring","Fruits Spring","Fruits Summer","Fruits Late Summer","Fruits Autumn","Fruits Winter"],
      "EDIBLE": ["Only edible after processing","Edible berries","Edible flowers","Edible fruit","Edible leaves","Edible nuts","Edible roots","Edible sap","Edible stem"],
      "LEAF COLOUR": ["Black leaves","Blue leaves","Brown leaves","Green leaves","Grey leaves","Pink leaves","Purple leaves","Red leaves","White leaves","Yellow leaves"],
      "AUTUMN COLOURS": ["Orange autumn leaves","Red autumn leaves","Yellow autumn leaves"],
      "WINTER ASPECT": ["Evergreen","Deciduous structural presence","No winter presence"],
      "VALUE FOR INSECTS": ["Bees","Butterflies","Moths"],
      "SPECIAL FEATURES": ["Decorative bark","Large leaves","Decorative winter seed heads","Luminescent","Thorns","Tropical look"],
      "PLANT WARNINGS": ["Allergenic","Invasive roots","Needs wind shelter","Not pet safe","Toxic","Skin irritant","Susceptible to frost"],
      "HABITAT": ["Alpine","Dune habitat","Forest edge","Grassland","Riverbank","Rock garden","Wetland","Woodland"],
      "ORIGIN TO BELGIUM":["Introduced","Invasive","Native"],
      "HARDINESS ZONE (BE 7-8)": ["Zone 3","Zone 4","Zone 5","Zone 6","Zone 7","Zone 8","Zone 9","Zone 10"],
      "SUNLIGHT": ["Full sunlight","Half shade","Shade"],
      "GROUND TYPE": ["Clay","Loam","Rocks","Sandy soil"],
      "SOIL DRAINAGE": ["Fast draining","Well drained","Moderately drained","Poorly drained"],
      "SOIL MOISTURE": ["Arid","Dry","Moderately moist","Damp","Waterlogged"],
      "SOIL PH": ["Acid","Alkaline","Neutral"],
      "LIFE CYCLE": ["Annual","Biennial","Perennial"],
      "HEIGHT": ["0-0.2 m","0.2-0.5 m","0.5-1 m","1-1.5 m","1.5-2 m","2-3 m","3-5 m","5-8 m","8-12 m","12-20 m","20-30 m","30+ m"],
      "WIDTH": ["0-0.2 m","0.2-0.5 m","0.5-1 m","1-1.5 m","1.5-2 m","2-3 m","3-5 m","5-8 m","8-12 m","12-20 m","20+ m"],
      "GROWTH RATE": ["Fast growing","Moderate growth","Slow growing"],
      "ACCESSIBILITY": ["Accessible","Semi-rare","Hard to find"],
      "PLANTING DENSITY": ["0-0.1/m²","0.1-0.5/m²","0.5-1/m²","1-2/m²","2-3/m²","3-4/m²","4-5/m²","5-6/m²","6-7/m²","7-8/m²","8-9/m²","9-10/m²","10-12/m²","12-15/m²","15+ /m²"],
      "SCHOOL SUBJECT": ["Plantecologie","Plantenkennis 1","Plantenkennis 2"],
      "NOTE":"text"
    };

    // ----- BUILD SIDEBAR -----
  function buildSidebar() {
    // ⭐ My List button
    const myListBtn = document.createElement("label");
    myListBtn.classList.add("tag-label");

    const myListCheckbox = document.createElement("input");
    myListCheckbox.type = "checkbox";
    myListCheckbox.classList.add("tag-checkbox");
    myListCheckbox.value = "Your selected list"; // ⚡ important

    const text = document.createTextNode("Your selected list");

    myListBtn.appendChild(myListCheckbox);
    myListBtn.appendChild(text);
    myListBtn.style.cursor = "pointer";

    myListCheckbox.addEventListener("change", () => {
      updateSearchBarFromCheckboxes(); // ⚡ now it writes to search bar
    });

        // --- EXPORT BUTTON ---
    let exportBtn = document.createElement("button");
    exportBtn.textContent = "Export selected list as pdf with images";
    exportBtn.style.display = "none"; // hidden by default
    exportBtn.classList.add("export-btn");
    exportBtn.addEventListener("click", exportMyList);
    tagFiltersDiv.appendChild(exportBtn);

      // --- EXPORT TEXT BUTTON ---
  let exportTextBtn = document.createElement("button");
  exportTextBtn.textContent = "Export selected list as text file without images";
  exportTextBtn.style.display = "none"; // hidden by default
  exportTextBtn.classList.add("export-btn");
  exportTextBtn.addEventListener("click", exportMyListText);
  tagFiltersDiv.appendChild(exportTextBtn);

// Show/hide text export button along with PDF button
function toggleExportButtons() {
  const yourListCheckbox = document.querySelector('.tag-checkbox[value="Your selected list"]');
  const show = yourListCheckbox && yourListCheckbox.checked;
  exportBtn.style.display = show ? "block" : "none";
  exportTextBtn.style.display = show ? "block" : "none";
}

myListCheckbox.addEventListener("change", toggleExportButtons);
toggleExportButtons(); // initial

    // Show/hide export button when "Your selected list" is checked
    function toggleExportButton() {
      const yourListCheckbox = document.querySelector('.tag-checkbox[value="Your selected list"]');
      exportBtn.style.display = yourListCheckbox && yourListCheckbox.checked ? "block" : "none";
    }

    // Call this whenever checkboxes or list change
    myListCheckbox.addEventListener("change", toggleExportButton);
    toggleExportButton(); // initial

    tagFiltersDiv.appendChild(myListBtn);

    // Build the rest of the sidebar tags
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

        // ⚡ special handling for "Your selected list"
        if (tagLower === "your selected list") {
          return isExclusion ? !myList.has(plant.globalIndex) : myList.has(plant.globalIndex);
        }

        const exactTagMatch = (plant.tagsLower || []).some(t => t === tagLower);

        const matchesPlant =
          exactTagMatch ||
          plant.latinLower.includes(tagLower) ||
          plant.dutchLower.includes(tagLower);

        return isExclusion ? !matchesPlant : matchesPlant;
      })
    )
  );
}

    // ⭐ CREATE LIST BUTTON
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

    // ⭐ SYNC ALL BUTTONS
    function updateAllListButtons() {
      document.querySelectorAll(".list-btn").forEach(btn => {
        const index = Number(btn.dataset.index);
        btn.classList.toggle("active", myList.has(index));
      });
    }

    // ----- RENDER BATCH -----
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
                  <p class="dutch-name">${plant["DUTCH NAME"]}</p>
                  ${plant["FAMILY"] ? `<p class="family-name">${plant["FAMILY"]}</p>` : ""}`;

        const listBtn = createListButton(plant);

        plantDiv.appendChild(img);
        plantDiv.appendChild(listBtn); // ⭐ ADD THIS
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

      overlayDetails.innerHTML = `<p class="latin-name">${plant["LATIN NAME"]}</p>
                                  <p class="dutch-name">${plant["DUTCH NAME"]}</p>
                                  ${plant["FAMILY"] ? `<p class="family-name">${plant["FAMILY"]}</p>` : ""}`;
      
    let existingBtn = overlay.querySelector(".overlay-image .list-btn");
    if (existingBtn) existingBtn.remove();

    // Create the button
    const listBtn = createListButton(filteredPlants[currentPlantIndex]);

    // Append it INSIDE the image container so padding/position works
    const overlayImageContainer = overlay.querySelector(".overlay-image");
    overlayImageContainer.appendChild(listBtn);

      // Render tag groups
      tagGroups.forEach(group => {
        const groupDiv = document.createElement("div");
        const groupHeader = document.createElement("p");
        groupHeader.textContent = group.name;
        groupHeader.classList.add("tag-group-divider");
        groupDiv.appendChild(groupHeader);

        group.tags.forEach(tagGroupName => {
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

      // Add "Search more images" button
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

      // Render thumbnails
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
  const spacingY = 12; // vertical space between rows
  const cols = 4; // 4 images per row
  const availableWidth = pageWidth - margin * 2 - spacingX * (cols - 1);
  const imgSize = availableWidth / cols; // square images
  const textHeight = 8;

  let x = margin;
  let y = margin;
  let colCount = 0;

  const selectedPlants = Array.from(myList).map(i => plants[i]);

  for (let plant of selectedPlants) {
    try {
      // Crop image to square and high-res
      const imgData = await getCroppedImageDataURL(plant["MAIN IMAGE"], imgSize);
      pdf.addImage(imgData, "JPEG", x, y, imgSize, imgSize);
    } catch (err) {
      console.warn("Failed to load image for", plant["LATIN NAME"]);
    }

    // Add names below image
    pdf.setFontSize(10);
    pdf.text(`${plant["LATIN NAME"]}`, x + imgSize / 2, y + imgSize + 4, { align: "center" });
    pdf.text(`${plant["DUTCH NAME"]}`, x + imgSize / 2, y + imgSize + 8, { align: "center" });

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
  let textContent = selectedPlants.map(p => `${p["LATIN NAME"]} - ${p["DUTCH NAME"]}`).join("\n");

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

// keep your existing getCroppedImageDataURL function as-is
async function getCroppedImageDataURL(url, targetSize) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // needed if images are from another domain
    img.onload = () => {
      const size = Math.min(img.width, img.height); // square crop
      const sx = (img.width - size) / 2;
      const sy = (img.height - size) / 2;

      const scaleFactor = 3; // increase resolution for PDF
      const canvas = document.createElement("canvas");
      canvas.width = targetSize * scaleFactor;
      canvas.height = targetSize * scaleFactor;
      const ctx = canvas.getContext("2d");

      // draw center-cropped square at higher resolution
      ctx.drawImage(img, sx, sy, size, size, 0, 0, canvas.width, canvas.height);

      // export high-quality JPEG
      resolve(canvas.toDataURL("image/jpeg", 1.0));
    };
    img.onerror = reject;
    img.src = url;
  });
}