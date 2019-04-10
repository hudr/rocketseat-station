//Quando se define um método estático ele não enxerga
//o restante da classe, mesmo que ele esteja dentro dela.

//Classes com métodos estáticos são somente para ajudar a gente
//a fazer algumas coisas, pois neste caso não tem construtor.

/*
class TodoList {
    constructor() {

        this.todos = [];
    }

    static addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}
*/

//Então seria desta forma uma classe com static
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));