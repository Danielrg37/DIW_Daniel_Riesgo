
  if(localStorage.getItem("jugador")){

    let jugador=JSON.parse(localStorage.getItem("jugador"));
    console.log(jugador);
  }
  else{
  
    console.log("No hay jugador");
    let jugador={
        nombre: "Virat",
        apellidos:"Kohli",
        edad: 25,
        posicion:"Bateador",
        equipo: "Royal Challengers Bangalores",
        foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diariocontraste.com%2F2018%2F11%2Fkohli-la-estrella-del-criquet-que-gana-mas-que-djokovic-y-aguero%2F&psig=AOvVaw3RR1n-FgkkLxtvfPCfuLVd&ust=1673523935895000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjzvte4v_wCFQAAAAAdAAAAABAk"
    };

    localStorage.setItem("jugador",JSON.stringify(jugador));
  }
