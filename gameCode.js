const computerMoves = ["Rock", "Paper", "Scissors"];
const playerMoves = document.querySelectorAll("button");

let input = '';
let i = 1;
let playerScore = 0;
let computerScore = 0;

// For Moves Section
let movesText = document.querySelector("#movesText");
// For Results Section
let roundsCounter = document.querySelector("#roundsCounter");
let outcomeText = document.querySelector("#outcomeText");
// For Scores Section
let playerScoreCounter = document.querySelector("#playerScoreCounter");
let computerScoreCounter = document.querySelector("#computerScoreCounter");

function computerInput() {
    /*
    This function randomly picks between "Rock," "Paper," and "Scissors."
    */
    selection = Math.floor(Math.random() * 3);
    return computerMoves[selection];
}

function playRound(playerSelection, computerSelection) {
    /*
    This function calls the previous two functions, then compares the output of the two. Then, it either states that the match was a tie, the player won, or the player lost.
    */
    playerSelection = input;
    computerSelection = computerInput();

    playerAndComputerChoices = document.createElement('p');
    playerAndComputerChoices.textContent = `You picked ${playerSelection}. The computer picked ${computerSelection}.`;
    movesText.textContent = '';
    movesText.appendChild(playerAndComputerChoices);

    // Win Conditions
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Win";
    } else {
        return "Lose";
    }
}

function playGame() {
    playRound();
    let outcome = playRound();

    let roundsPlayed = document.createElement('p');
    let winOrLose = document.createElement('p');

    let playerScoreNumber = document.createElement('p');
    let computerScoreNumber = document.createElement('p');

    roundsPlayed.textContent = i;
    i++;

    if (outcome == "Tie") {
        winOrLose.textContent = `It's a tie.`
    } else if (outcome == "Win") {
        winOrLose.textContent = `You win!`;

        playerScore += 1;
        if (playerScore == 5) {
            winOrLose.textContent = `Congratulations! You've won five rounds!`
        }
    } else {
        winOrLose.textContent = `You lose!`

        computerScore += 1;
        if (computerScore == 5) {
            winOrLose.textContent = `Oof! The computer has won five rounds!`
        }
    }
    input = '';

    playerScoreNumber.textContent = playerScore;
    computerScoreNumber.textContent = computerScore;

    roundsCounter.textContent = '';
    roundsCounter.appendChild(roundsPlayed);
    outcomeText.textContent = '';
    outcomeText.appendChild(winOrLose);

    playerScoreCounter.textContent = '';
    playerScoreCounter.appendChild(playerScoreNumber);
    computerScoreCounter.textContent = '';
    computerScoreCounter.appendChild(computerScoreNumber);
}

playerMoves.forEach((button) => {
    button.addEventListener("click", () => {
        input += button.id;

        playGame();
    });
});

// If you're reading this, you're a massive nerd, lol, but hey, so am I =3
