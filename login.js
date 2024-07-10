document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.email === email && usuario.senha === senha) {
        alert('Login realizado com sucesso!');
        window.location.href = 'pag inicial.html';
    } else {
        alert('Email ou senha incorretos, por favor tente novamente ou crie uma conta');
    }
});
const clique = document.querySelector('#clique');
const criarConta = document.querySelector('.criar-conta');
criarConta.addEventListener('click', () => {
  window.location.href = 'cadastro.html';
});

function mostrarClique() {
  clique.style.opacity = '100';
}
criarConta.addEventListener('mouseover', mostrarClique);

function esconderClique() {
  clique.style.opacity = '0';
}
criarConta.addEventListener('mouseout', esconderClique);

const entrar = document.querySelector('#entrei');
const botao = document.querySelector('.entrar');
botao.addEventListener('mouseover', () => {
  entrar.style.opacity = '100';
});
botao.addEventListener('mouseout', () => {
  entrar.style.opacity = '0';
});

const container = document.getElementById('container');
const image = container.querySelector('.imagem-3d');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (y - centerY) / centerY * 20;
  const rotateY = (x - centerX) / centerX * -20;

  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
  image.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

