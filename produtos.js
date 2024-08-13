// Seleciona todos os elementos com a classe 'popup-trigger'
const popupTriggers = document.querySelectorAll('.popup-trigger');
const popupModal = document.getElementById('product-popup');
const closePopup = document.querySelector('.close-popup');

// Abre o pop-up quando clicar em qualquer imagem com a classe 'popup-trigger'
popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
        popupModal.style.display = 'block';
    });
});

// Fecha o pop-up quando o botão de fechar é clicado
closePopup.addEventListener('click', function() {
    popupModal.style.display = 'none';
});

// Fecha o pop-up quando o usuário clica fora do conteúdo do pop-up
window.addEventListener('click', function(event) {
    if (event.target == popupModal) {
        popupModal.style.display = 'none';
    }
});
