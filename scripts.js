let loginForm = document.getElementById("login");
let registerForm = document.getElementById("register");
let btn = document.getElementById("btn");

function register() {
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    btn.style.left = "110px";
}

function login() {
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    btn.style.left = "0px";
}


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    Swal.fire({
        title: 'Logged In!',
        text: 'You have successfully logged in.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});


document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Registered!',
        text: 'You have successfully registered.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});


