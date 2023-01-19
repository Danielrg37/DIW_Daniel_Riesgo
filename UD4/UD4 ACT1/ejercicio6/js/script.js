let jugadores = [];

window.addEventListener("load", cargaPagina);


function cargaPagina() {
    cargaLocalStorage();
    actualizar();
    document.getElementById("boton").addEventListener("click", añadirJugador);
}


function añadirJugador() {
    const formulario = document.getElementById("form_jugador");
    const alertaExito = document.getElementById("alertaExito");


    formulario.classList.add("was-validated");


    if (formulario.checkValidity()) {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let posicion = document.getElementById("posicion").value;
        let equipo = document.getElementById("equipo").value;
        let urlImagen = document.getElementById("url").value;

        formulario.reset();
        formulario.classList.remove("was-validated");

        alertaExito.classList.remove("hide");
        alertaExito.classList.add("show");

        let jugador = {nombre, apellido, edad, posicion, equipo, urlImagen};
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
        document.getElementById("jugadores").innerHTML="<h3>No hay jugadores</h3>"; 
    else{
          document.getElementById("jugadores").innerHTML="";
        jugadores.forEach(function (jugador) {
            let html = `<div class="row justify-content-center">
            <div class="col-3 p-1">
                <div class="card mb-4 rounded-3 shadow-sm text-center">
                    <div class="card-header py-1">
                        <img src="${jugador.urlImagen}" class="card-img-top"></img>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-1 mb-1">
                            <h5 class="card-title">${jugador.nombre}  ${jugador.apellido}</h5>
                            <p class="card-text">Edad: ${jugador.edad}</p>
                            <p class="card-text">Posicion: ${jugador.posicion}</p>
                            <p class="card-text">Equipo: ${jugador.equipo}</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
            document.getElementById("jugadores").innerHTML += html;
        });
    }
}                    