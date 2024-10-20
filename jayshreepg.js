const amenitiesBtn = document.getElementById('amenities-btn');
const nearbyBtn = document.getElementById('nearby-btn');
const amenitiesSection = document.querySelector('.amenities');
const servicesSection = document.querySelector('.services');
const nearbySection = document.querySelector('.nearby-options');

// Toggle visibility of amenities and nearby section
nearbyBtn.addEventListener('click', () => {
// Hide amenities and services, show nearby
amenitiesSection.style.display = 'none';
servicesSection.style.display = 'none';
nearbySection.style.display = 'block';

// Update button styles
nearbyBtn.classList.add('active');
amenitiesBtn.classList.remove('active');
});

// When "Amenities" is clicked, show amenities and hide nearby
amenitiesBtn.addEventListener('click', () => {
// Show amenities and services, hide nearby
amenitiesSection.style.display = 'block';
servicesSection.style.display = 'block';
nearbySection.style.display = 'none';

// Update button styles
amenitiesBtn.classList.add('active');
nearbyBtn.classList.remove('active');
});

// Toggle visibility of doctors list
const doctorsBtn = document.getElementById('doctors-btn');
const doctorsList = document.querySelector('.doctors-list');
doctorsBtn.addEventListener('click', () => {
doctorsList.style.display = doctorsList.style.display === 'block' ? 'none' : 'block';
});

// Toggle visibility of grocery list
const groceryBtn = document.getElementById('grocery-btn');
const groceryList = document.querySelector('.grocery-list');
groceryBtn.addEventListener('click', () => {
groceryList.style.display = groceryList.style.display === 'block' ? 'none' : 'block';
});