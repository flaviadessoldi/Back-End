const button = document.querySelector('.btn-search-sticker')
button.addEventListener('click', (submit)=>{
submit.preventDefault();

const pesquisa = document.getElementById('sticker').value;

fetch('https://api.giphy.com/v1/stickers/search?q='+pesquisa+'&api_key=8NSYkECVi4of0by8lWV76gDUev0Qoe4V')

.then((response)=>{
    return response.json();

})

.then((data)=>{
    console.log(data);
    console.log('Deu certo!');
    
    data.data.forEach(gifs => {
        
        const stickers = document.querySelector('.stickers');

        const box = document.createElement('div');
        box.setAttribute('data-id', '1');
        
        stickers.appendChild(box);

        const imagem = document.createElement('img');
                
        box.appendChild(imagem);

        imagem.src = gifs.images.original.url;

        button.addEventListener('click', ()=>{
        box.remove()
        })

       
    });

})

.catch((erro)=>{
    console.log(erro)
})

})