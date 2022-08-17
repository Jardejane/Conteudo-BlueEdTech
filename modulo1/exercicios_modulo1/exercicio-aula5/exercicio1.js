// Faça um programa que leia um nome de usuário e a sua senha
//  e não aceite a senha igual ao nome do usuário, mostrando 
//  uma mensagem de erro e voltando a pedir as informações.
//exercicio 1 
console.clear()
const prompt = require('prompt-sync')()
let nome = prompt('Diga seu nome; ');
// let senha = prompt('Crie uma senha; ')
while(true){
    let senha = prompt('Crie uma senha; ')
    if(senha=== nome){
    resultado = false
    console.log('a senha não pode ser igual ao seu nome\
    \ndigite a senha de novo ')
    }
    else if(senha!== nome){
        resultado = true
        console.log('senha salva')
        break;
    }

}