let precoTotal = 0;
limpar();

function adicionar() {
    //Capturar os valores
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //Multiplicar Preço X Quantidade
    let preco = quantidade * precoUnitario;
    //Adicionar item ao carrinho
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoUnitario}</span>
  </section>`
    //Total da compra
    precoTotal = precoTotal + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$${precoTotal}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = `R$ 0`;
}
