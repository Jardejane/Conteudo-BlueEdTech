// Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, 
// o número de peças1 que o usuário quer, o valor unitário de cada peça1, 
// o nome de uma peça2, o número de peças2 e o valor unitário
//  de cada peça2. Após, calcule e mostre o valor a ser pago.
// exercicio 2
console.clear()
const prompt = require('prompt-sync')()
let peça1_nome = prompt('Qual o nome da perça que você quer? ')
let peça1_quantidade = +prompt(`Quantas peças de ${peça1_nome} você vai querer levar? `)
let peça1_valor = 50 * peça1_quantidade
let peça2_nome = prompt('Qual o nome da peça 2 que você quer? ')
let peça2_quantidade = +prompt(`Quantas peças de ${peça2_nome} você vai querer levar? `)
let peça2_valor = 60 * peça2_quantidade
let calculando = peça1_valor  + peça2_valor
console.log(`sua compra deu ${calculando}`)