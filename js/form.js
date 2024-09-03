const btn_validar = document.getElementById('btn-validar')

const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        for(i = 0; i < arrMessages.length; i++){
            if(arr[i].value == ""){
                swal({
                    title: `El campo ${arrMessages[i]} no puede estar vacío`,
                    icon: "error",
                     })
               return false;
            }
           
        }
        if(!mailValido(email.value)){
            swal({
                title: `El formato del ${arrMessages[1]} es incorrecto`,
                icon: "error",
                 })
       return false;
        }
        swal({
            title: `Los datos fueron enviados satisfactoriamente`,
            icon: "success",
             })
        nombre.value = "";
        email.value = "";
        mensaje.value = "";
        return true
    }
}

const mailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_validar.addEventListener("click", validar);