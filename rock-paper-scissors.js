document.getElementById("rock").addEventListener("click", rockFunction);
document.getElementById("paper").addEventListener("click", paperFunction);
document.getElementById("scissors").addEventListener("click", scissorsFunction);
let playerScore = parseInt(document.getElementById("player-score").innerText);
let computerScore = parseInt(
  document.getElementById("computer-score").innerText
);
const choices = ["Rock", "Paper", "Scissors"];
let computerFinalChoice = null;

function rockFunction() {
  const computerFinalChoice = computersChoice();
  compareResults(choices[0], computerFinalChoice);
}

function paperFunction() {
  const computerFinalChoice = computersChoice();
  compareResults(choices[1], computerFinalChoice);
  console.log(computerFinalChoice);
}

function scissorsFunction() {
  const computerFinalChoice = computersChoice();
  compareResults(choices[2], computerFinalChoice);
}

function compareResults(choiceArrayPosition, computerFinalChoice) {
  let userInput = choiceArrayPosition.toLocaleLowerCase();
  if (userInput === computerFinalChoice) {
    document.querySelector(".result-style").style.color = "orange";
    document.querySelector(".result-style").style.display = "flex";
    document.querySelector(".result-style").innerHTML = "It's a draw!";
  } else if (userInput === "rock" && computerFinalChoice != "paper") {
    document.querySelector(".result-style").style.color = "green";
    document.querySelector(".result-style").style.display = "flex";
    document.querySelector(".result-style").innerHTML = "You win!";
    document.getElementById("player-score").innerText = playerScore += 1;
  } else if (userInput === "paper" && computerFinalChoice != "scissors") {
    document.querySelector(".result-style").style.color = "green";
    document.querySelector(".result-style").style.display = "flex";
    document.querySelector(".result-style").innerHTML = "You win!";
    document.getElementById("player-score").innerText = playerScore += 1;
  } else if (userInput === "scissors" && computerFinalChoice !== "rock") {
    document.querySelector(".result-style").style.color = "green";
    document.querySelector(".result-style").style.display = "flex";
    document.querySelector(".result-style").innerHTML = "You win!";
    document.getElementById("player-score").innerText = playerScore += 1;
  } else {
    document.querySelector(".result-style").style.color = "red";
    document.querySelector(".result-style").style.display = "flex";
    document.querySelector(".result-style").innerHTML = "You lose";
    document.getElementById("computer-score").innerText = computerScore += 1;
  }
  return;
}

function computersChoice() {
  let computerChoice = (function getRandomInt() {
    return Math.floor(Math.random() * 3);
  })();

  const computerFinalChoice = choices[computerChoice].toLocaleLowerCase();

  if (computerFinalChoice === "rock") {
    document.getElementById("computer-image").src =
      "https://www.shareicon.net/data/512x512/2016/11/14/851912_hand-o-rock_512x512.png";
  }
  if (computerFinalChoice === "paper") {
    document.getElementById("computer-image").src =
      "https://www.shareicon.net/data/512x512/2016/02/29/726566_hand_512x512.png";
  }
  if (computerFinalChoice === "scissors") {
    document.getElementById("computer-image").src =
      "https://www.shareicon.net/data/512x512/2016/11/14/851911_hand-o-scissors_512x512.png";
  }
  return computerFinalChoice;
}
