function crearCardHTML(song) {
  const inicial = song.title.charAt(0).toUpperCase();
  const imagenHTML = song.image
    ? `<img src="${song.image}" class="img-fluid rounded-start" alt="${song.title}">`
    : `<div class="placeholder-inicial">${inicial}</div>`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
      <a href="${song.page}" class="text-decoration-none text-reset">
        <div class="card h-100">
          <div class="row g-0">
            <div class="col-md-4">
              ${imagenHTML}
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${song.title.toUpperCase()}</h5>
                <p class="card-text"><small class="text-body-secondary">${song.artist}</small></p>
                <p class="card-text">Tonalidad: ${song.key}</p>
                <span class="badge rounded-pill text-bg-light">${song.status}</span>
              </div>
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