// Qual o valor do troco?
// Defina uma variável para o valor de uma compra que custou R$100,98;
// Defina uma variável para o valor que o cliente pagou R$150,00;
// Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.
//exercicio06
const prompt = require('prompt-sync')();
const compra =  100.98
const pagou = 150.00
const calculandotroco = pagou - compra
const arredondado_troco = Math.round(calculandotroco)

console.log(` seu troco é ${arredondado_troco}`)
