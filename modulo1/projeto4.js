const prompt = require('prompt-sync')();
//objeto com metodo que vai controlar a hora
let tempo = {
  hora: 0,
  dia: 0,
  virar_dia : function(hora,dia){
    this.hora+=hora
    this.dia+= dia
    if (this.hora >= 24) {
      this.dia ++ 
      this.hora = 0
    }
  }
}
console.clear()
//Apresentação do jogo
console.log('=============================================================')
console.log('Bem vindo a historia interativa')
console.log('As perguntas devem ser somente (sim ou não) como está escrito')
console.log('--------------------------------------------------------------')
prompt('clique enter pra seguir')
console.clear()
console.log('================================================================')
console.log('Você é uma garota que foi vitima de um pequeno crime, ')
console.log('você quer achar o criminoso sozinha pra entregar para as autoridades')
console.log('--------------------------------------------------------------------')
prompt('clique enter pra seguir')
console.clear();
console.log('==========================================================================')
console.log(' suas escolhas vão criar um final inesperavel\n');
console.log(' O personagem é uma mulher que mora em São Paulo,\n trabalha como colunista de uma revista renomada em São Paulo')
 console.log('---------------------------------------------------------------------------')
 //variavel que guardo o nome do personagem
const personagem_principal = prompt('escolha o nome que seu personagem vai usar ')
//objeto que vai controlar o estado emocional e fisico do personagem
let status = {
  nome : `${personagem_principal}`,
  estado_emocional : "feliz",
   estado_fisico : "saudavel",
   status_pesonagem : function(estado_emocional,estado_fisico){
    this.estado_emocional = estado_emocional
    this.estado_fisico = estado_fisico
         }
  }
