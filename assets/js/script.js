function crearCardHTML(song) {
  const imgSrc = song.image || "assets/img/placeholder.jpeg";

  return `
  <div class="card col-lg-4 col-md-6 col-sm-12">
  <a href="${song.page}" class="text-decoration-none text-reset">
        <div class="row">
            <div class="col-4">
                <img src="${imgSrc}" class="img-fluid rounded-start" alt="${song.title}">
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title mb-0">${song.title}</h5>
                    <p class="card-text mb-1"><small class="text-body-secondary">${song.artist}</small></p>
                    <p class="card-text">Tonalidad: ${song.key}</p>
                </div>
            </div>
        </div>
        </a>
        </div>
    `;
}


function renderizarCanciones(lista){
    const contenedor = document.querySelector("#songs .row");
    contenedor.innerHTML = lista.map(crearCardHTML).join(" ");
}

renderizarCanciones(songs)




function filtrarCanciones(texto){
    const textoBusqueda = texto.toLowerCase();

    return songs.filter(song => {
        const coincideTitullo = song.title.toLowerCase().includes(textoBusqueda);
        const coincideArtista = song.artist.toLowerCase().includes(textoBusqueda);
        return coincideTitullo || coincideArtista
    });
}

const inputBuscador = document.querySelector("#buscador");

inputBuscador.addEventListener("input", ()=>{
    const resultado = filtrarCanciones(inputBuscador.value);
    renderizarCanciones(resultado)
})