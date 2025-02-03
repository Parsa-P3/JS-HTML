   let contenedor = document.getElementById("tags");

    
   let etiquetas = ["JavaScript ", " HTML", " CSS", " Desarrollo Web", " React"];


    etiquetas.forEach(etiqueta => {
        let span = document.createElement("span");
        span.classList.add("tag");  
        span.innerText = etiqueta;  
        contenedor.appendChild(span); 
    });