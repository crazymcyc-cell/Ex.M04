document.getElementById("btnCalcular").addEventListener("click", calcularIMC);

function calcularIMC() {
  // Captura dos valores
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  // Validação
  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    document.getElementById("resultado").innerText =
      "Por favor, insira valores válidos!";
    document.getElementById("classificacao").innerText = "";
    return;
  }

  // Cálculo do IMC
  const imc = peso / (altura * altura);
  document.getElementById("resultado").innerText =
    "Seu IMC é: " + imc.toFixed(2);

  // Classificação do IMC
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III (mórbida)";
  }

  document.getElementById("classificacao").innerText = classificacao;
}
