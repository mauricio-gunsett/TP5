"use strict"

let input = document.getElementById("input-tiempo");
let btnIniciar = document.getElementById("btnIniciar");
let btnDetener = document.getElementById("btnDetener");
let horas = document.getElementById("hora");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let interval;
let totalSegundos = 0;
let hora = 0;
let min = 0;
let seg = 0;

function actualizarTiempo() {
  segundos.innerHTML = seg < 10 ? "0" + seg : seg;
  minutos.innerHTML = min < 10 ? "0" + min : min;
  horas.innerHTML = hora < 10 ? "0" + hora : hora;
}

btnIniciar.addEventListener("click", () => {
  if (!interval && input.value > 0) {
    totalSegundos = parseInt(input.value);
    hora = Math.floor(totalSegundos / 3600);
    min = Math.floor((totalSegundos % 3600) / 60);
    seg = totalSegundos % 60;
    actualizarTiempo();

    interval = setInterval(() => {
      if (totalSegundos > 0) {
        totalSegundos--;
        hora = Math.floor(totalSegundos / 3600);
        min = Math.floor((totalSegundos % 3600) / 60);
        seg = totalSegundos % 60;
        actualizarTiempo();
      } else {
        clearInterval(interval);
        interval = null;
        input.disabled = false;
      }
    }, 1000);

    input.disabled = true;
  }
});

btnDetener.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  input.disabled = false;
});



