let pagina = document.getElementById("pagina");

pagina.style.width = "100%";
pagina.style.height = "500px";
pagina.style.backgroundColor = "black";
pagina.style.display = "list-item";

let h1Pagina = document.getElementById("h1Pagina");
h1Pagina.style.color = "White";
h1Pagina.style.textAlign = "Center";

function cambiartexto(){
       
       let r = Math.floor(Math.random() * 256); 
       let g = Math.floor(Math.random() * 256); 
       let b = Math.floor(Math.random() * 256); 
   
       h1Pagina.style.color = `rgb(${r}, ${g}, ${b})`; 
}

function cambiarfondo(){
       
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 

    pagina.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
}