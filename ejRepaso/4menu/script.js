let menu = document.getElementById("menu");

let comida1 = document.createElement("li")
let desayuno = prompt("Añade desayuno a tu menu:");
comida1.innerText = desayuno;
menu.appendChild(comida1);

let comida2 = document.createElement("li")
let almuerzo = prompt("Añade almuerzo a tu menu:");
comida2.innerText = almuerzo;
menu.appendChild(comida2);

let comida3 = document.createElement("li")
let cena = prompt("Añade cena a tu menu:");
comida3.innerText = cena;
menu.appendChild(comida3);

console.log("Primer comida añadido : " , desayuno);
console.log("segundo comida añadido : " , almuerzo);
console.log("tercer comida añadido : " , cena);