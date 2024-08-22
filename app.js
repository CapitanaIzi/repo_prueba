//poner el nombre de la etiqueta del elemento de html antes del nombre de la funcion
const inputPantalla = document.querySelector("input");
const OPCION_RESULTADO = "=";
const OPCION_BORRAR_TODO = "C";
const OPCION_BORRAR_ULTIMO = "←";
const PANTALLA_VACIA = "";
const OPERADORES = "+-*/%.";
const NUMEROS = "0123456789←C=()";
const OPERADOR_ESPECIAL = "√";

function actualizarVentana(boton) {
    let ultimoCaracter = inputPantalla.value[inputPantalla.value.length - 1];
    if (!OPERADORES.includes(ultimoCaracter) || NUMEROS.includes(boton.innerHTML)) {
        switch (boton.innerHTML) {
            case OPCION_RESULTADO:

                try {
                    inputPantalla.value = eval(inputPantalla.value);
                } catch (error) {
                    alert("operacion no permitida");
                }
                break;
            case OPCION_BORRAR_TODO:
                inputPantalla.value = PANTALLA_VACIA;
                break;
            case OPCION_BORRAR_ULTIMO:
                inputPantalla.value = inputPantalla.value.slice(0, -1);
                break;
            case OPERADOR_ESPECIAL:
                inputPantalla.value = Math.sqrt(inputPantalla.value);
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