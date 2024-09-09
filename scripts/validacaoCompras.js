function validar(){
    // Rua

    var rua = document.getElementById('adrss');
    if (rua.value == "") {
        alert('Preencher o nome da rua!');
        rua.focus();
        return false;
    }

    // Bairro

    var bairro = document.getElementById('brr');
    if (bairro.value == "") {
        alert('Preencher o bairro!');
        bairro.focus();
        return false;
    }

    // Cidade

    var cidade = document.getElementById('cidade');
    if (cidade.value == "") {
        alert('Preencher a cidade!');
        cidade.focus();
        return false;
    }

    // Estado

    var estado = document.getElementById('estado');
    if (estado.value == "") {
        alert('Preencher o estado!');
        estado.focus();
        return false;
    }

    // Número

    var numero = document.getElementById('num');
    if (numero.value == "") {
        alert('Preencher o número da residência!');
        numero.focus();
        return false;
    }

    // CEP

    var cep = document.getElementById('cep');
    if (cep.value == "") {
        alert('Preencher o CEP!');
        cep.focus();
        return false;
    }

    // Forma de pagamento
    if(
        (document.getElementById("boleto2").checked == false)
        &&
        (document.getElementById("cartao2").checked == false)
        &&
        (document.getElementById("pix2").checked == false))
        {
        alert("Insira uma forma de pagamento");
        return false;
        document.getElementById("boleto").focus();
        }

    alert('Compra realizada com sucesso!')

    var formulario = document.getElementById('formDadosEntrega');

    formulario.submit();
}