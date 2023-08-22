"use strict"

const input = document.getElementById("input-tarea");
const agregar = document.getElementById("agregar");
const lista = document.getElementById("li-container");

agregar.addEventListener("click", (e)=>{
    e.preventDefault();
    const text = input.value;

    if(text !==""){
        const listas = document.createElement("li");
    const parrafo = document.createElement("p");
    parrafo.textContent = text;

    listas.appendChild(parrafo);
    listas.appendChild(agregarEliminar());
    lista.appendChild(listas);

    input.value = "";
    }
    
 });

 function agregarEliminar(){
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent ="X";
    
    btnEliminar.addEventListener("click", (e)=>{
        const item = e.target.parentElement;
        lista.removeChild(item);
    })
    return btnEliminar;
 }