// Escreva uma função para conversão de temperatura.
//  Ela deve receber 2 argumentos: um número e um caracter
// 'C', 'F' ou 'K', indicando que a temperatura está em
//  Celsius, Fahrenheit ou Kelvin. A função deve exibir 
//  a temperatura nas 3 escalas e perguntar qual valor quer retornar.
//  exercicio 3
console.clear()
const prompt = require('prompt-sync')()
function temperatura(n1,n2){
    let c =  n1
    let f =  1.8 * n1 + 32
    let k = n1 + 273
    if(n1=0, n2 ==='c'){
        console.log(`${c}° celsius`)
    }
    else if(n1=0, n2 ==='f'){
        console.log(`${f.toFixed(1)}° fahrenheit`)
    }
    else if(n1=0, n2 === 'k'){
        console.log(`${k.toFixed(1)}° kelvin`)
    }
    else{
        console.log('Escreveu errado')
    }

}
console.log('Todo a escala ja esta em celsius se voce quiser converter é so colocar a letra')
let n1 = +prompt('Diga a  temperaura; ')
let n2 = prompt('Pra qual escala quer converter? c , f, ou k; ')
temperatura(n1,n2)


