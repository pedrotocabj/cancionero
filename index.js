const contenedorCancionesLista = document.getElementById(
  "contenedor-canciones-lista"
);

function crearCancionInicio(canciones) {
  canciones.forEach((cancion) => {
    const nuevaCancion = document.createElement("div");
    nuevaCancion.id = "conteiner-cancion-objeto";
    nuevaCancion.innerHTML = `
            <img src="/imagenes/${cancion.album}.jpg">
          <div id="tituloYNombre">
            <p id="nombreCancion"><i class="fa-solid fa-music"></i>${cancion.titulo}</p>
            <p id="discoCancion"><i class="fa-solid fa-compact-disc"></i>${cancion.album}</p>
            <p id="artistaCancion"><i class="fa-solid fa-people-group"></i>${cancion.autor}</p>
          </div>
          <div id="boton-borrar">
          <button id="eliminar-btn"><i class="fa-solid fa-trash-can"></i></button>
          </div>
    `;
    contenedorCancionesLista.appendChild(nuevaCancion);
  });
}
crearCancionInicio(canciones);

let newArray = [];
function agregarCancion() {
  const lastItem = newArray[newArray.length - 1];

  const nuevaCancion = document.createElement("div");
  nuevaCancion.id = "conteiner-cancion-objeto";
  nuevaCancion.innerHTML = `
            <img src="imagenes/${lastItem.album}.jpg">
          <div id="tituloYNombre">
            <p id="nombreCancion"><i class="fa-solid fa-music"></i>${lastItem.titulo}</p>
            <p id="discoCancion"><i class="fa-solid fa-compact-disc"></i>${lastItem.album}</p>
            <p id="artistaCancion"><i class="fa-solid fa-people-group"></i>${lastItem.autor}</p>
          </div>
        </div>
    `;
  contenedorCancionesLista.appendChild(nuevaCancion);
}

const botonSubmit = document.getElementById("btn-agregar");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formulario = getFormulario(e);
  newArray.push(formulario);
  agregarCancion();
  form.reset();
});

function getFormulario(e) {
  return {
    titulo: e.target.elements.titulo.value,
    album: e.target.elements.album.value,
    autor: e.target.elements.autor.value,
    acordes: e.target.elements.acordes.value,
  };
}
