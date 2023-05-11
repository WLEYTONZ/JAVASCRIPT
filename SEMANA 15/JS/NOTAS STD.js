function limpiar(){
    document.getElementById("Nota1").value="";//borrar contenido input nota1
    document.getElementById("Nota2").value="";//borrar contenido input nota2
    document.getElementById("Nota3").value="";//borrar contenido input nota3
    document.getElementById("Definitiva").value="";//borrar contenido input definitiva
}
//
function promedio(){
    var n1=document.getElementById("Nota1").value;//asignar contenido de la nota1 (ingresado)
    var n2=document.getElementById("Nota2").value;//asignar contenido de la nota2 (ingresado)
    var n3=document.getElementById("Nota3").value;//asignar contenido de la nota3 (ingresado)
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;//formula promedio
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);//para colocar en formaulario nota definitiva 
}