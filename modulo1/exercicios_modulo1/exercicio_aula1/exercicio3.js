// Leia 3 valores de entrada, referentes à idade de uma pessoa
//  em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 37 dias. 
//  Calcule e exiba o total de dias que essa pessoa já viveu.
//   Obs.: apenas para facilitar o cálculo,
//  considere todo ano com 365 dias e todo mês com 30 dias.

exercicio3
console.clear()
const prompt = require('prompt-sync')()
let ano = +prompt('Qual ano você nasceu? ')
let mes = +prompt('Diga o numero do mês que você nasceu! ')
let dia = +prompt('Qual dia do mês que você nasceu? ')
const calculando = (ano * 365) + (mes * 30) + dia;
console.log(`você viveu ${calculando} dias`)