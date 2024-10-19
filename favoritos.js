// favoritos.js
document.addEventListener('DOMContentLoaded', function() {
    const favoritosContainer = document.getElementById('favoritos');

    // Obter a lista de favoritos do localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritosContainer.innerHTML = '<p>Você ainda não tem produtos favoritos.</p>';
    } else {
        favorites.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <b>${product.name}</b>
                <p>${product.price}</p>
                <button onclick="removeFavorite('${product.name}')">Remover dos Favoritos</button>
            `;

            favoritosContainer.appendChild(productCard);
        });
    }
});

// Função para remover um produto dos favoritos
function removeFavorite(productName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(item => item.name !== productName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    window.location.reload(); // Recarregar a página para atualizar a lista de favoritos
}
