const loginAlert = document.getElementById('loginAlert');
const loginCorreo = document.getElementById('loginCorreo');
const loginPass = document.getElementById('loginPass');
const formLogin = document.getElementById('formLogin');


const usuarios = [
    { correo: "fullstack@duoc.cl", password: "Fullstack@123" }
];


const mostrarAlert = (mensaje, tipo) => {
    loginAlert.classList.remove("d-none", "alert-success", "alert-danger");
    loginAlert.classList.add("alert", tipo === "error" ? "alert-danger" : "alert-success");

    loginAlert.innerHTML = tipo === "error"
        ? `${mensaje}<p></p><img src="assets/img/error.gif" alt="Error" style="width:80px;height:80px;">`
        : `${mensaje}<p></p><img src="assets/img/check.gif" alt="Éxito" style="width:80px;height:80px;">`;

    setTimeout(() => loginAlert.classList.add("d-none"), 3000);
};


loginCorreo?.addEventListener('input', () => {
    loginCorreo.classList.toggle('is-valid', loginCorreo.value.trim() !== '');
    loginCorreo.classList.toggle('is-invalid', loginCorreo.value.trim() === '');
});


loginPass?.addEventListener('input', () => {
    loginPass.classList.toggle('is-valid', loginPass.value !== '');
    loginPass.classList.toggle('is-invalid', loginPass.value === '');
});


formLogin?.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = loginCorreo.value.trim();
    const pass = loginPass.value;

    let hayError = false;

    if (!correo) {
        loginCorreo.classList.add('is-invalid');
        loginCorreo.classList.remove('is-valid');
        hayError = true;
    }

    if (!pass) {
        loginPass.classList.add('is-invalid');
        loginPass.classList.remove('is-valid');
        hayError = true;
    }

    if (hayError) {
        mostrarAlert("Por favor completa todos los campos", "error");
        return;
    }


    const usuario = usuarios.find(u => u.correo === correo && u.password === pass);

    if (usuario) {
        loginCorreo.classList.remove('is-invalid');
        loginPass.classList.remove('is-invalid');
        loginCorreo.classList.add('is-valid');
        loginPass.classList.add('is-valid');

        mostrarAlert("¡Ingreso exitoso!", "success");

        setTimeout(() => window.location.href = "index.html", 3000);

    } else {
        loginCorreo.classList.add('is-invalid');
        loginPass.classList.add('is-invalid');
        loginCorreo.classList.remove('is-valid');
        loginPass.classList.remove('is-valid');

        mostrarAlert("Correo o contraseña incorrectos", "error");
    }
});
