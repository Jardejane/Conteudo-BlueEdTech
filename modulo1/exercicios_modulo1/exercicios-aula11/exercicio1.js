// Faça um programa, com uma função que necessite 
// de três argumentos: dois números e um sinal de
//  operador matemático (+, -, * ou /). Ela deve fazer 
//  o cálculo indicado pelo operador usando os dois número passados.
//  exercicio 1 
console.clear()
const prompt = require('prompt-sync')()
function calculadora(n1,n2,op){
    let calculo = 0
    if (op == '+') {
        calculo = n1 + n2
    }
    else if (op == '-'){
        calculo = n1 - n2
    }
    else if (op == '*'){
        calculo = n1 * n2
    }
    else if (op == '/'){
        calculo = n1 / n2
    }
    else{
        console.log('Digitou errado')
    }
    console.log(calculo)
}
let n1 = +prompt('diga um numero; ')
let op = prompt('Diga o operador; ')
let n2 = +prompt('Diga o segundo numero; ')
console.log('Resultado')
calculadora(n1,n2,op)




// let rest
// function operação(){
//     console.log('Resultado')
//     return rest
// }
// rest = operação(2*2)
// console.log(rest)


