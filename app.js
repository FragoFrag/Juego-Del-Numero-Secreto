//Definiendo variables.
let intentos = 1;
let numeroMaximo = 10 ;
let maximoDeIntentos = 4 ;
let listaNumerosSorteados = [] ;
let numeroSecreto = 0;


//Construyendo funciones.

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() { //Activada al hacer click sobre el botón "Intentar".
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // Evaluando si el usuario ha alcanzado el máximo de intentos.
    if (intentos === maximoDeIntentos){ // El usuario alcanzó el límite de intentos.
        asignarTextoElemento ("p","Has alcanzado el máximo de intentos permitidos, presiona F5 para continuar") ;
    } else { // El usuario no ha alcanzado el límite de intentos.
             // Se evalúa si el número escrito por el usuario es igual al número secreto.
            if (numeroDeUsuario === numeroSecreto) { // Elusuario acertó.
                asignarTextoElemento ("p",`Acertaste, el número secreto es ${numeroSecreto},  te tomó ${intentos} ${intentos === 1 ? "intento" : "intentos"}`) ;
                document.getElementById ("reiniciar").removeAttribute("disabled") ;
            } else {  // El usuario no acertó
                    if (numeroDeUsuario > numeroSecreto) { 
                        asignarTextoElemento ("p" , "El número secreto es menor") ;
                    } else {
                        asignarTextoElemento ("p" , "El número secreto es mayor") ;
                    }
                    intentos++ ;
                    limpiarCaja () ;
                }
            return;
            }
}

function limpiarCaja () {
    document.querySelector ("#valorUsuario").value = "" ;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    // Se evalúa si ya se han sorteado la cantidad máxima de numeros permitida.
    if (listaNumerosSorteados.length === numeroMaximo){ // Se alcanzó el máximo de números sorteados.
        asignarTextoElemento ("p","Se han sorteado todos los números posibles, presiona F5 para continuar") ;
    } else { // Aún quedan números por sortear, se verifica si la lista ya incluye el número pseudoaleatorio generado.
            if (listaNumerosSorteados.includes(numeroGenerado)){// El número ya estaba en la lista, se genera uno nuevo.
                return generarNumeroSecreto () ;
            } else { // El número no estaba en la lista, se incluye y se retorna su valor.
                listaNumerosSorteados.push (numeroGenerado) ;
                return numeroGenerado ;
            }
        }
}

function condicionesIniciales () {
    asignarTextoElemento('h1','¡Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto () ;
    limpiarCaja () ;
    intentos = 1 ;
    document.querySelector("#reiniciar").setAttribute("disabled" , "true") ;
}

condicionesIniciales () ;