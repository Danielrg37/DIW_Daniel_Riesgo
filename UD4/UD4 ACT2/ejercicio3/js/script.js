window.addEventListener("load",(e)=>{
    cargaPagina();
  });
  
  
  function cargaPagina(){
    document.getElementById("btnNuevoTodo").addEventListener("click",(e)=>{
      nuevaNota(e);
  });
  }
  
  function nuevaNota(e){
    e.preventDefault();
  
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let url = document.getElementById("url").value;

  
    if(nombre && apellidos && email && edad && url){
  
      let usuario={nombre, apellidos, email, edad, url};
     
     
        var XHR=new XMLHttpRequest();
        XHR.onreadystatechange=CambiaEstado;
        XHR.open("POST",'https://dummyjson.com/posts');
        XHR.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        XHR.send(JSON.stringify(usuario));
      }
      else{
        document.getElementById("contenedor").innerHTML='<h4>Completa los datos del formulario</h4>';
  
      }
  }
  
  
  
  // Manejador de cambio de estado
  function CambiaEstado(){
  
    // Imprimimos un mensaje cada vez que cambia el estado
      console.log("Cambio de estado: "+this.readyState);
      console.log("Cambio de estado: "+this.status);
  
  
      if((this.readyState===4)&&(this.status===201)){
        // Si el estado es 4 y el código de estado es 201, es que el recurso ha sido dado de alta con éxito
        let todo=JSON.parse(this.responseText);
        var capa=document.createElement("div");
      
        let completado=todo.completed?"Sí":"No";
  
        let html=`<h6>Se ha dado de alta la tarea</h6>
            <div class="card col-3 p-3 m-3">
            <h5>Id de nota: ${todo.id}</h5>
            <h6>Id de usuario: ${todo.userId}</h6>
            <p>Título: ${todo.title}</p>
            <p>Completada?: ${completado}</p>
          </div>`;
  
    
        document.getElementById("contenedor").innerHTML=html;
      
  
      }
  }
  