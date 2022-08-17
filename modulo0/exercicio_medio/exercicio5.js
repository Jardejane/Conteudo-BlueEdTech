// Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5%
// Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.

//exercicio5

const prompt = require('prompt-sync')();
//pedindo o nome pra pessoa
let nome = prompt('diga seu nome');
//perguntando  salario
let salario_antes_do_reajuste = parseFloat(prompt('Qual o valor do seu salario atual'))
//calculando as taxas de aumento salarial
let taxa_20 = salario_antes_do_reajuste + ( salario_antes_do_reajuste * 0.2)
let taxa_15 = salario_antes_do_reajuste +(salario_antes_do_reajuste * 0.15)
let taxa_10 = salario_antes_do_reajuste + (salario_antes_do_reajuste * 0.1)
let taxa_5 = salario_antes_do_reajuste + (salario_antes_do_reajuste * 0.05)
//calculando o valor real do aumento 
let valor_do_aumento_20 = taxa_20 - salario_antes_do_reajuste
let valor_do_aumento_15 = taxa_15 - salario_antes_do_reajuste
let  valor_do_aumento_10 = taxa_10 - salario_antes_do_reajuste
let valor_do_aumento_5 = taxa_5 - salario_antes_do_reajuste
//começamdo o processo de if pra separar os valores de aumento
//esse 1´if da aumento de 20%
if (salario_antes_do_reajuste< 280.00 ) {
 console.log(` nome ;${nome} \n salario antigo ${salario_antes_do_reajuste} 
 20% de aumento é igual ${valor_do_aumento_20} \n novo salario ${taxa_20}`);
}
//esse 2´if da aumento de 15%
if ( salario_antes_do_reajuste >= 280.00 >= 700.00 ) {
    console.log(` nome; ${nome}\n salario antigo ${salario_antes_do_reajuste}\n
    15% de aumento é igual ${valor_do_aumento_15}\n Novo salario ${taxa_15}`);
}
//esse 3´if da aumento de 10%
if (salario_antes_do_reajuste >= 701.00 >1500.00) {
    console.log(`nome; ${nome}\n salario antigo ${salario_antes_do_reajuste}
    10 % de aumento é igual ${valor_do_aumento_10}\n Novo salario ${taxa_10}`)
}
//esse 4´if da aumento de 10%
if (salario_antes_do_reajuste >= 1500.00 ) {
    console.log(`nome; ${nome}\n salario antigo ${salario_antes_do_reajuste}
    5% de aumento é igual ${valor_do_aumento_5}\n Novo salario ${taxa_5} `)
}