
function openForm() {
    var formElement = document.getElementById("stanmed-form");
    formElement.classList.remove("ReactModal__Overlay--before-close");
    formElement.classList.add("ReactModal__Overlay--after-open");
}

function closeForm() {
    var formElement = document.getElementById("stanmed-form");
    formElement.classList.remove("ReactModal__Overlay--after-open");
    formElement.classList.add("ReactModal__Overlay--before-close");
}

