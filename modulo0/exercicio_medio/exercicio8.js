// Agora, imprima todas as tabuadas do número 1 ao 10.
//exercicio8
const prompt = require('prompt-sync')();

for (let i = 1; i <=10 ; i++) {
    console.log(` tabuada  é ${i}`)
    for (let e = 1; e <= 10; e++) {
        resultado = (i * e);
        console.log(`${i} x ${e} = ${resultado}`)
    }
    console.log(``)
}
