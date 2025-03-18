/*

- Goal: Create rock paper scissors game with player and computer

1. create a function that generates a random computer choice (rock,paper,scissors)
2. create a function to obtain user choice
3. Declare and track player score variables
4. Write logic to play a round, takes in player and computer choices and increments the winners score after a round and logs a winner announcement
5. Write logic to play an entire game that consists of 5 rounds. Declare a winner at the end

*/

function getComputerChoice() {
  const choiceArr = ["rock", "paper", "scissors"]; // Array holding choices from index 0 to 2
  const randNum = Math.trunc(Math.random() * 3); // Generates random number from 0 to 3 not including 3
  return choiceArr[randNum]; // returns choice using random number as index.
}
function getHumanChoice() {
  const humanChoice = prompt("Rock, paper, or scissors?"); // Prompts user to enter a choice
  return humanChoice.toLowerCase(); // returns the choice as a string to lower case
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // switch goes through 3 possible human choices and compares the choice to the computer choice using if else and else if statements, checks for winning case first, then losing case, then tie case

    switch (humanChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          console.log(`You win ${humanChoice} beats ${computerChoice}!`);
          playerScore++;
        } else if (computerChoice === "paper") {
          console.log(`You lose ${computerChoice} beats ${humanChoice}!`);
          computerScore++;
        } else {
          console.log(`Its a tie! ${humanChoice} ties with ${computerChoice}`);
        }
        break;
      case "scissors":
        if (computerChoice === "paper") {
          console.log(`You win ${humanChoice} beats ${computerChoice}!`);
          playerScore++;
        } else if (computerChoice === "rock") {
          console.log(`You lose ${computerChoice} beats ${humanChoice}!`);
          computerScore++;
        } else {
          console.log(`Its a tie! ${humanChoice} ties with ${computerChoice}`);
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          console.log(`You win ${humanChoice} beats ${computerChoice}!`);
          playerScore++;
        } else if (computerChoice === "scissors") {
          console.log(`You lose ${computerChoice} beats ${humanChoice}!`);
          computerScore++;
        } else {
          console.log(`Its a tie! ${humanChoice} ties with ${computerChoice}`);
        }
    }
  }

  for (let i = 0; i < 5; i++) {
    // gets the two choices human / computer (re called next loop)

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    // plays one round with current choices
    playRound(humanChoice, computerChoice);
  }

  const winningMessage =
    playerScore > computerScore
      ? `Congratulations you win! 
      Player Score: ${playerScore}
      Computer Score: ${computerScore}`
      : `Womp, Womp, you lose!
      Player Score: ${playerScore}
      Computer Score: ${computerScore}`;
  return winningMessage;
}

console.log(playGame());
