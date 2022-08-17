// Escreva um programa que peça um número e escreva o fatorial dele. 
// Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
// exercicio 2 
console.clear()
const prompt = require('prompt-sync')()
let numero = +prompt('Diga um numero; ')
let num = 1
for (let i = 1 ; i<=numero; i++){
   num = num * i
   console.log(num)
}
