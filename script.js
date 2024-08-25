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