//forEach error (arrow malformed) SOLVE LATER
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const arena = document.querySelector('.arena');
let playerScore = 0;

rock.addEventListener('click', () => {
    console.log(rock.id);
    const select = document.createElement('h1');
    select.textContent = "you chose ROCK"
    arena.appendChild(select);
    setTimeout(() => {
        arena.removeChild(select);
    }, 2000);
    playerScore += 1;

    const score = document.querySelector('#playerScore');
    console.log(score);
    score.textContent = `Player: ${playerScore}`
    
    if (playerScore == 5) {
        setTimeout(() => {
            alert("WIN WIN");
            playerScore = 0;
            score.textContent = `Player: ${playerScore}`
        }, 500);
        
    };
})

paper.addEventListener('click', () => {
    console.log(paper.id);
})
scissor.addEventListener('click', () => {
    console.log(scissor.id);

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
        return "You lose! Paper beats rock!";
    }
    else if (playerSeletion.toLowerCase() === "paper" && computerSelection === "scissor") {
        return "You lose! Scissor beats paper!";
    }
    else if (playerSeletion.toLowerCase() === "scissor" && computerSelection === "rock") {
        return "You lose! Rock beats scissor!";
    }
    else if (playerSeletion.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
    }
    else if (playerSeletion.toLowerCase() === "scissor" && computerSelection === "paper") {
        return "You win! Scissor beats paper!";
    }
    else if (playerSeletion.toLowerCase() === "rock" && computerSelection === "scissor") {
        return "You win! Rock beats scissor!";
    }
    else {
        return "Draw!";
    };
};

function game() {
    let playerSeletion = "";
    do {
        playerSeletion = prompt("rock/paper/scissor?");
    }
    while (playerSeletion.toLowerCase() != "rock" && playerSeletion.toLowerCase() != "paper" && playerSeletion.toLowerCase() != "scissor");

    let computerSelection = RandomizeComputerChoice();
    console.log(`Computer choses ${computerSelection}`);

    let resultOf = playRound(playerSeletion, computerSelection);
    console.log(resultOf);
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