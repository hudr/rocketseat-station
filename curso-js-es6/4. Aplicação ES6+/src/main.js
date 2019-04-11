


import api from './api';


class App {
    constructor() {
        //guarda todos os repositórios
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    //Registrar os eventos que acontecem.
    //Exemplo submitar o código.
    registerHandlers() {

        this.formEl.onsubmit = event => this.addRepository(event);

        /*mesma coisa que
        this.formEl.onsubmit = function (event) {
            addRepository(event);
        }

        this.formEl.onsubmit = (event) => {
            addRepository(event);
        }

        this.formEl.onsubmit = () => {
            addRepository(event);
        }*/
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        //previne que a página seja recarregada como acontece normalmente
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        //Mostrando loading na tela.
        this.setLoading();

        //Tratando o erro.
        try {
            //Usando base de URL do api.js e passando value do input.
            const response = await api.get(`/repos/${repoInput}`);

            //Desestruturação
            const { name, description, html_url, owner: { avatar_url } } = response.data;

            //Object short syntax
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render();
        } catch (err) {
            alert('O repositório não existe!');
        }

        this.setLoading(false);

    }

    render() {
        //Apaga toda a lista.
        this.listEl.innerHTML = '';

        //Porque forEach e não .map? Porque o MAP percorre e tende a alterar
        //algo dentro do array, já o forEach só percorre.
        this.repositories.forEach(repo => {

            //let pois fica reconhecida apenas dentro desse escopo.
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();