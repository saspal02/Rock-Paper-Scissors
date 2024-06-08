var choices = ['rock', 'paper', 'scissors'];

let humanScore = 0; 
let computerScore = 0;

const Rock = document.querySelector("#rock-el");
const Paper = document.querySelector("#paper-el");
const Scissors = document.querySelector("#scissors-el");
const scoreDisplay = document.getElementById('score-el');
const resultDisplay = document.getElementById('result-el');

function getComputerChoice(choices) {
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerChoice = getComputerChoice(choices);
    const humanChoice = playerSelection.toLowerCase();

    resultDisplay.textContent = "You chose: " + humanChoice + ". ";
    resultDisplay.textContent += "Computer chose: " + computerChoice + ". ";

    if (humanChoice === computerChoice) {
        resultDisplay.textContent += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDisplay.textContent += "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else {
        resultDisplay.textContent += "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }

    scoreDisplay.textContent = "Human Score: " + humanScore + " | Computer Score: " + computerScore;
    
    // Check for game over condition
    if (humanScore >= 5 || computerScore >= 5) {
        resultDisplay.textContent = "Game over! ";
        scoreDisplay.textContent = "Final Human Score: " + humanScore + " | Final Computer Score: " + computerScore;
        if (humanScore > computerScore) {
            resultDisplay.textContent += "Human wins the game!";
        } else if (humanScore < computerScore) {
            resultDisplay.textContent += "Computer wins the game!";
        } else {
            resultDisplay.textContent += "It's a tie!";
        }
        // Disable the buttons
        Rock.disabled = true;
        Paper.disabled = true;
        Scissors.disabled = true;
    }
}

Rock.addEventListener('click', function() {
    playRound('rock');
});

Paper.addEventListener('click', function() {
    playRound('paper');
});

Scissors.addEventListener('click', function() {
    playRound('scissors');
});











