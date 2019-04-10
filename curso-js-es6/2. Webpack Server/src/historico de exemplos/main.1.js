//import soma, { sub } from './funcoes';

//Possibilidade de mudar quando não é default?
//import { soma as somaFunction, sub } from './funcoes';

//Como chamar todas as funções de um arquivo? Não quero
//ficar importando um monte de nomes...
import * as funcoes from './funcoes';
console.log('funcoes dentro de funcoes', funcoes)
console.log(funcoes.multi(3, 3));

//Posso dar o nome que eu quiser pois a função
//está definida como default exemplo: sominhaSoma eu chamo no console.log sominhaSoma
import soma from './soma';

console.log(soma(1, 2));
//console.log(sub(4, 2));