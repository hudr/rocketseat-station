




//Constante não pode ter seu valor reatribuido.
//O exemplo abaixo não pode ser realizado.
/*
const a = 1;
a = 3;
*/

//Podemos apenas mutar uma const.
//Quando alteramos valor dentro de um objeto.
//Neste caso a const é usuário, mas o valor alterado é um objeto com nome.
const usuario = {
    nome: 'Hudson'
};

usuario.nome = 'Cleiton';

console.log(usuario);


//Variávies de escopo.
//Todas as variáveis que estão sendo vistas pela function.
function teste(x) {
    let y = 2;

    if (x > 5) {
        //Posso retribuir
        let y = 4;
        console.log(x, y);
    }
}
teste(10);