const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

/*​
Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
SUBI NUM �NIBUS EM MIRROCOS 27
*/