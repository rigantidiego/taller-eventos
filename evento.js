document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById('div');

    div.addEventListener("click", () => {
        alert('Hola! Soy el div!');
    });

    const boton = document.getElementById('boton');
    boton.addEventListener("click", function(event) {
        alert('Hola!');
        event.stopPropagation(); // Detener la propagación del evento si es necesario
    });
});