function validar(){
    // E-mail para recuperar senha

    var email = document.getElementById('txtEmail');
    if (email.value == "") {
        alert('Precisa-se de um e-mail para a criação da nova senha!');
        email.focus();
        return false;
    }

    alert('Senha enviada para o e-mail informado');
}