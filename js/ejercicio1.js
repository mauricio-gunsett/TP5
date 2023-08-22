"use strict"
/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */

const numeroMaginco = Math.floor(Math.random()*100);

const input = document.getElementById("input-numero-magico");
const button = document.getElementById("button-numero-magico");

const adivinarNumero = ()=>{
 
 const valorUsuario = input.value;
//    validar el tipo 
 if(isNaN(Number(valorUsuario))){
    alert("Entrada no valida");
    return;
 }
 if(valorUsuario>100){
    alert("Ingrese un numero menor a 100");
    return;
 }
 if(numeroMaginco ===Number(valorUsuario)){
    alert(`Ganaste! El número era ${numeroMaginco}`);
    return;
} 
if(numeroMaginco>valorUsuario){
    alert("El número es aún mayor");
} else {
    alert("El número es un menor");
}

};




button.addEventListener("click", adivinarNumero);
