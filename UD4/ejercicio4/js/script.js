// Comprobamos si existe en localStorage el elemento con clave "perro"
if(localStorage.getItem("jugador")){
  // Si existe, recuperamos sus datos, convertimos el JSON  y mostramos el objeto por consola
  let jugador=JSON.parse(localStorage.getItem("jugador"));
  console.log(jugador);
}
else{
  // Si no existe, creamos un nuevo objeto de tipo perro y lo guardamos en localStorage convirtiéndolo a JSON
  console.log("No hay jugador");
  let jugadores=`{"jugadores":[ {"nombre":"Sachin", "apellidos":"Tendulkar", "edad": 23, "posicion": "bateador", "equipo" : "chinchonchin", "foto": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fas.com%2Fmasdeporte%2F2017%2F03%2F10%2Fpolideportivo%2F1489170861_193146.html&psig=AOvVaw3qfGEdxvYvQF9yw5niv1Bx&ust=1673525419669000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjJsJW-v_wCFQAAAAAdAAAAABAP"},
                  {"nombre":"Brian", "apellidos":"Lara", "edad": 67, "posicion": "lanzador", "equipo" : "Oviedo DFC", "foto": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fas.com%2Fmasdeporte%2F2017%2F03%2F10%2Fpolideportivo%2F1489170861_193146.html&psig=AOvVaw3qfGEdxvYvQF9yw5niv1Bx&ust=1673525419669000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjJsJW-v_wCFQAAAAAdAAAAABAP"},
                  {"nombre":"Ricky", "apellidos":"Ponting", "edad": 22, "posicion": "wicket keeper", "equipo" : "Paez GPT", "foto": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fas.com%2Fmasdeporte%2F2017%2F03%2F10%2Fpolideportivo%2F1489170861_193146.html&psig=AOvVaw3qfGEdxvYvQF9yw5niv1Bx&ust=1673525419669000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjJsJW-v_wCFQAAAAAdAAAAABAP"} ]}`;

  // La proxima vez que recarguemos la página la clave existirá
  localStorage.setItem("jugador",JSON.stringify(jugadores));
}
