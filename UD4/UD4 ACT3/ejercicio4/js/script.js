window.addEventListener("load", init);

//Aqui hago el init para la url y el random 
function init(){
    const randomNum = Math.floor(Math.random() * 150 + 1);
const url = "https://pokeapi.co/api/v2/pokemon/" + randomNum;

//Aqui hago el fetch
fetch(url, { method: "GET" })
.then(response => {
    return response.json();
})
.then(jsonData => {

    //Aqui hago el clonado
    let template = document.getElementById("card").content;
    let clon = template.cloneNode(true);

// Aqui pongo los valores
    clon.querySelector(".card-body-img").src = jsonData.sprites.front_default;


    clon.querySelector(".card-body-title").innerHTML = '<p>' + jsonData.name + ' <span>' + jsonData.stats[0].base_stat + 'hp' + '</span> </p>';
  
    clon.querySelector(".card-body-text").textContent = jsonData.base_experience + "xp";

    clon.querySelectorAll(".card-footer-social h3")[0].textContent = jsonData.stats[1].base_stat + "K";

    clon.querySelectorAll(".card-footer-social h3")[1].textContent = jsonData.stats[2].base_stat + "K";

    clon.querySelectorAll(".card-footer-social h3")[2].textContent = jsonData.stats[3].base_stat + "K";

   // Añado el clon al contenedor
    document.querySelector("#contenedor").appendChild(clon);
   
    
})

.catch(error => {
    console.log(error);
});
}



