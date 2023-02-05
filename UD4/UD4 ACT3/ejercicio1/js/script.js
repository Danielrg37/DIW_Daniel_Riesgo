window.addEventListener("load", init);

//Hago el fetch
function init(){
const url = "https://randomuser.me/api/?results=10";

fetch(url, { method : 'GET' })
.then(function(response) {
    return response.json();
})
.then(function(data) {
    var tcuerpo = document.getElementById("cuerpo-tabla");
   

    //Recorro el array de resultados
    for (var i = 0; i < data.results.length; i++) {
       let tr = document.createElement("tr");
       //Aqui añado el id, nombre y apellidos
       let id= document.createElement("td");
         let nombre = document.createElement("td");
            let apellidos = document.createElement("td");

            //Aqui creo el td de imagen para luego añadirle el img más adelante
            let img = document.createElement("td");
            let aux = document.createElement("img");

            //Aqui añado el email y los botones
            let email = document.createElement("td");
            let botones = document.createElement("td");

          


            //Aqui añado los valores 
            id.innerHTML = i;
            nombre.innerHTML = data.results[i].name.first;
            apellidos.innerHTML = data.results[i].name.last;
            aux.src = data.results[i].picture.thumbnail;

            email.innerHTML = data.results[i].email;
            botones.innerHTML = `
            <button type="button" class="btn btn-primary">Ver detalles</button>
            <button type="button" class="btn btn-warning">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
          `;
           
        //Aqui añado los td a la fila
        tr.appendChild(id);
        tr.appendChild(nombre);
        tr.appendChild(apellidos);
        
        img.appendChild(aux);
        tr.appendChild(img);

        tr.appendChild(email);
        tr.appendChild(botones);
        
        tcuerpo.appendChild(tr);

}
})

.catch(function(error) {
    console.error('Error:', error);
});

}