//mostrando o status do personagem
console.log('===========================================================\n')
console.log(` nome; ${status.nome}\n estado emocional; ${status.estado_emocional}\n estado fisico; ${status.estado_fisico}`)
console.log('------------------------------------------------------------')
prompt('clique enter pra começar')
console.clear()
//chamando a função de tempo
tempo.virar_dia(8,1)
//exibindo a função de tempo
console.log(`${tempo.hora} horas da manha do dia ${tempo.dia}`)
console.log('====================================================================')
console.log('Narrador; você acorda com uma mensagem estranha pelo celular')
console.log('-----------------------------------------------------------------------')
while(true){
  //primeira pergunta
  let pergunta1 = prompt('Deseja abrir a mensagem? ')
  console.clear()
 if (pergunta1=="sim") {
   console.log('=====================================================================')
    console.log('você checa as mensagens')
    console.log('Você fica assustada e um pouco curiosa, pois tem varias mensagens')
    console.log('----------------------------------------------------------------------')
    prompt('clique enter pra prosseguir')
    console.clear()
    //chamando a função pra mostrar os status
    status.status_pesonagem('assustada e curiosa')
    console.log(`Estado emocional;  ${status.estado_emocional}`)
    console.log('==========================================================================')
    console.log('Narrador ; As mensgens mostram que alguem esta usando seus dados bancarios')
    console.log('com compras vindo de Florianopolis so que faz anos que voce passou por lá')
   console.log('Você fica pensado se quer investigar ou deixar as autoridades resover  ')
   console.log('---------------------------------------------------------------------------')
 //2 pergunta
 let pergunta2 = prompt('sim pra investigar e não pra deixar com as autoridades ')
 console.clear()
 if (pergunta2=="sim") {
  console.log('===========================================================================')
  console.log('Narrador; você volta ao celular e ver que ja são 9horas e ja esta atrasada pro trabalho ')
  console.log('---------------------------------------------------------------------------------------')
  prompt('clique enter pra proseguir')
  console.clear()
  //função chamando o tempo
  tempo.virar_dia(1,0)
  console.log(`${tempo.hora} horas da manha do dia ${tempo.dia}`)
  console.log('======================================================')
   console.log(`você se arruma as pressas e chega no trabalho as 10 horas`)
   console.log('------------------------------------------------------')
   prompt('clique enter')
   console.clear()
   //função chamando o tempo
   tempo.virar_dia(1,0)
   console.log(`${tempo.hora} horas da manha do dia ${tempo.dia}`)
   console.log('======================================================================================')
   //função chamando o tempo
   tempo.virar_dia(3,0)
   console.log('Narrador; chegando no trabalho as 10hrs da manha você ficou ate as 13hrs da tarde')
   console.log('saiu no horario do almoço e foi a um restaurante almoçar, la começou a bolar um plano\n')
   console.log('Personagem; como vou  achar a pessoa sozinha e depois entregar para as autoridades?')
   console.log('Narrador; lembrou-se que no app do banco fala o local da compra')
   console.log('------------------------------------------------------------------------------------------')
   //pergunta3
   let pergunta3 = prompt('Quer entrar no app e ver o local da compra? ')
     if(pergunta3=="sim"){
      console.clear()
      console.log('=============================================================================')
      console.log('Narrador;  você ver e fica intrigada por que nunca tinha ido naquele local')
      console.log('-----------------------------------------------------------------------------')
      prompt('clique enter')
      console.clear()
      //chamando a funçâo de status
      status.status_pesonagem('intrigada')
      //mostrando o status do personagem
      console.log(`Estado emocional = ${status.estado_emocional}`)
      console.log("==============================================================================")
      console.log('personagem; Nossa eu nunca fui nesse local, vou pesquisar sobre ele.')
      console.log('------------------------------------------------------------------------------')
      //pergunta 4
      let pergunta4 = prompt('Quer pequisar agora? ')
      console.clear()
      if (pergunta4=="sim") {
    //função chamando o tempo
      tempo.virar_dia(2,0)
      //mostrando o tempo  
      console.log(`${tempo.hora} horas da tarde do dia ${tempo.dia} `)
      console.log('=========================================================================')
      console.log('personagem; nossa ja se passaram 2hs tenho que voltar ao trabalho')
      console.log('Narrador; chegando no trabalho você ficou ate as 19hrs da noite')
      console.log('---------------------------------------------------------------------------')
      prompt('clique enter pra seguir')
      console.clear();
      //chamando a função do tempo
      tempo.virar_dia(4,0)
      //mostrando o tempo
      console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
      console.log('===========================================================================')
      console.log('Narrador; chegando em casa você quer ir direto pesquisar mais sobre o local')
      console.log('e faz uma reserva no local.\n você repara na hora e ver que esta ficando meio tarde')
      console.log('-------------------------------------------------------------------------------')
      prompt('clique enter ')
      console.clear()
      //chamando a função do tempo
      tempo.virar_dia(4,0)
      //mostrando o tempo
      console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
      console.log('=====================================================')
      //pergunta 5
      let pergunta5 = prompt('Quer deitar pra dormi agora? ')
      console.log('-----------------------------------------------------')
      if (pergunta5=="sim") {
        console.clear()
        console.log('==================================================')
        console.log('Narrador; Você deitou na cama e dormiu')
        console.log('---------------------------------------------------')
        prompt('enter pra seguir')
        console.clear()
      }else{
       console.log('=========================')
       console.log('Narrador; você ficou lendo ate pegar no sono')
       console.log('----------------------------------------------')
       prompt('clique enter pra seguir')
       console.clear()
      }
      //chamando a função status
      status.status_pesonagem("espirito investigativo","cansada")
      console.log('===========================================================')
      console.log(`status do personagem no final do dia`)
      //mostrando a função status
      console.log(`estado fisico; ${status.estado_fisico}\nestado emocional; ${status.estado_emocional}`)
      console.log('-----------------------------------------------------------')
      //chamada da função tempo
      tempo.virar_dia(1,0)
      prompt('clique enter pra amanhecer')
      console.clear()
      //chamada da função do tempo
      tempo.virar_dia(8,0)
      //mostrando a função do tempo
      console.log(`${tempo.hora} horas da manhã do dia ${tempo.dia}`)
      //chamando a função status do personagem
      status.status_pesonagem('estranhamente animada',"disposta")
      //mostranndo a função estado emocional
      console.log(`estado emocional; ${status.estado_emocional}\nestado fisico; ${status.estado_fisico}`)
      console.log('=============================================================')
      console.log("Narrador; você acordou estranhamente animada e disposta\npois era um grande dia")
      console.log('você iria encontar a pessoa que estava usando seus dados\nvocê pegou a passagem do onibus e foi se arrumar')
     console.log('dentro do õnibus seu chefe te liga\n\
     Você quer inventar uma historia pra não levar bronca? ')
     console.log('---------------------------------------------------------------------')
     //pergunta 6
     let pergunta6 = prompt('responda sim ou não? ')
     console.clear()
     if (pergunta6=="sim") {
         console.log("======================================================================")
         console.log('Personagem; Ai eu estou doente peguei um resfriado não vou poder ir hoje')
         console.log('------------------------------------------------------------------------------')
     }else{
      console.log('=======================================================================')
      console.log('Narrador; você conta a verdade e seu chefe fala pra você tomar cuidado')
      console.log('-------------------------------------------------------------------------')
     }
     prompt('clique no enter pra seguir')
     console.clear()
     //chamando a função tempo 
     tempo.virar_dia(12,0)
     //mostrando a função tempo
     console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
     //chamando a função status do personagem
     status.status_pesonagem('',"cansada")
     console.log(`estado fisico; ${status.estado_fisico} `)
     console.log('=======================================================================================')
        console.log('Narrador; você passou o dia viajando dentro do ônibus\
        \nchegando as 8hrs da noite no hotel você estava muito cansada você quer subir pro quarto')
        console.log('----------------------------------------------------------------------------------------')
        //pergunta 7
        let pergunta7 = prompt('responda sim ou não?  ')
     if (pergunta7=="sim") {
      console.log('====================================================================================================')
    console.log('Narrador; você fez o check in e agora está subindo para o quarto\nchegando você deita na cama e dormi')
    console.log('------------------------------------------------------------------------------------------------------')
    
    }else{
     console.log('====================================================================')
     console.log('Personagem; pensando melhor vou depois,\nagora vou jantar deixa eu procurar o restaurante do hotel')
     console.log('Narrador; você jantou e depois subiu para o quarto indo descansar\ne acabou pegando no sono')
     console.log('----------------------------------------------------------------------')
    }
    prompt('clique enter pra continuar')
    console.clear()
    //chamando a função status do personagem
    status.status_pesonagem('tranquilo','cansado')
   //mostrando as duas funções
    console.log('=========================================')
    console.log(`Status do personagem no final do dia\
    \nEstado emocional; ${status.estado_emocional}\
    \nEstado fisico; ${status.estado_fisico}`)
    console.log('-----------------------------------------')
    tempo.virar_dia(15,0)
    prompt('clique no enter pra amanhecer')
    tempo.virar_dia(1,0)
    console.clear()
   tempo.virar_dia(7,0)
   console.log(`${tempo.hora} horas da manhã do dia ${tempo.dia}`)
   console.log('==============================================================================')
   console.log('Narrador; você acordou as 8hrs da manha foi tomar banho\nlogo desceu pra tomar café no restaurante')
   console.log('quando foi umas 10 horas você foi atras  de saber o quarto do criminoso estava hospedado')
   console.log('----------------------------------------------------------------------------------')
   console.log('Você quer ir na recepção agora? ')
       let pergunta8 = prompt('Diga sim pra ir ou não pra fazer outra coisa ')
       console.clear()
   if (pergunta8=="sim") {
    tempo.virar_dia(2,0)
    console.log(`${tempo.hora} horas da manhã do dia ${tempo.dia}`)
    console.log('=============================================================')
    console.log('Narrador; chegando na recepção você aborda o recpcionista e pergunta')
    console.log('eu tenho uma reserva em dois quarto e não peguei a chave de um deles\nvocê fala mostrando a sua indentidde')
   console.log('você pega uma copia da chave com ele e sai')
   console.log('----------------------------------------------------------------')
  }else{
    tempo.virar_dia(2,0)
    console.log(`${tempo.hora} horas da manhã do dia ${tempo.dia}`)
    console.log('=====================================================================')
    console.log('Narrador; você ler um livro e em seguida vai a recepção')
    console.log('chegando na recepção você aborda o recpcionista e pergunta')
    console.log('eu tenho uma reserva em dois quarto e não peguei a chave de um deles\nvocê fala mostrando a sua indentidde')
   console.log('você pega uma copia da chave com ele e sai')
   console.log('----------------------------------------------------------------')
   }
   let pergunta9 = prompt('Você quer ir no quarto dele procurar alguma coisa? ')
       console.clear()
   if(pergunta9=="sim"){
    console.log('=====================================================================')
    console.log('Narrador; você pegou o elevador e subiu procurando o numero do quarto\
    \nna porta do quarto tem o carrinho de limpeza com um uniforme de camareira\
    \nvocê pega e se veste com ele por cima da sua roupa')
    console.log('-----------------------------------------------------------------------')
   }else{
    console.log('=====================================================================')
    console.log('Narrador; você pensou melhor e decidiu ir ')
    console.log('Narrador; você pegou o elevador e subiu procurando o numero do quarto\
    \nna porta do quarto tem o carrinho de limpeza com um uniforme de camareira\
    \nvocê pega e se veste com ele por cima da sua roupa')
    console.log('-----------------------------------------------------------------------')
   }
   let pergunta10 = prompt('você quer entrar no quarto? ')
       console.clear()
      if(pergunta10=='sim'){
       console.log('=========================================================')
       console.log("Narrados; você começa a procura informações sobre ele\
       \n encontra uma gaveta no criado mudo")
      console.log('-------------------------------------------------------- ')
      let pergunta11= prompt('Você quer abrir? ')
      console.clear()
      if(pergunta11=="sim"){
       console.log('================================================================================================')
     console.log('Narrador; você encontra varios documentos e no meio dele achou um cartão com seus dados bancarios')
     console.log('nesse exato momento você escuta o barulho, como se alguém estiver-se abrindo a porta ')
     console.log('---------------------------------------------------------------------------------------------------')
    }else{
      console.log('==========================================================')
      console.log('Narrador; você pensa melhor e abri a gaveta nesse momento\
      \nvocê esculta alguem tentando abrir a porta')
      console.log('-----------------------------------------------------------')
    }
    let pergunta12 = prompt('você que se esconder? ')
    console.clear()
    if(pergunta12=="sim"){
      console.log("========================================================================================================")
      console.log('Narrador; você entra dentro do banheiro e você fica esscondida esperando ele sair,\
      \nele entra no quarto e vai na gaveta pega alguns cartões e sai do quarto\
      \nenquanto  você está no banheiro você conseguiu ver a face do rosto dele\
     \nvocê vai na gaveta tirar foto de todos os documentos inclusive de uma carteira de motorista\
    \nque tinha a foto da cara dele')
      console.log('--------------------------------------------------------------------------------------------------------')
    }else{
      console.log('=================================================================================')
      console.log('Narrador; você finge que esta arrumando o quarto ele entra te comprimenta\
      \nmexe na gaveta do criado mudo e sai em seguida,nesse momento você consegue ver o rosto dele\
      \nvocê vai na gaveta tirar foto de todos os documentos inclusive de uma carteira de motorista\
      \nque tinha a foto da cara dele') 
     }
     let pergunta13= prompt('Você quer sair do quarto agora agora? ')
     console.clear()
     if(pergunta13=="sim"){
       console.log('====================================================================')
       console.log('Narrador; você pega o elevador e vai para o seu quarto\
       \nla você passa a tarde toda pesquisado sobre ele\
       \nacaba descobrindo que ele é procurado na justiça')
       console.log( '--------------------------------------------------------------------')
     }else{
       console.log('===================================================================')
       console.log('Narrador; você fica procurando pra ver se tem mais alguma coisa\
       \nvocê acaba não achando e volta para seu quarto\
       \nla você passa a tarde toda pesquisando sonre ele\
       \ne acaba descobrindo que ele é procurado da justiça')
       console.log('-------------------------------------------------------------------')
     }
     prompt('clique enter pra seguir')
     console.clear()
     tempo.virar_dia(8,0)
     console.log(`${tempo.hora}horas da noite do dia ${tempo.dia}`)
     console.log( '==================================================================')
     console.log('Narrador; você desce pra jantar e ele está la no restaurante')
     console.log('-------------------------------------------------------------------')
     let pergunta14 = prompt('Quer liga pra policia e entregar? ')
     console.clear()
     if(pergunta14 == "sim"){
       console.log('=============================================================')
       console.log('Narrador; Você coloca seu celular pra gravar\
       \nlogo em seguida você vai na mesa dele\
       \nvocê fala que ja sabe de tudo que ele fazia\
       \nele finge que não sabe do que você ta falando\
       \nvocê diz sobre os documentos do criado mudo\
       \nele acaba confessando tudo')
       console.log('-------------------------------------------------------------')
     }else{
       console.log('=============================================================')
       console.log('Narrador; voceê fala pro gaçom e em seguida ele liga pra policia')
       console.log('Narrador; Você coloca seu celular pra gravar\
       \nlogo em seguida você vai na mesa dele\
       \nvocê fala que ja sabe de tudo que ele fazia\
       \nele finge que não sabe do que você ta falando\
       \nvocê diz sobre os documentos do criado mudo\
       \nele acaba confessando tudo')
       console.log('-------------------------------------------------------------')
     }
     prompt('clique pra seguir')
       console.clear()
       console.log('=================================================================')
       console.log('Narrador; ele continua e fala que ninguem vai acreditar em você\
       \nporque você não tem prova\
       \nnesse momento a policia chega')
       console.log('------------------------------------------------------------------')
       prompt('clique enter pra continuar')
       console.clear()
       console.log('=======================================================================================')
       console.log('Narrador; ele ainda tentou fugir mas foi pego\
       \nvocê vai nos policias e da a gravação e fala sobre os documentos no quarto dele\
       \nvocê volta para o quarto as 9horas da noite e esta cansada,com fome e feliz por ter conseguido\
       \nvocê pedi um seviço de quarto enquanto espera... ')
       console.log('----------------------------------------------------------------------------------------')
       let pergunta15 = prompt('Você quer assistir uma serie? ')
       console.clear()
       tempo.virar_dia(3,0)
       status.status_pesonagem('fome,cansaço',"feliz")
       console.log(`Estado fisico; ${status.estado_fisico} Estado emocional; ${status.estado_emocional}\n`)
       console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
       if(pergunta15=="sim"){
         console.log('=============================================================')
         console.log('Narrador; você fica assistindo até a comida chegar\
         \nvocê comeu e enm seguida deitou pra dormi')
         console.log('------------------------------------------------------------')
       }else{
         console.log('===================================================')
         console.log('Narrador; você ler um livro até a comida chegar')
         console.log('você comeu e em seguida deitou e dormiu')
         console.log('---------------------------------------------------')
       }
       prompt('clique enter pra amanhecer')
       tempo.virar_dia(4,0)
       console.clear()
       tempo.virar_dia(8,0)
       console.log(`${tempo.hora} horas do dia ${tempo.dia}`)
       console.log('============================================================')
       console.log('Narrado; você acorda pela manhã se arruma e volta pra casa\
       \nchegando em casa a noite pra começar um novo dia se sentindo feliz')
       console.log('-------------------------------------------------------------')
       prompt('clique enter pra ver os status final do jogador  ')
       console.clear()
       tempo.virar_dia(12,0)
       console.log(`${tempo.hora} hora do dia ${tempo.dia}`)
       console.log('=====================================================')
       console.log(`status final do personagem\
       \nEstado fisico; ${status.estado_emocional}\
       \nEstado emocional; ${status.estado_fisico}`)
       console.log('-----------------------------------------------------')       
       break;
        



    //else da pergunta 10
    }else{
      console.log('==============================================================')
      console.log('tudo bem segurança em primeiro lugar\
      \nvocê liga pra policia e em seguida eles chegam\
      \nvocê conta pra eles e pro recepcioista sobre o que ta acontecendo\
      \n ele ainda tentou fugir mas foi pego\
      \nvocê vai nos policias e  sobre os documentos no quarto dele\
      \nvocê volta para o quarto as 9horas da noite e esta cansada,com fome e feliz por ter conseguido\
      \nvocê pedi um seviço de quarto enquanto espera... ')
      console.log('----------------------------------------------------------------------------------------')
      let pergunta_nao15 = prompt('Você quer assistir uma serie? ')
      console.clear()
      tempo.virar_dia(10,0)
      status.status_pesonagem('fome,cansada',"feliz")
      console.log(`Estado emocional; ${status.estado_fisico} Estado fisico; ${status.estado_emocional}\n`)
      console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
      if(pergunta_nao15=="sim"){
        console.log('=============================================================')
        console.log('Narrador; você fica assistindo até a comida chegar\
        \nvocê comeu e enm seguida deitou pra dormi')
        console.log('------------------------------------------------------------')
      }else{
        console.log('===================================================')
        console.log('Narrador; você ler um livro até a comida chegar')
        console.log('você comeu e em seguida deitou e dormiu')
        console.log('--------------------------------------------------')
      }
      prompt('clique enter pra amanhecer')
      tempo.virar_dia(4,0)
      console.clear()
      tempo.virar_dia(8,0)
      console.log(`${tempo.hora} horas do dia ${tempo.dia}`)
      console.log('============================================================')
      console.log('Narrado; você acorda pela manhã se arruma e volta pra casa\
      \nchegando em casa a noite pra começar um novo dia se sentindo feliz')
      console.log('-------------------------------------------------------------')
      prompt('clique enter pra ver os status final do jogador  ')
      console.clear()
      tempo.virar_dia(12,0)
      console.log(`${tempo.hora} hora do dia ${tempo.dia}`)
      console.log('=====================================================')
      console.log(`status final do personagem\
      \nEstado emocional; ${status.estado_emocional}\
      \nEstado fisico; ${status.estado_fisico}`)
      console.log('-----------------------------------------------------')       
      break;


    }//else da pergunta 10

  //else da pergunta 4 
    }else{
      console.log('====================================')
     console.log('Narrador você almoçou primeiro')
     console.log(' em seguida você deu uma olhada')
     console.log('-------------------------------------')
     prompt('clique enter pra continuar')
     //chamando a função de tempo
     tempo.virar_dia(2,0)
     //mostrando a função de tempo
     console.log(`${tempo.hora} horas da tarde do dia ${tempo.dia} `)
    console.log('=========================================================================')
    console.log('personagem; nossa ja se passaram 2hs tenho que voltar ao trabalho')
    console.log('Narrador; chegando no trabalho você ficou ate as 19hrs da noite')
    console.log('---------------------------------------------------------------------------')
    prompt('clique enter pra seguir')
    console.clear();
    //chamado a função de tempo
    tempo.virar_dia(4,0)
    //mostrando a função do tempo
    console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
    console.log('===========================================================================')
    console.log('Narrador; chegando em casa você quer ir direto pesquisar mais sobre o local')
    console.log('e faz uma reserva no local.\n você repara na hora e ver que esta ficando meio tarde')
    console.log('-------------------------------------------------------------------------------')
    prompt('clique enter ')
    console.clear()
    //chamando a função do tempo
    tempo.virar_dia(4,0)
    //mostrando a função do tempo
    console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
    console.log('=====================================================')
    let pergunta_nao5 = prompt('Quer deitar pra dormi agora? ')
    console.log('-----------------------------------------------------')
    if (pergunta_nao5=="sim") {
      console.clear()
      console.log('==================================================')
      console.log('Narrador; Você deitou na cama e dormiu')
      //chamando a função do tempo pra virar o dia e zerar a hora
      tempo.virar_dia(1,0)
      console.log('---------------------------------------------------')
    }else{
      tempo.virar_dia(1,0)
      console.log('===================================================')
      console.log('Narrador; você leu um livro ate que pegou no sono')
      console.log('----------------------------------------------------')
      }
      prompt('clique enter pra amanhecer')
      console.clear()
      //tempo.virar_dia(8,0)
      //chamando a função do tempo
      tempo.virar_dia(8,0)
      //mostrando o tempo  na tela
      console.log(`${tempo.hora} horas da manhã do dia ${tempo.dia}`)
      //chamando a função status do personagem
      status.status_pesonagem('estranhamente animada',"disposta")
      //mostrando a função do status do personagem
      console.log(`estado emocional; ${status.estado_emocional}\nestado fisico; ${status.estado_fisico}`)
      console.log('=============================================================')
      console.log("Narrador; você acordou estranhamente animada e disposta\npois era um grande dia")
      console.log('você iria encontar a pessoa que estava usando seus dados\nvocê pegou a passagem do onibus e foi se arrumar')
     console.log('dentro do õnibus seu chefe te liga\n\
     Você quer inventar uma historia pra não levar bronca? ')
     console.log('---------------------------------------------------------------------')
     let pergunta_nao6 = prompt('responda sim ou não? ')
     console.clear()
     if (pergunta_nao6=="sim") {
         console.log("======================================================================")
         console.log('Personagem; Ai eu estou doente peguei um resfriado não vou poder ir hojé')
         console.log('------------------------------------------------------------------------------')
     }else{
      console.log('=======================================================================')
      console.log('Narrador; você conta a verdade e seu chefe fala pra você tomar cuidado')
      console.log('-------------------------------------------------------------------------')
     }
       prompt('enter pra continuar')
       console.clear()
         //chamando a função 
         tempo.virar_dia(12,0)
         //mostrando o tempo
         console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
         //chamando a função de status do personagem
         status.status_pesonagem('feliz',"cansaço")
         //mostrando a função status do presonagem
         console.log(`estado fisico; ${status.estado_fisico} `)
         console.log('=======================================================================================')
        console.log('Narrador; você passou o dia viajando dentro do ônibus\
        \nchegando as 8hrs da noite no hotel você estava muito cansada você quer subir pro quarto')
        console.log('----------------------------------------------------------------------------------------')
        let pergunta_nao7 = prompt('responda sim ou não?  ')
        console.clear()
        if (pergunta_nao7=="sim") {
          console.log('====================================================================================================')
        console.log('Narrador; você fez o check in e agora está subindo para o quarto\nchegando você deita na cama e dormi')
        console.log('------------------------------------------------------------------------------------------------------')
        
        }else{
         console.log('====================================================================')
         console.log('Personagem; pensando melhor vou depois,\nagora vou jantar deixa eu procurar o restaurante do hotel')
         console.log('Narrador; você jantou e depois subiu para o quarto indo descansar\ne acabou pegando no sono')
         console.log('----------------------------------------------------------------------')
        }
        prompt('clique enter pra continuar')
        console.clear()
        //chamando a função de status
        status.status_pesonagem('tranquilo','cansado')
        console.log('=========================================')
        //mostrando o estado completo no final do dia do personagem
        console.log(`Status do personagem no final do dia\
        \nEstado emocional; ${status.estado_emocional}\
        \nEstado fisico; ${status.estado_fisico}`)
        console.log('-----------------------------------------')
        //chamando função
        tempo.virar_dia(4,0)
        prompt('clique no enter pra amanhecer')
        console.clear()
        //chamando função 
       tempo.virar_dia(8,0)
       console.log(`${tempo.hora} horas da manhã do dia ${tempo.dia}`)
       console.log('==============================================================================')
       console.log('Narrador; você acordou as 8hrs da manha foi tomar banho\nlogo desceu pra tomar café no restaurante')
       console.log('quando foi umas 10 horas você foi atras  de saber o quarto do criminoso estava hospedado')
       console.log('----------------------------------------------------------------------------------')
       console.log('Você quer ir na recepção agora? ')
       let pergunta_nao8 = prompt('Diga sim pra ir ou não pra fazer outra coisa ')
       console.clear()
       if (pergunta_nao8=="sim") {
        tempo.virar_dia(2,0)
        console.log(`${tempo.hora} horas da manhã do dia ${tempo.dia}`)
        console.log('=============================================================')
        console.log('Narrador; chegando na recepção você aborda o recpcionista e pergunta')
        console.log('eu tenho uma reserva em dois quarto e não peguei a chave de um deles\nvocê fala mostrando a sua indentidde')
       console.log('você pega uma copia da chave com ele e sai')
       console.log('----------------------------------------------------------------')
       }else{
        tempo.virar_dia(2,0)
        console.log(`${tempo.hora} horas da manhã do dia ${tempo.dia}`)
        console.log('=====================================================================')
        console.log('Narrador; você ler um livro e em seguida vai a recepção')
        console.log('chegando na recepção você aborda o recpcionista e pergunta')
        console.log('eu tenho uma reserva em dois quarto e não peguei a chave de um deles\nvocê fala mostrando a sua indentidde')
       console.log('você pega uma copia da chave com ele e sai')
       console.log('----------------------------------------------------------------')
       }
       let pergunta_nao9 = prompt('Você quer ir no quarto dele procurar alguma coisa? ')
       console.clear()
       if(pergunta_nao9=="sim"){
        console.log('=====================================================================')
        console.log('Narrador; você pegou o elevador e subiu procurando o numero do quarto\
        \nna porta do quarto tem o carrinho de limpeza com um uniforme de camareira\
        \nvocê pega e se veste com ele por cima da sua roupa')
        console.log('-----------------------------------------------------------------------')
       }else{
        console.log('=====================================================================')
        console.log('Narrador; você pensou melhor e decidiu ir ')
        console.log('Narrador; você pegou o elevador e subiu procurando o numero do quarto\
        \nna porta do quarto tem o carrinho de limpeza com um uniforme de camareira\
        \nvocê pega e se veste com ele por cima da sua roupa')
        console.log('-----------------------------------------------------------------------')
       }
       let pergunta_nao10 = prompt('você quer entrar no quarto? ')
       console.clear()
      if(pergunta_nao10=='sim'){
       console.log('=========================================================')
       console.log("Narrados; você começa a procura informações sobre ele\
       \n encontra uma gaveta no criado mudo")
      console.log('-------------------------------------------------------- ')
       }else{
        console.log('======================================================')
        console.log('Narrador; você pensa mais um pouco e decidir entrar\
        \nla você ver um criado mudo')
        console.log('------------------------------------------------------')
       }
       let pergunta_nao11= prompt('Você quer abrir? ')
      console.clear()
      if(pergunta_nao11=="sim"){
       console.log('================================================================================================')
     console.log('Narrador; você encontra varios documentos e no meio dele achou um cartão com seus dados bancarios')
     console.log('nesse exato momento você escuta o barulho, como se alguém estiver-se abrindo a porta ')
     console.log('---------------------------------------------------------------------------------------------------')
      }else{
        console.log('==========================================================')
        console.log('Narrador; você pensa melhor e abri a gaveta nesse momento\
        \nvocê esculta alguem tentando abrir a porta')
        console.log('-----------------------------------------------------------')
      }
      let pergunta_nao12 = prompt('você que se esconder? ')
    console.clear()
    if(pergunta_nao12=="sim"){
     console.log("========================================================================================================")
     console.log('Narrador; você entra dentro do banheiro e você fica esscondida esperando ele sair,\
     \nele entra no quarto e vai na gaveta pega alguns cartões e sai do quarto\
     \nenquanto  você está no banheiro você conseguiu ver a face do rosto dele\
    \nvocê vai na gaveta tirar foto de todos os documentos inclusive de uma carteira de motorista\
   \nque tinha a foto da cara dele')
     console.log('--------------------------------------------------------------------------------------------------------')
   }else{
     console.log('=================================================================================')
     console.log('Narrador; você finge que esta arrumando o quarto ele entra te comprimenta\
     \nmexe na gaveta do criado mudo e sai em seguida,nesse momento você consegue ver o rosto dele\
     \nvocê vai na gaveta tirar foto de todos os documentos inclusive de uma carteira de motorista\
     \nque tinha a foto da cara dele') 
     console.log("------------------------------------------------------------------------------------")
    }
    prompt('clique no enter ')
    console.clear()
    console.log('===========================================================')
    console.log('Narrador; você pega o elevador e vai para o seu quarto\
    \nla você passa a tarde toda pesquisado sobre ele\
    \nacaba descobrindo que ele é procurado na justiça')
    console.log( '--------------------------------------------------------------------')
    prompt('clique enter pra seguir')
    console.clear()
    tempo.virar_dia(10,0)
    console.log(`${tempo.hora} horas do dia ${tempo.dia}`)
    console.log('===============================================')
    console.log('Narrador; você liga pra policia ela chega em alguns minutos')
    console.log('Narrador; ele ainda tentou fugir mas foi pego\
       \nvocê vai nos policias e da as fotos e fala sobre os documentos no quarto dele\
       \nvocê volta para o quarto as 9horas da noite e esta cansada,com fome e feliz por ter conseguido\
       \nvocê pedi um seviço de quarto enquanto espera... ')
       console.log('----------------------------------------------------------------------------------------')
       let pergunta_nao15 = prompt('Você quer assistir uma serie? ')
       console.clear()
       tempo.virar_dia(3,0)
       status.status_pesonagem('fome,cansaço',"feliz")
       console.log(`Estado emocional; ${status.estado_fisico}\
       \nEstado fisico; ${status.estado_emocional}\n`)
       console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
       if(pergunta_nao15=="sim"){
         console.log('=============================================================')
         console.log('Narrador; você fica assistindo até a comida chegar\
         \nvocê comeu e enm seguida deitou pra dormi')
         console.log('------------------------------------------------------------')
       }else{
         console.log('===================================================')
         console.log('Narrador; você ler um livro até a comida chegar')
         console.log('você comeu e em seguida deitou e dormiu')
         console.log('---------------------------------------------------')
       }
       prompt('clique enter pra amanhecer')
       tempo.virar_dia(1,0)
       console.clear()
       tempo.virar_dia(8,0)
       console.log(`${tempo.hora} horas do dia ${tempo.dia}`)
       console.log('============================================================')
       console.log('Narrado; você acorda pela manhã se arruma e volta pra casa\
       \nchegando em casa a noite pra começar um novo dia se sentindo feliz')
       console.log('-------------------------------------------------------------')
       prompt('clique enter pra ver os status final do jogador  ')
       console.clear()
       tempo.virar_dia(0,0)
       tempo.virar_dia(12.0)
       console.log(`${tempo.hora} hora do dia ${tempo.dia}`)
       console.log('=====================================================')
       console.log(`status final do personagem\
       \nEstado emocional; ${status.estado_emocional}\
       \nEstado fisico; ${status.estado_fisico}`)
       console.log('-----------------------------------------------------')       
       break;

  }//cochete do else 4 tem que conclur


//else da pergunta 3
    }else{
      console.clear()
      console.log('================================')
      console.log('OK depois você ver')
      console.log('--------------------------------')
      prompt('enter pra seguir')
      console.clear()
      console.log('==============================================')
      console.log('narrador; Você preferiu comer primeiro\nassim que terminou olhou o aplicativo')
      console.log('-----------------------------------------------')
      status.status_pesonagem('intrigada', 'alimentada')
      prompt('enter pra continuar')
      console.clear()
      console.log(`estado emocioal; ${status.estado_emocional}\nestado fisico;${status.estado_fisico}`)
      console.log('=====================================================')
      console.log('personagem; Nossa eu nunca fui nesse local, vou pesquisar sobre ele.')
      console.log('Narrador; você acaba perdendo o horario e chega no trabalho as 15hrs')
      console.log('------------------------------------------------------------------------------')
      prompt('enter pra continuar')
      console.clear()
      tempo.virar_dia(2,0)
      console.log(`${tempo.hora} horas da tarde do dia ${tempo.dia}`)
      console.log('===================================================================')
      console.log('Narrador;saindo do trabalho ate chegar em casa ja são mais de 19hrs ')
      console.log('-------------------------------------------------------------------')
      prompt('enter pra continuar')
      console.clear()
      tempo.virar_dia(4,0)
      console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
      console.log('==========================================================')
      console.log('Você quer pedir pizza pro jantar ou fazer comida?')
      let pergunta_nao2 = prompt('sim = pizza e nao = comida')
      console.log('----------------------------------------------------------')
      console.clear()
      if (pergunta_nao2=="sim") {
        console.log('===================================================================================')
        console.log(' narrador; você pediu pizza')
        console.log('enquanto sua pizza não chegava você decidiu entregar pras as autoridades resover')
        console.log('------------------------------------------------------------------------------------')
      } else {
        console.log('====================================================================================')
        console.log('narrador; você decidiu fazer comida')
        console.log('enquanto você cozinhava você decidiu entregar pras as autoridades resover')
      console.log('--------------------------------------------------------------------------------------')
      }//cochete do else da perguntanão2
      prompt('enter pra seguir ')
      console.clear()
      console.log('===================================================================')
      console.log('Narrador; ja esta tarde e você esta cansada ')
      console.log('quer deitar pra descansar? ')
      console.log('-------------------------------------------------------------------')
      let pergunta_nao3 = prompt('se quiser deitar digite sim? ')
      console.clear()
      if(pergunta_nao3 == "sim"){
        console.log('=================================================')
        console.log('Narrador; você deitou e em seguida pegou no sono')
        console.log('--------------------------------------------------')
      }else{
        console.log('===================================================')
        console.log('Narrador; você assistiu tv ate que pegou no sono')
       console.log('-----------------------------------------------------')
      }
      //chamando a função tempo
      tempo.virar_dia(5,0)
      prompt('clique enter pra amanhecer')
      console.clear()
      tempo.virar_dia(0,0)
      console.log('========================================================')
      console.log('Narrador; você acorda pela manha e vai na delegacia')
      console.log('---------------------------------------------------------')
     prompt('enter pra continuar')
     console.clear()

    tempo.virar_dia(19,0)
    console.log(`${tempo.hora} horas da noite do dia ${tempo.dia}`)
    console.log('============================================================')
    console.log('Narrador; o seu dia foi cheio, você está preocupada e cansada')
    console.log('---------------------------------------------------\n')
    status.status_pesonagem('preocupada',"cansada")
    prompt('enter')
    console.clear()
    console.log(`estado emocional; ${status.estado_emocional}\nestado fisico; ${status.estado_fisico}`)
    console.log('==========================================================')
    let pergunta_nao4 = prompt('deseja descançar? ')
    console.log('----------------------------------------------------------')
    if(pergunta_nao4=="sim"){
      console.clear()
      console.log('===========================================================')
      console.log('Narrador; você deitou e dormiu')
      console.log('-----------------------------------------------------------')
    }else{
      console.log('=========================================================')
      console.log('Narrador; você foi assistir ate que pegou no sono')
      console.log('-----------------------------------------------------------')
    }
    prompt('enter pra continar')
    console.clear()
    console.log('=========================================================')
    console.log(`status do final do dia do personagem \n estado emocional; ${status.estado_emocional} \n estado fisico; ${status.estado_fisico}`)
    console.log('----------------------------------------------------------')
    tempo.virar_dia(5,0)
    prompt('clique enter pra amanhecer')
    console.clear()
    tempo.virar_dia(0,0)
    tempo.virar_dia(8,0)
    console.log(`${tempo.hora} horas da manha do dia ${tempo.dia}`)
    console.log('====================================================================================')
    console.log('Narrador; você acorda com a noticia no seu celular que acharam o cara meus parabens')
    console.log('--------------------------------------------------------------------------------------')
    prompt('digite enter pra terminar o jogo')
    console.clear()
    console.log('============================================================================')
    console.log('Na proxima tente achar o criminoso vai ser mais divertido.\n ate a proxima')
    console.log('-------------------------------------------------------------------------------')
    break;



  }//cochete do else da pergunta 3

//else da pergunta 2 
 }else {
  tempo.virar_dia(2)
  console.log(`${tempo.hora} horas da manhã `)
  console.log('======================================================')
  console.log('Muito bem segurança em primeiro lugar\n os policias vão invertigar o seu caso')
  console.log('-------------------------------------------------------')
  prompt('clique enter pra seguir')
  console.clear()
  console.log('========================================================')
  console.log('Narrador; você vai na policia assim que sai de casa\n passa o dia na delegacia\nchega as 19hrs da noite')
  console.log('---------------------------------------------------------')
  prompt('enter pra continuar')
  console.clear()
  tempo.virar_dia(9)
  console.log(`${tempo.hora} horas da noite`)
  console.log('============================================================')
  console.log('Narrador; o seu dia foi cheio, você está preocupada e cansada')
  console.log('---------------------------------------------------\n')
  status.status_pesonagem('preocupada',"cansada")
  prompt('enter')
  console.clear()
  console.log(`estado emocional; ${status.estado_emocional}\nestado fisico; ${status.estado_fisico}`)
  console.log('==========================================================')
  let pergunta_nao1 = prompt('deseja descançar? ')
  console.log('----------------------------------------------------------')
  if(pergunta_nao1=="sim"){
    console.clear()
    console.log('===========================================================')
    console.log('Narrador; você deitou e dormiu')
  }else{
    console.log('Narrador; você foi assistir ate que pegou no sono')
  }
  prompt('enter pra continar')
  console.clear()
  console.log('=========================================================')
  console.log(`status do final do dia do personagem \n estado emocional; ${status.estado_emocional} \n estado fisico; ${status.estado_fisico}`)
  console.log('----------------------------------------------------------')
  tempo.virar_dia(5)
  prompt('clique enter pra amanhecer')
  console.clear()
  tempo.virar_dia(8)
  console.log(`${tempo.hora} horas da manha`)
  console.log('====================================================================================')
  console.log('Narrador; você acorda com a noticia no seu celular que acharam o cara meus parabens')
  console.log('--------------------------------------------------------------------------------------')
  prompt('digite enter pra terminar o jogo')
  console.clear()
  console.log('============================================================================')
  console.log('Na proxima tente achar o criminoso vai ser mais divertido.\n ate a proxima')
  console.log('-------------------------------------------------------------------------------')
  break;
 }//cochete do else da pergunta 2

//else da pergunta 1
}else{
  //vai repetir ate aa pessoa responder sim
  console.log('=====================')
  console.log('ok você ver depois')
  console.log('----------------------')
  resultado= false
 }//cochete do else pergunta1

}//cochete do while
