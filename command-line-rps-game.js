// Just run node <filename> to paly the game.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Let's Play Rock, Paper, Scissors against the computer!");

let readUserAnswer = function () {
  let playerFinalChoice = null;

  const choices = ["Rock", "Paper", "Scissors"];

  let computerChoice = (function getRandomInt() {
    return Math.floor(Math.random() * 3);
  })();

  const computerFinalChoice = choices[computerChoice].toLocaleLowerCase();

  rl.question("Whats your choice: ", function (string) {
    let userInput = string.toLocaleLowerCase();

    function inputCheck() {
      if (
        !userInput ||
        (userInput != "rock" && userInput != "paper" && userInput != "scissors")
      ) {
        console.log(
          "You can only choose rock, paper, or scissors. Choose again."
        );
        readUserAnswer();
      } else {
        playerFinalChoice = userInput;
        console.log("You picked: " + playerFinalChoice);
        console.log("The Computer picked: " + computerFinalChoice);
        if (playerFinalChoice === computerFinalChoice) {
          console.log("Its a draw!");
          return rl.close();
        } else if (
          playerFinalChoice === "rock" &&
          computerFinalChoice != "paper"
        )
          console.log("You win!");
        else if (
          playerFinalChoice === "paper" &&
          computerFinalChoice != "scissors"
        )
          console.log("You win!");
        else if (
          playerFinalChoice === "scissors" &&
          computerFinalChoice !== "rock"
        )
          console.log("You win!");
        else console.log("You lose :(");
        return rl.close();
      }
    }
    inputCheck(userInput);
  });
};
readUserAnswer();
