playGame(getNumberOfGames());


function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return ("It's a draw! Both players have " + playerChoice);

  } else if ((playerChoice == "Rock") && (computerChoice == "Paper")) {
    return ("Computer Wins! " + computerChoice + " beats " + playerChoice);
  } else if ((playerChoice == "Rock") && (computerChoice == "Scissors")) {
    return ("You win! " + playerChoice + " beats " + computerChoice);

  } else if ((playerChoice == "Paper") && (computerChoice == "Rock")) {
    return ("You win! " + playerChoice + " beats " + computerChoice);
  } else if ((playerChoice == "Paper") && (computerChoice == "Scissors")) {
    return ("Computer Wins! ") + computerChoice + " beat " + playerChoice;

  } else if ((playerChoice == "Scissors") && (computerChoice == "Rock")) {
    return ("Computer Wins! " + computerChoice + " beats " + playerChoice);
  } else if ((playerChoice == "Scissors") && (computerChoice == "Paper")) {
    return ("You Win! " + playerChoice + " beat " + computerChoice);
  }
}

function playGame(games) {
  for (i = 1; i <= games; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose your gesture");
  return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
}

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  return choices[i];
}

function getNumberOfGames() {
  return prompt("Enter number of games you want to play");
}


