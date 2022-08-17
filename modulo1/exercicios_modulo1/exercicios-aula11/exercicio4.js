// Faça um programa que solicite o total gasto pelo cliente de uma loja, imprima as opções de pagamento com os valores totais, solicite a opção desejada e imprima o valor total das prestações (se houverem). 
// Ao final ele deve retornar o valor total da opção escolhida, guardar em uma lista e recomeçar a operação perguntando o valor total gasto pelo próximo cliente. Quando o valor informado for 0, significa que não há mais clientes, 
// então ele chamar uma nova função que vai mostrar quantas compras foram feitas em cada opção, e a soma do valor total de todas elas.
// Opção: a vista com 10% de desconto
// Opção: em duas vezes (preço da etiqueta)
// Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).
// exercicio 4 
console.clear()
const  prompt = require('prompt-sync')()
function nota1(n1){
    if(n1 ==='cartao de credito'){
        let prestações = prompt('a vista ou  parcelado? ')
           if(prestações==='a vista'){
            let a_vista_cartão = total_gasto - (total_gasto/10)
        
            console.log(`o valor é ${a_vista_cartão.toFixed(2)} com desconto`)

          }else if(prestações ==='parcelado'){
            console.log('parcelamos em até 10x, ate duas parcela o preço é o mesmo de a vista\
            \nde 3 a 10 vezes com um acrecimo de 3% de juros ao mês\
            \no valor abaixo de 100 não tem juros mesmo parcelado\
            \no preço é o mesmo de a vista ')
            let parcela = +prompt('quantas parcelas? ')
            if(parcela<= 2){
                let parcela2 =total_gasto -( total_gasto/10)
                console.log(`o valor das ${parcela} parcelas fica ${parcela2.toFixed(2)}R$`)
            }
            else if(total_gasto>=100 && parcela>=3){
                let parcela1 = total_gasto + (total_gasto*0.03*parcela)
                let parcela2 = (total_gasto+(total_gasto*0.03*parcela))/parcela
                console.log(`O valor das ${parcela} parcelas é ${parcela2}R$`)
                console.log(`valor total ${parcela1.toFixed(2)}R$`)

            }
            else if(total_gasto<=100 && parcela>=3){
                let a_vista_cartão = total_gasto - (total_gasto/10)
                console.log(`o valor é ${a_vista_cartão.toFixed(2)} com desconto`)
            }

        }




    }
}
function nota2(n2){
     if (n2 ==='cartao de debito'){
        let prestações = prompt('a vista ou  parcelado? ')
           if(prestações==='a vista'){
            let a_vista_cartão = total_gasto - (total_gasto/10)
        
            console.log(`o valor é ${a_vista_cartão.toFixed(2)} com desconto`)

          }else if(prestações ==='parcelado'){
            console.log('parcelamos em até 10x, ate duas parcela o preço é o mesmo de a vista\
            \nde 3 a 10 vezes com um acrecimo de 3% de juros ao mês\
            \no valor abaixo de 100 não tem juros mesmo parcelado\
            \no preço é o mesmo de a vista ')
            let parcela = +prompt('quantas parcelas? ')
            if(parcela<= 2){
                let parcela2 =total_gasto -( total_gasto/10)
                console.log(`o valor das ${parcela} parcelas fica ${parcela2.toFixed(2)}R$`)
            }
            else if(total_gasto>=100 && parcela>=3){
                let parcela1 = total_gasto + (total_gasto*0.03*parcela)
                let parcela2 = (total_gasto+(total_gasto*0.03*parcela))/parcela
                console.log(`O valor das ${parcela} parcelas é ${parcela2}R$`)
                console.log(`valor total ${parcela1.toFixed(2)}R$`)
            }
            else if(total_gasto<=100 && parcela>=3){
                let a_vista_cartão = total_gasto - (total_gasto/10)
                console.log(`o valor é ${a_vista_cartão.toFixed(2)} com desconto`)
            }
        }
    }
}
function nota3(n3){
    if(n3 ==='pix'){
        let pix = prompt('pix somente avista, diga pix pra pagar; ')
        if(pix==='pix'){
            let pix_avista = total_gasto - (total_gasto/10)
            console.log(`o valor é ${pix_avista.toFixed(2)} com desconto`)
        }

    }
}
let total_gasto = 0
while(true){
    let proximo_cliente = +prompt('1 pra cliente 0 pra quando acabar cliente; ')
    if(proximo_cliente == 1){
        total_gasto = +prompt('Diga o total gasto da loja; ')
        console.log('Diga a opção de pagamento')
        let opções_pagamento = prompt('cartao de credito, cartao de debito e pix; ')
        if(opções_pagamento ==='cartao de credito'){
            nota1(opções_pagamento)
        }
        else if(opções_pagamento ==='cartao de debito'){
            nota2(opções_pagamento)
        }
        else if(opções_pagamento ==='pix'){
            nota3(opções_pagamento)
        }
    
    }
    else if (proximo_cliente == 0){
        break;
    }

    prompt('ENTER SEGUIR')
    total_gasto = 0
    console.clear()
    
}




