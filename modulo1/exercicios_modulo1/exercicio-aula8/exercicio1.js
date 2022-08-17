// Peça ao usuário uma quantidade de linhas e e outra de colunas, 
// e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]
//exercicio 1 
console.clear()
const prompt = require('prompt-sync')()

let linhas = +prompt('Diga o numero de linhas? ')
let colunas = + prompt('Diga o numero de coluna? ')
let array_linhas = []
for (i = 0; i < linhas; i++ ){
  let arry_colunas = [];
    for (a = 0; a< colunas; a++){
        arry_colunas.push(a + i)
    }
    array_linhas.push(arry_colunas)
}
for (let i of array_linhas){
        console.log(i)
    }
