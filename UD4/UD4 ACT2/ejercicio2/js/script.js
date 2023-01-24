var miXHR = new XMLHttpRequest();

miXHR.onreadystatechange = miXHRCambiaEstado;

miXHR.open("GET", 'https://dummyjson.com/posts', true);

miXHR.send();

function miXHRCambiaEstado(){
console.log("Cambio de estado:" + miXHR.readyState);
if((miXHR.readyState == 4) && (miXHR.status == 200)){
    var respuesta = miXHR.responseText;
    var respuestaJSON = JSON.parse(respuesta);
    console.log(respuestaJSON);


    
    var div = document.getElementById("div1");
  
    var random = Math.floor(Math.random() * (30 - 1) + 1);
    console.log(random);
   
    let html = `<div class="card col-3 p-3 m-3" style="width: 18rem;">
              
           
          
    <div class="card-body">
    <h1 class="card-title pricing-card-title">${respuestaJSON.posts[random].title}</h1>
    <p>${respuestaJSON.posts[random].body}</p><br>
       <h2>Id: ${respuestaJSON.posts[random].id}</h2>
       <h3> Usuario Id: ${respuestaJSON.posts[random].userId}</h3>
    </ul>
</div>
</div>`;

      document.getElementById("contenedor").innerHTML += html;


  }
    }


