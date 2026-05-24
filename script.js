const botonModo = document.getElementById('btn-color');
const cuerpoPagina = document.body;

// MIRA EL CAMBIO: Quitamos la palabra "function" y pusimos la flecha "=>" después de los paréntesis
const elBotonFueOprimido = () => {
    cuerpoPagina.classList.toggle('dark-mode');

    if (cuerpoPagina.classList.contains('dark-mode')) {
        botonModo.textContent = "Modo Claro";
    } else {
        botonModo.textContent = "Modo Oscuro";
    }
}; // Se cierra con punto y coma porque ahora la función se guarda dentro de una constante

botonModo.addEventListener('click', elBotonFueOprimido);