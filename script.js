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
function getHumanChoice() {
  let userChoice = prompt("Enter; Rock, Paper, or Scissors");
  return userChoice;
}
// .toLowerCase() converts the input to lowercase to standardize it, so "rock," "Rock," and "ROCK" are treated the same.
// Validation Loop: A while loop checks if the input is valid. If not, it prompts the user again until a valid input is provided.
// Capitalizing the First Letter: The return value has the first letter capitalized to match the expected format ("Rock," "Paper," or "Scissors"). This also ensures that it works seamlessly with the rest of your game logic.


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(playerChoice, computerChoice) {
      let pChoice = playerChoice.toLowerCase();
      let cChoice = computerChoice.toLowerCase();
  
    if (pChoice === cChoice) {
      console.log('It\'s a tie!');
    }
    else if (pChoice === 'rock' && cChoice === 'scissors') {
      humanScore++;
      console.log('You win! Rock beats scissors!');
    }
    else if (pChoice === 'paper' && cChoice === 'rock') {
      humanScore++;
      console.log('You win! Paper beats rock!');
    }
    else if (pChoice === 'scissors' && cChoice === 'paper') {
      humanScore++;
      console.log('You win! Scissors beats paper!');
    }
    else if (cChoice === 'rock' && pChoice === 'scissors') {
      computerScore++;
      console.log('You lose! Rock beats scissors!');
    }
    else if (cChoice === 'paper' && pChoice === 'rock') {
      computerScore++;
      console.log('You lose! Paper beats rock!')
    }
    else if (cChoice === 'scissors' && pChoice === 'paper') {
      computerScore++;
      console.log('You lose! Scissors beats paper!');
    }
  }
  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice())
  }
  console.log(`Human Score: ${humanScore}`, `Computer Score: ${computerScore}`)
  if (humanScore > computerScore) {
    console.log("Human Wins!")
  }
  else {
    console.log("Computer Wins");
  }
}
playGame() 