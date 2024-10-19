function toggleFavorite(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('b').innerText;
    const productPrice = productCard.querySelector('p:nth-of-type(3)').innerText; // Preço do produto
    const productImage = productCard.querySelector('img').src; // URL da imagem do produto

    // Obter a lista de favoritos do localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Verificar se o produto já está nos favoritos
    const productIndex = favorites.findIndex(item => item.name === productName);

    if (productIndex > -1) {
        // Produto já está nos favoritos, removê-lo
        favorites.splice(productIndex, 1);
        button.innerText = '♡'; // Coração vazio
        button.title = 'Adicionar aos Favoritos';
        alert(`${productName} foi removido dos Favoritos!`);
    } else {
        // Produto não está nos favoritos, adicioná-lo
        favorites.push({ name: productName, price: productPrice, image: productImage });
        button.innerText = '❤️'; // Coração preenchido
        button.title = 'Remover dos Favoritos';
        alert(`${productName} foi adicionado aos Favoritos!`);
    }

    // Salvar a lista de favoritos de volta no localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Adiciona ao carrinho
function adicionarAoCarrinho(nomeProduto, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let produtoExistente = carrinho.find(item => item.nome === nomeProduto);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({ nome: nomeProduto, preco: preco, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    console.log('Carrinho atualizado:', carrinho);
    return(`${nomeProduto} foi adicionado ao carrinho!`);
}

// Função separada para lidar com a adição ao carrinho
function handleAddToCart(event) {
    const card = event.target.closest('.product-card');
    const nomeProduto = card.querySelector('b').innerText;
    const precoProduto = parseFloat(card.querySelector('p').innerText.split('R$')[1]);
    const alertMessage = adicionarAoCarrinho(nomeProduto, precoProduto);
    alert(alertMessage)
}

// Evento para adicionar produto ao carrinho
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-card').forEach(card => {
        const addButton = card.querySelector('button');
        addButton.removeEventListener('click', handleAddToCart);
        addButton.addEventListener('click', handleAddToCart);
    });

    updateFavoriteButton();
});