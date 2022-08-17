// Jogo de dados: Crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
// O programa tem que:
// Perguntar quantas rodadas você quer fazer;
// Perguntar quantos jogadores vão jogar;
// Criar um objeto pra cada jogador com nome e número tirado;
// Guarda todos os objetos em uma lista;
// Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
// Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.
const prompt = require('prompt-sync')();
//mandando escolher quantos jogadores vão jogar
console.log('so podem jogar 2 ou 4 jogadores');
//lista do dado
let lista = [1,2,3,4,5,6]
//count que zera as partidas
let count = 1
//variavel do while pra sair ou repetir o jogo
let jogo = true
//pergunta de quantos jogadores irar jogar
let quantos_jogadores = +prompt('quantos jogadores vão jogar? ')
//if da resposta 2
if (quantos_jogadores==2) {
    //variaveis pro nome do jogador
    let nome_jogador1 = prompt('Nome do jogador 1 ');
    let nome_jogador2 = prompt('Nome do jogador 2 ');
    //while que estamos usando pra encerrar as jogadas ou repetir
    while(jogo){
        //variavel pra saber quantas rodadas
    let quantas_rodadas = +prompt('quantas rodadas? ');
    //variaveis que soma os pontos no final de cada jogador
    let ponto_final_jogador1=0
    let ponto_final_jogador2 =0
    //while que controla as rodadas atravez dos numeros obitido
    while (count<=quantas_rodadas) {
        //varaveis de contadores pra cada partida e ela zera toda vez que começa a partida
        let partida_jogado1 = 0
        let partida_jogado2 = 0
         count++
         console.clear();
         //essa variavel pega o dado e embaralha ele usando essas variaveis do jogador 1
     let jogador1 = lista[Math.floor(Math.random() *lista.length )] ;
//    lista de infomaçoes do jogador 1
     let dados_jogador1 = {
      nome: `${nome_jogador1}`,
      jogador1: `${jogador1}`
  }
  //varivel que embaralha os dados do jogador 2
    let jogador2 = lista[Math.floor(Math.random() *lista.length)];
    // lista de informaçoes do jogador 2
    let dados_jogador2 ={
        nome: `${nome_jogador2}`,
        jogador2:`${jogador2}`
    }
    //essa variavel chama a vez do jogador 1 jogar
    let rodada_jogador1= +prompt(`clique no enter pra gerar o numero aleatorio ${nome_jogador1} `)
    //um console pra mostrar o numero aleatorio do jogador 1
     console.log(`jogada = ${jogador1}`)
     //essa variavel chama a vez do jogador 2
    let  rodada_jogador2 = +prompt(`clique no enter pra gerar o numero aleatorio ${nome_jogador2}`)
// esse console serve pra mostra o numero aleatorio do jogador 2
    console.log(`jogada = ${jogador2}`)
    //ifs pra contabilzar as partidas
    if (jogador1>jogador2) {
        partida_jogado1++
        ponto_final_jogador1++
        console.log(`${nome_jogador1} ganhou 1 ponto`)
    }if(jogador2>jogador1) {
        ponto_final_jogador2++
        partida_jogado2++
        console.log(`${nome_jogador2}ganhou 1 ponto `)
    }if(jogador1 == jogador2){
        console.log('deu empate ninguem ganha ponto')
    }
    console.log(`clique enter para proxima partida`)
    let rodadas = prompt() 
}//console com os resultados finais do jogador 1 e jogador 2
    console.log(`${nome_jogador1} = ${ponto_final_jogador1}`)
    console.log(`${nome_jogador2} = ${ponto_final_jogador2}`)
    //variavel pra encerrar ou recomeçar o programa
     jogo = prompt(' diga sim deseja continuar?')
    if (jogo!="sim") {
        jogo==false
        console.log('ate a proxima pessoal')
        break;
    } else {
        console.log('urruh vamos la')
        jogo==true
        count=0
    }
}

}
//if da resposta 4
if (quantos_jogadores==4) {
    //variaveis pra escolher os nomes do jogador
    let nome_jogador1 = prompt('Nome do jogador 1 ');
    let nome_jogador2 = prompt('Nome do jogador 2 ');
    let nome_jogador3 = prompt('Nome do jogador 3 ');
    let nome_jogador4 = prompt('Nome do jogador 4 ');
    //variaveis que mostra o resultado final
    let ponto_final_jogador1 = 0
    let ponto_final_jogador2 = 0
    let ponto_final_jogador3 = 0
    let ponto_final_jogador4 = 0
    //while que começa o jogo
    while(jogo){
   let quantas_rodadas= +prompt('Quantas rodadas deseja jogar? ')
   //variavel que perguantas a rodadas
   while (count<=quantas_rodadas) {
    //variaveis de contador de partida
        count++
        let partida_jogado1=0
        let partida_jogado2 = 0
        let partida_jogado3 = 0
        let partida_jogado4 = 0
    //variaveis que geram os numeros aleatorios pra cada jogador
    let jogador1 = lista[Math.floor(Math.random() *lista.length )]
    let jogador2 = lista[Math.floor(Math.random() *lista.length )]
    let jogador3 = lista[Math.floor(Math.random() *lista.length )]
    let jogador4 = lista[Math.floor(Math.random() *lista.length )]
    //informações do jogador 1
    let dados_jogador1 = {
        nome: `${nome_jogador1}`,
        jogador1:`${jogador1}`
    }
    //informações do jogador 2
    let dados_jogador2 = {
        nome: `${nome_jogador2}`,
        jogador2: `${jogador2}`
    }
    //informações do jogador 3
    let dados_jogador3 = {
        nome:`${nome_jogador3}`,
        jogador3:`${jogador3}`
    }
    //informações do jogador 4
    let dados_jogador4 = {
        nome: `${nome_jogador4}`,
        jogador4:`${jogador4}`
    }
    //variaveis de escolhas dos jogadores 
    //console mostrando os numeros gerado aleatorio
    let escolha_jogador1 = prompt(`clique enter pra gerar um numero aleatorio ${nome_jogador1}`)
    console.log(jogador1);
    let escolha_jogador2 = prompt(`clique enter pra gerar um numero aleatorio ${nome_jogador2}`)
    console.log(jogador2)
    let escolha_jogador3 = prompt(`clique enter pra gerar um numero aleatorio ${nome_jogador3}`)
    console.log(jogador3);
    let escolha_jogador4 = prompt(`clique entar pra gerar um numero aleatorio ${nome_jogador4}`)
    console.log(jogador4)
    //ifs pra validar quais os numeros maiores e assim somar as partidas
    if ((jogador1 > jogador2) && (jogador1>jogador3) && (jogador1>jogador4) ) {
        partida_jogado1++
        ponto_final_jogador1++
        console.log(`${nome_jogador1} ganhou 1 ponto`)
    }
     if ((jogador2> jogador1) && (jogador2>jogador3) &&(jogador2> jogador4)) {
        partida_jogado2++
        ponto_final_jogador2++
        console.log(`${nome_jogador2}  ganhou 1 ponto`)
    }
     if ((jogador3 > jogador1) && (jogador3 >jogador2) &&(jogador3> jogador4)) {
        partida_jogado3++
        ponto_final_jogador3++
        console.log(`${nome_jogador3} ganhou 1 ponto `)
    }
     if ((jogador4> jogador1 )&& (jogador4 >  jogador2) && (jogador4 >jogador1)) {
        partida_jogado4++
        ponto_final_jogador4++
        console.log(`${nome_jogador4} ganhou 1 ponto `)
    }
     if (jogador1 == jogador2 == jogador3 == jogador4) {
        console.lo('Empate, niguem ganhou ponto ')
    }

}
//console que aparece o resultado final
 console.log(`${nome_jogador1} = ${ponto_final_jogador1}\n${nome_jogador2} = ${ponto_final_jogador2}
  ${nome_jogador3} = ${ponto_final_jogador3}\n ${nome_jogador4} = ${ponto_final_jogador4} `)
  //variavel pra encerrar o jogo ou recomeçar
let rodadas= prompt('se deseja continuar digite sim')
if (rodadas!="sim") {
    jogo=false
    console.log(`até a proxima pessoal`)
}else{
    console.log('uruh vamos la gente')
    count=0
}


} 
}