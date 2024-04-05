/*
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
*/

const ask = require('readline-sync')

let nomeDoUsuario = ask.question('Qual seu nome? ')
let emailDoUsuario = ask.question('Qual o seu e-mail? ')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}`)