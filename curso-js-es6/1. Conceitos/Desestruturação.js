//Desestruturação
const usuario = {
    nome: 'Hudson',
    idade: 24,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
    },
};

//Como melhorar esse desdobramento?
/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;*/

console.log('trabalhoso', usuario);

const { nome, idade, endereco: { cidade } } = usuario;

console.log('simples', nome);
console.log('simples', idade);
console.log('simples', cidade);


function mostraNome({ nome, idade, endereco: { cidade } }) {
    console.log('na function', nome, idade, cidade);
}

mostraNome(usuario);