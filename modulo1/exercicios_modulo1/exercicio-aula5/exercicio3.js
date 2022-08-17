// Faça um programa que peça um número par, 
// e repita a execução caso o número digitado seja ímpar.
// exercicio 3
console.clear()
const prompt= require('prompt-sync')()
let par = +prompt('diga um numero par; ')
while(par%2==1){
    console.log('você digitou impar')
    par = +prompt('Digite de novo; ')
}
