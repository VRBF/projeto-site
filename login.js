

document.getElementById("add-address").addEventListener("click", function() {
    var addressForm = document.getElementById("address-form");
    if (addressForm.style.display === "none" || addressForm.style.display === "") {
        addressForm.style.display = "block";
    } else {
        addressForm.style.display = "none";
    }
});

// Chat functionality

