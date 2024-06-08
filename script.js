var choices = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0; 
let computerScore = 0;

function getComputerChoice(choices) {
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    var userInput = prompt("Rock, Paper, or Scissors?");
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Invalid input")
    }
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}



function playGame(playRound) {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(choices);
    playRound(humanSelection, computerSelection);

  }

console.log("Game over!");
console.log("Final Human Score: " + humanScore);
console.log("Final Computer Score: " + computerScore);

if (humanScore > computerScore) {
    console.log("Human wins!");
} else if (humanScore < computerScore) {
    console.log("Computer wins!");
} else {
    console.log("It's a tie!");
}

}


playGame(playRound);










