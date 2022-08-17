// Você está na flor da idade?
// Defina uma variável para o valor do ano do nascimento;
// Defina uma variável para o valor do ano atual;
// Defina uma variável que calcula o valor final da idade da pessoa;
// Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".
   //exercicio7
const prompt =require("prompt-sync")();
const nascimento = 2002
const ano_atual = 2022
const calculando_idade = ano_atual - nascimento
console.log(`Você esta na flor da idade com ${calculando_idade}`)