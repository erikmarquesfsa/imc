let botaoCalcular = document.getElementById("btnCalcular");

function calculandoIMC() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value/100;
  let resultado = document.getElementById("resultado");

  if (altura !== "" && peso !== "") {
    let imc = (peso / (altura * altura)).toFixed(1);
    let mensagem = "";

    if (imc < 18.5) {
      mensagem = "Abaixo do peso.";
    } else if (imc < 25) {
      mensagem = "Peso ideal.";
    } else if (imc < 30) {
      mensagem = "Sobre peso";
    } else if (imc < 35) {
      mensagem = "Obesidade grau I.";
    } else if (imc < 40) {
      mensagem = "Obesidade grau II.";
    } else {
      mensagem = "Obesidade grau III.";
    }

    resultado.textContent = "O seu IMC é: " +imc+ " . " +mensagem;
  } else {
    resultado.textContent = "Por favor, preencha todos os campos";
  }
}

botaoCalcular.addEventListener('click',calculandoIMC);