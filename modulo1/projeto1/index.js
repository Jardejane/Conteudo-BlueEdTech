             //ferramentas iniciais
console.clear();
const prompt = require('prompt-sync')();
            //Apresentação do jogo
console.log('Bem vindo ao jogo');
console.log(' ');
console.log('aqui vai algumas estruções,só coloque as resposta certa em numeros,não coloque o calculo.');
console.log('exemplo de pergunta; quanto é 2+2? a resposta deve ser colocada somente o numero, exemplo de resposta; 4.');
console.log('');
chamado = prompt('Pronto pra começar?');
console.log('ebaa vamos lá');
            //Primeira conversa
console.log(' ');
console.log('Ola, Não temos muitos tempo para apresentações só saiba que os seus conhecimentos podem nos ajudar a salvar o mundo.');
console.log('O hack Maksim Yakubets está atacando novamente, precisamos da sua ajuda.');
console.log('Agora...Ele está tentando tomar o controle total  das máquinas e precisamos impedir ele,')
console.log('Mas ele criou barreiras em modo de  enigmas matematicos precisamos resolver, para conseguimos para-lo,');
console.log('Graças aos seus conhecimentos matemático, coseguiremos,');
console.log('Vou manda-los agora pra você, preste muita atenção, o mundo depende disso.');
console.log(' ')
          //perguntas do jogo
pergunta1 = +prompt('Qual o valor de 200 + 300 ?');
console.log(' ');
pergunta2 = +prompt('Qual é o valor de 100 - 40 ?');
console.log(' ');
pergunta3 = +prompt('Qual é o valor de 5 x 6 ?');
console.log(' ');
pergunta4 = +prompt('Qual é o valor de 10 ÷ 5 ?');
console.log(' ');
pergunta5 = +prompt('Qual a raiz quadrada de 64 ?');
console.log(' ');
 
  //formula de calcular os pontos
  let resposta=0

if( pergunta1 == '500') {
    resposta++
}
if( pergunta2 == '60') {
    resposta++
}
if( pergunta3 == '30'){
    resposta++
}
if(pergunta4 == '2'){
    resposta++
}
if( pergunta5 == '8'){
    resposta++
}

resposta
if(resposta == 0 ){
    console.log(' Você falhou e piorou a situação')
}
if(resposta == 1){
    console.log('Você falhou, vamos pedir ajuda a outra pessoa')
}
if(resposta == 2 ){
    console.log('você falhou vamos pedir ajuda a outra pessoa.')
}
if(resposta == 3){
    console.log('você quase conseguiu mas você errou um pouco.')
}
if(resposta == 4){
    console.log('Depois de muito esforço você conquistou seu objetivo, embora não de maneira perfeita.')
}
if(resposta == 5){
    console.log('Parabêns, você conseguiu salvar o mundo, você é um verdadeiro heroi.')
}


