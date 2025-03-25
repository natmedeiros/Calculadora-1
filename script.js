function displaynum(n1) {
  document.getElementById("display").value += n1; // Mostra o valor no display
}

function calculate() {
  let expression = document.getElementById("display").value
      .replace(/x/g, '*')  // Substitui "x" por "*"
      .replace(/÷/g, '/'); // Substitui "÷" por "/"

  try {
      document.getElementById("display").value = eval(expression); // Executa o cálculo
  } catch (error) {
      document.getElementById("display").value = "Erro"; // Mostra erro se a expressão for inválida
  }
}

function clearDisplay(fullClear) {
  let display = document.getElementById("display");
  if (fullClear) {
      display.value = ""; // Limpa tudo (CE)
  } else {
      display.value = display.value.slice(0, -1); // Remove o último caractere (C)
  }
}