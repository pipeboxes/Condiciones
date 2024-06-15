const image = document.getElementById("toggle-image");
const imageContainer = document.getElementById("image-container");

image.addEventListener("click", function () {
    imageContainer.classList.toggle("border-active");
});

const input1 = document.querySelector(".card-input1")
const input2 = document.querySelector(".card-input2")
const input3 = document.querySelector(".card-input3")

const select1 = document.querySelector(".custom-select1")
const select2 = document.querySelector(".custom-select2")
const select3 = document.querySelector(".custom-select3")

const button = document.querySelector(".btn")
const button2 = document.querySelector(".validar")

button.addEventListener("click", function () {
    const total = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value)
    if (total === 0) {
        alert('¡Vamos, agrega alguna estampilla!');
    } else if (total > 10) {
        alert('¡No puedes llevar más de 10 estampillas!');
    } else {
        alert('¡Gracias por su compra!');
    }
})

button2.addEventListener("click", function () {
    const password = select1.value + select2.value + select3.value
    if (password === "911") {
        alert('¡La clave 1 es correcta!');
    } else if (password === "714") {
        alert('¡La clave 2 es correcta!');
    } else {
        alert('¡Error, sigue intentándolo!');
    }
})