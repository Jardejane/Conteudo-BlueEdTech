//exercicio5
//E os 10% do garçom?
//Defina uma variável para o valor de uma refeição que custou R$ 42,54;
//Defina uma variável para o valor da taxa de serviço que é de 10%;
//Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

let valor = 42.54
let taxa = 0.1
let conta =  (valor + (valor * taxa)).toFixed(2)
console.log("R$" + conta )