window.addEventListener("load", init);

function init(){

document.getElementById("responder").addEventListener("click",cargaPagina);
document.getElementById("nueva").addEventListener("click", nuevaPregunta);
}
//Lo mismo al 2 pero cambiando la forma
async function cargaPagina(event){
    event.preventDefault();
    if(document.getElementById("pregunta").value != ""){
    const url="https://yesno.wtf/api";
    let options = { method: 'get' };

    const response = await fetch(url, options);
    const data = await response.json();

    if(data.answer=="yes"){
        document.getElementById("titulo").innerHTML="Respuesta: " + data.answer;
        document.getElementById("titulo").classList.add("bg-success");
        } else{
            document.getElementById("titulo").innerHTML="Respuesta: " + data.answer;
            document.getElementById("titulo").classList.add("bg-danger");

        }
    document.getElementById("imagen").src=data.image;

}
}

async function nuevaPregunta(event){
        event.preventDefault();
        document.getElementById("titulo").innerHTML="";
        document.getElementById("titulo").classList.remove("bg-success");
        document.getElementById("titulo").classList.remove("bg-danger");
        document.getElementById("imagen").src="";
}