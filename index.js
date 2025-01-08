//let userChoice = prompt("Type your choice: ");
let choiceList = ["rock", "paper", "scissors"];
let humanScore = 0, computerScore = 0;

playGame();



function getComputerChoice() {
   let randomIndex = Math.floor(Math.random() * 3);
   return choiceList[randomIndex];
}

function getHumanChoice() {
    let typedChoice = prompt("Type your choice: ");
    return typedChoice.toLowerCase();
}

function playRound () {
    let computerChoice = getComputerChoice();
    console.log(`computer choice: ${computerChoice}`);
    let humanChoice = getHumanChoice();
    if (computerChoice == humanChoice) {
        console.log("It's a draw");
        return;
    }
    if (computerChoice == "rock") {

        if (humanChoice == "paper") {
            console.log("You win!!");
            humanScore++;
        } else {
            console.log("You Lose!!");
            computerScore++;
        }

    } else if (computerChoice == "paper") {

        if (humanChoice == "scissors") {
            console.log("You win!!");
            humanScore++;
        } else {
            console.log("You Lose!!");
            computerScore++;
        }

    } else if (computerChoice == "scissors") {

        if (humanChoice == "paper") {
            console.log("You Lose!!");
            //
            computerScore++;

        } else {
            console.log("You Win!!");
            humanScore++;
        }

    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("You win the entire game!!!");
    } else if (humanScore < computerScore) {
        console.log("You Lost the game!!!");
    } else {
        console.log("It's a draw game!!!");
    }
}