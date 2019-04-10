// 3.1
const arr = [1, 2, 3, 4, 5];

//old
arr.map(function (item) {
    return item + 10;
});

arr.map(item => item + 10);



// 3.2
const usuario = { nome: "Diego", idade: 23 };

//old
function mostraIdade(usuario) {
    return usuario.idade;
}

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);



// 3.3
const nome = "Diego";
const idade = 23;

//old
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}

const mostraUsuario = (nome = "Diego", idade = 18) => ({
    nome,
    idade
});

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
//old
const promise = function () {
    return new Promise(function (resolve, reject) {
        return resolve();
    })
}

return new Promise(function (resolve, reject) {
    const promise = () => new Promise((resolve, reject) => resolve());