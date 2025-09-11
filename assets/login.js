// login.js

// Elementos del DOM
const formLogin = document.getElementById('formLogin');
const loginCorreo = document.getElementById('loginCorreo');
const loginPass = document.getElementById('loginPass');
const loginAlert = document.getElementById('loginAlert');

// Lista de usuarios
const usuarios = [
    { correo: "fullstack@duoc.cl", password: "Fullstack@123" }
];

// Función para mostrar alert con mensaje e ícono
function mostrarAlert(mensaje, tipo) {
    loginAlert.classList.remove("d-none", "alert-danger", "alert-success");
    loginAlert.classList.add("alert", tipo === "error" ? "alert-danger" : "alert-success");

    loginAlert.innerHTML = tipo === "error"
        ? `${mensaje}<p></p><img src="assets/img/error.gif" alt="Error" style="width:80px;height:80px;">`
        : `${mensaje}<p></p><img src="assets/img/check.gif" alt="Éxito" style="width:80px;height:80px;">`;

    setTimeout(() => loginAlert.classList.add("d-none"), 3000);
}

// Listener del submit
formLogin?.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = loginCorreo.value.trim();
    const pass = loginPass.value;

    // Validación básica de campos vacíos
    if (!correo || !pass) {
        mostrarAlert("Por favor completa todos los campos", "error");
        if (!correo) loginCorreo.classList.add("is-invalid");
        if (!pass) loginPass.classList.add("is-invalid");
        return;
    }

    // Buscamos usuario en la lista
    const usuario = usuarios.find(u => u.correo === correo && u.password === pass);

    if (usuario) {
        // Login correcto
        loginCorreo.classList.remove("is-invalid");
        loginPass.classList.remove("is-invalid");
        loginCorreo.classList.add("is-valid");
        loginPass.classList.add("is-valid");

        mostrarAlert("¡Ingreso exitoso!", "success");

        // Aquí puedes redirigir a otra página
        // setTimeout(() => window.location.href = "index.html", 1500);

    } else {
        // Login incorrecto
        loginCorreo.classList.add("is-invalid");
        loginPass.classList.add("is-invalid");
        loginCorreo.classList.remove("is-valid");
        loginPass.classList.remove("is-valid");

        mostrarAlert("Correo o contraseña incorrectos", "error");
    }
});
