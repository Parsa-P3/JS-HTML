// id yi cagirip variable ye atama
const nombreUsuario = document.getElementById("nombre");
console.log(nombreUsuario);

// class i yi cagirip variable ye atama
const elementosCentrados = document.getElementsByClassName("centerText");
console.log("ElementosCentrados: " , elementosCentrados);

// tag i yi cagirip variable ye atama
const tiposHabitacion  = document.getElementsByTagName("option");
console.log("tiposHabitacion" , tiposHabitacion);

// id ile deger atanmis bir variable kullanarak direkt siyah arka fon rengini atiyoruz
nombreUsuario.style.backgroundColor = "black";
// se puede ser asi tambien --> nombreUsuario.style = "background-color : black";

//modificar el placeholder del elemento nombre a "Lo que quieras!"
nombreUsuario.placeholder = "Lo que quieras!"