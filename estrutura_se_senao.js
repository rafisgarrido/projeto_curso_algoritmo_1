

  function acaoBotao() {
    var numero01, numero02, resultado, operacao
    numero01= prompt("Digite o primeiro numero: ")
    operacao= prompt("Digite a peração: Ex: +, -, *, /")
    numero02= prompt("Digite o segundo numero: ")

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

 