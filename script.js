// global score variables

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let getRandomNumber = () => {
    return Math.floor(Math.random() * 3) + 1;
  };
  let computeRandomNumber = getRandomNumber();
  switch (computeRandomNumber) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
}
/*
Math.random() generates a decimal between 0 (inclusive) and 1 (exclusive).
Math.random() * 3 generates a decimal between 0 and 3 (but less than 3).
Math.floor(Math.random() * 3) converts this into an integer 0, 1, or 2.
Adding 1 shifts the range to 1, 2, or 3, which corresponds to "Rock," "Paper," or "Scissors."
*/
// .toLowerCase() converts the input to lowercase to standardize it, so "rock," "Rock," and "ROCK" are treated the same.
// Validation Loop: A while loop checks if the input is valid. If not, it prompts the user again until a valid input is provided.
// Capitalizing the First Letter: The return value has the first letter capitalized to match the expected format ("Rock," "Paper," or "Scissors"). This also ensures that it works seamlessly with the rest of your game logic.

function playRound(playerChoice, computerChoice){
  let pChoice = playerChoice.toLowerCase();
  let cChoice = computerChoice.toLowerCase();


  if (pChoice === cChoice) {
    roundResults.textContent = "It's a tie!";
  }
  else if (pChoice === 'rock' && cChoice === 'scissors') {
    humanScore++;
    roundResults.textContent = 'You win! Rock beats scissors!';
  }
  else if (pChoice === 'paper' && cChoice === 'rock') {
    humanScore++;
    roundResults.textContent = 'You win! Paper beats rock!';
  }
  else if (pChoice === 'scissors' && cChoice === 'paper') {
    humanScore++;
    roundResults.textContent = 'You win! Scissors beats paper!';
  }
  else if (cChoice === 'rock' && pChoice === 'scissors') {
    computerScore++;
    roundResults.textContent = 'You lose! Rock beats scissors!';
  }
  else if (cChoice === 'paper' && pChoice === 'rock') {
    computerScore++;
    roundResults.textContent = 'You lose! Paper beats rock!';
  }
  else if (cChoice === 'scissors' && pChoice === 'paper') {
    computerScore++;
    roundResults.textContent = 'You lose! Scissors beats paper!';
  }

  if (humanScore === 5) {
    roundResults.textContent = "Game over! You Won!!!";
    humanScore = 0, computerScore = 0
  }
  else if (computerScore === 5) {
    roundResults.textContent = "Game over! You Lost!!!";
    humanScore = 0, computerScore = 0;
  }

  playerRunningScore.textContent = `Player Score: ${humanScore}`;
  computerRunningScore.textContent = `Computer Score: ${computerScore}`;
}

function playGame() {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let choice = event.target.id;
        playRound(choice, getComputerChoice());
  
    })
  })
  
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors");

const buttons = document.querySelectorAll(".buttons")

let playerRunningScore = document.querySelector("#player-score");
let computerRunningScore = document.querySelector("#computer-score");
let roundResults = document.querySelector("#round-results");

playGame();