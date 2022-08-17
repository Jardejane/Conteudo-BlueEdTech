// Faça o cálculo contrário: leia um valor inteiro correspondente à idade 
// de uma pessoa em dias e informe-a em anos, meses e dias.
//  Também considere todo ano com 365 dias e todo mês com 30 dias.
//exercicio 4

console.clear()
const prompt = require('prompt-sync')()
let recebendo_dias = +prompt('Diga quantos dias ja viveu')
let anos_calculando= parseInt(recebendo_dias / 365)
let mes_calculando = parseInt(anos_calculando % 12)
let dias_calculando = parseInt(30 / mes_calculando)
console.log(`${anos_calculando}\
 anos ${mes_calculando} mes ${dias_calculando} dia`)
