document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de remoção de favoritos
    const removeButtons = document.querySelectorAll('.remove-favorite');

    // Adiciona um evento de clique a cada botão de remoção
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Seleciona o item favorito correspondente
            const favoriteItem = this.closest('.favorite-item');
            
            // Remove o item da página
            if (favoriteItem) {
                favoriteItem.remove();
            }

            // Opcional: Você pode adicionar código aqui para remover o item do armazenamento local ou da base de dados, se necessário
        });
    });
});
