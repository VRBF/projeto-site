document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('header form');
    const loginLink = document.querySelector('header .account a');
    const productCards = document.querySelectorAll('.product-card');

    // Search functionality
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchForm.querySelector('input').value.toLowerCase();
        productCards.forEach(card => {
            const productName = card.querySelector('b').textContent.toLowerCase();
            if (productName.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Login alert
    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecionando para a página de login...');
    });
});
