const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const pickButtons = document.querySelectorAll("button");
let userPick;

pickButtons.forEach((possiblePick) =>
  possiblePick.addEventListener("click", (e) => {
    userPick = e.target.innerText;
    userChoice.innerText = userPick;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * pickButtons.length);
  console.log(randomNumber);
  computerChoice.innerText =
    randomNumber === 0 ? "ROCK" : randomNumber === 1 ? "PAPER" : "SCISSORS";
}

function getResult() {
  let cc = computerChoice.innerText;
  let uc = userChoice.innerText;
  resultDisplay.innerText =
    (uc === "PAPER" && cc === "ROCK") ||
    (uc === "SCISSORS" && cc === "PAPER") ||
    (uc === "ROCK" && cc === "SCISSORS")
      ? "YOU WIN"
      : uc === cc
      ? "YOU DRAW"
      : "YOU LOST";
}
