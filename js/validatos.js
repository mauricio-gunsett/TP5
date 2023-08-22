export const validateName = (value,campo) => {
    // Minima longitud del nombre
    if(value.trim().length <=2 ){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    // Maxima longitud del nombre 
    if(value.trim().length >= 100){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }

    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
};
export const validateNumber = (value, campo) => {
    // Cantidad de digitos distinta a 10 caracteres
    if(value.trim().length !==10 ){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    // No tenga caracteres no numericos
    if(isNaN(Number(value, campo))){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
};

export const validateEmail = (value, campo) => {
    // Cantidad de digitos menor a 4
    if(value.trim().length < 4 ){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    // Cantidad de digitos mayor a 100
    if(value.trim().length > 100 ){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    // Validar formato del correo
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!regex.test(value, campo)){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
};

export const validateImage = (value, campo) => {
    // Cantidad de digitos menor a 4
    if(value.trim().length < 4 ){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    // Cantidad de digitos mayor a 100
    if(value.trim().length > 300 ){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    // Validar formato del correo
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if(!regex.test(value, campo)){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
};


// -----------------

export const validateEdad = (value, campo) => {
    // Cantidad de digitos distinta a 10 caracteres
    if(value.trim().length < 2 || value.trim().length > 10  ){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    // No tenga caracteres no numericos
    if(isNaN(Number(value, campo))){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
};


export const validateDni = (value, campo) => {
    // Cantidad de digitos distinta a 10 caracteres
    if(value.trim().length !==8 ){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    // No tenga caracteres no numericos
    if(isNaN(Number(value, campo))){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
};




export const validateAño = (value, campo) => {
    if(value.trim().length < 1 || value.trim().length > 4  ){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    // No tenga caracteres no numericos
    if(isNaN(Number(value, campo))){
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
        return false;
    }
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    if( value>=1930 && value<=1948){
        console.log ("La persona es de la generación Silent y su razgo caracteristico es la austeridad");
    } else if (value>=1949 && value<=1968){
        console.log ("La persona es de la generación Baby Boom y su rasgo caracteristico es la ambición");
    } else if (value>=1969 && value<=1980){
        console.log ("La persona es de la generación X y su rasgo caracteristico es la obsesión por el éxito");
    } else if (value>=1981 && value<=1993){
        console.log("La persona es de la generación Y y su rasgo caracteristico es la Frustración");
    } else if (value>=1994 && value<=2010){
        console.log("La persona es de la generación Z y su rasgo caracteristico es la irreverencia");
    } else {
        console.log("Ingrese algo valido")
    }
    
    return true;
    }


