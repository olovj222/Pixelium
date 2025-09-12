// DECLARACION DE VARIABLES
const regAlert = document.getElementById('regAlert');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const correo2 = document.getElementById('correo2');
const correo3 = document.getElementById('correo3');
const telefono = document.getElementById('telefono');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const comuna = document.getElementById('comuna');
const form = document.getElementById('formRegistro');


//FUNCIONES
// function soloLetrasEspacios(str) {
//     return /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(str);
// }
// FUNCION FLECHA
const soloLetrasEspacios = (str) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(str);
const isDuocMail = (str) => /^[A-Za-z0-9-_.]+@duoc.cl$/.test(str);
const isEstudianteMail = (str) => /^[A-Za-z0-9-_.]+@estudiantes.duoc.cl$/.test(str);
const validPhone = (str) => str === '' || /^[0-9+()-]{8,15}$/.test(str);
const strongPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(password);

//VALIDACIONES
// Función para validar edad mínima
const validarEdad = (fecha) => {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    // Ajustar si aún no ha cumplido años este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad >= 14;
};

// VALIDACION FECHA DE NACIMIENTO
(function setFechaMaxima() {
    const hoy = new Date();
    const limiteEdad = new Date(
        hoy.getFullYear() - 14, // restamos 14 años
        hoy.getMonth(),
        hoy.getDate()
    );
    const maxFecha = limiteEdad.toISOString().split("T")[0];
    fechaNacimiento.setAttribute("max", maxFecha);
})();

fechaNacimiento.addEventListener('change', () => {
    if (fechaNacimiento.value && validarEdad(fechaNacimiento.value)) {
        fechaNacimiento.classList.remove('is-invalid');
        fechaNacimiento.classList.add('is-valid');
    } else {
        fechaNacimiento.classList.add('is-invalid');
        fechaNacimiento.classList.remove('is-valid');
    }
});

//VALIDAMOS EL NOMBRE
nombre.addEventListener('input',()=>{
    if (soloLetrasEspacios(nombre.value.trim()) && nombre.value.length>=2 && nombre.value.length<=30){
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
    }
    else{
        nombre.classList.add('is-invalid')
        nombre.classList.remove('is-valid');
    }
}
);

//VALIDAMOS CORREO
correo.addEventListener('input',()=>{
    if (isDuocMail(correo.value.trim()) || isEstudianteMail(correo.value.trim())){
        correo.classList.remove('is-invalid');
        correo.classList.add('is-valid');
    }
    else{
        correo.classList.add('is-invalid')
        correo.classList.remove('is-valid');
    }
}
);
// Segunda validacion de correo, que el tipo de correo sea el mismo en ambos campos
correo2.addEventListener('input',()=>{
    if (correo.value == correo2.value){
        correo2.classList.remove('is-invalid');
        correo2.classList.add('is-valid');
    }
    else{
        correo2.classList.add('is-invalid')
        correo2.classList.remove('is-valid');
    }
}
)

correo3.addEventListener('input',()=>{
    if (isDuocMail(correo3.value.trim()) || isEstudianteMail(correo3.value.trim())){
        correo3.classList.remove('is-invalid');
        correo3.classList.add('is-valid');
    }
    else{
        correo3.classList.add('is-invalid')
        correo3.classList.remove('is-valid');
    }
}
)
//VALIDAMOS TELEFONO
telefono.addEventListener('input',()=>{
    if (validPhone(telefono.value.trim())){
        telefono.classList.remove('is-invalid');
        telefono.classList.add('is-valid');
    }
    else{
        telefono.classList.add('is-invalid')
        telefono.classList.remove('is-valid');
    }
}
);



