// Jogo da adivinhação - Escreva um programa que faça o computador “pensar”
//  em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir 
//  qual foi o número escolhido pelo computador. O programa deve ser repetir
//   até o usuário acertar o número, e a cada palpite deve dizer se o número 
//   é maior ou menor que o palpite. No final dele deve escrever na tela que 
//   o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
//   exercicio 4 
console.clear()
const prompt = require('prompt-sync')()
const lista =[1,2,3,4,5,6,7,8,9,10]
let computador = lista[Math.floor(Math.random() *lista.length )] ;
let jogador = +prompt('Escolha um numero de 0 a 10; ')
while(true){
    if(computador>jogador){
        resultado = false
        console.log('numero tem que ser maior')
        jogador= +prompt(' diga o numero ')
    }
    else if (computador< jogador){
        resultado = false
        console.log('o numero tem que ser menor')
        jogador = +prompt('Diga um numero ')
    }
    else {
        console.log('você acertou')
        break;
    }
}


