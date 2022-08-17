// Faça um programa que simule um lançamento de dados.
//  Lance o dado 100 vezes e armazene os resultados em um array.
//   Depois, mostre quantas vezes cada valor foi conseguido.
//   exercicio4.js
console.clear()

let um = 0
let dois = 0
let tres = 0
let quatro = 0
let cinco = 0
let seis = 0
let dado = 0

for (let i = 1; i <= 100; i++) {
    dado = Math.floor(Math.random() * 6 + 1)
    if (dado == 1) {
        um++
    } else if (dado == 2) {
        dois++
    } else if (dado == 3) {
        tres++
    } else if (dado == 4) {
        quatro++
    } else if (dado == 5) {
        cinco++
    } else if (dado == 6) {
        seis++
    }
}

console.log(`1: ${um} vezes`)
console.log(`2: ${dois} vezes`)
console.log(`3: ${tres} vezes`)
console.log(`4: ${quatro} vezes`)
console.log(`5: ${cinco} vezes`)
console.log(`6: ${seis} vezes`)
// Peguei o valor do dado e somei +1 em contadores separados para cada número