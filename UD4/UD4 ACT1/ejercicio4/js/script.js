
if(localStorage.getItem("jugador")){
 
  let jugador=JSON.parse(localStorage.getItem("jugador"));
  console.log(jugador);
}
else{
 
  console.log("No hay jugador");
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

 
  localStorage.setItem("jugador",JSON.stringify(jugadores));
}
