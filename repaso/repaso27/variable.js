//-Variables-
//2 formas de crear variables 
let nombre = "cris";
const apellido = "rumania"; //--> para variables que no se van a cambiar
var color = "blanco"; //--> es un forma antiqua da declarar variable (no se recomienda su uso)

let email = "asda@gmail.com"
let fechaN = "2002/12/22"
let edad = 22;

//-sysout de js-
// ${} para llamar la variable
// console.log() para ver en consola
console.log(`Mi nombre completo es ${nombre} ${apellido} tengo ${edad} años y he nacido en ${fechaN}` );

// asignar a variable otra(valor) variable
let nombreNuevo = "jesusCrist!"
nombre = nombreNuevo ;
console.log(nombre);

// uso de function
function muestra(){
    let despedida = "(CON FUNCTION)";
    console.log(`Mi nombre completo es ${nombre} ${apellido} tengo ${edad} años y he nacido en ${fechaN} , ${despedida}` );

    return despedida;
}

//- llamamos a la function
muestra();


// el let despedida dentro de function no se puede utilizar fuera sin usar el metodo de abajo
// es como getter!
let variableFunction = muestra();
console.log(variableFunction);

//-----------------------------------------------------------------------------------------------------
// pedimos 2 numeros
let num1 = Number(prompt("Primer numero"));
let num2 = Number(prompt("Segundo numero"));

//declaramos functiones de sumar , restar , multiplicar y dividir
function sumarNumeros(){
    let resultado = num1 + num2;
    alert("El resultado es : " + resultado)
}
function restarNumeros(){
    let resultado = num1 - num2;
    alert("El resultado es : " + resultado)
}
function multiplicarNumeros(){
    let resultado = num1 * num2;
    alert("El resultado es : " + resultado)
}
function dividirNumeros(){
    let resultado = num1 / num2;
    alert("El resultado es : " + resultado)
}

//preguntamos el usuario lo que quiere hacer
let elige = prompt("Para sumar  1 , Para Restar 2 , Para Multiplicar 3 , Para Dividir 4");

//devolvemos el resultado
if(elige == 1){
    sumarNumeros();
}else if (elige == 2){
    restarNumeros();
}else if(elige == 3 ){
    multiplicarNumeros();
}else if(elige == 4 ){
    dividirNumeros();
}else{
    alert("Opcion Invalido")
}
