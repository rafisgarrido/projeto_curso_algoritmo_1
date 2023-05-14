

  function acaoBotao() {
    var numero01, numero02, resultado, operacao
    numero01= prompt("Digite o primeiro numero: ")
    operacao= prompt("Digite a peração: Ex: +, -, *, /")
    numero02= prompt("Digite o segundo numero: ")
    switch (operacao) {
      case "+": /* essencial os dois pontos*/
         resultado = parseInt(numero01) + parseInt(numero02)
         break; /* para parar*/
      
      case "-": /* essencial os dois pontos*/
         resultado = parseInt(numero01) - parseInt(numero02)
         break; /* para parar*/

      case "*": /* essencial os dois pontos*/
         resultado = parseInt(numero01) * parseInt(numero02)
         break; /* para parar*/

      case "/": /* essencial os dois pontos*/
         resultado = parseInt(numero01) / parseInt(numero02)
         break; /* para parar*/
    }

  if (operacao == "+") {
    resultado = parseInt(numero01) + parseInt(numero02)
  }else if (operacao == "-"){
    resultado = parseInt(numero01) - parseInt(numero02)
  }else if (operacao == "*"){
    resultado = parseInt(numero01) * parseInt(numero02)
  }else if (operacao == "/"){
    resultado = parseInt(numero01) / parseInt(numero02)
  }

  document.getElementById("paragrafo").innerText = resultado
    
}

 