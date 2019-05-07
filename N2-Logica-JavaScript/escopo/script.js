let escopoGlobal = 'global';

// function testarEscopo(){
//     console.log('Acessando a variavel EscopoGlobal',escopoGlobal);
//     let escopoLocal = 'local';
//     console.log('Acessando a variavel EscopoLocal de dentro',escopoLocal)
// }

for (var i = 0; i<5; i++){
    console.log(i, escopoGlobal);

}

console.log(i);

// testarEscopo();

// console.log('Acessando a variavel EscopoLocal de fora ',escopoLocal)

