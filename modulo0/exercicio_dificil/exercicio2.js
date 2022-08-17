// Faça um programa, que receba as dimensões de um terreno retangular
//  (largura e comprimento) e mostre a área do terreno:
const  prompt= require('prompt-sync')();

let largura = +prompt(`Diga a largura do seu terreno `);
let comprimento= +prompt(`Diga o compprimento do seu terreno`);
let calculo = largura * comprimento
console.log(calculo)