//POBLAR CAMPO SELECT
//creamos diccionario con comunas
const comunas = {
    "PA" : "Puente Alto",
    "LF" : "La Florida",
    "LP" : "La Pintana",
    "ST" : "Santiago",
    "CC" : "Cerrillos",
    "CM" : "Cerro Navia",
    "SL" : "San Miguel",
    "SM" : "San Ramón",
    "PS" : "Pedro Aguirre Cerda",
    "LC" : "Lo Curro",
    "CT" : "Conchalí",
    "IN" : "Independencia",
    "RE" : "Recoleta",
    "RI" : "Renca",
    "PT" : "Pudahuel",
    "QU" : "Quilicura",
    "ML" : "Maipú",
    "LO" : "Lo Prado",
    "PU" : "Providencia",
    "CH" : "Ñuñoa",
    "AT" : "Macul",
    "HB" : "Huechuraba",
    "VT" : "Vitacura",
    "LC" : "Las Condes",
    "IS" : "Isla de Maipo",
    "TA" : "Talagante",
    "CA" : "Calera de Tango",
    "BU" : "Buin",
    "MA" : "Melipilla",
    "AL" : "Alhué",
    "LM" : "Lampa",
    "CO" : "Colina",
    "SV" : "San Bernardo",
    "EL" : "El Bosque"
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
comuna.addEventListener('change',() =>{
    comuna.classList.toggle('is-valid',comuna.value != '');
    comuna.classList.toggle('is-invalid',comuna.value == '');
});


password?.addEventListener('input',()=>{
    if (password.value.length >= 8 && strongPassword(password.value)){
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
    else{
        password.classList.add('is-invalid')
        password.classList.remove('is-valid');
    }
}
);

password2?.addEventListener('input',()=>{
    if (password.value == password2.value){
        password2.classList.remove('is-invalid');
        password2.classList.add('is-valid');
    }
    else{
        password2.classList.add('is-invalid')
        password2.classList.remove('is-valid');
    }
}
);

//función en el boton SUBMIT
form?.addEventListener('submit', (e) => {
    e.preventDefault();

    let hayError = false;

    // Lista de campos obligatorios
    const campos = [nombre, correo, correo2, correo3, telefono, password, password2, comuna];

    campos.forEach(campo => {
        if (!campo) return; // Protección por null

        // Campo vacío
        if (campo.value.trim() === '') {
            campo.classList.add('is-invalid');
            campo.classList.remove('is-valid');
            hayError = true;
        } 
        // Validaciones específicas
        else if (campo === fechaNacimiento && !validarEdad(fechaNacimiento.value)) {
            campo.classList.add('is-invalid');
            campo.classList.remove('is-valid');
            hayError = true;
        }
        else if (campo === nombre && (!soloLetrasEspacios(nombre.value.trim()) || nombre.value.length < 2 || nombre.value.length > 30)) {
            campo.classList.add('is-invalid');
            campo.classList.remove('is-valid');
            hayError = true;
        }
        else if ((campo === correo || campo === correo3) && !(isDuocMail(campo.value.trim()) || isEstudianteMail(campo.value.trim()))) {
            campo.classList.add('is-invalid');
            campo.classList.remove('is-valid');
            hayError = true;
        }
        else if (campo === correo2 && correo2.value !== correo.value) {
            campo.classList.add('is-invalid');
            campo.classList.remove('is-valid');
            hayError = true;
        }
        else if (campo === telefono && !validPhone(telefono.value.trim())) {
            campo.classList.add('is-invalid');
            campo.classList.remove('is-valid');
            hayError = true;
        }
        else if (campo === password && (password.value.length < 8 || !strongPassword(password.value))) {
            campo.classList.add('is-invalid');
            campo.classList.remove('is-valid');
            hayError = true;
        }
        else if (campo === password2 && password2.value !== password.value) {
            campo.classList.add('is-invalid');
            campo.classList.remove('is-valid');
            hayError = true;
        }
            // Campo válido
        else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    });

    if (hayError) {
        regAlert.classList.remove("d-none", "alert-success");
        regAlert.classList.add("alert", "alert-danger");
        regAlert.innerHTML = `
            Revise todos los campos
            <p></p>
            <img src="assets/img/error.gif" alt="Error" class="me-2" style="width:80px;height:80px;">
        `;
        setTimeout(() => regAlert.classList.add("d-none"), 3000);
        return;
    }

    // Todo correcto → Éxito
    regAlert.classList.remove("d-none", "alert-danger");
    regAlert.classList.add("alert", "alert-success");
    regAlert.innerHTML = `
        Cuenta creada con éxito
        <p></p>
        <img src="assets/img/check.gif" alt="Éxito" class="me-2" style="width:90px;height:90px;">
    `;
    setTimeout(() => regAlert.classList.add("d-none"), 3000);
});
