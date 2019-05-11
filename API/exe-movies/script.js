const movies = document.querySelector('.movies');
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
        
        const box = document.createElement('div');
        box.setAttribute('data-id', filmes.imdbID);
        box.setAttribute('class', 'box');
                
        movies.appendChild(box);

        const imagem = document.createElement('img');
        
        box.appendChild(imagem);
        
        imagem.src = filmes.Poster;

        const boxDivider = document.createElement('div');
        boxDivider.setAttribute('class', 'box-divider');
        box.appendChild(boxDivider);

        const infoFilme = document.createElement('p');
        infoFilme.innerHTML = `<span>${filmes.Title}</span> <span>${filmes.Year}</span>`;
        boxDivider.appendChild(infoFilme);

        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>${filmes.Type}</span>`;
        boxDivider.appendChild(descricao);

        button.addEventListener('click', ()=>{
            box.remove()
        })

       
    });

})

.catch((erro)=>{
    console.log(erro)
})

})