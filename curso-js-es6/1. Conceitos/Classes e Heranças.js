


class List {

    //Primeiro método executado quando se estancia uma classe.
    //Disparar ações ou iniciar variáveis.
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

//Herança marota.
class TodoList extends List {
    constructor() {
        //Basicamente chamar o constructor da classe pai.
        super();

        this.usuario = 'Hudson';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();