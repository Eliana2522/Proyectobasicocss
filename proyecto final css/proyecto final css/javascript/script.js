

//funcion del boton de busqueda
function search() {
    var searchText = document.getElementById('searchInput').value;
    // Aquí puedes implementar la lógica para buscar utilizando el texto ingresado
    console.log("Buscando por: " + searchText);
    // Por ahora, solo mostraremos un mensaje en la consola
}

//boton de deslizar hacia riba
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").classList.add("show");
    } else {
        document.getElementById("scrollToTopBtn").classList.remove("show");
    }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

