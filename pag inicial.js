document.addEventListener('DOMContentLoaded', function () {
    const heroCarousel = document.querySelector('#hero-carousel');
    const heroCarouselInner = heroCarousel.querySelector('.carousel-inner');
    const heroItems = heroCarousel.querySelectorAll('.carousel-item');
    const heroPrevButton = heroCarousel.querySelector('.carousel-button.prev');
    const heroNextButton = heroCarousel.querySelector('.carousel-button.next');
    let heroCurrentIndex = 0;

    function updateHeroCarousel() {
        heroCarouselInner.style.transform = `translateX(-${heroCurrentIndex * 100}%)`; 
    }

    heroPrevButton.addEventListener('click', () => {
        heroCurrentIndex = (heroCurrentIndex === 0) ? heroItems.length - 1 : heroCurrentIndex - 1;
        updateHeroCarousel();
    });

    heroNextButton.addEventListener('click', () => {
        heroCurrentIndex = (heroCurrentIndex === heroItems.length - 1) ? 0 : heroCurrentIndex + 1;
        updateHeroCarousel();
    });

    setInterval(() => {
        heroNextButton.click();
    }, 5000); 
});

document.addEventListener('DOMContentLoaded', function () {
    const featuredCarousel = document.querySelector('#featured-carousel');
    const featuredCarouselInner = featuredCarousel.querySelector('.carousel-inner');
    const featuredItems = featuredCarousel.querySelectorAll('.carousel-item');
    const featuredPrevButton = featuredCarousel.querySelector('.carousel-button.prev');
    const featuredNextButton = featuredCarousel.querySelector('.carousel-button.next');
    let featuredCurrentIndex = 0;

    const visibleItems = 4; 
    const totalItems = featuredItems.length;
    const maxIndex = totalItems - visibleItems; // 

    function updateFeaturedCarousel() {
        const movePercentage = (100 / visibleItems); 
        featuredCarouselInner.style.transform = `translateX(-${featuredCurrentIndex * movePercentage}%)`;
    }

    featuredPrevButton.addEventListener('click', () => {
        featuredCurrentIndex = (featuredCurrentIndex === 0) ? maxIndex : featuredCurrentIndex - 1;
        updateFeaturedCarousel();
    });

    featuredNextButton.addEventListener('click', () => {
        featuredCurrentIndex = (featuredCurrentIndex === maxIndex) ? 0 : featuredCurrentIndex + 1;
        updateFeaturedCarousel();
    });
});
