// Faça um Programa que peça dois números e imprima o maior deles,
//  e informe caso eles sejam iguais.
//exercicio 1
console.clear()
const prompt = require('prompt-sync')()
let numero1 = prompt('Diga o primeiro numero; ')
let numero2 = prompt('Diga o segundo numero; ')
if(numero1>numero2){
    console.log(`o ${numero1} é maior `)
}
else if(numero2>numero1){
    console.log(`o ${numero2} é maior`)
}
else{
    console.log('os numeros são iguais')
}