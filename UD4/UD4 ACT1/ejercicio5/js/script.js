
window.addEventListener("load", cargaPagina);


function cargaPagina() {

  if (localStorage.getItem("jugadores") === null) {
    document.getElementById("jugadores").innerHTML = '<h2 class="p-3">No hay datos de ningun jugador</h2>';
    let jugadores = [{
      nombre: "Sachin",
      apellidos: "Tendulkar",
      edad: 48,
      posicion: "bateador",
      equipo: "Yorkshire Country",
      foto: "https://th.bing.com/th/id/R.f1b24b4fba6095275c1b554b9e7c13ce?rik=pWbciH%2fMgk3Fgg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Eqc0GZl4YuM%2fTv3ZckDA1pI%2fAAAAAAAAD94%2fO-mr11GshWY%2fs1600%2fSachin%2bTendulkar.jpg&ehk=6dFmbTNCkoZupsY6D1hJKTTi6v61ytTG2HxKfzMEmvg%3d&risl=&pid=ImgRaw&r=0"
    }, {
      nombre: "Brian",
      apellidos: "Lara",
      edad: 53,
      posicion: "bateador",
      equipo: "Southern Rocks",
      foto: "https://th.bing.com/th/id/R.04732813a290083bfc450a1578d2ffab?rik=XpaUAyTiPIODQw&riu=http%3a%2f%2fgaurang.org%2flara1.jpg&ehk=ByED8khv4GPsaoFn5U132C8vLm8t%2f4j6j8AuXQXE2ok%3d&risl=&pid=ImgRaw&r=0"
    }, {
      nombre: "Ricky",
      apellidos: "Ponting",
      edad: 22,
      posicion: "wicket keeper",
      equipo: "Paez GPT",
      foto: "https://th.bing.com/th/id/OIP.d9Bx1dD_rhhfjSX6khQ4ugAAAA?pid=ImgDet&rs=1"
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
