//Sintaxe curta de objeto ES6
const nome = 'Hudson';
const idade = 24;

//Modelo tradicional
/*const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Nextel',
};*/

//Modelo com sintaxe curta.
const usuario = {
    nome,
    idade,
    empresa: 'Nextel',
};

console.log('Sintaxe curta', usuario);