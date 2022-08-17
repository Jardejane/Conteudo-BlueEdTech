
//exercicio4
//Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

const prompt = require('prompt-sync')();
console.log('Ola seja bem vindo, antes de irmos pro menu');
console.log('coloque seus dados aqui embaixo');
let nome = prompt('coloque seu nome');
let telefone = prompt('digite seu telefone');
let endereço = prompt('digite seu endereço');
   console.clear()
console.log('menu')
console.log('')
console.log('o que deseja pedir');
console.log(" ");
console.log('Temos strognoff, feijoada, lasanha, camarão ');
let pedido =prompt('');
console.log(`ja iremos preparar o seu ${pedido}`);