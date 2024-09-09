function calculadora() {
    // Solicita os números ao usuário e armazena em variáveis
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
  
    // Solicita a operação ao usuário e armazena em uma variável
    let operacao = prompt("Digite a operação desejada (+, -, *, /):");
  
    // Verifica a operação e realiza o cálculo
    let resultado;
    switch (operacao) {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      case "*":
        resultado = numero1 * numero2;
        break;
      case "/":
        resultado = numero1 / numero2;
        break;
      default:
        resultado = "Operação inválida.";
        break;
    }
  
    // Mostra o resultado na tela
    document.getElementById("resultado").innerText = "O resultado é: " + resultado;
  }
  