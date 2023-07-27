const contenedorCancionesLista = document.getElementById(
  "contenedor-canciones-lista"
);

function crearCancionInicio(canciones) {
  canciones.forEach((cancion, index) => {
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


    const botonBorrar = document.getElementsByClassName("eliminar-btn");
    Array.from(botonBorrar).forEach((boton) => {
      
    const lastItem = canciones[canciones.length - 1];

      boton.addEventListener("click", () => {
        const divSeleccionado = boton.closest(".conteiner-cancion-objeto");
        divSeleccionado.remove();
        canciones.splice(index,1);
      });
    });
  });
}

crearCancionInicio(canciones);

function agregarCancion() {
  const lastItem = canciones[canciones.length - 1];
  const codigoCancion = lastItem.link;

  const codigoCorto = codigoCancion.slice(31, 54);

  const nuevaCancion = document.createElement("div");
  nuevaCancion.classList = "conteiner-cancion-objeto";
  nuevaCancion.innerHTML = `
  <div class="iframe-spotify">
  <iframe style="border-radius:12px" src=https://open.spotify.com/embed/track/${codigoCorto}utm_source=generator width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
  <div class="boton-borrar">
  <button class="eliminar-btn"><i class="fa-solid fa-trash-can"></i></button>
  </div>
    `;
  contenedorCancionesLista.appendChild(nuevaCancion);

  const botonBorrar = nuevaCancion.querySelector(".eliminar-btn"); // Use querySelector to get the delete button
  botonBorrar.addEventListener("click", () => {
    const divSeleccionado = botonBorrar.closest(".conteiner-cancion-objeto");
    divSeleccionado.remove();
    canciones.splice(canciones.length - 1, 1); // Remove the last song from the 'canciones' array
  });
  

  };


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
