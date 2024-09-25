// Define categories and tags
const categories = {
    "Plant species": ["perennial", "biennial", "bush", "tree", "ground cover", "hedge", "climbing plant"],
    "Flower color": ["blue", "brown", "green", "orange", "pink", "purple", "red", "white", "yellow"],
    "Flowering period": ["spring", "summer", "autumn", "winter"],
    "Sunlight": ["full sunlight", "half shade", "shade"],
    "Ground type": ["well-drained soil", "moist soil"],
    "Height": ["<20cm", "20-50cm", "50-100cm", "100-150cm", "150-200cm", "2-3m", "3-5m", "5-10m", ">10m"],
    "Fruits": ["edible (partly)", "berries", "fruit", "nuts"],
    "Climbing plants": ["adhesive", "epiphytes"],
    "Other": ["evergreen", "native", "aromatic", "large leaves", "toxic"]
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

    // Add event listener for input changes to update checkboxes
    document.getElementById('searchInput').addEventListener('input', () => {
        updateCheckboxesFromSearch();
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

        // Use original order of tags without sorting
        const tags = categories[category];

        tags.forEach(tag => {
            const tagContainer = document.createElement('div');
            tagContainer.classList.add('tag-container');

            const tagCheckbox = document.createElement('input');
            tagCheckbox.type = 'checkbox';
            tagCheckbox.id = `tag-${tag}`;
            tagCheckbox.value = tag;

            // Event listener for checkbox toggle
            tagCheckbox.addEventListener('change', () => {
                toggleTag(tag, tagCheckbox.checked);
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

// Handle tag checkbox changes
function toggleTag(tag, isChecked) {
    if (isChecked) {
        if (!selectedTags.includes(tag)) {
            selectedTags.push(tag);
        }
    } else {
        selectedTags = selectedTags.filter(t => t !== tag);
    }
    // Update search input and perform search
    document.getElementById('searchInput').value = selectedTags.join(', ');
    searchImages();
}

// Update checkboxes based on search bar input
function updateCheckboxesFromSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tags = searchInput.split(',').map(tag => tag.trim());
    const allCheckboxes = document.querySelectorAll('#sideMenuContent input[type="checkbox"]');

    allCheckboxes.forEach(checkbox => {
        const tag = checkbox.value.toLowerCase();
        if (tags.includes(tag)) {
            checkbox.checked = true;
            if (!selectedTags.includes(tag)) {
                selectedTags.push(tag);
            }
        } else {
            checkbox.checked = false;
            selectedTags = selectedTags.filter(t => t !== tag);
        }
    });

    // Perform search based on updated tags
    searchImages();
}

function searchImages() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';

    const searchGroups = searchInput.split('/').map(group => group.trim());
    const matchingImages = [];

    searchGroups.forEach(group => {
        const tags = group.split(',').map(tag => tag.trim());
        const includeTags = [];
        const excludeTags = [];

        tags.forEach(tag => {
            if (tag.startsWith('-')) {
                excludeTags.push(tag.substring(1).trim());
            } else {
                includeTags.push(tag.trim());
            }
        });

        const groupImages = images.filter(image => {
            const tagsMatch = includeTags.every(tag => image.tags.includes(tag)) || 
                              includeTags.every(tag => image.dutch_name.toLowerCase().includes(tag)); // Check Dutch names
            const noExcludedTags = excludeTags.every(tag => !image.tags.includes(tag));
            const nameMatch = image.name.toLowerCase().includes(includeTags.join(' ')) ||
                              image.dutch_name.toLowerCase().includes(includeTags.join(' ')); // Check Dutch names
            return (tagsMatch || nameMatch) && noExcludedTags;
        });

        matchingImages.push(...groupImages);
    });

    const uniqueImages = Array.from(new Set(matchingImages.map(image => image.src)))
        .map(src => matchingImages.find(image => image.src === src));

    const sortedImages = uniqueImages.sort((a, b) => a.name.localeCompare(b.name));

    displayImages(sortedImages);

    if (sortedImages.length === 0) {
        imageGrid.innerHTML = '<p>No images found</p>';
    }
}

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

function openPopup(image) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const popupImageName = document.getElementById('popupImageName');
    const popupImageTags = document.getElementById('popupImageTags');
    const popupImageLink = document.getElementById('popupImageLink');

    popupImage.src = image.src;
    popupImage.alt = image.name;
    popupImageName.textContent = image.name;

    // Clear previous Dutch name
    const existingDutchName = document.querySelector('.dutch-name');
    if (existingDutchName) {
        existingDutchName.remove();
    }

    // Create and display the Dutch name
    const dutchNameElement = document.createElement('div');
    dutchNameElement.classList.add('dutch-name');
    dutchNameElement.textContent = image.dutch_name; // Add Dutch name

    popupImageTags.innerHTML = image.tags.map(tag => `<span class="tag-box">${tag}</span>`).join(' '); 

    popupImageLink.href = `https://www.google.com/search?hl=en&tbm=isch&q=${encodeURIComponent(image.name)}`;

    // Append the Dutch name below the Latin name and above the tags
    const popupContent = document.querySelector('.popup-content');
    popupContent.insertBefore(dutchNameElement, popupImageTags); // Insert Dutch name before tags

    popup.style.display = 'flex';
}


// Close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
