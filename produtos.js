// Get the modal
var modal = document.getElementById("product-modal");

// Get all images that open the modal
var imgs = document.querySelectorAll('.product-card img'); // Seleciona todas as imagens dos produtos

// Get the <span> element that closes the modal
var span = document.querySelector(".close-popup");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Attach click event to each image
imgs.forEach(function(img) {
    img.onclick = openModal;
});

// When the user clicks on <span> (x), close the modal
span.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto, preco) {
    // Obter o carrinho armazenado no localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verificar se o produto já está no carrinho
    let produtoExistente = carrinho.find(item => item.nome === nomeProduto);

    if (produtoExistente) {
        // Aumentar a quantidade do produto
        produtoExistente.quantidade += 1;
    } else {
        // Adicionar novo produto ao carrinho
        carrinho.push({ nome: nomeProduto, preco: preco, quantidade: 1 });
    }

    // Armazenar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${nomeProduto} foi adicionado ao carrinho!`);
}

// Exemplo de chamada para adicionar ao carrinho
document.querySelectorAll('.product-card').forEach(card => {
    card.querySelector('button').addEventListener('click', () => {
        const nomeProduto = card.querySelector('b').innerText;
        const precoProduto = parseFloat(card.querySelector('p').innerText.split('R$')[1]);
        adicionarAoCarrinho(nomeProduto, precoProduto);
    });
});
