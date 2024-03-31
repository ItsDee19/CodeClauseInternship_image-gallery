document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');
    const categories = new Set();

    // Extract categories from image classes
    images.forEach(image => {
        image.classList.forEach(className => {
            if (className !== 'image') {
                categories.add(className);
            }
        });
    });

    const filterButtonsContainer = document.querySelector('.filter-buttons');

    // Dynamically generate filter buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter
        button.classList.add('filter-button');
        button.setAttribute('data-filter', category);
        filterButtonsContainer.appendChild(button);
    });

    const filterButtons = document.querySelectorAll('.filter-button');

    // Event listener for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            images.forEach(image => {
                if (filterValue === 'all' || image.classList.contains(filterValue)) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });
});
