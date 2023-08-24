"use strict"

export class Persona {
    constructor(nombre, edad, DNI, sexo , peso, altura, añoDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoDeNacimiento = añoDeNacimiento;
    }

    

    esMayorDeEdad(){
        if(isNaN(Number(this.edad))){
            console.log("Ingrese una edad valida")
        } else if(this.edad>=18){
            console.log(`Es mayor de edad`);
        } else {
            console.log("Es menor de edad");
        }

 }
 mostrarDatos() {
    return `
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.DNI}
        Sexo: ${this.sexo}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Año de Nacimiento: ${this.añoDeNacimiento}
    `;
}
}


