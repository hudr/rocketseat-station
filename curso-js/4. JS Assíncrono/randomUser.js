//
//
//      EXPERIENCIA DE AXIOS COM UMA API FREE
//
//

axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(function (response) {
        console.log(response.data);
        frases(response.data);
    })
    .catch(function (error) {
        console.warn(error);
    });

function frases(frases) {
    for (frase of frases) {
        console.log('ID:', frase.id);
        console.log('Frase:', frase.title);
    }
    console.log('Tamanho do array: ', frases.length);
}

