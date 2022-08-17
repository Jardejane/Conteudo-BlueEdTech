let lista = []

do
{
  a = true
  raw = prompt("qual numero deseja adicionar:")
  num = parseInt(raw)

  if(isNaN(num)) {console.log(`Não é um número`)}
  
  else
  {
  for (let i = 0; i <= lista.length; i++)
    {
      if (num == lista[i]) {a = false}
    }
  if (a) {lista.push (num)}
  console.log(lista)
  }
}
while (raw.length > 0)

function compararNumeros(a, b)
{ 
  return a - b;
}

console.log(`Lista ordenada: ${lista.sort(compararNumeros)}`)