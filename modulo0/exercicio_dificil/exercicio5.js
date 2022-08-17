// Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.
// Permitir que eu decida quantas rodadas iremos fazer;
// Ler a minha escolha (Pedra, papel ou tesoura);
// Decidir de forma aleatória a decisão do computador;
// Mostrar quantas rodadas cada jogador ganhou;
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.
const prompt = require('prompt-sync')();
function validação_escolha(escolha_participante){
    if ((escolha_participante=="pedra")|| (escolha_participante=="papel" )||(escolha_participante=="tesoura")) {
        return true
    }
    
    if ((escolha_participante!="pedra" )|| (escolha_participante!="papel") ||(escolha_participante!="tesoura")) {
            return false
    }
}
console.log(' Sou Mia e vou jogar com você \n o jogo é jokempô você deve escolhe entre pedra papel e tesoura')
const nome = prompt('diga seu nome');
while (true) {
const lista = ['pedra','papel','tesoura']
let computador_final = 0
let participação_final= 0
 let count = 0
 let rodadas = prompt('diga o numero de rodadas ')
  while (count<=rodadas) {
    count++
    let computador_partida = 0
    let participação_partida= 0
    let escolha_participante = prompt('Escolha entre pedra,papel e tesoura ')
   let  escolha1 = validação_escolha(escolha_participante);
       while(escolha1==false){
          escolha_participante = prompt('faça sua escolha')
          escolha1 = validação_escolha(escolha_participante)
        }validação_escolha(escolha_participante )
        console.clear()
        let computador = lista[Math.floor(Math.random() *lista.length )] ;
        if (computador=="pedra" && escolha_participante =="tesoura" ) { 
            computador_partida++
            computador_final++}
         if (escolha_participante =="pedra" && computador=="tesoura") {
              participação_partida++
              participação_final++}
          if (computador=="papel" && escolha_participante == "pedra" ) {
               computador_partida++
              computador_final++}
          if (escolha_participante=="papel"&& computador=="pedra") {
              participação_final++
              participação_partida++;}
          if (computador== "tesoura" && escolha_participante=="papel") {
              computador_final++
              computador_partida++}
          if (escolha_participante=="tesoura" && computador=="papel") {
            participação_final++
             participação_partida++; }
            console.clear();
          if ((computador == escolha_participante) || (escolha_participante == computador) )
           console.log(`jogada da ${nome} foi  ${escolha_participante}`)
           console.log(`jogada da Mia foi ${computador}`)
            if (participação_partida > computador_partida) {
              console.log('você ganhou1')
            } else if (participação_partida < computador_partida) {
              console.log('Mia ganhou1')
            } else {
              console.log("empate");
            }
  }
     console.log(`pontuaçao da Mia ${computador_final}`)
     console.log(`pontuaçao ${nome} ${participação_final}`)
     let retorno = prompt('diga sim pra continuar ?')
    if ( retorno != "sim") {
         retorno = false
        console.log(`até a proxima ${nome}`)
        break
    } else {
        count=o
     console.log(`vamos la ${nome}`)
      retorno= true
    }
}