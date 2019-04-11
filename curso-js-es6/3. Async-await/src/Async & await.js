


const minhaPromise = () => new Promise((resolve, reject) =>
    setTimeout(() => { resolve('OK') }, 2000));


//await é o mesmo que .then da promise.
//aguarda a primeira finalizar
/*async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();*/

//transformando função async em arrow function.
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise();
