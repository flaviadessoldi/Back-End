const root = document.getElementById('root');
const authors = document.querySelector('.authors');
root.appendChild(authors);

fetch ('https://reqres.in/api/users')
.then ((response) =>{
    return response.json();
})

.then ((data)=>{
    console.log(data);
    console.log('Sucesso!')
    
    data.data.forEach(pessoas => {

        let card = document.createElement('div');
        card.setAttribute('class','card');
        card.setAttribute('id', pessoas.id)
        authors.appendChild(card);
        
        let name = document.createElement('h2');
        name.textContent = pessoas.first_name + ' ' + pessoas.last_name;
        card.appendChild(name);

        let email = document.createElement('p');
        email.textContent = pessoas.email;
        card.appendChild(email);
        
        const button = document.createElement('button');
        button.setAttribute('data-id', pessoas.id);
        button.textContent = '✖';
        card.appendChild(button)

        button.addEventListener('click', ()=>{
            const thisCard = button.parentElement;
            const cardPai = thisCard.parentElement;
            
            fetch('https://reqres.in/api/users', {
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({
                    'id':button.getAttribute('data-id')
                })
                
            })
            
            .then (()=>{
                cardPai.removeChild(thisCard)
                
            })
            .catch((erro)=>{
                console.log(erro)
                
            })
            })

    });
    
})

.catch ((erro)=>{
    console.log('erro')
})