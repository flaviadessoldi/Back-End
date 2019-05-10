const button = document.querySelector('.btn-search-movie')
button.addEventListener('click', (submit)=>{
submit.preventDefault();

const pesquisa = document.getElementById('movie').value;

fetch('http://www.omdbapi.com/?s='+pesquisa+'&apikey=b5acaa9c')

.then((response)=>{
    return response.json();

})

.then((data)=>{
    console.log(data);
    console.log('Deu certo!');
    
    data.Search.forEach(filmes => {
        
        const movies = document.querySelector('.movies');

        const box = document.createElement('div');
        box.setAttribute('data-id', filmes.id);
        
        movies.appendChild(box);

        const imagem = document.createElement('img');
        
        box.appendChild(imagem);
        
        imagem.src = filmes.Poster;

        const boxDivider = document.createElement('div');
        boxDivider.setAttribute('class', 'box-divider');
        box.appendChild(boxDivider);

        // const p = document.createElement('p');

        const titulo = document.createElement('span');
        titulo.textContent = filmes.Title
        boxDivider.appendChild(titulo);

        const ano = document.createElement('span');
        ano.textContent = filmes.Year
        boxDivider.appendChild(ano);

        const descricao = document.createElement('p');
        descricao.textContent = filmes .Type;
        boxDivider.appendChild(descricao);

       
    });

})

.catch((erro)=>{
    console.log(erro)
})

})