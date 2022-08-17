// Faça um programa que carregue uma lista com os modelos de cinco carros.
//  Carregue uma outra lista com o consumo desses carros, isto é, quantos 
//  quilômetros cada um desses carros faz com um litro de combustível. 
//  Calcule e mostre:O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados 
// consome para percorrer uma distância de 1000 quilômetros e quanto
//  isto custará, considerando um que a gasolina custe R$ 5,50 o litro.
//  exercicio 4 
console.clear()
const prompt = require('prompt-sync')()
let carr = [
    "vermeho", 'azul', 'rosa', 'preto', 'verde'
]
var array = [
    3,5,6,9,6
 ]
// let Calcule = (1000 / array[0])
// console.log('carro vermelho pra rodar 1000km gasta' +Calcule.toFixed(2)+'L de gasolina')
//essa função pecorre a array ou objeto dando o maior valor dentro dele ou o menor valor
//max de maior e min de menor
//sempre tenha os 3 prontos pq ele pecorre dentro do array
let armazenagem = array.indexOf(Math.max(...array))
console.log('Carro mais economico')
console.log(`carro ${carr[armazenagem]} com ${array[armazenagem]}km com 1L de gasolina`)
console.log(' ')
console.log('Tabela de carro ')
//o i vai mudar nos dois array ao mesmo tempo os alinhando
let km = 1000
for(let i = 0; i < carr.length; i++){
    console.log(`carro;${carr[i]} consumo;${array[i]}`)
}
console.log('')
for (let i = 0; i<carr.length; i++){
    let litros = km / array[i]
    console.log('gasto de litro da gasolina por 1000km rodados ')
    console.log(`carro;${carr[i]} Litros;${litros.toFixed(2)}`)
    console.log('')
    let gasto = litros * 5.50
    console.log('Gasto em dinheiro dos 1000km pecorridos')
    console.log(`carro;${carr[i]} consumo;${gasto.toFixed(2)}R$`)
    console.log('')
    
}