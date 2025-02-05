let crearPerfil = document.getElementById("create_profile");

/* 

<input id="nombre" type="text" maxlength="120" required>
<input id="edad" type="number" max="120">
<textarea id="descripcion" max="250"></textarea> 

*/

crearPerfil.onclick = function () {
    // imprimir por consola los valores de los 3 primeros inputs
    let nombreCompleto = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let descripcion = document.getElementById("descripcion").value;

    console.log("Nombre completo: ", nombreCompleto);
    console.log("Edad: ", edad);
    console.log("Descripción: ", descripcion);

    let contenido = document.getElementById("profile_preview");

    //variable para saber si nombre es un numero
    let isNanNombre = isNaN(Number(nombreCompleto))

    // para saber si contiene numero
    let pattern = new RegExp("[0-9]" , "g");
    let contieneNumero = nombreCompleto.search(pattern);

   
    let pattern3 = new RegExp("X" , "d");
    let contieneletraX =  nombreCompleto.search(pattern3);



    if(nombreCompleto === ''){
        alert("Nombre completo no puede estar vacio!");
    }else if(!(isNanNombre)){
        alert("Nombre no puede ser numeros!");
    }else if(contieneNumero !== -1){
        alert("Nombre no debe contener ser numeros!");
    }
    // hay que poner el !==-1 si no , no funciona bien el condicion
    else if(contieneletraX !== -1){
        alert("El nombre no puede empezar con X");
    }
    else if (edad === ''){
        alert("edad  no puede estar vacio!");
    }else if (descripcion === ''){
        alert("descripcion  no puede estar vacio!");
    }else{
         contenido.innerHTML = `
        <h3>Nombre: ${nombreCompleto}, ${edad} años</h3>
        <p>Descripción personal: </p>
        <p>${descripcion}</p>
    `;
    }
   

    contenido.style.display = "block";

    
}