
let jugadores = [];

window.addEventListener("load", cargaPagina);


function cargaPagina() {
cargaLocalStorage();
actualizar();
document.getElementById("boton").addEventListener("click", añadirJugador);
}

// Controlador de evento de botón de guardar
function añadirJugador() {
  const formulario = document.getElementById("form_jugador");
  const alertaExito = document.getElementById("alertaExito");

  // Marco el formulario como validado
  formulario.classList.add("was-validated");

  // Si el formulario no tiene errores..
  if (formulario.checkValidity()) {
    let nombre = document.getElementById("txtNombre").value;
    let edad = document.getElementById("txtEdad").value;
    let raza = document.getElementById("raza").value;
    let urlImagen = document.getElementById("txtURL").value;

 
    formulario.reset();
    formulario.classList.remove("was-validated");

   
    alertaExito.classList.remove("hide");
    alertaExito.classList.add("show");

    
    let jugador = {nombre, edad, raza, urlImagen};
    jugadores.push(jugador);

   
    guardarLocalStorage();

   
    actualizar();
  }
}

function guardarLocalStorage(){
  localStorage.setItem("jugadores", JSON.stringify(jugadores));
}


function cargaLocalStorage(){
  if(localStorage.getItem("jugadores"))
      jugadores=JSON.parse(localStorage.getItem("jugadores"));
}


function actualizar(){

  if(jugadores.length == 0) 
    document.getElementById("jugadores").innerHTML="<h3>No hay mascotas</h3>"; 
  else{
    document.getElementById("jugadores").innerHTML="";
    jugadores.forEach(function (jugador) {
      let html = `<div class="row justify-content-center">
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
      document.getElementById("jugadores").innerHTML += html;
    });
  }
}