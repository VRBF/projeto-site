document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    const carouselInner = document.querySelector(".carousel-inner");
    let index = 0;

    function updateCarousel() {
        const items = document.querySelectorAll(".carousel-item");
        const totalItems = items.length;
        const itemWidth = items[0].getBoundingClientRect().width;

        carouselInner.style.transform = `translateX(-${index * itemWidth}px)`;

        if (index === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        if (index === totalItems - 1) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    prevButton.addEventListener("click", function () {
        index = Math.max(index - 1, 0);
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        const totalItems = document.querySelectorAll(".carousel-item").length;
        index = Math.min(index + 1, totalItems - 1);
        updateCarousel();
    });

    updateCarousel(); // Initialize carousel
});
