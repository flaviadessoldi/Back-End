const body = document.querySelector('body');

const app = document.createElement('div');
app.setAttribute('id', 'root');

const container = document.createElement('div');
container.setAttribute('class', 'authors');

const h1 = document.createElement('h1');
h1.innerHTML = 'Colaboradores';

app.appendChild(h1)

app.appendChild(container);

body.appendChild(app);

const request = new XMLHttpRequest();
request.open('GET', 'https://randomuser.me/api/?results=10', true);

request.onload = function () {
    const data = JSON.parse(this.response);
    console.log(data)

    if (request.status >= 200 && request.status < 400) {
        console.log('Sucesso!')

        data.results.forEach(pessoas => {
            let card = document.createElement('div');
            card.setAttribute('class', 'card');

            let nome = document.createElement('h2');
            nome.textContent = pessoas.name.first + ' ' + pessoas.name.last;

            let local = document.createElement('h3');
            local.textContent = pessoas.location.city;

            let email = document.createElement('p');
            email.textContent = pessoas.email;

            let telefone = document.createElement('p');
            telefone.textContent = pessoas.cell;

            let imagem = document.createElement('img');
            imagem.src = pessoas.picture.large;

            card.appendChild(imagem);
            card.appendChild(nome);
            card.appendChild(local);
            card.appendChild(email);
            card.appendChild(telefone);
            container.appendChild(card);
        });

    } else {
        console.log('erro :(')
    }

}

request.send()