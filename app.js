//poner el nombre de la etiqueta del elemento de html antes del nombre de la funcion
const inputPantalla= document.querySelector("input");
let existeOperador=false
function actualizarVentana(boton) {
    
    if (boton.innerHTML === "=") {
        inputPantalla.value= eval (inputPantalla.value);
    } else {
        
        inputPantalla.value += boton.innerHTML;
    }
    
}
function borrar() {
    inputPantalla.value= "";
}
function borrarUltimo() {
    inputPantalla.value=inputPantalla.value.slice(0,-1);
    actualizarVentana();
}
function agregarOperador(boton) {
    if (!existeOperador) {
        inputPantalla
    } if(boton.innerHTML==="+"){
        
    }
}
// eval es para que se realice la funcion aritmetica que vea dentro de los parentesis
// innerHTML se refiere a lo q esta adentro de la etiqueta en este sentido seria lo q esta dentro de boton 