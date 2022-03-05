const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");
const options = document.querySelectorAll("button");

let userChoice;
let computerChoice;

options.forEach((option) =>
  option.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    // making computer choice
    generatingComputerChoice();

    // showing answer
    if (userChoice === computerChoice) {
      result.innerHTML = "Correct";
    } else {
      result.innerHTML = "Incorrect";
    }
  })
);

// generating computer choice
const generatingComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * options.length + 1);
  if (randomNumber === 1) {
    computerChoice = "rock";
    computerChoiceDisplay.innerHTML = computerChoice;
  } else if (randomNumber === 2) {
    computerChoice = "paper";
    computerChoiceDisplay.innerHTML = computerChoice;
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
    computerChoiceDisplay.innerHTML = computerChoice;
  }
};
