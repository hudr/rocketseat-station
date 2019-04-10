//Criando função que recebe uma idade.
function checaIdade(idade) {
    //Cria uma promise que retorna um resolve(resolvido) ou reject(rejeitado)
    return new Promise(function (resolve, reject) {
        //Define que a ação demorará 2000ms (2s)
        setTimeout(function () {
            //retorna a pergunta: 'Idade é maior/igual 18 '?' Sim?(resolve) Não?(reject).
            return idade >= 18 ? resolve() : reject();
        }, 2000);
    });
}

//Chama a função passando a idade.
checaIdade(18)

    //Então (deu certo) imprima 'Maior que 18'
    .then(function () {
        console.log('ex01', "Maior que 18");
    })
    //Se não (se deu merda) imprima 'Menor que 18'
    .catch(function () {
        console.log('ex01', "Menor que 18");
    });