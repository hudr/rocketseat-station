//Operações em array.

//O Map serve para percorrer o vetor e retornar algo do seu interesse
const arr = [1, 3, 4, 5, 8, 10];

//Neste caso estou multiplicando cada item por 2 e somando a posição dele no vetor.
//Lembre-se que começa sempre por 0.
const newArr = arr.map(function (item, index) {
    return item * 2 + index;
});

console.log('array com map', newArr);


//Reduce > Consumir todo o vetor e transformar
//em uma única informação/variável
//neste caso ele roda todo o array e soma todos os itens.
const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log('reduce', sum);


//Filter / Filtro.
const filter = arr.filter(function (item) {
    //retorna se é par.
    return item % 2 === 0;
});

console.log('filter', filter);


//Find > Utilizado para quando quer verificar se existe alguma
//info dentro do array.

const find = arr.find(function (item) {

    //retorna indefined se não tem.
    return item === 4;

});

console.log('find', find);