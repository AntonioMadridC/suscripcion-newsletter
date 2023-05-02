const acceptCheck = document.getElementById("check")
const emailBox = document.getElementById("inputEmail")
const subscribe = document.getElementById("suscripcion")

/* Prevenir el comportamiento del form por defecto */
subscribe.addEventListener('submit', function(event) {
    event.preventDefault();
    const accept = acceptCheck.checked
    const email = emailBox.value

    if (accept && email) {
        alert("¡Felicitaciones! Pronto escucharás de nosotros")
    } else {
        alert("Parece que nos faltó algo...")
    }
});

console.log('Email: ', emailBox.value);
console.log(acceptCheck.checked);
