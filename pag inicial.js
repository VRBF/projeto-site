document.addEventListener("DOMContentLoaded", function () {
    function initializeCarousel(carouselId, itemsToShow) {
        const carousel = document.getElementById(carouselId);
        const prevButton = carousel.querySelector(".carousel-button.prev");
        const nextButton = carousel.querySelector(".carousel-button.next");
        const carouselInner = carousel.querySelector(".carousel-inner");
        const items = carousel.querySelectorAll(".carousel-item");
        const totalItems = items.length;
        let index = 0;

        function updateCarousel() {
            const itemWidth = items[0].getBoundingClientRect().width;
            carouselInner.style.width = `${itemWidth * totalItems}px`;
            carouselInner.style.transform = `translateX(-${index * itemWidth}px)`;
        
            // Habilitar e desabilitar os botões de navegação
            prevButton.disabled = index === 0;
            nextButton.disabled = index >= (totalItems - itemsToShow);
        }
        

        prevButton.addEventListener("click", function () {
            index = Math.max(index - 1, 0);
            updateCarousel();
        });

        nextButton.addEventListener("click", function () {
            index = Math.min(index + 1, totalItems - itemsToShow);
            updateCarousel();
        });

        updateCarousel(); // Initialize carousel
    }

    // Initialize both carousels
    initializeCarousel("hero-carousel", 1); // 1 item for hero carousel
    initializeCarousel("featured-carousel", 4); // 4 items for featured products carousel
});
