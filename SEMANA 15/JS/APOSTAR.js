function apostar(){
    //Generar numero aleatorio con funcion random
    var a=Math.round(Math.random()*10);// Genera numero al azar del 1 al 10
    document.getElementById("resultado").value=a;//Para colcoar en formulario
    var b=document.getElementById("apostado").value;//asignacion del numero ingresado
    //validar acierto numero
    if (a==b){
        document.getElementById("salida").value="GANO APUESTA";
    }else{
        document.getElementById("salida").value="PERDIO APUESTA";
    }
}
//
function cancel(){
    document.getElementById("resultado").value="";
    document.getElementById("apostado").value="";
    document.getElementById("salida").value="";
}