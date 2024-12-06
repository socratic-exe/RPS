let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "paper";
  } else if (randomNumber === 1) {
    return "rock";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or scissors?").toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Please choose rock, Paper or scissors?").toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  console.log(
    "You chose " +
      humanChoice +
      " and the computer chose " +
      computerChoice +
      "!"
  );
  if (humanChoice === computerChoice) {
    console.log("That's a tie! No point awarded.");
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lost! Paper beats rock.");
      computerScore += 1;
    }
    if (computerChoice === "scissors") {
      console.log("You won! Rock beats scissors.");
      humanScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("You lost! Scissors beats paper.");
      computerScore += 1;
    }
    if (computerChoice === "rock") {
      console.log("You won! Paper beats rock.");
      humanScore += 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lost! Rock beats scissors.");
      computerScore += 1;
    }
    if (computerChoice === "paper") {
      console.log("You won! Scissors beats paper.");
      humanScore += 1;
    }
  }
}

function playGame() {
  while (humanScore + computerScore !== 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("You won the round!");
  } else {
    console.log("The computer won the round!");
  }
}

playGame();
