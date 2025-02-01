let list = document.getElementById("tareas");
let tarea1 = document.createElement("li");
let tarea2 = document.createElement("li");
let tarea3 = document.createElement("li");

let objetivo1 = prompt("Añadir primer tarea : ")
console.log("primer tarea introducido : " , objetivo1);
tarea1.textContent = objetivo1;

let objetivo2 = prompt("Añadir segundo tarea : ")
console.log("segundo tarea introducido : " , objetivo2);
tarea2.textContent = objetivo2;

let objetivo3  = prompt("Añadir tercer tarea : ")
console.log("tercer tarea introducido : " , objetivo3);
tarea3.textContent = objetivo3;

list.appendChild(tarea1);
list.appendChild(tarea2);
list.appendChild(tarea3);

