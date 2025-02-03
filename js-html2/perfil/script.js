// "Perfil de usuario estático"
// Crea un HTML que contenga una imagen de perfil (<img id="perfil">) y un párrafo con el nombre del usuario (<p id="nombre">Usuario</p>).
// Cambiar la imagen de perfil y el nombre utilizando document.getElementById y las propiedades src e innerText.



let pp = document.getElementById("perfil");
let nombreUsuario = document.getElementById("nombre");
console.log(nombreUsuario);
// console.log(pp);

function cambiarDatos(){
    nombreUsuario.innerText = "Parsa"
    pp.src = "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
    pp.style.width = "50%" 
    pp.style.borderRadius = "100px"

}

cambiarDatos();
console.log(nombreUsuario);
