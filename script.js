let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const option = ["piedra", "papel", "tijera"];
  const randomIndex = Math.floor(Math.random() * option.length);
  return option[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanChoice === computerChoice) {
    result = "¡Es un empate!";
  } else if (
    (humanChoice === "piedra" && computerChoice === "tijera") ||
    (humanChoice === "papel" && computerChoice === "piedra") ||
    (humanChoice === "tijera" && computerChoice === "papel")
  ) {
    result = "¡Ganaste esta ronda!";
    humanScore++;
  } else {
    result = "Perdiste esta ronda. La computadora ganó";
    computerScore++;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Elegiste: ${humanChoice}. Computadora eligió: ${computerChoice}. ${result}`;

  // Actualizar la puntuación
  const scoreDiv = document.getElementById("score");
  scoreDiv.textContent = `Puntuación: Humano ${humanScore} - Computadora ${computerScore}`;

  // Verificar si alguien ha ganado
  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5
        ? "¡Felicidades! Ganaste el juego."
        : "La computadora ganó el juego. Mejor suerte la próxima vez.";
    resultDiv.textContent = winner;

    // Deshabilitar botones tras finalizar el juego
    document
      .querySelectorAll("button")
      .forEach((button) => (button.disabled = true));
  }
}

// Añadir oyentes de eventos a los botones
document
  .getElementById("rock")
  .addEventListener("click", () => playRound("piedra"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("papel"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("tijera"));
