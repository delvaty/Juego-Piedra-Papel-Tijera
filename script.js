function getComputerChoice() {
  const option = ["piedra", "papel", "tijera"];
  const randomIndex = Math.floor(Math.random() * option.length);

  return option[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt("Escriba piedra, papel o tijera: ").toLowerCase();
  if (!["piedra", "papel", "tijera"].includes(humanChoice)) {
    console.log(
      "Elección inválida. Por favor, elige entre piedra, papel o tijera."
    );
    return getHumanChoice();
  }
  

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "¡Es un empate!";
  } else if (
    (humanChoice === "piedra" && computerChoice === "tijera") ||
    (humanChoice === "papel" && computerChoice === "piedra") ||
    (humanChoice === "tijera" && computerChoice === "papel")
  ) {
    return "Ganaste";
  } else {
    return "Perdiste. La computadora ganó";
  }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        console.log(`La elección fue: ${humanSelection}`);
        console.log(`La elección de la computadora fue: ${computerSelection}`);
        console.log(result);

        if(result === "Ganaste"){
            humanScore++;
        }else if(result === "Perdiste. La computadora ganó"){
            computerScore++;
        }
    }
    console.log(`Puntuación final: Humano ${humanScore} - Computadora ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("¡Felicidades! Ganaste el juego.");
    } else if (humanScore < computerScore) {
        console.log("La computadora ganó el juego. Mejor suerte la próxima vez.");
    } else {
        console.log("El juego terminó en empate.");
    }
    
}
playGame()

/* const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(); */

/* console.log(`La elección fue: ${humanSelection}`);
console.log(`La elección de la computadora fue: ${computerSelection}`);
console.log(playRound(humanSelection, computerSelection)); */
