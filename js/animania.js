window.addEventListener("load", paginaCargada);

function paginaCargada(){
	// DOM para la búsqueda
	const formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", buscar);
	console.log(formulario);
}
function buscar(evento){
    //console.log(evento);
    evento.preventDefault();
    // guardamos la 
    const form = new FormData(this);
    const busqueda = form.get("input");
    //console.log(busqueda);
    const url = "https://api.jikan.moe/v3";

    fetch(`${url}/search/anime?q=${busqueda}&page=1`)
    .then(response=>response.json())
    .then(datos)
    .catch(error=>console.warn(error.message));
}
 function datos(info){
     //console.log(info.results);
 	const resultadoDeBusqueda = document.getElementById("result");

     console.log(resultadoDeBusqueda);
 	//Datos a mostrar:      <div class="col-12 bd-highlight p-2 text-center h-100 d-inline-block cardText justify-content-around">
    resultadoDeBusqueda.innerHTML = info.results
    .map(anime=>{
        return `
          <div class="m-3 mx-1 p-0 col-12 col-md-5 col-lg-3 bg-white animecard">
            <article class="card h-100 d-flex flex-column-reverse">
                   <div class="card-body col-12 p-2 text-center d-flex flex-column mb-2">   
                        <h2 class="h4 card-title mt-3">${anime.title}</h5>
                        <p class="card-text">${anime.synopsis}</p>
                        <p class="score text-center">Score: ${anime.score}</p>
                        <a href="${anime.url}" class="align-bottom d-block btn bg2 m-auto" target="_blank">Link a la página</a>
                   </div>
                   <img src="${anime.image_url}" class="card-img-top p-2 align-baseline d-block w-100 img-fluid" alt="anime"> 
            </article>
          </div>
            `
    }).join("\n");
    
}
/*return `
            <article class="card col-lg-3 col-md-3 col-sm-12 col-xs-12 justify-content-center card-body my-3 cardText ">
                        <img src="${anime.image_url}" class="card-img-top img-fluid" alt="anime">    
                        <h5 class="card-title mt-3">${anime.title}</h5>
                        <p class="card-text">${anime.synopsis}</p>
                        <p class="score">Score:${anime.score}</p>
                        <a href="${anime.url}" class="btn btn-primary bg2" target="_blank">Link a la página</a>
            </article>
            `*/




