const prompt = require("prompt-sync")();
function partida_jogador1(escolha_jogador1, tabuleiro_jogo, simbolo_jogador1) {
  if (escolha_jogador1 == 1) {
    if (tabuleiro_jogo[0][0]==1) {
      tabuleiro_jogo[0].splice(0, 1, simbolo_jogador1);

      return true
    } else {
      return false
    }
  }
  if (escolha_jogador1 == 2) {
    if (tabuleiro_jogo[0][1]==2) {
      tabuleiro_jogo[0].splice(1, 1, simbolo_jogador1);
      return true
    } else {
      return false
    }
    
  }
  if (escolha_jogador1 == 3) {
    if (tabuleiro_jogo[0][2]==3) {
      tabuleiro_jogo[0].splice(2, 1, simbolo_jogador1);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador1 == 4) {
    if (tabuleiro_jogo[1][0]==4) {
      tabuleiro_jogo[1].splice(0, 1, simbolo_jogador1);
      return true 
    } else {
      return false
    }
  }
  if (escolha_jogador1 == 5) {
    if (tabuleiro_jogo[1][1]==5) {
      tabuleiro_jogo[1].splice(1, 1, simbolo_jogador1);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador1 == 6) {
    if (tabuleiro_jogo[1][2]==6) {
      tabuleiro_jogo[1].splice(2, 1, simbolo_jogador1);
      return true 
    } else {
      return false
    }
  }
  if (escolha_jogador1 == 7) {
    if (tabuleiro_jogo[2][0]==7) {
      tabuleiro_jogo[2].splice(0, 1, simbolo_jogador1);
      return true 
    } else {
      return false
    };
  }
  if (escolha_jogador1 == 8) {
    if (tabuleiro_jogo[2][1]==8) {
      tabuleiro_jogo[2].splice(1, 1, simbolo_jogador1);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador1 == 9) {
    if (tabuleiro_jogo[2][2]==9) {
      tabuleiro_jogo[2].splice(2, 1, simbolo_jogador1);
      return true
    } else {
      return false
    };
  }
}//função pra converter a escolha do jogador 1  em um index da array
function partida_jogador2(escolha_jogador2, tabuleiro_jogo, simbolo_jogador2) {
  if (escolha_jogador2 == 1) {
    if (tabuleiro_jogo[0][0]==1) {
      tabuleiro_jogo[0].splice(0, 1, simbolo_jogador2);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador2 == 2) {
    if (tabuleiro_jogo[0][1]==2) {
      tabuleiro_jogo[0].splice(1, 1, simbolo_jogador2);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador2 == 3) {
    if (tabuleiro_jogo[0][2]==3) {
      tabuleiro_jogo[0].splice(2, 1, simbolo_jogador2);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador2 == 4) {
    if (tabuleiro_jogo[1][0]==4) {
      tabuleiro_jogo[1].splice(0, 1, simbolo_jogador2);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador2 == 5) {
    if (tabuleiro_jogo[1][1]==5) {
      tabuleiro_jogo[1].splice(1, 1, simbolo_jogador2);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador2 == 6) {
    if (tabuleiro_jogo[1][2]==6) {
      tabuleiro_jogo[1].splice(2, 1, simbolo_jogador2);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador2 == 7) {
    if (tabuleiro_jogo[2][0]==7) {
      tabuleiro_jogo[2].splice(0, 1, simbolo_jogador2);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador2 == 8) {
    if (tabuleiro_jogo[2][1]==8) {
      tabuleiro_jogo[2].splice(1, 1, simbolo_jogador2);
      return true
    } else {
      return false
    }
  }
  if (escolha_jogador2 == 9) {
    if (tabuleiro_jogo[2][2]==9) {
      tabuleiro_jogo[2].splice(2, 1, simbolo_jogador2);
      return true
    } else {
      return false
    }
  }
}//função pra converter a escolha do jogador 2 em um index da array
function validação_partida1(tabuleiro_jogo, pontos_partida_jagador1) {
  if (
    tabuleiro_jogo[0][0] == tabuleiro_jogo[0][1] &&
    tabuleiro_jogo[0][1] == tabuleiro_jogo[0][2]
  ) {

    pontos_partida_jagador1++
    return pontos_partida_jagador1;
  }
  if (
    tabuleiro_jogo[1][0] == tabuleiro_jogo[1][1] &&
    tabuleiro_jogo[1][1] == tabuleiro_jogo[1][2]
  ) {
    pontos_partida_jagador1++
    return pontos_partida_jagador1
  }
  if (
    tabuleiro_jogo[2][0] == tabuleiro_jogo[2][1] &&
    tabuleiro_jogo[2][1] == tabuleiro_jogo[2][2]
  ) {
    pontos_partida_jagador1++
    return pontos_partida_jagador1
  }
  if (
    tabuleiro_jogo[0][0] == tabuleiro_jogo[1][0] &&
    tabuleiro_jogo[1][0] == tabuleiro_jogo[2][0]
  ) {
    pontos_partida_jagador1++
    return pontos_partida_jagador1
  }
  if (
    tabuleiro_jogo[0][1] == tabuleiro_jogo[1][1] &&
    tabuleiro_jogo[1][1] == tabuleiro_jogo[2][1]
  ) {
    pontos_partida_jagador1++
    return pontos_partida_jagador1
  }
  if (
    tabuleiro_jogo[0][2] == tabuleiro_jogo[1][2] &&
    tabuleiro_jogo[1][2] == tabuleiro_jogo[2][2]
  ) {
    pontos_partida_jagador1++
    return pontos_partida_jagador1
  }
  if (
    tabuleiro_jogo[0][0] == tabuleiro_jogo[1][1] &&
    tabuleiro_jogo[1][1] == tabuleiro_jogo[2][2]
  ) {
    pontos_partida_jagador1++
    return pontos_partida_jagador1
  }
  if (
    tabuleiro_jogo[2][2] == tabuleiro_jogo[1][1] &&
    tabuleiro_jogo[1][1] == tabuleiro_jogo[0][0]
  ) {
    pontos_partida_jagador1++
    return pontos_partida_jagador1
  }
  return pontos_partida_jagador1;
}// função pra criar validação de partida e somar os pontos do jogador 1
function validação_partida2(tabuleiro_jogo, pontos_partida_jagador2) {
  if (
    tabuleiro_jogo[0][0] == tabuleiro_jogo[0][1] &&
    tabuleiro_jogo[0][1] == tabuleiro_jogo[0][2]
  ) {
   pontos_partida_jagador2++
    return pontos_partida_jagador2
;
  }
  if (
    tabuleiro_jogo[1][0] == tabuleiro_jogo[1][1] &&
    tabuleiro_jogo[1][1] == tabuleiro_jogo[1][2]
  ) {
   pontos_partida_jagador2++
    return pontos_partida_jagador2
;
  }
  if (
    tabuleiro_jogo[2][0] == tabuleiro_jogo[2][1] &&
    tabuleiro_jogo[2][1] == tabuleiro_jogo[2][2]
  ) {
   pontos_partida_jagador2++
    return pontos_partida_jagador2
;
  }
  if (
    tabuleiro_jogo[0][0] == tabuleiro_jogo[1][0] &&
    tabuleiro_jogo[1][0] == tabuleiro_jogo[2][0]
  ) {
   pontos_partida_jagador2++
    return pontos_partida_jagador2
;
  }
  if (
    tabuleiro_jogo[0][1] == tabuleiro_jogo[1][1] &&
    tabuleiro_jogo[1][1] == tabuleiro_jogo[2][1]
  ) {
   pontos_partida_jagador2++
    return pontos_partida_jagador2
;
  }
  if (
    tabuleiro_jogo[0][2] == tabuleiro_jogo[1][2] &&
    tabuleiro_jogo[1][2] == tabuleiro_jogo[2][2]
  ) {
   pontos_partida_jagador2++
    return pontos_partida_jagador2
;
  }
  if (
    tabuleiro_jogo[0][0] == tabuleiro_jogo[1][1] &&
    tabuleiro_jogo[1][1] == tabuleiro_jogo[2][2]
  ) {
   pontos_partida_jagador2++
    return pontos_partida_jagador2
;
  }
  if (
    tabuleiro_jogo[2][2] == tabuleiro_jogo[1][1] &&
    tabuleiro_jogo[1][1] == tabuleiro_jogo[0][0]
  ) {
   pontos_partida_jagador2++
    return pontos_partida_jagador2
;
  }
  return pontos_partida_jagador2;
}// função pra criar validação de partida e somar os pontos do jogador 2
function validação_empate_1(simbolo_jogador1,simboloX) {
  if (simbolo_jogador1) {
    simboloX++
    return simboloX
  }
}// função pra criar validação de empate dos jogadores
function validação_empate_2(simbolo_jogador2,simboloO){
  if (simbolo_jogador2) {
    simboloO++
    return simboloO
  }
}// função pra criar validação de empate dos jogadores
let pontos_final_jogado1 = 0;//variavel de soma dos pontos que vai aparecer no final do jogador 1
let pontos_final_jogador2 = 0;// variavel de soma dos pontos que vai aparecer no final do jogador 2
let simbolo_jogador1 = "X";// a variavel que troca o numero pelo simbolo X do jogador 1
let simbolo_jogador2 = "O";// a variavel que troca o numero pelo simbolo O do jogador 2
console.log("Bem vindo ao jogo");
console.log("");
console.log(" Me chamo Mia e vou analisar vocês jogar");
console.log(" ");
console.log("o jogador1 joga X e o jogador2 joga O");
console.log(" ");
console.log(
  "Estruções de jogo para facilitar sua escolha você so precisa escolher o numero");
console.log(
  " se você quer o X ou o O no local onde esta o 5 por exemplo é so digitar 5 que ele coloca sozinho");
console.log( 
  "se você for o jogador1 ele vai adicionar X automatico\n se você for o jogador2 ele vai adicionar O automatico");
let jogador1_nome = prompt("Diga seu nome jogador1 ");// variavel que salvei o nome
let jogador2_nome = prompt("diga seu nome jogador2  ");// variavel que salvei o nome
console.clear();//console pra limpar
while (true) {// while que repete o jogo e quando encerra a partida ele limpa as variaveis
 let resultado_partida= false// quando o  resultado for verdadeiro o jogo acaba
 let tabuleiro_jogo = [// a lista que armazena o jogo
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let pontos_partida_jagador1 = 0;// variavel que so soma a partida quando a partida acaba ela zera
let pontos_partida_jagador2 = 0;// variavel que so soma a partida quando a partida acaba ela zer
let simboloX=0// variavel que conta os simbolo x e quando a partida acaba ela zera o resultado dela que define o empate
let simboloO=0// variavel que conta os simbolo O e quando a partida acaba ela zera o resultado dela que defeni o empate

  while (!resultado_partida) {// while que controla a partida 
    console.table(tabuleiro_jogo);
    console.log()
    let escolha_jogador1 = +prompt(`Diga a posição que você quer jogar ${jogador1_nome} ` );// a posição ser escolhida 
    if (escolha_jogador1 == 1 ||
      escolha_jogador1 == 2 ||
      escolha_jogador1 == 3 ||
      escolha_jogador1 == 3 ||
      escolha_jogador1 == 4 ||
      escolha_jogador1 == 5 ||
      escolha_jogador1 == 6 ||
      escolha_jogador1 == 7 ||
      escolha_jogador1 == 8 ||
      escolha_jogador1 == 9
    ) {// ifs que controla somente os numeros a ser escolhidos 
      let teste = partida_jogador1(escolha_jogador1, tabuleiro_jogo, simbolo_jogador1);
      //teste pra repetir ate a pessoa colocar em outra posiçao do tabuleiro
     while (teste == false) {// ele repete ate a pessoa colocar o numero certo
      escolha_jogador1 = +prompt(
        `Diga a posição que você quer jogar ${jogador1_nome} `
      );
      teste = partida_jogador1(escolha_jogador1, tabuleiro_jogo, simbolo_jogador1);
     }
     partida_jogador1(escolha_jogador1, tabuleiro_jogo, simbolo_jogador1);//funçao sendo usada pra subir o X
      console.clear();
      simboloX= validação_empate_1(simbolo_jogador1,simboloX)//função vendo se ja deu empate
      pontos_partida_jagador1 = validação_partida1(tabuleiro_jogo, pontos_partida_jagador1 );//função vendo se o jogador 1 ganhou
        if (pontos_partida_jagador1 > pontos_partida_jagador2) {
        resultado_partida = true;// se der true a partida acaba e o jogador 1 ganha
        pontos_final_jogado1++//somando pra mostrar no final
        console.log(`${jogador1_nome} ganhou `);
        break;
      } if (pontos_partida_jagador1 < pontos_partida_jagador2) {
        resultado_partida = true;// se der true a partida acaba e o jogador 2 ganhou
        pontos_final_jogador2++//somando pra mostrar no final 
        console.log(`${jogador2_nome} ganhou`);
        break;    
      }
      if ((simboloX==5 && simboloO==4) && (pontos_partida_jagador1==0 && pontos_partida_jagador2==0)){
        resultado_partida=true// se der true é por que deu empate
          console.log("empate")
          break;}

    } else {
      console.log("Você digitou errado");
    }
    console.table(tabuleiro_jogo);
    let escolha_jogador2 = +prompt(
      `Diga a posição que você quer jogar ${jogador2_nome}`// pro jogador2 escolher a posição
    );
    if (
      escolha_jogador2 == 1 ||
      escolha_jogador2 == 2 ||
      escolha_jogador2 == 3 ||
      escolha_jogador2 == 3 ||
      escolha_jogador2 == 4 ||
      escolha_jogador2 == 5 ||
      escolha_jogador2 == 6 ||
      escolha_jogador2 == 7 ||
      escolha_jogador2 == 8 ||
      escolha_jogador2 == 9
    ) {//caso seja diferente dos numeros vai repetir ate colocar certo
       teste = partida_jogador2(escolha_jogador2, tabuleiro_jogo, simbolo_jogador2);
      //teste pra repetir ate a pessoa colocar em outra posiçao do tabuleiro
     while (teste == false) {// pra colocar a opção certa se nao vai repetir ate ir
      escolha_jogador2 = +prompt(
        `Diga a posição que você quer jogar ${jogador2_nome} `
      );
      teste = partida_jogador2(escolha_jogador2, tabuleiro_jogo, simbolo_jogador2);
     }
      partida_jogador2(escolha_jogador2, tabuleiro_jogo, simbolo_jogador2);// função pra subir o O
      console.clear();
      pontos_partida_jagador2 = validação_partida2( tabuleiro_jogo, pontos_partida_jagador2);// função pra ver se o jogador 2 ganhou
      simboloO= validação_empate_1(simbolo_jogador2,simboloO)// função pra da empate
      if ((simboloX==5 && simboloO==4) || (simboloO==4 && simboloX==5)){
        resultado_partida=true// se der true deu empate
          console.log("empate")
          break;}
      if (pontos_partida_jagador1 > pontos_partida_jagador2) {
        resultado_partida = true;// se der true o jogador 1 ganhou
        pontos_partida_jagador1++
        pontos_final_jogado1++
        console.log(`${jogador1_nome} ganhou `);
        break;
      } if (pontos_partida_jagador1 < pontos_partida_jagador2) {
        resultado_partida = true;// se der true o jogador 2 ganhou
        pontos_partida_jagador2++
        pontos_final_jogador2++
        console.log(`${jogador2_nome} ganhou `);
        break;
      } else {
        console.log("Você digitou errado");
      }
    }
  }
  let retornar = prompt("caso deseja continuar diga sim  ");// pergunta pra encerrar o jogo
  if (retornar != "sim") {//se for diferente de sim o jogo acaba
    console.log(`pontos ${jogador1_nome} = ${pontos_final_jogado1}\n pontos ${jogador2_nome}= ${pontos_final_jogador2}`)//mostrando os pontos finais e os nnomes
    console.log(`Até a proxima ${jogador1_nome} e ${jogador2_nome}  `);// encerrando o jogo
    break;
  } else {
    console.log("Uruhh, vamos la ");// se for sim a mensagem de retornado do jogo
  }
}
