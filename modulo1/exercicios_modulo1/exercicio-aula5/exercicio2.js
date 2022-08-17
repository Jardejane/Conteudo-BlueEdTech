// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';
//exercicio 2 
console.clear()
const prompt = require('prompt-sync')()
let nome = prompt('Diga seu nome com mais de 3 letras; ')
while (nome.length<=3) {
    console.log('Você digitou errado')
    nome = prompt('Diga seu nome de novo; ')
}
let idade = +prompt('Qual a sua idade? ')
while(idade <= 0 || idade >= 150){
    console.log('idade errada')
    idade = +prompt('Diga sua idade de novo; ')
}
let salario = +prompt('Qual o seu salario? ')
while(salario<=0){
    console.log('salario incompativel')
    salario = +prompt('Diga um salario valido; ')
}
console.log('use so a letra;\n s = solteiro,\n c = casada,\n v = viuva\n, d = divorcio')
// let estado_civil = prompt('Qual seu estado civil? ')
while(true){
    var estado_civil = prompt('Qual seu estado civil? ')
 if ((estado_civil === "s")||(estado_civil === "c")||(estado_civil === "v")||(estado_civil === "d")  ) {
        break;
  }else{
    console.log('tente de novo')
    resultado = false
  }
}
console.clear()
console.log(`nome; ${nome}\nidade; ${idade}\nsalario; ${salario}\nestado civil; ${estado_civil}`)
    

