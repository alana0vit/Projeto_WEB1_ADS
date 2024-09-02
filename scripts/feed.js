let listaManhwa = [
    {
        pagDetalhe: "./detalhesProdutos/detalheSL.html",
        imagem: "../imagens/capaManga/solo-leveling.jpg",
        legenda: "Solo Leveling",
        valor: "R$ 42,00"
    },
    {
        pagDetalhe: "",
        imagem: "",
        legenda: "",
        valor: ""
    },
    {
        pagDetalhe: "",
        imagem: "",
        legenda: "",
        valor: ""
    },
];

for(let i = 0; i < listaManhwa.length; i++){

}



let genero01 = document.getElementById('manhwa');

genero01.innerHTML = `<div class="boxManga">
<div>
    <a href="${}"><img src="${}" alt="Detalhes do Produto" title="Detalhes do Produto"  class="capaManga"></a>
</div>
<p>${}</p>
<p>${}</p>
<div class="addNotAdd">
    <button>-</button>
    <input type="number" value="1" min="0">
    <button>+</button>
</div>
<a href="./finalizarCompra.html">Adicionar ao Carrinho</a>
</div>`