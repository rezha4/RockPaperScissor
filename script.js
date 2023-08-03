const symbols = document.querySelectorAll('img');
let playerScore = 0;
let compScore = 0;
const displayPlayerScore = document.querySelector('#playerScore');
const displayCompScore = document.querySelector('#compScore');

displayPlayerScore.textContent = `Player: ${playerScore}`;
displayCompScore.textContent = `Computer: ${compScore}`;

const displayPlayerSymbol = document.querySelector("#playerChose");
const displayCompSymbol = document.querySelector("#compChose");
const displayResult = document.querySelector("#result");

symbols.forEach((symbol) => {
    symbol.addEventListener('click', () => {
        let comp = RandomizeComputerChoice();
        result = game(symbol.id, comp);

        displayPlayerScore.textContent = `Player: ${playerScore}`;
        displayCompScore.textContent = `Computer: ${compScore}`;

        displayPlayerSymbol.textContent = `Player chose: ${symbol.id}`;
        displayCompSymbol.textContent = `Computer chose: ${comp}`;
        displayResult.textContent = `${result}`

        if (playerScore === 5) {
            setTimeout(() => {
                alert("You Win! Click any symbol to play again.");
                playerScore = 0;
                compScore = 0;
            }, 500)
        }
        else if (compScore === 5) {
            setTimeout(() => {
                alert("You Lose! Click any symbol to play again.");
                playerScore = 0;
                compScore = 0;
            }, 500)
        }
    })
})




function RandomizeComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    if (number <= 30) {
        return "rock";
    }
    else if (number >= 31 && number <= 60) {
        return "paper";
    }
    else {
        return "scissor";
    };
};

function playRound(playerSeletion, computerSelection) {
    if (playerSeletion.toLowerCase() === "rock" && computerSelection === "paper") {
        compScore += 1;
        return "You lose! Paper beats rock!";
    }
    else if (playerSeletion.toLowerCase() === "paper" && computerSelection === "scissor") {
        compScore += 1;
        return "You lose! Scissor beats paper!";
    }
    else if (playerSeletion.toLowerCase() === "scissor" && computerSelection === "rock") {
        compScore += 1;
        return "You lose! Rock beats scissor!";
    }
    else if (playerSeletion.toLowerCase() === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "You win! Paper beats rock!";
    }
    else if (playerSeletion.toLowerCase() === "scissor" && computerSelection === "paper") {
        playerScore += 1;
        return "You win! Scissor beats paper!";
    }
    else if (playerSeletion.toLowerCase() === "rock" && computerSelection === "scissor") {
        playerScore += 1;
        return "You win! Rock beats scissor!";
    }
    else {
        return "Draw!";
    };
};

function game(playerSeletion, computerSelection) {
    let resultOf = playRound(playerSeletion, computerSelection);

    return resultOf;
};

//pseudocode:

// rock paper scissor from console
// 1 round only / 5 ROUND!
// user input "rock", "paper" or "scissor"
// randomly choose for computer
// make a logic to make sure that:
//  rock beat scissor, but lose to paper
//  paper beat rock, but lose to scissor
//  scissor beat paper, but lose to rock
// make user input meets computer choice
// prints win or lose depending on above logic