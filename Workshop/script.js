console.log(listaProdutos)

const produtos = document.querySelector('.produtos');

listaProdutos.forEach((produto, indice) =>{
    console.log(produto)
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML =
    `<h3>Produto ${produto.descricao.split(' ')[0]}</h3>
    <p>Descrição ${produto.descricao}</p>
    <p>Valor: R$ ${produto.preco}</p>
    <a href=# id ='${indice}'> Adicionar ao Carrinho </a>`
    produtos.appendChild(card);
})

let botoes = document.querySelectorAll('a');

botoes.forEach((botao)=>{
console.log(botao)
botao.addEventListener('click', ()=>{
    console.log(botao.id)

})
})

