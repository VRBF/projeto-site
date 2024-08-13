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
