// Variables para formulario contacto
const ctonombre = document.getElementById('ctonombre');
const ctocorreo = document.getElementById('ctocorreo');
const ctotelefono = document.getElementById('ctotelefono');
const ctocomuna = document.getElementById('ctocomuna');
const ctoasunto = document.getElementById('ctoasunto');
const form = document.getElementById('formContacto');



//Funciones para formulario contacto
const soloLetrasEspacios = (str) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(str);
const isDuocMail = (str) => /^[A-Za-z0-9-_.]+@duoc.cl$/.test(str);
const isEstudianteMail = (str) => /^[A-Za-z0-9-_.]+@estudiantes.duoc.cl$/.test(str);
const isEstudianteMail2 = (str) => /^[A-Za-z0-9-_.]+@duocuc.cl$/.test(str);
const validPhone = (str) => str === '' || /^[0-9+()-]{8,15}$/.test(str);


//Validaciones formulario contacto

ctonombre.addEventListener('input', ()=>{
    if(soloLetrasEspacios(ctonombre.value.trim()) && ctonombre.value.length<=40){
        ctonombre.classList.remove('is-invalid');
        ctonombre.classList.add('is-valid');
    } else {
        ctonombre.classList.add('is-invalid');
        ctonombre.classList.remove('is-valid');
    }
}

);

ctocorreo.addEventListener('input',()=>{
    if (isDuocMail(ctocorreo.value.trim()) 
        || isEstudianteMail(ctocorreo.value.trim())
        || isEstudianteMail2(ctocorreo.value.trim())){
        ctocorreo.classList.remove('is-invalid');
        ctocorreo.classList.add('is-valid');
    }
    else{
        ctocorreo.classList.add('is-invalid')
        ctocorreo.classList.remove('is-valid');
    }
}
);

ctotelefono.addEventListener('input',()=>{
    if (validPhone(ctotelefono.value.trim())){
        ctotelefono.classList.remove('is-invalid');
        ctotelefono.classList.add('is-valid');
    }
    else{
        ctotelefono.classList.add('is-invalid')
        ctotelefono.classList.remove('is-valid');
    }
}
);

ctoasunto.addEventListener('input', ()=>{
    if(soloLetrasEspacios(ctoasunto.value.trim()) && ctoasunto.value.length<=300){
        ctoasunto.classList.remove('is-invalid');
        ctoasunto.classList.add('is-valid');
    } else {
        ctoasunto.classList.add('is-invalid');
        ctoasunto.classList.remove('is-valid');
    }
}

);
//Seccion comunas
const comunas = {
    "PA" : "Puente Alto",
    "LF" : "La Florida",
    "LR" : "La Reina",
    "LP" : "La Pintana",
    "LC" : "Las Condes",
    "PL" : "Penalolen",
    "LG" : "La Granja",
    "EB" : "El Bosque",
    "MP" : "Maipu",
    "ST" : "Santiago"
}

function llenarComunas(){
    for (let codigo in comunas){
        const opcion = document.createElement("option");
        opcion.value = codigo.valueOf();
        opcion.textContent = comunas[codigo];
        comuna.appendChild(opcion);

    }
    
};
llenarComunas();
//validar comunas seleccionadas
comuna.addEventListener('change',() =>{
    comuna.classList.toggle('is-valid',comuna.value != '');
    comuna.classList.toggle('is-invalid',comuna.value == '');
});

//Sección submit

form.addEventListener('submit',(e) => {
    //evita perder datos al recargar
    e.preventDefault();

    //valida y captura campos con 'is-invalid', de ser así,
    //retorna true y visibiliza los div d-none con mensaje de error
    const invalid = form.querySelector(".is-invalid");
    if (invalid){ 
        regAlert.className = "alert alert-danger";
        regAlert.innerHTML = `
            Revise todos los campos
            <p></p>
            <img src="assets/img/error.gif" alt="Error" class="me-2" style="width:80px;height:80px;">
        `;
        regAlert.classList.remove("d-none");
        //3 segundos y desapareece el mensaje, añadeclase d-none
        setTimeout(()=>regAlert.classList.add("d-none"), 3000);
        return;
    }

    //en caso de exito, mensaje verde
    regAlert.className = "alert alert-success";
    regAlert.classList.remove("d-none");
    regAlert.innerHTML = `
        Formulario enviado exitosamente
        <p></p>
        <img src="assets/img/check.gif" alt="Éxito" class="me-2" style="width:90px;height:90px;">
    `;
    setTimeout(()=>regAlert.classList.add("d-none"), 3000);
    form.reset();

    // limpiar bordes verdes/rojos de Bootstrap
    const inputs = form.querySelectorAll(".is-valid, .is-invalid");
    inputs.forEach(input => input.classList.remove("is-valid", "is-invalid"));
});
