const formulario = document.getElementById("formulario");

const apellido = document.getElementById("apellido");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const mail = document.getElementById("mail");
let comentario= document.getElementById("comentario");
const enviar= document.getElementById("enviar")


const alertaExito = document.getElementById("alertaExito");
const alertaApellido = document.getElementById("alertaApellido");
const alertaNombre = document.getElementById("alertaNombre");
const alertaTelefono = document.getElementById("alertaTelefono");
const alertaMail = document.getElementById("alertaMail");
const alertaComentario = document.getElementById("alertaComentario");


// expresiones regular texto sin espacios
const regNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

// expresiones regular texto sin espacios
const regApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;


// expresion regular mail, con @ y dominio
const regMail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


// expresion regular para telefono
const regTelefono= /^\d{2}-\d{4}-\d{4}$/;
//const regTelefono=/^\d{10}$/;


// limito el numero de caracteres de el textarea
const maximoCaracteres= 20;
// expresion regular de blanco
const regblanco=/^\s+$/;

const pintarMensajeExito = () => {
    alertaExito.classList.remove("d-none");
    alertaExito.textContent = "El Formulario se Ha Enviado con Exito! ";
    //apellido.focus() 
    formulario.remove()   
    
  };



  const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
        
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertaExito.classList.add("d-none");
    const errores = [];

    // validar nombre con expresion regular y sin blancos
    
    if (!regNombre.test(nombre.value) || !nombre.value.trim() || nombre.length==0){
        nombre.classList.add("is-invalid");

        errores.push({
            tipo: alertaNombre,
            msg: "El campo Nombre es obligatorio y debe contener solo letras !",
        });
    } else {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
        alertaNombre.classList.add("d-none");
    }

    // validar apellido con expresion regular y sin blancos
    if (!regApellido.test(apellido.value) || !apellido.value.trim() || apellido.length==0) {
      apellido.classList.add("is-invalid");

      errores.push({
          tipo: alertaApellido,
          msg: "El campo  Apellido es obligatorio y debe contener solo letras !",
      });
  } else {
      apellido.classList.remove("is-invalid");
      apellido.classList.add("is-valid");
      alertaApellido.classList.add("d-none");
  }

  // validar mail con expresion regular 

  if (!regMail.test(mail.value) || !mail.value.trim() || mail.length==0) {
    mail.classList.add("is-invalid");

    errores.push({
        tipo: alertaMail,
        msg: "El campo Correo  es obligatorio y el formato correcto es aaa@direccion.com",
    });
} else {
    mail.classList.remove("is-invalid");
    mail.classList.add("is-valid");
    alertaMail.classList.add("d-none");
}

  // validar telefono con expresion regular 
  if (!regTelefono.test(telefono.value) || !telefono.value.trim() || telefono.length==0) {
    telefono.classList.add("is-invalid");

    errores.push({
        tipo: alertaTelefono,
        msg: "El campo Telefono es obligatorio y el formato correcto es 11-2222-2222 ",
    });
} else {
    telefono.classList.remove("is-invalid");
    telefono.classList.add("is-valid");
    alertaTelefono.classList.add("d-none");
}  
// validar que no supere cantidad de caracteres

  if(comentario.value.length >= maximoCaracteres ) {
      errores.push({
      tipo: alertaComentario,
      msg: "El maximo de caracteres permitido es 20",
});
} else {
    comentario.classList.remove("is-invalid");
    comentario.classList.add("is-valid");
    alertaComentario.classList.add("d-none");
}

  
 if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }
    
    console.log("Formulario enviado con éxito");
    pintarMensajeExito();

    
  });

