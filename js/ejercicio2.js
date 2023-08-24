"use strict"

import { Persona } from "./Persona.js";
import { validateAño, validateDni, validateEdad, validateName, validateNumber } from "./validatos.js";

/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada 
y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:




esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, 
permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, 
es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
 */
const form = document.getElementById("form-persona")
const inputNombre = document.getElementById("input-nombre");
const inputEdad = document.getElementById("input-edad");
const inputDni = document.getElementById("input-dni");
const inputSexo = document.getElementById("input-sexo");
const inputPeso = document.getElementById("input-peso");
const inputAltura = document.getElementById("input-altura");
const inputAñoDeNacimiento = document.getElementById("input-fecha");
const button = document.getElementById("button-guardar");

let nombre = "";
let edad = "";
let dni = "";
let sexo = "";
let peso = "";
let altura = "";
let fechaDeNacimiento = "";


inputNombre.addEventListener("blur", (e)=>{
    const value = e.target.value;

    if(validateName(value, inputNombre)) {
        
        nombre = value;
    } 
});
inputEdad.addEventListener("blur", (e)=>{
    const value = e.target.value;

    if(validateEdad(value, inputEdad)) {
        
        edad = value;
    } 
});
inputDni.addEventListener("blur", (e)=>{
    const value = e.target.value;

    if(validateDni(value, inputDni)) {
        
        dni = value;
    } 
});
inputSexo.addEventListener("blur", (e)=>{
    const value = e.target.value;

    if(validateName(value, inputSexo)) {
        
        sexo = value;
    } 
});
inputPeso.addEventListener("blur", (e)=>{
    const value = e.target.value;

    if(validateEdad(value, inputPeso)) {
        
        peso = value;
    } 
});
inputAltura.addEventListener("blur", (e)=>{
    const value = e.target.value;

    if(validateEdad(value, inputAltura)) {
        
        altura = value;
    } 
});
inputAñoDeNacimiento.addEventListener("blur", (e)=>{
    const value = e.target.value;

    if(validateEdad(value, inputAñoDeNacimiento)) {
        
        fechaDeNacimiento = value;
    } 
});





form.addEventListener("submit", (e)=>{
    // Siempre lleva primero e.preventDefault() para que la pagina no se actualice
        e.preventDefault();
    // Repetimos validación por si no se produjo el evento blur
        if (
        validateName(nombre, inputNombre) && 
        validateEdad(edad, inputEdad) && 
        validateDni(dni, inputDni) && 
        validateName(sexo, inputNombre) &&
        
        validateEdad(peso, inputPeso) &&
        validateEdad(altura, inputAltura) &&
        validateAño(fechaDeNacimiento, inputAñoDeNacimiento)
        ) {
        //  ENTRE SOLAMENTE SI TODAS LAS VALIDACIONES SON VALIDAS
        // Crear el contacto
        const nuevaPersona = new Persona(nombre, edad, dni, sexo, edad, peso, altura, fechaDeNacimiento);
        console.log("Persona creada")
        console.log(nuevaPersona)
        
       document.getElementById("nuevaPers").innerText =  `Nueva persona: Nonbre: ${nombre}, Edad: ${edad}, DNI: ${dni}, Sexo: ${sexo}, Peso: ${peso}, Altura: ${altura}, Fecha de Nacimiento: ${fechaDeNacimiento}`
        
    }
    });

  