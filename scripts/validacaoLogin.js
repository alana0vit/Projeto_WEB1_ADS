function validar(){
    // Usuário

    var usuario = document.getElementById('user');
    if (usuario.value == "") {
        usuario.focus();
        return false;
    }

    // Senha

    var senha = document.getElementById('pswd');
    if (senha.value == "") {
        senha.focus();
        return false;
    }

    var formulario = document.getElementById('formLogin');

    formulario.submit();
}


let usernameInput = document.getElementById("user");
let usernameLabel = document.querySelector('label[for="user"]');
let usernameHelper = document.getElementById("username-helper");

usernameInput.addEventListener("focus", () => {
    usernameLabel.classList.add("required-popup")
});

usernameInput.addEventListener("blur", () => {
    usernameLabel.classList.remove("required-popup")
});

usernameInput.addEventListener("input", (elemento) => {
    let inputValue = elemento.target.value;

    if(inputValue.length < 8){
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");

        usernameHelper.classList.add("visible");
        usernameHelper.innerText = "O campo de usuário precisa ter pelo menos 8 caracteres";
    } else{
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        usernameInput.classList.add("correct");
    }
});


let pswdInput = document.getElementById("pswd");
let pswdLabel = document.querySelector('label[for="pswd"]');
let pswdHelper = document.getElementById("pswd-helper");

pswdInput.addEventListener("focus", () => {
    pswdLabel.classList.add("required-popup")
});

pswdInput.addEventListener("blur", () => {
    pswdLabel.classList.remove("required-popup")
});

pswdInput.addEventListener("input", (elemento) => {
    let inputValue = elemento.target.value;

    if(inputValue.length < 8){
        pswdInput.classList.remove("correct");
        pswdInput.classList.add("error");

        pswdHelper.classList.add("visible");
        pswdHelper.innerText = "O campo de senha precisa ter pelo menos 8 caracteres";
    } else{
        pswdInput.classList.remove("error");
        pswdHelper.classList.remove("visible");
        pswdInput.classList.add("correct");
    }
});