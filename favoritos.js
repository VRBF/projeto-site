document.addEventListener('DOMContentLoaded', function() {
    const favoritosContainer = document.getElementById('favoritos');

    // Obter a lista de favoritos do localStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.length === 0) {
        favoritosContainer.innerHTML = '<p>Você ainda não tem produtos favoritos.</p>';
    } else {
        favoritos.forEach(product => {
            // Verifique se os campos do produto estão definidos
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Use valores padrão para evitar undefined
            const image = product.image || 'url_da_imagem_default.jpg'; // URL da imagem padrão
            const name = product.name || 'Produto sem nome';
            const price = product.price || 'Preço não disponível';

            productCard.innerHTML = `
                <img src="${image}" alt="${name}">
                <b>${name}</b>
                <p>${price}</p>
                <button onclick="removeFavorite('${name}')">Remover dos Favoritos</button>
            `;

            favoritosContainer.appendChild(productCard);
        });
    }
});

// Função para remover um produto dos favoritos
function removeFavorite(productName) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos = favoritos.filter(item => item.name !== productName);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    window.location.reload(); // Recarregar a página para atualizar a lista de favoritos
}
