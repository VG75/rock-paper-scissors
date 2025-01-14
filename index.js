//let userChoice = prompt("Type your choice: ");
let choiceList = ["rock", "paper", "scissors"];
let humanScore = 0, computerScore = 0;

// playGame();



function getComputerChoice() {
   let randomIndex = Math.floor(Math.random() * 3);
   console.log(choiceList[randomIndex]);
   return choiceList[randomIndex];
}

// function getHumanChoice() {
//     let typedChoice = prompt("Type your choice: ");
//     return typedChoice.toLowerCase();
// }

// function playRound () {
//     let computerChoice = getComputerChoice();
//     console.log(`computer choice: ${computerChoice}`);
//     let humanChoice = getHumanChoice();
//     if (computerChoice == humanChoice) {
//         console.log("It's a draw");
//         return;
//     }
//     if (computerChoice == "rock") {

//         if (humanChoice == "paper") {
//             console.log("You win!!");
//             humanScore++;
//         } else {
//             console.log("You Lose!!");
//             computerScore++;
//         }

//     } else if (computerChoice == "paper") {

//         if (humanChoice == "scissors") {
//             console.log("You win!!");
//             humanScore++;
//         } else {
//             console.log("You Lose!!");
//             computerScore++;
//         }

//     } else if (computerChoice == "scissors") {

//         if (humanChoice == "paper") {
//             console.log("You Lose!!");
//             //
//             computerScore++;

//         } else {
//             console.log("You Win!!");
//             humanScore++;
//         }

//     }
// }

// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         playRound();
//     }
//     if (humanScore > computerScore) {
//         console.log("You win the entire game!!!");
//     } else if (humanScore < computerScore) {
//         console.log("You Lost the game!!!");
//     } else {
//         console.log("It's a draw game!!!");
//     }
// }


const choices = document.querySelectorAll(".choices img");

choices.forEach(choice => {
    choice.addEventListener("click", function (e) {
        let findImagePlayer = document.querySelector(".player img");
        let findImageComputer = document.querySelector(".computer img");

        if (findImagePlayer != null) {
            findImagePlayer.remove();
        }
        if (findImageComputer != null) {
            findImageComputer.remove();
        }
        const playerDiv = document.querySelector(".player");
        const computerDiv = document.querySelector(".computer");
        
        const requiredPlayerImageURL = (e.target).getAttribute("src");
        let requiredImage = document.createElement("img");
        let requiredComputerImage = document.createElement("img");

        requiredImage.setAttribute("src", requiredPlayerImageURL);
        playerDiv.insertBefore(requiredImage, playerDiv.children[0]);

        const requiredComputerImageURL = "./public/images/" +  getComputerChoice() + ".png";
        requiredComputerImage.setAttribute("src", requiredComputerImageURL)
        computerDiv.insertBefore(requiredComputerImage, computerDiv.children[0]);
    });
})

