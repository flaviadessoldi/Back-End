class Pessoa {
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }

    static programar() {
        console.log('Estou codando loucamente!')
    }


}


class Animal {
    constructor(_patas, _porte) {
        this.patas = _patas;
        this.porte = _porte;

    }

    reproduz() {
        console.log('Sou castrada!');
    }

}

class Cachorro extends Animal {
    constructor(_raca, _patas, _porte) {
        super(_patas, _porte);
        this.raca = _raca;
    }

    latir() {
        console.log('Au au au')
    }

}


class ViraLata extends Cachorro {
    constructor(_raca, _patas, _porte, _pelo) {
        super(_patas, _porte);
        this.pelo = _pelo;
    }

    serFofa() {
        console.log('Sou fofinha e obediente!')
    }

}

let scully = new Cachorro ('Vira Lata', 4, 'Medio', 'Branquinho')