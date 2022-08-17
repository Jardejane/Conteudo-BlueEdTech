let num1 = 0;
let num2 = 0;
let count = 0;

const botao = document.getElementsByClassName("num");

for (let n of botao) {
  n.addEventListener("click", function calculadora() {
    if (count == 0) {
      if (num1 == 0) {
        num1 = n.innerHTML;
      } else {
        num1 = num1.toString() + n.innerHTML.toString();
      }
      resultado.innerHTML = num1;
    } else {
      if (num2 == 0) {
        num2 = n.innerHTML;
      } else {
        num2 = num2.toString() + n.innerHTML.toString();
      }
      resultado.innerHTML = num2;
    }
  });
}

const opera = document.getElementsByClassName("operadores");

for (let oper of opera) {
  oper.addEventListener("click", () => {
    count = oper.innerHTML;

    if (oper.innerHTML == "CE") {
      count = 0;
      num1 = 0;
      num2 = 0;

      resultado.innerHTML = 0;
    }
  });
}

const res = document.getElementById("result");

res.addEventListener("click", () => {
  if (count == "+") {
    let calculo = Number(num1) + Number(num2);

    resultado.innerHTML = calculo;
  } else if (count == "-") {
    let calculo = Number(num1) - Number(num2);

    resultado.innerHTML = calculo;
  } else if (count == "X") {
    let calculo = Number(num1) * Number(num2);

    resultado.innerHTML = calculo;
  } else if (count == "/") {
    let calculo = Number(num1) / Number(num2);

    resultado.innerHTML = calculo;
  } else if (count == "%") {
    let calculo = (Number(num1) * 100) / Number(num2);

    resultado.innerHTML = calculo + "%";
  }
  count = 0;
  num1 = 0;
  num2 = 0;
});

const apagando = document.getElementById("apagar");

apagando.addEventListener("click", () => {
  if (count == 0) {
    let num = "";
    for (let i = 0; i < num1.length - 1; i++) {
      num = num + num1[i];
    }

    num1 = num;
    resultado.innerHTML = num1;
  } else {
    let num = "";
    for (let i = 0; i < num2.length - 1; i++) {
      num = num + num2[i];
    }

    num2 = num;
    resultado.innerHTML = num2;
  }
});
