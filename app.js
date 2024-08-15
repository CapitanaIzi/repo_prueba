//poner el nombre de ka etiqueta del elemento de html antes del nombre de la funcion
const inputOperaciones= document.querySelector("input");
function actualizarVentana(boton) {
    if (boton.innerHTML === "=") {
        inputOperaciones.value= eval (inputOperaciones.value);
    } else {
        inputOperaciones.value += boton.innerHTML;
    }
    
}
function borrar() {
    inputOperaciones.value= "";
}
// eval es para que se realice la funcion aritmetica que vea dentro de los parentesis
// innerHTML se refiere a lo q esta adentro de la etiqueta en este sentido seria lo q esta dentro de boton 