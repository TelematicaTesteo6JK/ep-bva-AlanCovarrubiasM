function calificacion(calificacion){
    if(calificacion >= 83 && calificacion <=100){
        return "A+";
    }
    else if(calificacion >= 73 && calificacion < 83){
        return "A";
    }
    else if(calificacion >= 63 && calificacion < 73){
        return "B";
    }
    else if(calificacion >= 50 && calificacion < 63){
        return "C";
    }
    else if(calificacion >= 0 && calificacion < 50){
        return "F";
    }
    else{
        return "Error";
    }
}
