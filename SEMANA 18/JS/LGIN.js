//PROCESO DE VALIDACION DE CAMPOS DE FORMULARIO LOGIN
function validainputs(){
    let email=document.getElementById("email");//bajar info del formulario
    let password=document.getElementById("password");//bajar info del formulario
    let ingreso=document.getElementById("ingreso");//bajar info del formulario
    let emailval=email.value.trim();//eliminar espacios al final
    let passwordval=password.value.trim();//eliminar espacios al final
    let passwordok="a12345";//clave real
    //proceso de validaciones campo x campo
    var error=0;//0=no hay error
    if (emailval==""){
        ocErrorform(email,"por favor ingrese su email......");
        errorf=1;// 1= si hay error
    }else if(!valEmail(emailval)){
        ocErrorform(email,"Email no valido......");
        errorf=1;// 1= si hay error
    }else{
        exitosform(email);
    }
    //VALIDAR PASSWORD
    if (passwordval===""){
        ocErrorform(password,"por favor ingrese su contraseña")
        errorf=1;
    }else if(passwordval!=passwordok){
        ocErrorform(password,"contraseña no valida...");
        errorf=1;
    }else{
        exitosform(password);
    }
    //
    if (errorf==0){
        ingreso.addEventListener("click",function(){
            swal("ACCESO PERMITIDO!!","Click OK para continuar","success");
        })
    }
    return false;
    //FUNCION PARA VALIDAR ERRORES EN FORMULARIO
    function ocErrorform (input, message){
        const formControl=input.parentElement;
        const small=formControl.querySelector("small");
        formControl.className="form-control error";
        small.innerText =message; 
     }
     //FUNCION PARA INGRESO EXITOSO EN FORMULARIOS
     function exitosform (input){
         const formControl=input.parentElement;
             formControl.className="form-control success";
         }
     function valEmail(email){
     return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
     } 
}
