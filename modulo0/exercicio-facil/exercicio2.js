//exercicio2
//Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

const prompt = require('prompt-sync')();
 let nome = prompt('Qual o seu nome?');
 let endereço = prompt('Digite seu endereço com cep');
 let telefone = prompt('digite seu telefone');
console.log(`seu nome é ${nome}` );
console.log(' ')
console.log(`seu endereço é ${endereço}`);
console.log(" ");
console.log(`seu telefone é ${telefone}`);//na proxima faça como embaixo assim vai ocupar menos linha

//correção
// const nome = prompt("Nome Completo")
// const endereco = prompt("Endereço")
// const cep = prompt("CEP")
// const tel = prompt("Telefone")

// console.log(` Nome: ${nome} \n Endereço: ${endereco} \n CEP: ${cep}  Telefone: ${tel}`)
//pontuação=9