// Faça um programa que peça um número e 
// imprima toda a tabuada dele do 1 ao 10
// exercicio 3 
console.clear()
const prompt = require('prompt-sync')()
let number = +prompt('Diga o numero que quer saber da tabuada; ')
for (i=1; i<=10; i++){
    let calculation = number * i 
    console.log(`${number} x ${i} = ${calculation}`)
}