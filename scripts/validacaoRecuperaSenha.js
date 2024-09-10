function validar(){
    // E-mail para recuperar senha

    var email = document.getElementById('txtEmail');
    if (email.value == "") {
        email.focus();
        return false;
    }

    alert('Senha enviada para o e-mail informado');
}


let emailInput = document.getElementById("txtEmail");
let emailLabel = document.querySelector('label[for="txtEmail"]');
let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("focus", () => {
    emailLabel.classList.add("required-popup")
});

emailInput.addEventListener("blur", () => {
    emailLabel.classList.remove("required-popup")
});

emailInput.addEventListener("input", (elemento) => {
    let inputValue = elemento.target.value;

    if(inputValue.includes("@") && inputValue.includes(".com")){
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailInput.classList.add("correct");
    } else{
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");

        emailHelper.classList.add("visible");
        emailHelper.innerText = "Insira um e-mail válido!";
    }
});