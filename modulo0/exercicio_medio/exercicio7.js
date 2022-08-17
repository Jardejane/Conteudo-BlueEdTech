// Utilizando laço, imprima a tabuada do 8 na tela.
//exercicio7
const  prompt= require('prompt-sync')();
//o 1´ i vai ser igual a um
//o 2´i vai ser menor igual a 10(pois a tabuada vai so ate 10)
//o 3´ i vai ser somar mais um assim mudando o valor com isso vamos ter  1x8, 2x8 e assim por diante
for (let i = 1; i <= 10; i++)
{
 //resultado vai esta 8 pq a tabuada é de 8 multiplacdo por i que vai esta sempra somando um com ele assim aumentando ate chegar o 10
  result = (8 * i)
//o console vai exibir o i em numeros em forma decresente de 1 a 10
// o x8 pra ficar bonito na tabuada
//o resulte sao as operaçoes que serao exebida
  console.log(`${i} x 8 = ${result}`)
}