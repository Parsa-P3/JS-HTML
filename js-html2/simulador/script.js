// "Simulador de lista de tareas"
// Crea un HTML que contenga una lista vacía <ul id="tareas"></ul>.
// Agregar nuevas tareas utilizando createElement y appendChild.


let tareas = document.getElementById("tareas");
let tarea1 = document.createElement("li")
tarea1.textContent = "Desayuno"
let tarea2 = document.createElement("li")
tarea2.textContent = "Cena"
tareas.appendChild(tarea1);
tareas.appendChild(tarea2);
