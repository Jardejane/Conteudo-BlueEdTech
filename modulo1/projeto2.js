console.clear();
const prompt=require('prompt-sync')();
let i =0
let e =0
let count =0
const lista =['pedra',  'papel', 'tesoura']
while(true) {
  console.clear();
  let pc=0
  let jogador=0
  console.log('Bem vindo ao jogo');
  console.log('')
  console.log(' Me chamo Mia e vou jogar com você')
  console.log(' ')
  console.log('Você pode escolher entre pedra, papel e tesoura');
  let nome=prompt('Digte seu nome ');
  let rodadas = prompt('Quantas rodadas deseja jogar? ')
  while (count<rodadas) {
      count ++
      i=0 
      e=0
      let participante= prompt('Faça uma escolha pedra, papel ou tesoura? ');
      if ((participante == "pedra") || (participante=="papel")|| (participante == "tesoura")) {
        let computador = lista[Math.floor(Math.random() *lista.length )] ;
          if (computador=="pedra" && participante =="tesoura" ) { 
            i++
            pc++}
         if (participante =="pedra" && computador=="tesoura") {
              e++
              jogador++}
          if (computador=="papel" && participante == "pedra" ) {
               i++; 
              pc++ }
          if (participante=="papel"&& computador=="pedra") {
              e++;
              jogador++;}
          if (computador== "tesoura" && participante=="papel") {
              i++;
              pc++}
          if (participante=="tesoura" && computador=="papel") {
            e++;
            jogador++; }
            console.clear();
           if ((computador == participante) || (participante == computador) )
           console.log(`jogada da ${nome} foi  ${participante}`)
           console.log(`jogada da Mia foi ${computador}`)
            if (e > i) {
              console.log('você ganhou1')
            } else if (e < i) {
              console.log('Mia ganhou1')
            } else {
              console.log("empate");
            }
           //ponto pra continaur
      } else {
          console.log('digitou errado')
   
     }

    }
  
    console.log(`pontuaçao da Mia ${pc}`)
    console.log(`pontuaçao ${nome} ${jogador}`)
  let continuar=prompt('Deseja continuar')
  if (continuar !="sim"){
      
            break;
        } else{
            count=0
          console.log('vamos de novo')
       }
}
