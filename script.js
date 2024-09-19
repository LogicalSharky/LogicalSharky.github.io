// Define categories and tags
const categories = {
    Colors: ["red", "blue", "green", "yellow", "white", "black", "brown", "purple", "orange", "pink"],
    Ground: ["well-drained soil", "moist soil", "any ground type"],
    Season: ["winter", "summer", "autumn", "spring"],
    Height: ["0.2m", "0.5m", "1m", "1.5m", "2m", "3m", "5m", "8m", "10m", "15m", "20m"],
    Sunlight: ["full sunlight", "half shade", "shade"],
    Type: ["perennial", "biennial", "bush", "tree", "ground cover", "hedge"],
    Food: ["fruit", "edible", "nuts", "berries"],
    Other: ["large leaves", "toxic", "native", "evergreen"]
};

// Track selected tags
let selectedTags = [];

// Wait for the DOM to fully load before accessing any elements
document.addEventListener('DOMContentLoaded', () => {
    // Ensure that the 'images' variable from images.js is loaded
    if (typeof images !== 'undefined' && images.length > 0) {
        console.log('Images data loaded successfully:', images);
    } else {
        console.error('Error: Images data not found or failed to load.');
    }

    populateSideMenu();

    // Add event listener for Enter key to trigger search
    document.getElementById('searchInput').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchImages();
        }
    });

    // Close the side menu when clicking outside of it
    document.addEventListener('click', (event) => {
        const sideMenu = document.getElementById('sideMenu');
        const sideMenuToggle = document.querySelector('.side-menu-toggle');

        if (!sideMenu.contains(event.target) && !sideMenuToggle.contains(event.target)) {
            closeSideMenu();
        }
    });

    // Close the popup when clicking outside of the popup content
    const popup = document.getElementById('popup');
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });
});

// Populate side menu with categories and tags
function populateSideMenu() {
    const sideMenuContent = document.getElementById('sideMenuContent');
    sideMenuContent.innerHTML = ''; // Clear existing content

    Object.keys(categories).forEach(category => {
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        sideMenuContent.appendChild(categoryTitle);

        // Sort tags alphabetically
        const sortedTags = categories[category].sort();

        sortedTags.forEach(tag => {
            const tagContainer = document.createElement('div');
            tagContainer.classList.add('tag-container');

            const tagCheckbox = document.createElement('input');
            tagCheckbox.type = 'checkbox';
            tagCheckbox.id = `tag-${tag}`;
            tagCheckbox.value = tag;

            // Event listener for checkbox toggle
            tagCheckbox.addEventListener('change', () => {
                if (tagCheckbox.checked) {
                    selectedTags.push(tag);
                } else {
                    selectedTags = selectedTags.filter(t => t !== tag);
                }
                searchImages(); // Trigger search immediately after a tag is selected/deselected
            });

            const tagLabel = document.createElement('label');
            tagLabel.htmlFor = `tag-${tag}`;
            tagLabel.textContent = tag;

            tagContainer.appendChild(tagCheckbox);
            tagContainer.appendChild(tagLabel);

            sideMenuContent.appendChild(tagContainer);
        });
    });
}

// Toggle the visibility of the side menu
function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('show');
}

// Close the side menu
function closeSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.remove('show');
}

// Search for images based on selected tags
function searchImages() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';

    let filteredImages = images;

    // Filter images based on the selected tags
    if (selectedTags.length > 0) {
        filteredImages = images.filter(image => 
            selectedTags.every(tag => image.tags.includes(tag))
        );
    }

    // Filter by name from search input
    if (searchInput !== '') {
        filteredImages = filteredImages.filter(image =>
            image.name.toLowerCase().includes(searchInput)
        );
    }

    const sortedImages = filteredImages.sort((a, b) => a.name.localeCompare(b.name));

    displayImages(sortedImages);

    if (sortedImages.length === 0) {
        imageGrid.innerHTML = '<p>No images found</p>';
    }
}

// Display the images in the grid
function displayImages(imagesToDisplay) {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';

    imagesToDisplay.forEach(image => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');
        imageCard.onclick = () => openPopup(image);

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;

        const nameElement = document.createElement('div');
        nameElement.classList.add('image-name');
        nameElement.textContent = image.name;

        imageCard.appendChild(imgElement);
        imageCard.appendChild(nameElement);
        imageGrid.appendChild(imageCard);
    });
}

// Open the popup with the image details
function openPopup(image) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const popupImageName = document.getElementById('popupImageName');
    const popupImageTags = document.getElementById('popupImageTags');
    const popupImageLink = document.getElementById('popupImageLink');

    popupImage.src = image.src;
    popupImage.alt = image.name;
    popupImageName.textContent = image.name;
    popupImageTags.textContent = 'Tags: ' + image.tags.join(', ');
    popupImageLink.href = `https://www.google.com/search?q=${encodeURIComponent(image.name)}`;

    popup.style.display = 'flex';
}

// Close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
