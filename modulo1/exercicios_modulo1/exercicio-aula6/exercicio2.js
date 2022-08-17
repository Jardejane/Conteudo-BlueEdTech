// Faça um Programa que peça a idade e a altura de 5 pessoas, 
// armazene cada informação no seu respectivo array.
//  Imprima a média de idade e de altura.
//  exercicio2
console.clear();
const prompt = require('prompt-sync')();
let pessoa1_nome = prompt('Diga seu nome pessoa 1')
let pessoa1_idade = +prompt('diga sua idade; ');
let pessoa1_altura = +prompt('diga sua altura; ')
let pessoa1 = []
pessoa1.push(pessoa1_idade,pessoa1_altura)
console.log(`Dados de ${pessoa1_nome}`)
console.log(`Idade; ${pessoa1[0]}\nAltura; ${pessoa1[1]}`)


let pessoa2_nome = prompt('Diga seu nome pessoa 2')
let pessoa2_idade = +prompt('diga sua idade; ');
let pessoa2_altura = +prompt('diga sua altura; ')
let pessoa2 = []
pessoa2.push(pessoa2_idade,pessoa2_altura)
console.log(`Dados de ${pessoa2_nome}`)
console.log(`Idade; ${pessoa2[0]}\nAltura; ${pessoa2[1]}`)


let pessoa3_nome = prompt('Diga seu nome pessoa 3')
let pessoa3_idade = +prompt('diga sua idade; ');
let pessoa3_altura = +prompt('diga sua altura; ')
let pessoa3 = []
pessoa3.push(pessoa3_idade,pessoa3_altura)
console.log(`Dados de ${pessoa3_nome}`)
console.log(`Idade; ${pessoa3[0]}\nAltura; ${pessoa3[1]}`)


let pessoa4_nome = prompt('Diga seu nome pessoa 4')
let pessoa4_idade = +prompt('diga sua idade; ');
let pessoa4_altura = +prompt('diga sua altura; ')
let pessoa4 = []
pessoa4.push(pessoa4_idade,pessoa4_altura)
console.log(`Dados de ${pessoa4_nome}`)
console.log(`Idade; ${pessoa4[0]}\nAltura; ${pessoa4[1]}`)


let pessoa5_nome = prompt('Diga seu nome pessoa 5')
let pessoa5_idade = +prompt('diga sua idade; ');
let pessoa5_altura = +prompt('diga sua altura; ')
let pessoa5 = []
pessoa5.push(pessoa5_idade,pessoa5_altura)
console.log(`Dados de ${pessoa5_nome}`)
console.log(`Idade; ${pessoa5[0]}\nAltura; ${pessoa5[1]}`)