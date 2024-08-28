function validar(){
    // Usuário

    var usuario = document.getElementById('user');
    if (usuario.value == "") {
        alert('Campo de usuário vazio!');
        usuario.focus();
        return false;
    }

    // Senha

    var senha = document.getElementById('pswd');
    if (senha.value == "") {
        alert('Campo de senha vazio!');
        senha.focus();
        return false;
    }

    var formulario = document.getElementById('formLogin');

    formulario.submit();
}