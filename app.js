//poner el nombre de la etiqueta del elemento de html antes del nombre de la funcion
const inputPantalla = document.querySelector("input");
let existeOperador = false
const OPCION_RESULTADO = "=";
const OPCION_BORRAR_TODO = "C";
const OPCION_BORRAR_ULTIMO = "←";
const PANTALLA_VACIA = "";
const OPERADORES = "+-*/%.";
const NUMEROS = "0123456789←()";

function actualizarVentana(boton) {
    let ultimoCaracter = inputPantalla.value[inputPantalla.value.length - 1];
    if (!OPERADORES.includes(ultimoCaracter) || NUMEROS.includes(boton.innerHTML)) {
        switch (boton.innerHTML) {
            case OPCION_RESULTADO:
                inputPantalla.value = eval(inputPantalla.value);
                break;
            case OPCION_BORRAR_TODO:
                inputPantalla.value = PANTALLA_VACIA;
                break;
            case OPCION_BORRAR_ULTIMO:
                inputPantalla.value = inputPantalla.value.slice(0, -1);
                break;
            default:
                inputPantalla.value += boton.innerHTML;
                break;
        }
    } else {
        alert("opcion no permitida")
    }

}


// eval es para que se realice la funcion aritmetica que vea dentro de los parentesis
// innerHTML se refiere a lo q esta adentro de la etiqueta en este sentido seria lo q esta dentro de boton 