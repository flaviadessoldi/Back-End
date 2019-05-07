const cartas = document.querySelectorAll('.carta');

function embaralhar(){
cartas.forEach(carta=>{
    let numeroAleatrorio = Math.floor(Math.random()*12);
    carta.style.order = numeroAleatrorio;
})
}

embaralhar();

cartas.forEach(carta=>{carta.addEventListener('click', virarCarta)})

let primeiraCarta = null
let segundaCarta= null

function virarCarta(){
    if (primeiraCarta && segundaCarta){
        return
    } else {
        this.classList.add('flip')
    }
    
    if (primeiraCarta===null){
        primeiraCarta = this
        console.log('1acarta', primeiraCarta)
    }else{
        if (segundaCarta !== null){
            return
        }

        if (this === primeiraCarta){
            return
        } else
        segundaCarta = this
        console.log('2acarta', segundaCarta)
        if (segundaCarta.dataset.framework === primeiraCarta.dataset.framework){
            primeiraCarta = null
            segundaCarta = null
            return
        }else {
            setTimeout(()=>{
                primeiraCarta.classList.remove('flip');
                segundaCarta.classList.remove('flip');
                primeiraCarta = null;
                segundaCarta= null;

            }, 1300)
        }

    }
}

cartas.forEach(elemento =>{
    elemento.classList.contains('flip')
})