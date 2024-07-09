document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.email === email && usuario.senha === senha) {
        alert('Login realizado com sucesso!');
        window.location.href = 'pag inicial.html';
    } else {
        alert('Email ou senha incorretos.');
    }
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

