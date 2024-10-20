// Add this to your index.js or inside <script> tags

const filterBtn = document.getElementById('filterBtn');
const filterMenu = document.getElementById('filterMenu');
const applyBtn = document.querySelector('.apply-btn');

// Toggle the filter menu when the filter button is clicked
filterBtn.addEventListener('click', () => {
    filterMenu.style.display = filterMenu.style.display === 'none' || filterMenu.style.display === '' ? 'block' : 'none';
});

// Close the filter menu when "Apply Filters" button is clicked
applyBtn.addEventListener('click', () => {
    filterMenu.style.display = 'none';
});
