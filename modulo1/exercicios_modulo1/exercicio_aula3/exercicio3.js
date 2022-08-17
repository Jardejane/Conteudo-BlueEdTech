// Faça um programa que leia um número, e informe se ele é par ou impar
//exercicio 3 
console.clear()
const prompt = require('prompt-sync')()
let numero = + prompt('Diga o numero que quer saber se é par ou impar ')
if(numero % 2 == 0){
    console.log(`o numero ${numero} é par`)
}else{
    console.log(`o numero ${numero} é impar`)
}