// Faça um Programa que leia 20 números inteiros e armazene-os num array.
//  Armazene os números pares no array PAR e os números IMPARES no array IMPAR.
//  Imprima os três vetores.
//  exercicio 1 
console.clear()
const prompt = require('prompt-sync')()
let numeros = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
]
console.log('Numeros escolhidos')
console.log(numeros)

console.log('numeros pares')
for(var par of numeros){
  if(par % 2 == 0){
    let pares = [par]
     console.log(pares)
  }
}
console.log(`Numeros impares`)
for(var impar of numeros){
    if(impar % 2 !=0){
       let impares = [impar]
       console.log(impares)
    }
}

