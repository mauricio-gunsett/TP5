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

    mostrarGeneracion(){
        if(isNaN(Number(this.añoDeNacimiento))){
            console.log("Ingrese un año de nacimiento valido")
        return;
        }


        if(this.añoDeNacimiento >=1930 && this.añoDeNacimiento<=1948){
            console.log ("La persona es de la generación Silent y su razgo caracteristico es la austeridad");
        } else if (this.añoDeNacimiento>=1949 && this.añoDeNacimiento<=1968){
            console.log ("La persona es de la generación Baby Boom y su rasgo caracteristico es la ambición");
        } else if (this.añoDeNacimiento>=1969 && this.añoDeNacimiento<=1980){
            console.log ("La persona es de la generación X y su rasgo caracteristico es la obsesión por el éxito");
        } else if (this.añoDeNacimiento>=1981 && this.añoDeNacimiento<=1993){
            console.log("La persona es de la generación Y y su rasgo caracteristico es la Frustración");
        } else if (this.añoDeNacimiento>=1994 && this.añoDeNacimiento<=2010){
            console.log("La persona es de la generación Z y su rasgo caracteristico es la irreverencia");
        } else {
            console.log("Ingrese algo valido")
        }
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


