const selector = document.getElementById("select");

function agregarALista(canciones){
    canciones.forEach(cancion => {
        const nuevaOption = document.createElement('option');
        nuevaOption.innerHTML = `${cancion.nombre}`
        selector.appendChild(nuevaOption);
    });
}

agregarALista(canciones);
