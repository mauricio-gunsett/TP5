"use strict"

/*Realizar una web con un cronómetro, 
que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar. */

let tiempoRef = Date.now
let acomulado = 0
let cronometrar = false

setInterval(()=>{
    
    let tiempo =document.getElementById("tiempo")
acomulado = Date.now()-tiempoRef;
    tiempo.innerHTML = acomulado;
}, 1000/60);

