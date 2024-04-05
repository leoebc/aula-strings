/*
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array no console
*/

const ask = require('readline-sync')
let listaDeTarefas = []

listaDeTarefas.push(ask.question('Digite uma tarefa: '))
listaDeTarefas.push(ask.question('Digite uma tarefa: '))
listaDeTarefas.push(ask.question('Digite uma tarefa: '))
console.log(listaDeTarefas)
listaDeTarefas.splice(ask.question('Digite o indice da tarefa que voce ja realizou'), 1)
console.log(listaDeTarefas)