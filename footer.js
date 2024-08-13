document.getElementById("login-icon").addEventListener("click", function() {
    var loginForm = document.getElementById("login-form");
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
});

var chatIcon = document.getElementById("chat-icon");
var chatWindow = document.getElementById("chat-window");
var closeChat = document.getElementById("close-chat");

chatIcon.addEventListener("click", function() {
    chatWindow.style.display = "block";
});

closeChat.addEventListener("click", function() {
    chatWindow.style.display = "none";
});

let criarConta = document.querySelector(".create-account");

criarConta.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "login.html";
});

let logo = document.querySelector(".logo");

logo.addEventListener("click", function() {
    window.location.href = "pag inicial.html";
});

let carrinho = document.getElementById("sacola");

carrinho.addEventListener("click", function() {
    window.location.href = "carrinho.html";
});

let home = documento.getElementById("Home");

