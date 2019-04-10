/**
 *     UM POUCO SOBRE AJAX E SEU POTENCIAL.
 */

//Nos libera a funcionalidade do AJAX
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.github.com/users/hudsonr2018');
xhr.send(null);

//Aguardando tudo acontecer para retornar algo.
xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {
        console.log('ajax', JSON.parse(xhr.responseText));
    }
}