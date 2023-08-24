"use strict"
/*Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.  */
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
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.addEventListener("click", (e)=>{
        const item = e.target.parentElement;
        lista.removeChild(item);
    })
    return btnEliminar;
 }

 