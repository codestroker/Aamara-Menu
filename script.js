// List of images for the carousel
const images = ["dish1.png", "dish2.png", "dish3.png", "dish4.png", "dish5.png", "dish6.png", "dish7.png", "dish8.png"];
let currentImageIndex = 0;

// Carousel navigation functions
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    const imageElement = document.getElementById("menu-image");
    imageElement.src = images[currentImageIndex];
}

// Sections for dynamic menu navigation
const sections = {
    "Foods": "foods-section",
    "Hot Pots": "hotpots-section",
    "Small Plates": "smallplates-section",
    "Breads": "breads-section",
    "Desserts": "desserts-section",
    "Signature": "signature-section",
    "Beer": "beer-section",
    "Mocktail": "mocktail-section",
    "Cocktail": "cocktail-section",
    "Wine": "wine-section",
    "Non-Alcoholic": "nonalcoholic-section",
    "Selected Spirits": "selectedspirits-section"
};

// Dynamically generate menu boxes
const menuBoxesContainer = document.querySelector('.menu-boxes');
Object.keys(sections).forEach(category => {
    const box = document.createElement('div');
    box.className = 'menu-box';
    box.textContent = category;

    // Add smooth scrolling to each box
    box.onclick = () => {
        const targetSection = document.getElementById(sections[category]);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    menuBoxesContainer.appendChild(box);
});



