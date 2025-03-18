/*

- Goal: Create rock paper scissors game with player and computer

1. create a function that generates a random computer choice (rock,paper,scissors)
2. create a function to obtain user choice
3. Declare and track player score variables
4. Write logic to play a round, takes in player and computer choices and increments the winners score after a round and logs a winner announcement
5. Write logic to play an entire game that consists of 5 rounds. Declare a winner at the end

*/
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choiceArr = ["rock", "paper", "scissors"]; // Array holding choices from index 0 to 2
  const randNum = Math.trunc(Math.random() * 3); // Generates random number from 0 to 3 not including 3
  return choiceArr[randNum]; // returns choice using random number as index.
}
function getHumanChoice() {
  const humanChoice = prompt("Rock, paper, or scissors?"); // Prompts user to enter a choice
  return humanChoice.toLowerCase(); // returns the choice as a string to lower case
}
function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        console.log(`You win ${humanChoice} beats ${computerChoice}!`);
      } else if (computerChoice === "paper") {
        console.log(`You lose ${computerChoice} beats ${humanChoice}!`);
      } else {
        console.log(`Its a tie! ${humanChoice} ties with ${computerChoice}`);
      }
      break;
    case "scissors":
      if (computerChoice === "paper") {
        console.log(`You win ${humanChoice} beats ${computerChoice}!`);
      } else if (computerChoice === "rock") {
        console.log(`You lose ${computerChoice} beats ${humanChoice}!`);
      } else {
        console.log(`Its a tie! ${humanChoice} ties with ${computerChoice}`);
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        console.log(`You win ${humanChoice} beats ${computerChoice}!`);
      } else if (computerChoice === "scissors") {
        console.log(`You lose ${computerChoice} beats ${humanChoice}!`);
      } else {
        console.log(`Its a tie! ${humanChoice} ties with ${computerChoice}`);
      }
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(humanChoice, computerChoice);
playRound(humanChoice, computerChoice);
