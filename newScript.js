let playerShape = "";
let computerShape = "";
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
let outcome = "";

let rockButton = document.getElementById("shape-rock");
let paperButton = document.getElementById("shape-paper");
let scissorsButton = document.getElementById("shape-scissors")

let titleText = document.getElementById("title");
let tryAgainButton = document.getElementById("tryAgain");

let results = document.getElementsByClassName("result");

rockButton.addEventListener("click", playRoundRock);
paperButton.addEventListener("click", playRoundPaper);
scissorsButton.addEventListener("click", playRoundScissors);
tryAgainButton.addEventListener("click", resetGame);

function checkResults() {
  if (numberOfRounds == 5) {
  disableShapeButtons();
    if (playerScore > computerScore) {
      titleText.textContent = "You won!";
    } else if (computerScore > playerScore) {
      titleText.textContent = "You lose!";
    } else {
      titleText.textContent = "Draw!";
    }
    tryAgainButton.style.display = "block";
  }
}

function resetGame() {
  enableShapeButtons();
  for (let i = 0; i < results.length; i++) {
    results.item(i).style.backgroundColor = "grey";
  }
  numberOfRounds = 0;
  playerScore = 0;
  computerScore = 0;
  tryAgainButton.style.display = "none";
  titleText.textContent = "Choose your shape";
}

function changeColor() {
  let result = document.getElementById(`result-${numberOfRounds}`);
  if (outcome == "win") {
    result.style.backgroundColor = "green";
  }
  if (outcome == "lose") {
    result.style.backgroundColor = "red";
  }
  if (outcome == "draw") {
    result.style.backgroundColor = "yellow";
  }
}

function playRoundRock() {
  computerShape = getComputerShape();
  numberOfRounds++;
  if (computerShape === "Rock") {
    outcome = "draw";
  }
  if (computerShape === "Paper") {
    outcome = "lose";
    computerScore++;
  }
  if (computerShape === "Scissors") {
    outcome = "win";
    playerScore++;
  }
  checkResults();
  changeColor();
}

function playRoundPaper() {
  computerShape = getComputerShape();
  numberOfRounds++;
  if (computerShape === "Rock") {
    outcome = "win";
    playerScore++;
  }
  if (computerShape === "Paper") {
    outcome = "draw";
  }
  if (computerShape === "Scissors") {
    outcome = "lose";
    computerScore++;
  }
  checkResults();
  changeColor();
}

function playRoundScissors() {
  computerShape = getComputerShape();
  numberOfRounds++;
  if (computerShape === "Rock") {
    outcome = "lose";
    computerScore++;
  }
  if (computerShape === "Paper") {
    outcome = "win";
    playerScore++;
  }
  if (computerShape === "Scissors") {
    outcome = "draw";
  }
  checkResults();
  changeColor();
}
  
function getComputerShape() {
  let choices = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  return choices[i];
}

function disableShapeButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableShapeButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}