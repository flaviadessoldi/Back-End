let listaProdutos = [];

let camiseta = {
    tamanho: ['P', 'M', 'G', 'GG'],
    cor:'preta',
    modelo: 'babylook',
    descricao:'Camiseta reprograma estilo diva function',
    preco: 35,
    descrevaMe(){ alert (`${this.descricao} - Preço R$ ${this.preco}`)}
}

console.log(camiseta.descricao)

let caneca = {
    tamanho: '400 ml',
    cor: 'branca',
    descricao: 'Caneca de porcelana estampada com logo Reprograma',
    preco: 15,
   
}

let adesivo = {
    tamanho: '10cm',
    cor: 'Roxa',
    descricao: 'Adesivo com logo da Reprograma',
    preco: 5,
    
}

listaProdutos.push(camiseta, caneca, adesivo);
