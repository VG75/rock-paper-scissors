let choiceList = ["rock", "paper", "scissors"];
let humanScore = 0, computerScore = 0;

// Cache DOM elements to avoid repeated selection
const playerScoreElement = document.querySelector(".player h3");
const computerScoreElement = document.querySelector(".computer h3");
const headingElement = document.querySelector(".container h4");
const playerDiv = document.querySelector(".player");
const computerDiv = document.querySelector(".computer");
const choicesContainer = document.querySelector(".choices");

// Function to get the computer's choice
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choiceList[randomIndex];
}

// Function to reset scores and update the DOM
function resetScores() {
    humanScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = "Player: 0";
    computerScoreElement.textContent = "Computer: 0";
}

// Function to update the heading message
function updateHeading(message) {
    headingElement.textContent = message;
}

// Function to render an image in the specified container
function renderImage(parentDiv, imgSrc) {
    let existingImage = parentDiv.querySelector("img");
    if (existingImage) {
        existingImage.remove();
    }

    let newImage = document.createElement("img");
    newImage.setAttribute("src", imgSrc);
    parentDiv.insertBefore(newImage, parentDiv.children[0]);
}

// Function to get the image path based on the choice
function getImagePath(choice) {
    return `./public/images/${choice}.png`;
}

// Winning logic using a map
const winningMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

// Function to handle one round of the game
function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        updateHeading("It's a tie!!!");
        return;
    }

    if (winningMap[humanChoice] === computerChoice) {
        humanScore++;
        updateHeading("You Win!!!");
        playerScoreElement.textContent = `Player: ${humanScore}`;
    } else {
        computerScore++;
        updateHeading("You Lose!!!");
        computerScoreElement.textContent = `Computer: ${computerScore}`;
    }
}

// Event listener for handling user clicks on choices
choicesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        // Get player and computer choices
        let personChoice = e.target.getAttribute("src").split('/').pop().split('.')[0];
        let computerChoice = getComputerChoice();

        // Render the player and computer choices
        renderImage(playerDiv, e.target.getAttribute("src"));
        renderImage(computerDiv, getImagePath(computerChoice));

        // Play a round
        playRound(computerChoice, personChoice);

        // Check for a winner and reset scores if necessary
        if (humanScore === 3 || computerScore === 3) {
            updateHeading(humanScore === 3 ? "You Win this Round!!!" : "You Lose this Round!!!");
            resetScores();
        }
    }
});
