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

function playRound (computerChoice, humanChoice) {
    const getPlayerScore = document.querySelector(".player h3");
    const getComputerScore = document.querySelector(".computer h3");
    const getHeading = document.querySelector(".container h4");
    if (computerChoice == humanChoice) {
        getHeading.textContent = "It's a tie!!!";
        return;
    }
    if (computerChoice == "rock") {

        if (humanChoice == "paper") {
            humanScore++;
            getHeading.textContent = "You Win!!!";
            getPlayerScore.textContent = `Player: ${humanScore}`;
        } else {
            computerScore++;
            getHeading.textContent = "You Lose!!!";
            getComputerScore.textContent = `Computer: ${computerScore}`;
        }

    } else if (computerChoice == "paper") {

        if (humanChoice == "scissors") {
            humanScore++;
            getHeading.textContent = "You Win!!!";
            getPlayerScore.textContent = `Player: ${humanScore}`;
        } else {
            computerScore++;
            getComputerScore.textContent = `Computer: ${computerScore}`;
            getHeading.textContent = "You Lose!!!";
        }

    } else if (computerChoice == "scissors") {

        if (humanChoice == "paper") {
            computerScore++;
            getComputerScore.textContent = `Computer: ${computerScore}`;
            getHeading.textContent = "You Lose!!!";

        } else {
            humanScore++;
            getHeading.textContent = "You Win!!!";
            getPlayerScore.textContent = `Player: ${humanScore}`;
        }

    }
    return;
}




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

        let computerChoice = getComputerChoice();
        let personChoice = (e.target).getAttribute("src").split('/').pop().split('.')[0];

        const playerDiv = document.querySelector(".player");
        const computerDiv = document.querySelector(".computer");

        const requiredComputerImageURL= "./public/images/" +  computerChoice + ".png";
        const requiredPlayerImageURL = (e.target).getAttribute("src");

        let requiredImage = document.createElement("img");
        requiredImage.setAttribute("src", requiredPlayerImageURL);
        playerDiv.insertBefore(requiredImage, playerDiv.children[0]);
        
        let requiredComputerImage = document.createElement("img");
        requiredComputerImage.setAttribute("src", requiredComputerImageURL);
        computerDiv.insertBefore(requiredComputerImage, computerDiv.children[0]);

        playRound(computerChoice, personChoice);

       if (humanScore == 3) {
            const getHeading = document.querySelector(".container h4");
            getHeading.textContent = "You Win this Round!!!";
            computerScore = 0;
            humanScore = 0;
            document.querySelector(".player h3").textContent = "Player: 0";
            document.querySelector(".computer h3").textContent = "Computer: 0";
       }

       if (computerScore == 3) {
        const getHeading = document.querySelector(".container h4");
        getHeading.textContent = "You Lose this Round!!!";
        computerScore = 0;
        humanScore = 0;
        document.querySelector(".player h3").textContent = "Player: 0";
        document.querySelector(".computer h3").textContent = "Computer: 0";
   }
        
        
    });
})

