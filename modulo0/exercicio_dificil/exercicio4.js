// Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá
//  perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor
//  serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo
//  é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de
//  notas existentes na máquina.
// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100,
//  uma nota de 50, uma nota de 5 e uma nota de 1;
// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, 
// uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
// const prompt= require('prompt-sync')();
// let quanto_sacar = +prompt('quanto deseja sacar');
// let calculo1 = (quanto_sacar % 100)
// let calculo2= (calculo1/50)
// let calculo3 = (calculo2 / 10)
// let calculo4 = (calculo3 / 5)
// let calculo5 = (calculo4 / 1)
// console.log (` notas de cem${calculo1}\n
// notas de 50 ${calculo2}\n notas 10 ${calculo3}\n
// notas de 5 ${calculo4}\n notas de 1 ${calculo5}
//`)

let saque = parseInt(prompt("Escolha o valor do saque, entre R$10 e R$600: "))

let notas = [100,50,10,5,1];
let qtd = []

console.log (`\nPara o saque de R$ ${saque},00 serão necessarias:`)

for (let i = 0; i < notas.length; i++)
{
    qtd[i] = Math.floor(saque / notas[i])
    saque = saque - qtd[i]*notas[i]
    if(qtd[i]!=0){console.log(`${qtd[i]} notas de ${notas[i]}`)}
}
console.log()