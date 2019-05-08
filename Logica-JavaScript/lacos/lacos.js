//Adivinhe o número

//Gerar número aleatório entre 0 e 10
var numeroOculto = Math.round(Math.random()*10);
var acertou = false;

var chute 
console.log(numeroOculto);

while(acertou == false){
    chute = parseInt(prompt('Tente adivinhar o número'));
        
    if (chute == numeroOculto){
        acertou == true;
        alert('Parabéns, você acertou!');
    }
}

//Contar de 0 a 10
var number = 0;
while (number <= 10){
    console.log(number);
    number++;
}

//Contar de 10 a 0
var number = 10;
while (number >= 0){
    console.log(number);
    number--;
}










