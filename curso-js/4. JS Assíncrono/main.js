/** 
 *  TRABALHANDO COM AXIOS, VAMOS VER SE VALE A PENA?
 */

axios.get('http://api.github.com/users/hudsonr2018')
    .then(function (response) {
        console.log('axios', response.data);
    })
    .catch(function (error) {
        console.warn(error);
    });
