// Faça um programa que leia 2 valores inteiros (A e B).
//  Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos",
//   indicando se os valores lidos são múltiplos entre si.
// exercicio 4 
console.clear()
const prompt = require('prompt-sync')()
let numero1 = +prompt("Qual numero que você quer saber o multiplo ")
let numero2 = +prompt('diga o multiplo que você acha  ')
if(numero1 % numero2 == 0){
   console.log('os numeros são multiplos ')
}
else{
    console.log('Os numeros não são multiplos')
}