///Memory varible 
let playerScore = 0;
let computerScore = 0;
let winningNumber  = 10;
const playerNumber_span = document.querySelector('.Player-number');
const computerNumber_span = document.querySelector('.Computer-number');
const scoreNumber = document.querySelector('.Score-number');
const Text_p = document.querySelector('.Text >p');
const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
let winner = document.querySelector('.winner');


///The options the computer has, with every number representing an option r, p, s
function getcomputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}


///Converts the letter into actual words
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
   return "Scissors";
}


///Allows to display win message 
function win(playerchoice, computerchoice) {
    playerScore++;
    playerNumber_span.innerHTML = playerScore;
    computerNumber_span.innerHTML = computerScore;
    Text_p.innerHTML = convertToWord(playerchoice) + " beats " + convertToWord(computerchoice) + ". You win!";
    if (playerScore === winningNumber){
        winner.innerHTML = ("Congratulations! You won the game!");
        setTimeout(function() {
            resetGame();
        }, 3000); 
    } else if (computerScore === winningNumber){
        winner.innerHTML = ("Sorry, you lost the game.");
        setTimeout(function() {
            resetGame();
        }, 3000); 
    }
}

///Allows to display lose message
function lose(playerChoice, computerChoice) {
    computerScore++;
    playerNumber_span.innerHTML = playerScore;
    computerNumber_span.innerHTML = computerScore;
    Text_p.innerHTML = convertToWord(playerChoice) + " loses to " + convertToWord(computerChoice) + ". You lost!!";
    if (playerScore === winningNumber){
        winner,innerHTML = ("Congratulations! You won the game!");
        setTimeout(function() {
            resetGame();
        }, 3000); 
    } else if (computerScore === winningNumber){
        winner.innerHTML = ("Sorry, you lost the game.");
        setTimeout(function() {
            resetGame();
        }, 3000); 
    }
    
}

///Allows to display tie message
function tie(playerChoice, computerChoice) {
    playerNumber_span.innerHTML = playerScore;
    computerNumber_span.innerHTML = computerScore;
    Text_p.innerHTML = convertToWord(playerChoice) + " equals " + convertToWord(computerChoice) + ". It's a tie!";
}

///resets Game autamtically 
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerNumber_span.innerHTML = playerScore;
    computerNumber_span.innerHTML = computerScore;
    winner.innerHTML = "";
}

///Shows the possibilties of win, lose, and tie with the switch case function 
function game(playerChoice) {
    const computerChoice = getcomputerChoice();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(playerChoice, computerChoice);
            break;
    }
}

///It allows that if you click a certain option it's going represent a certain value
    function main() {
    rock.addEventListener('click', function() {
    game("r")
})

    scissors.addEventListener('click', function() {
    game("s")
})

    paper.addEventListener('click', function() {
    game("p")
   })
}

main();
