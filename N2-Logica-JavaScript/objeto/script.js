let pessoa = {
    nome: 'Silvia',
    idade: 35,
    altura: 1.61,
    andar: function () { console.log('andando') },
    falar: () => { console.log('blablablabla') },
    comer() { console.log('Comeny') }
}

class Canetao {
    constructor(_marca, _cor) {
        this._marca = marca,
            this._cor = cor,
            this.tampada = true,
            this.escrevendo = false
    }
    escrever() {

        this.tampada ? console.log('Tô tampada!') : console.log('Tos escrevendo!'); this.escrevendo = true

    }

    destampar() {
        this.tampada ? this.tampada = false : console.log('Já tô destampada!')
    }

    tampar() {
        if (this.tampada) {
            console.log('Já tô tampada!')
        } else {
            this.tampada = true
        } if (this.escrevendo) {
            this.escrevendo = false;
        }
    }

    get marca() {
        return this._marca;
    }

    set marca(_marca){
        this._marca = nova_marca;
        
    }

    get cor(){
        return this._cor;
    }


    set cor(_cor){
        this._cor = nova_cor;

    }
}

let canetao1 = new Canetao("Pilot", "Azul")
console.log(canetao1)

canetao1.escrever()
canetao1.destampar()
canetao1.escrever()
canetao1.tampar()
canetao1.escrever()




