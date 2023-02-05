window.addEventListener("load", init);

//Aqui hago el init para los botones
function init(){

document.getElementById("responder").addEventListener("click",cargaPagina);
document.getElementById("nueva").addEventListener("click", nuevaPregunta);
}


function cargaPagina(event){
    event.preventDefault();
    // Si la pregunta no es null, hago el fetch
    if(document.getElementById("pregunta").value != ""){
    const url="https://yesno.wtf/api";
  
    fetch(url, { method : 'GET' })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        // En funcion de la respuesta, añado el texto y el color de fondo
        if(data.answer=="yes"){
        document.getElementById("titulo").innerHTML="Respuesta: " + data.answer;
        document.getElementById("titulo").classList.add("bg-success");
        } else{
            document.getElementById("titulo").innerHTML="Respuesta: " + data.answer;
            document.getElementById("titulo").classList.add("bg-danger");

        }
        document.getElementById("imagen").src=data.image;
    })
    
    .catch(function(error) {
        console.error('Error:', error);
    });
}
}
    
// Funcion para limpiar los campos
function nuevaPregunta(event){
    event.preventDefault();
    document.getElementById("titulo").innerHTML="";
    document.getElementById("titulo").classList.remove("bg-success");
    document.getElementById("titulo").classList.remove("bg-danger");
    document.getElementById("imagen").src="";
}
