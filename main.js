function criaCartao(categoria, pergunta, respota){
   let container = document.getElementById('container');
   let cartao = document.createElement('cartao');
   cartao.className = 'cartao';
   cartao.innerHTML = `
   <div class="conteudo-cartao">
    <h3>categoria</h3>
    <div class="pergunta-cartao">
        <p>pergunta</p>
    </div>
    <div class="resposta-cartao">
        <p>respota</p>
    </div>
</div>
   `

   container.appendChild(cartao);
}