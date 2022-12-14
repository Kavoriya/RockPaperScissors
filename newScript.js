let playerShape = "";
let computerShape = "";
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

let rockButton = document.getElementById("shape-rock");
let paperButton = document.getElementById("shape-paper");
let scissorsButton = document.getElementById("shape-scissors")

rockButton.addEventListener("click", playRoundRock);
paperButton.addEventListener("click", playRoundPaper);
scissorsButton.addEventListener("click", playRoundScissors);



function checkResults() {
  if (numberOfRounds == 5) {
    if (playerScore > computerScore) {
      console.log("You won!");
    } else if ( computerScore > playerScore) {
      console.log("You lose!");
    } else {
      console.log("Draw!");
    }
    numberOfRounds = 0;
    playerScore = 0;
    computerScore = 0;
  }
}


function playRoundRock() {
  computerShape = getComputerShape();
  numberOfRounds++;
  if (computerShape === "Rock") {
    console.log("draw");
  }
  if (computerShape === "Paper") {
    console.log("lose");
    computerScore++;
  }
  if (computerShape === "Scissors") {
    console.log("win");
    playerScore++;
  }
  checkResults();
}

function playRoundPaper() {
  computerShape = getComputerShape();
  numberOfRounds++;
  if (computerShape === "Rock") {
    console.log("win");
    playerScore++;
  }
  if (computerShape === "Paper") {
    console.log("draw");
  }
  if (computerShape === "Scissors") {
    console.log("lose");
    computerScore++;
  }
  checkResults();
}

function playRoundScissors() {
  computerShape = getComputerShape();
  numberOfRounds++;
  if (computerShape === "Rock") {
    console.log("lose");
    computerScore++;
  }
  if (computerShape === "Paper") {
    console.log("win");
    playerScore++;
  }
  if (computerShape === "Scissors") {
    console.log("draw");
  }
  checkResults();
}
  
function getComputerShape() {
  let choices = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  return choices[i];
}