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
        box.setAttribute('data-id', '1');
        
        movies.appendChild(box);

        const imagem = document.createElement('img');
                
        box.appendChild(imagem);

        imagem.src = filmes.Poster;

        const boxDivider = document.createElement('div');
        boxDivider.setAttribute('class', 'box-divider');

        box.appendChild(boxDivider);

        const p = document.createElement('p');

        const titulo = document.createElement('span');
        titulo.textContent = filmes.Title
        p.appendChild(titulo);

        const ano = document.createElement('span');
        p.appendChild(ano);
        ano.textContent = filmes.Year

        const descricao = document.createElement('p');
        descricao.textContent = 'movie';
        boxDivider.appendChild(descricao)

       
    });

})

.catch((erro)=>{
    console.log(erro)
})

})