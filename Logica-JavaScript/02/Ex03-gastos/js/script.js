//Coletar o elemento botão

var botao = document.querySelector('.transacao__button');

botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    
    //Pegar os Inputs (elementos do DOM)
    var inputTransacao = document.getElementById('transacaoInputName');
    var inputValor = document.querySelector('#transacaoInputMoney');
    var inputData = document.getElementById('transacaoInputDate');
    
    //Pegar os Valores dos Inputs
    var valorTransacao = inputTransacao.value;
    var valorValor = inputValor.value;
    var valorData = inputData.value;

    //Criar a tabela

    var linha = document.createElement('tr');

    var colunaTransacao = document.createElement('td');
    colunaTransacao.textContent = valorTransacao; 
    linha.appendChild(colunaTransacao);
    
    var colunaValor = document.createElement('td');
    colunaValor.textContent = valorValor;
    linha.appendChild(colunaValor);
    
    var colunaData = document.createElement('td');
    colunaData.textContent = valorData;
    linha.appendChild(colunaData);
    
    var tabela = document.querySelector('.extrato__body'); 
    tabela.appendChild(linha);

    //Mudar a cor do background de acordo com os valores de transação inseridos

    var corpo = document.querySelector('body');
    if (valorValor>0 && valorValor<=10){
        corpo.style.backgroundColor = 'green';
    } else if (valorValor>10 && valorValor<=50){
        corpo.style.backgroundColor = 'orange'; 
    } else if (valorValor>50){
        corpo.style.backgroundColor = 'red';
        alert('Miga, sua louca!');
    }
     //Limpar os Valores dos Inputs para uma nova inserção de dados

     //  inputTransacao.value="";
     //  inputData.value="";
     //  inputValor.value="";
    
     document.querySelector('.transacao__form').reset(); 

})























