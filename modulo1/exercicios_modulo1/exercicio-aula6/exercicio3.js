// Faça um programa em que o usuário escolha a quantidade de alunos 
// a serem cadastrados e peça o nome e nota de cada um.
//  Armazene as informações em duas listas separadas e no final 
//  imprima o nome e a nota correspondente de cada aluno.
//  exercicio3
console.clear()
const prompt = require('prompt-sync')()
let quantidade_alunos = +prompt('Quantos alunos deseja cadastrar?  ')
count=1
let nomes=[]
let notas = []
while(count<=quantidade_alunos){
    count++
    var nome = prompt('Diga o nome do aluno; ')
    var nota = prompt('Diga a nota do aluno; ')
    nomes.push(nome)
    notas.push(nota)
}
console.log(`Nomes dos alunos\n${nomes}`)
console.log(`Notas dos alunos\n${notas}`)
