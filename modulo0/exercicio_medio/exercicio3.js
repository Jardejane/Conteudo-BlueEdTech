// Faça um programa que peça dois números, imprima o maior deles ou 
// imprima "Números iguais" se os números forem iguais.

const prompt = require('prompt-sync')();
//aqui a pessoa vai colocar 2 numeros pra saber qual é maior ou igual
//observaçao ela que escolhe o nnumero 
let valor1 = parseInt(prompt('digite o primeiro valor'));
let valor2= parseInt(prompt("digite o segundo valor"));
//com os vaores vamos testa nos ifs
if (valor2>valor1) {
    console.log(`o valor dois é maior ${valor2}`)
}
if (valor1==valor2) {
    console.log(`o ${valor1} é igual ${valor2}`);
}
if (valor1>valor2) {
    console.log(` o valor um é maior ${valor1}`)}

    
