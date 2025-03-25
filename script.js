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

  const roundInfo = document.createElement("div");
  roundInfo.id = "roundInfo";
  roundInfo.style.marginTop = "50px";
  roundInfo.style.fontWeight = "bolder";
  roundInfo.style.fontSize = "2rem";

  const scoreDisplay = document.createElement("div");
  scoreDisplay.id = "scoreDisplay";
  scoreDisplay.style.fontSize = "1.5rem";
  scoreDisplay.style.marginTop = "20px";
  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  document.body.appendChild(scoreDisplay);

  const rockBtn = document.createElement("button");
  rockBtn.textContent = "Rock";
  rockBtn.id = "rockBtn";
  const paperBtn = document.createElement("button");
  paperBtn.textContent = "Paper";
  paperBtn.id = "paperBtn";
  const scissorsBtn = document.createElement("button");
  scissorsBtn.textContent = "Scissors";
  scissorsBtn.id = "scissorBtn";

  const buttons = [rockBtn, paperBtn, scissorsBtn];

  const buttonDiv = document.createElement("div");
  buttonDiv.style.display = "flex";
  buttonDiv.style.gap = "10px";
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      playRound(e.target.textContent.toLowerCase(), getComputerChoice());
      scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

      if (playerScore === 5 || computerScore === 5) {
        roundInfo.textContent =
          playerScore === 5 ? "Human wins!" : "Computer Wins!";

        playerScore = 0;
        computerScore = 0;
      }
    });
    buttonDiv.appendChild(btn);
  });

  document.body.appendChild(buttonDiv);
  document.body.appendChild(roundInfo);

  function playRound(humanChoice, computerChoice) {
    // switch goes through 3 possible human choices and compares the choice to the computer choice using if else and else if statements, checks for winning case first, then losing case, then tie case

    switch (humanChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          roundInfo.textContent = `You win ${humanChoice} beats ${computerChoice}!`;
          playerScore++;
        } else if (computerChoice === "paper") {
          roundInfo.textContent = `You lose ${computerChoice} beats ${humanChoice}!`;
          computerScore++;
        } else {
          roundInfo.textContent = `Its a tie! ${humanChoice} ties with ${computerChoice}`;
        }
        break;
      case "scissors":
        if (computerChoice === "paper") {
          roundInfo.textContent = `You win ${humanChoice} beats ${computerChoice}!`;
          playerScore++;
        } else if (computerChoice === "rock") {
          roundInfo.textContent = `You lose ${computerChoice} beats ${humanChoice}!`;
          computerScore++;
        } else {
          roundInfo.textContent = `Its a tie! ${humanChoice} ties with ${computerChoice}`;
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          roundInfo.textContent = `You win ${humanChoice} beats ${computerChoice}!`;
          playerScore++;
        } else if (computerChoice === "scissors") {
          roundInfo.textContent = `You lose ${computerChoice} beats ${humanChoice}!`;
          computerScore++;
        } else {
          roundInfo.textContent = `Its a tie! ${humanChoice} ties with ${computerChoice}`;
        }
    }
  }

  //   for (let i = 0; i < 5; i++) {
  //     // gets the two choices human / computer (re called next loop)

  //     const humanChoice = getHumanChoice();
  //     const computerChoice = getComputerChoice();

  //     // plays one round with current choices
  //     playRound(humanChoice, computerChoice);
  //   }

  //   const winningMessage =
  //     playerScore > computerScore
  //       ? `Congratulations you win!
  //       Player Score: ${playerScore}
  //       Computer Score: ${computerScore}`
  //       : `Womp, Womp, you lose!
  //       Player Score: ${playerScore}
  //       Computer Score: ${computerScore}`;
  //   return winningMessage;
  // }

  // roundInfo.textContent = (playGame());
}

document.addEventListener("DOMContentLoaded", playGame);
