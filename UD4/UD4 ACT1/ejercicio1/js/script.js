let jugador1 = {
    nombre: "Virat",
    apellidos:"Kohli",
    edad: 25,
    posicion:"Bateador",
    equipo: "Royal Challengers Bangalores",
    foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diariocontraste.com%2F2018%2F11%2Fkohli-la-estrella-del-criquet-que-gana-mas-que-djokovic-y-aguero%2F&psig=AOvVaw3RR1n-FgkkLxtvfPCfuLVd&ust=1673523935895000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjzvte4v_wCFQAAAAAdAAAAABAk"
  }
  
  let cadenaJSON=JSON.stringify(jugador1);
  
  let jugador2=JSON.parse(cadenaJSON);
  
  console.log("Nombre:" +jugador2.nombre + " Apellidos:" + jugador2.apellidos + " Edad:" + jugador2.edad + " Posicion:" + jugador2.posicion + " Equipo:" + jugador2.equipo + " Foto:" + jugador2.foto);
  