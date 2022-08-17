function calcu() {
  let numero = parseInt(document.getElementById("text").value);
  let operador = document.getElementById("operador").value;
  let tabuada = "";

  if (operador == "+") {
    for (let i = 0; i <= 10; i++) {
      tabuada += numero + " + " + i + " = " + (numero + i )+ "<br/>";
      resposta.innerHTML = "Resposta <br/>" +tabuada;
    }

  } else if (operador == "-") {
    for (let i = 0; i <= 10; i++) {
      tabuada += numero + "-" + i + "=" + (numero - i) + "<br/>";
      resposta.innerHTML = "Resposta <br/>" +tabuada;
    }
  } else if (operador == "x" || operador == "X") {
    for (let i = 0; i <= 10; i++) {
      tabuada += numero + "x" + i + "=" + numero * i + "<br/>";
      resposta.innerHTML =  "Resposta <br/>" +tabuada;
    }
  } else if (operador == "/") {
    for (let i = 1; i <= 10; i++) {
      let resul = numero / i;
      tabuada += numero + "/" + i + "=" + resul.toFixed(2) + "<br/>";
      resposta.innerHTML =  "Resposta <br/>" +tabuada;
    }
  }else{
    resposta.innerHTML = 'Operador ou numero errado '
  }

}