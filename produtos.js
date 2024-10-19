// Função para adicionar/remover favoritos
function toggleFavorite(button) {
    const productId = button.getAttribute('data-id');
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.includes(productId)) {
        favoritos = favoritos.filter(id => id !== productId);
        button.textContent = '❤️'; // desfavoritar
    } else {
        favoritos.push(productId);
        button.textContent = '💔'; // favoritar
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Atualiza o estado dos botões de favoritos
function updateFavoriteButton() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    document.querySelectorAll('.favorite-btn').forEach(button => {
        const productId = button.getAttribute('data-id');

        if (favoritos.includes(productId)) {
            button.textContent = '💔'; // favoritado
        } else {
            button.textContent = '❤️'; // não favoritado
        }
    });
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
        addButton.removeEventListener('click', handleAddToCart); // Não remover o listener anterior
        addButton.addEventListener('click', handleAddToCart);
    });

    updateFavoriteButton();
});