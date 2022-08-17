// Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em
//  um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi 
//  o número escolhido pelo computador.
//  O programa deverá escrever na tela se o usuário venceu ou perdeu.
const prompt = require(`prompt-sync`)();
let escolha = +prompt('diga o numero que você acha que estou pensando')
let lista = [0,1,2,3,4,5,6,7,8,9,10]
let computador = lista[Math.floor(Math.random() *lista.length )] ;
if (computador==escolha) {
    console.log('eita como você é boa')
} else {
    console.log('sinto muito você não acertou')
}
