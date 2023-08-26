"use strict"

/*Realizar una web con un cronómetro, 
que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar. */

let iniciar = document.getElementById("iniciar");
let parar = document.getElementById("parar");
let reiniciar = document.getElementById("reiniciar");
let horas = document.getElementById("hora");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");




let hora = 0;
let min = 0;
let seg = 0;

let interval;

iniciar.addEventListener("click",()=>{
    interval = setInterval(()=>{
        if(seg<59){
            seg+=1;
            minutos.innerHTML= seg <10 ? "0"+seg:seg;
        } else{
            seg=0;
            minutos.innerHTML=seg < 10 ? "0" + seg: seg;
            if(min<59){
                min+=1;
                minutos.innerHTML = min < 10 ? "0" + min + ":" : min + ":";

            } else {
                hora +=1;
                horas.innerHTML = hora <10 ? "0" +hora + ":" :hora + ":";
            }
        }
    },1000);
    iniciar.style.pointerEvents = "none"
})
parar.addEventListener("click", ()=>{
    clearInterval(interval);
    iniciar.style.pointerEvents="visible";

});
reiniciar.addEventListener("click", ()=>{
    location.reload();
})