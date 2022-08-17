// Faça um programa para a leitura de quatro notas parciais de um aluno.
//  O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.
//exercicio 2 
console.clear()
const prompt = require('prompt-sync')()
let nota1 = +prompt('Qual a primeira nota? ')
let nota2 = +prompt('Qual a segunda nota? ')
let nota3 = +prompt('Qual a terceira nota?  ')
let nota4 = +prompt('Qual a quarta nota? ')
let calcular = (nota1 + nota2 + nota3 + nota4)/4
if(calcular>=7){
    console.log(`Sua media é ${calcular} você foi aprovado`)
}
else if(calcular>5<7){
    console.log(`Sua media é ${calcular} você ficou de recuperação`)
}
else{
    console.log(`sua media é ${calcular} você ficou reprovado`)
}