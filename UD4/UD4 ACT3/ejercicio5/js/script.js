window.addEventListener('load', init);

async function init() {
//Hago el url hasta 905 porque Paez me comento que pasado del 905, había problemas en las fotos
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=905`;
    const response = await fetch(URL, { method: 'GET' });
    const data = await response.json();

    const pokemons = data.results;

    pokemons.forEach(async (pokemon) => {
        const response = await fetch(pokemon.url, { method: 'GET' });
        const data = await response.json();

        //Ordeno los pokemons por id porque si no, a veces se descolocan
        pokemons.sort((p1, p2) => {
            return p1.url.match(/\d+/)[0] - p2.url.match(/\d+/)[0];
          });


        const card = document.createElement("div");
        //Aqui uso el style para separar las cards y el tamaño de la img, es lo que se me ocurrio 
        // pero como tan solo eran dos lineas, no lo veía necesario ponerlo en el css
        card.classList.add("card");
        card.style = "margin: 2em";
        card.classList.add("col-3");

        //Añado valores
        const img = document.createElement("img");
        img.src = data.sprites.front_default;
        img.style = "width: 300px; height: 300px;";

        const nombre = document.createElement("h1");
        nombre.textContent = data.name;

        const numero = document.createElement("h2");
        numero.textContent = "#" + data.id;

        const tipos = document.createElement("ul");


        const tipo1 = document.createElement("li");
        tipo1.textContent = data.types[0].type.name;

        tipos.appendChild(tipo1);

        //Si hay un segundo tipo, lo añado
        if(data.types.length > 1){
            const tipo2 = document.createElement("li");
            tipo2.textContent = data.types[1].type.name;
            tipos.appendChild(tipo2);
        }

        //Añado todo al card
        card.appendChild(img);
        card.appendChild(nombre);
        card.appendChild(numero);
        card.appendChild(tipos);




        document.getElementById("pokimones").appendChild(card);





    });

}

