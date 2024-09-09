function validar(){
    // Nome

    var nomeUser = document.getElementById('txtName');
    if (nomeUser.value == "") {
        alert('Campo de nome vazio!');
        nomeUser.focus();
        return false;
    }








    // E-mail

    var email = document.getElementById('txtEmail');
    if (email.value == "") {
        alert('Campo de e-mail vazio!');
        email.focus();
        return false;
    }

    // Senha

    var senha = document.getElementById('txtSenha');
    if (senha.value == "") {
        alert('Campo de senha vazio!');
        senha.focus();
        return false;
    }

    // Confirmação da senha

    var senhaConf = document.getElementById('txtSenhaConf');
    if (senhaConf.value == "") {
        alert('Campo da confirmação da senha vazio!');
        senhaConf.focus();
        return false;
    }

    alert('Cadastrado com sucesso!');

    var formulario = document.getElementById('formCadastro');

    formulario.submit();
}