// Variables para formulario contacto
const ctonombre = document.getElementById('ctonombre');
const ctocorreo = document.getElementById('ctocorreo');
const ctotelefono = document.getElementById('ctotelefono');
const ctocomuna = document.getElementById('ctocomuna');
const ctoasunto = document.getElementById('ctoasunto');



//Funciones para formulario contacto
const soloLetrasEspacios = (str) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(str);
const isDuocMail = (str) => /^[A-Za-z0-9-_.]+@duoc.cl$/.test(str);
const isEstudianteMail = (str) => /^[A-Za-z0-9-_.]+@estudiantes.duoc.cl$/.test(str);
const isEstudianteMail2 = (str) => /^[A-Za-z0-9-_.]+@duocuc.cl$/.test(str);
const validPhone = (str) => str === '' || /^[0-9+()-]{8,15}$/.test(str);


//Validaciones formulario contacto

ctonombre.addEventListener('input', ()=>{
    if(soloLetrasEspacios(ctonombre.value.trim()) && ctonombre.value.length<=25){
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