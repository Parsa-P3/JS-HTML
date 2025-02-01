let galeria = document.getElementById("galeria");

function agregarImagen() {

    
    let imagen = document.createElement("img");

   
    // metodo para tener links random!
    let randomId = Math.floor(Math.random() * 1000); 
    imagen.src = `https://picsum.photos/200/200?random=${randomId}`;

  
    
    galeria.appendChild(imagen);
}