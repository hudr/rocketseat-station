






/** 
 *  PROMISES, VAMOS ENTENDER ESSA BAGAÇA!
 *  PROMESSAS SÃO CÓDIGOS QUE NÃO INFLUENCIARÃO
 *  NAS FUNÇÕES MAPEADAS.
 */

var minhaPromise = function () {
    //resolve = função que retorna quando for sucesso.
    //reject = função que retorna quando o resultado deu merda.
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/hudsonr2018');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição!');
                }
            }
        }
    });
}

minhaPromise()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });

