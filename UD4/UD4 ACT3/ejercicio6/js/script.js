window.addEventListener("load", init);
url="https://studio-ghibli-films-api.herokuapp.com/api";

function init() {
    axios.get(url)
    .then(function(response) {
        const contenedorTarjetas = document.getElementById("pelis");
        const peliculas = Object.values(response.data);

       
        // Crear tarjetas para cada pelicula y agregarlas al contenedor
        peliculas.forEach(function(pelicula) {
            const tarjeta = crearTarjeta(pelicula);
            contenedorTarjetas.appendChild(tarjeta);
        });
    })
    .catch(function(error) {
        console.log(error);
    });
}

function crearTarjeta(pelicula) {

    // Creo los elementos de la tarjeta
    const card = document.createElement("div");
    const img = document.createElement("img");
    const contenido = document.createElement("div");
    const titulo = document.createElement("h5");
    const director = document.createElement("p");
    const fechaLanzamiento = document.createElement("p");
    const rating = document.createElement("p");

    // Agrego clases CSS
    card.classList.add("card");
    card.style="margin: 2em";
    img.style = "width: 400px; height: 400px;";
    contenido.classList.add("card-body");
    titulo.classList.add("card-title");
    director.classList.add("card-text");
    fechaLanzamiento.classList.add("card-text");

    // Agrego contenido a los elementos
    titulo.textContent = pelicula.title;
    director.textContent = "Director: " + pelicula.director;
    rating.textContent = "Rating: " + pelicula.rating;
    img.src = pelicula.poster;
    fechaLanzamiento.textContent = "Fecha de lanzamiento: " + pelicula.release;

    // Agregar elementos de texto al contenido
    contenido.appendChild(titulo);
    contenido.appendChild(director);
    contenido.appendChild(rating);
    contenido.appendChild(fechaLanzamiento);

    // Agregar elementos a la tarjeta
    card.appendChild(img);
    card.appendChild(contenido);

    // Devolver la tarjeta
    return card;
}

