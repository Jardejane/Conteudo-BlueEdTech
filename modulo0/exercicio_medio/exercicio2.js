// Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo 
// e implemente a funcionalidade de não aceitar o número 0.
//exercicio2

 const prompt = require('prompt-sync')();
 let valor = parseInt(prompt('digite um numero'))// onde a pessoa ira colocar o valor 

 if (valor !=0) {//aqui demostra que se for diferente de zero vai entrar nos ifs de baix0
     if (valor >0) {
           console.log('o valor é positivo')
     }
     if (valor < 0 ) {
         console.log('o numero é negativo')
     }
 } else {//se la tiver sido igual a 0 vai cair direto pra ca
    console.log('começe de novo') 
 }