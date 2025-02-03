

function m(){
    let menu = document.getElementById("menu");
    let select = document.createElement("select");
    let option1 = document.createElement("option");
    let op1 = prompt("Añade primer comida");
    let option2 = document.createElement("option");
    let op2 = prompt("Añade segunda comida");
    let option3 = document.createElement("option");
    let op3 = prompt("Añade tercer comida");

    option1.value = op1;
    option1.text = op1;

    option2.value = op2;
    option2.text = op2;

    option3.value = op3;
    option3.text = op3;
   
    menu.appendChild(select);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    select.style.width = "50%"
    select.style.height = "50px"

}

m();
console.log(men);