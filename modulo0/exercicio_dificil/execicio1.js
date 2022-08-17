// Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, 
// retornando um valor literal indicando se uma pessoa tem voto 
// NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:
const prompt = require('prompt-sync')();
let ano_nascimento = +prompt(`Diga o ano do seu nascimento`)
let calculo = 2022 - ano_nascimento
if (calculo>= 18) {
    console.log('é obrigatorio seu voto')
}else if (calculo == 16 || calculo == 17) {
     console.log('seu voto é opçional')
} else {
    console.log('você não pode votar ainda')
}
