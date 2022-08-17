// Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
// Crie uma variável para receber o valor, com conversão para inteiro
// Para um número ser par, a divisão dele por 2 tem que dar resto 0
const prompt = require('prompt-sync')();
let valor = +prompt('diga um numero inteiro')

if (valor % 2 ==0) { // se ler valor com resto dividido por 2  é igual a 0
    console.log('o resultado é par')// por ser divido por dois com o resto igul a 0 é par
}
if (valor % 2 ==1) {// se ler valor com resto divido por 2 é igual a 1
    console.log(`o resultado é impar ${valor}`)// por ser dividido por 2 ´com resto igual a 1 é impar
}


