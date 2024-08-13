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
        
        // Adicionar eventos aos botões
        prevButton.addEventListener("click", function () {
            index = Math.max(index - 1, 0);
            updateCarousel();
        });

        nextButton.addEventListener("click", function () {
            index = Math.min(index + 1, totalItems - itemsToShow);
            updateCarousel();
        });

        updateCarousel(); // Inicializa o carrossel
    }

    // Inicializa ambos os carrosséis
    initializeCarousel("hero-carousel", 1); // 1 item para o carrossel principal
    initializeCarousel("featured-carousel", 4); // 4 itens para o carrossel de produtos em destaque
});
