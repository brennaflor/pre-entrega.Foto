var imagenes = document.querySelectorAll('#carrusel img');
var indicadores = document.getElementById('indicadores');
var indiceActual = 0;

imagenes.forEach(function() {
    var indicador = document.createElement('span');
    indicadores.appendChild(indicador);
});

function cambiarImagen(siguiente) {
    imagenes[indiceActual].classList.remove('visible');
    indicadores.children[indiceActual].classList.remove('activo');
    indiceActual += (siguiente ? 1 : -1);
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    } else if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    imagenes[indiceActual].classList.add('visible');
    indicadores.children[indiceActual].classList.add('activo');
}

document.getElementById('anterior').addEventListener('click', function() {
    cambiarImagen(false);
});

document.getElementById('siguiente').addEventListener('click', function() {
    cambiarImagen(true);
});

setInterval(function() {
    cambiarImagen(true);
}, 10000);

cambiarImagen(true);


document.querySelector('.email').addEventListener('click', function(event) {
    event.stopPropagation(); 
    var email = event.target.innerText;
    navigator.clipboard.writeText(email);
    alert('Correo electronico copiado: ' + email);
});

