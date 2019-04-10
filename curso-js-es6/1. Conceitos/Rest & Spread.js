//Rest > Serve para pegar o resto das propriedades
//desestuturando-as
const usuario = {
    nome: 'Hudson',
    idade: 24,
    empresa: 'Nextel'
};

//Pego apenas nome e o resto fica na variável resto com spread.
const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log('a', a);
console.log('b', b);
console.log('c', c);


//Armazena tudo que chega em params, faz um reduce e soma
//todo o array, retornando o valor total da soma e indo pro
//próximo para percorrer todo o array e somá-lo.
/*function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log('soma com ...params e reduce', soma(1, 3, 4));*/

function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 3, 4, 4, 5, 6, 7));


//SPREAD > Propaga as informações para uma outra estrutura de dados.
//No caso abaixo ele junta os dois arrays e dá origem a um terceiro.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

//Neste caso nós pegamos os dados do usuário 1
//pegamos uma constante nova e atribuimos tudo do usuario 1,
//mudando apenas o nome.
const usuario1 = {
    nome: 'Hudson',
    idade: 24,
    empresa: 'Nextel',
};

const usuario2 = { ...usuario1, nome: 'Diego' };

console.log(usuario2);

