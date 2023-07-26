const contenedorCancionesLista = document.getElementById(
  "contenedor-canciones-lista"
);



function crearCancionInicio(canciones) {
  canciones.forEach((cancion) => {
    const nuevaCancion = document.createElement("div");
    nuevaCancion.classList = "conteiner-cancion-objeto";
    nuevaCancion.innerHTML = `
          <div class="iframe-spotify">
          <iframe style="border-radius:12px" src="${cancion.link}" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div class="boton-borrar">
          <button class="eliminar-btn"><i class="fa-solid fa-trash-can"></i></button>
          </div>
    `;
    contenedorCancionesLista.appendChild(nuevaCancion);
  });
}

crearCancionInicio(canciones);

function agregarCancion() {
  const lastItem = canciones[canciones.length - 1];
  const nuevaCancion = document.createElement("div");
  nuevaCancion.classList = "conteiner-cancion-objeto";
  nuevaCancion.innerHTML = `
  <div class="iframe-spotify">
  <iframe style="border-radius:12px" src="${lastItem.link}" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
  <div class="boton-borrar">
  <button class="eliminar-btn"><i class="fa-solid fa-trash-can"></i></button>
  </div>
    `;
  contenedorCancionesLista.appendChild(nuevaCancion);
}

const botonSubmit = document.getElementById("btn-agregar");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formulario = getFormulario(e);
  canciones.push(formulario);
  agregarCancion();
  form.reset();
});

function getFormulario(e) {
  return {
    link: e.target.elements.link.value,
    acordes: e.target.elements.acordes.value,
  };
}

const botonBorrar = document.getElementsByClassName("eliminar-btn");
Array.from(botonBorrar).forEach((boton) => {
  boton.addEventListener("click", () => {
    const divSeleccionado = boton.closest(".conteiner-cancion-objeto");
    divSeleccionado.remove();
  });
});
