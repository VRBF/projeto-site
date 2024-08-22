
window.onload = function () {
    atualizarCarrinho();
};

function atualizarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalValor = document.getElementById('total-valor');

    itensCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco * item.quantidade;

        const itemCarrinho = document.createElement('div');
        itemCarrinho.className = 'item-carrinho';

        itemCarrinho.innerHTML = `
            <div class="info-item">
                <h3>${item.nome}</h3>
                <p>Quantidade: <button onclick="alterarQuantidade(${index}, -1)">-</button> ${item.quantidade} <button onclick="alterarQuantidade(${index}, 1)">+</button></p>
                <p>Preço: R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
            <div class="acoes-item">
                <button onclick="removerItem(${index})">Remover</button>
            </div>
        `;

        itensCarrinho.appendChild(itemCarrinho);
    });

    totalValor.innerText = total.toFixed(2);
}

function alterarQuantidade(index, change) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));

    if (carrinho[index].quantidade + change > 0) {
        carrinho[index].quantidade += change;
    } else {
        carrinho.splice(index, 1);  // Remove o item se a quantidade for zero
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

function limparCarrinho() {
    localStorage.removeItem('carrinho');
    atualizarCarrinho();
}

function finalizarCompra() {
    alert('Compra finalizada! Total: R$ ' + document.getElementById('total-valor').innerText);
    limparCarrinho();
}

function continuarComprando() { 
    alert('Você pode continuar comprando.');
    window.location.href = 'produtos.html';
}

