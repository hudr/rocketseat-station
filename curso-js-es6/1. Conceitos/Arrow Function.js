//Arrow Functions
//Uma breve explicação da simplicidade.

const arr = [1, 3, 4, 5, 6];

//Função comum.
/*
const newArray = arr.map(function (item) {
    return item * 2;
})*/

//Arrow já sem function
/*const newArray = arr.map((item) => {
    return item * 2;
})*/

//Tem só um parâmetro? Remova os parenteses
/*const newArray = arr.map(item => {
    return item * 2;
})*/

//Retorna apenas uma coisa? Não é um corpo? Facilite!
const newArray = arr.map((item) => item * 2);

console.log('arrow', newArray);

//Arrow function com constantes.
const teste = () => [1, 2, 3];

console.log('arrow constante', teste());

//Não retorna o objeto direto, por isso é necessário passar por ( parenteses )
const teste2 = () => ({ nome: 'Hudson' });
console.log('objeto direto', teste2());
