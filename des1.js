/* 
Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, 
ignorando os espaços
*/

const frase = 'Teu pai de calsinha'
let array = []

frase.split('').forEach(element => {
    if(element !== ' ')
    array.push(element)
});

console.log(array)