//Valores padrões para parametros das funções.
/*function soma(a, b) {
    return a + b;
}*/

//Retorna NaN - Inexistente, pois nao identifica.
//console.log(soma(1));
//console.log(soma());

//Como deve ser feito?
/*function soma(a = 3, b = 6) {
    return a + b;
}

//Retorna NaN - Inexistente, pois nao identifica.

console.log(soma(1));
console.log(soma());*/

//E com arrow function?
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());



