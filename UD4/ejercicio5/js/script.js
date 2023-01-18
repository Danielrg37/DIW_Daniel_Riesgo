
window.addEventListener("load", cargaPagina);


function cargaPagina() {

  if (localStorage.getItem("jugadores") === null) {
    document.getElementById("jugadores").innerHTML = '<h2 class="p-3">No hay datos de ningun jugador</h2>';
    let jugadores = [{
      nombre: "Sachin",
      apellidos: "Tendulkar",
      edad: 23,
      posicion: "bateador",
      equipo: "chinchonchin",
      foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fas.com%2Fmasdeporte%2F2017%2F03%2F10%2Fpolideportivo%2F1489170861_193146.html&psig=AOvVaw3qfGEdxvYvQF9yw5niv1Bx&ust=1673525419669000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjJsJW-v_wCFQAAAAAdAAAAABAP"
    }, {
      nombre: "Brian",
      apellidos: "Lara",
      edad: 67,
      posicion: "lanzador",
      equipo: "Oviedo DFC",
      foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fas.com%2Fmasdeporte%2F2017%2F03%2F10%2Fpolideportivo%2F1489170861_193146.html&psig=AOvVaw3qfGEdxvYvQF9yw5niv1Bx&ust=1673525419669000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjJsJW-v_wCFQAAAAAdAAAAABAP"
    }, {
      nombre: "Ricky",
      apellidos: "Ponting",
      edad: 22,
      posicion: "wicket keeper",
      equipo: "Paez GPT",
      foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fas.com%2Fmasdeporte%2F2017%2F03%2F10%2Fpolideportivo%2F1489170861_193146.html&psig=AOvVaw3qfGEdxvYvQF9yw5niv1Bx&ust=1673525419669000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjJsJW-v_wCFQAAAAAdAAAAABAP"
    }
    ]
    localStorage.setItem("jugadores", JSON.stringify(jugadores));
  } else {
    let jugadores = JSON.parse(localStorage.getItem("jugadores"));
    let jugadoresDiv = document.getElementById("jugadores");
      jugadores.forEach(function (jugador) {
        jugadoresDiv.innerHTML +=
        `<div class="row justify-content-center">
        <div class="col-3 p-1">
              <div class="card mb-4 rounded-3 shadow-sm text-center">
              <div class="card-header py-1">
                  <img src="${jugador.foto}" class="card-img-top"></img>
              </div>
                  <div class="card-body">
                  <ul class="list-unstyled mt-1 mb-1">
                      <h5 class="card-title">${jugador.nombre}</h5>
                      <p class="card-text">${jugador.apellidos}</p>
                      <p class="card-text">${jugador.equipo}</p>
                  </ul>
                  </div>
              </div>
              </div>`
      });
      jugadoresDiv.innerHTML += `</div>`;
    }
}
