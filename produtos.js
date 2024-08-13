
var modal = document.getElementById("product-modal");


var imgs = document.querySelectorAll('.product-card img');


var span = document.querySelector(".close-popup");

function openModal() {
    modal.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
}


imgs.forEach(function(img) {
    img.onclick = openModal;
});


span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}


function adicionarAoCarrinho(nomeProduto, preco) {
    
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

   
    let produtoExistente = carrinho.find(item => item.nome === nomeProduto);

    if (produtoExistente) {
        
        produtoExistente.quantidade += 1;
    } else {
       
        carrinho.push({ nome: nomeProduto, preco: preco, quantidade: 1 });
    }

   
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${nomeProduto} foi adicionado ao carrinho!`);
}


document.querySelectorAll('.product-card').forEach(card => {
    card.querySelector('button').addEventListener('click', () => {
        const nomeProduto = card.querySelector('b').innerText;
        const precoProduto = parseFloat(card.querySelector('p').innerText.split('R$')[1]);
        adicionarAoCarrinho(nomeProduto, precoProduto);
    });
});
