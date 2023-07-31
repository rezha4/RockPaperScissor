const ROUNDS = 5

game()






















function RandomizeComputerChoice(number) {
    if (number <= 30) {
        return "rock"
    }
    else if (number >= 31 && number <= 60) {
        return "paper"
    }
    else {
        return "scissor"
    }
}

function playRound(playerSeletion, computerSelection) {
    if (playerSeletion.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!"
    }
    else if (playerSeletion.toLowerCase() === "paper" && computerSelection === "scissor") {
        return "You lose! Scissor beats paper!"
    }
    else if (playerSeletion.toLowerCase() === "scissor" && computerSelection === "rock") {
        return "You lose! Rock beats scissor!"
    }
    else if (playerSeletion.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!"
    }
    else if (playerSeletion.toLowerCase() === "scissor" && computerSelection === "paper") {
        return "You win! Scissor beats paper!"
    }
    else if (playerSeletion.toLowerCase() === "rock" && computerSelection === "scissor") {
        return "You win! Rock beats scissor!"
    }
    else {
        return "Draw!"
    }
}

function game() {
    for (let i = 0; i < ROUNDS; i++) {
        let playerSeletion
        do {
            playerSeletion = prompt("rock/paper/scissor?")
        }
        while (playerSeletion.toLowerCase() != "rock" && playerSeletion.toLowerCase() != "paper" && playerSeletion.toLowerCase() != "scissor")

        computerSelection = RandomizeComputerChoice(Math.floor(Math.random() * 100))
        alert(`Computer choses ${computerSelection}`)

        let resultOf = playRound(playerSeletion, computerSelection)
        alert(resultOf)
    }
}

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