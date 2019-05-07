// find
var alunas = [
    { nome: 'Manu' },
    { nome: 'Tha' },
    { nome: 'Carol' }
];
var aluna;
for (var i = 0; i < alunas.length; i++) {
    if (alunas[i].nome === 'Carol') {
        aluna = alunas[i];
        break;	//	evita	percorrer	o	resto	da	lista
    }
}
console.log(aluna);	//	{"nome":"Carol"}


let alunas = [
    { nome: 'Manu' },
    { nome: 'Tha' },
    { nome: 'Carol' }
];

let encontrarAluna = alunas.find(aluna =>{
    return aluna.nome === 'Carol';
});

console.log(encontrarAluna);


