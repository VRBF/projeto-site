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
