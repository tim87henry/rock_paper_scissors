// Declaring the elements of the game in an array
const weapons=["rock","paper","scissors"]

// This function is to simulate the computer's play
function computerPlay() {
    return weapons[Math.floor(Math.random()*3)];
}

// This function is to convert the first letter of a word to capital, for display purposes
function capsDisplay(word) {
    return word.charAt(0).toUpperCase()+word.slice(1);
}

// This function is to calculate the result for one round of RPS
function gamePlay(playerSelection,computerSelection) {
    let result;
    switch(playerSelection) {
        case "rock":
            if (computerSelection==="paper") {
                result = "Paper covers Rock. You Loose!!";
            } else if (computerSelection==="rock") {
                result = "Tie Game!!";
            } else {
                result = "Rock smashes scissors. You Win!!";
            }
            break;
        case "paper":
            if (computerSelection==="rock") {
                result = "Paper covers Rock. You Win!!";
            } else if (computerSelection==="paper") {
                result = "Tie Game!!";
            } else {
                result = "Scissors cuts paper. You Loose!!";
            }
            break;
        case "scissors":
            if (computerSelection==="paper") {
                result = "Scissors cuts paper. You Win!!";
            } else if (computerSelection==="scissors") {
                result = "Tie Game!!";
            } else {
                result = "Rock smashes scissors. You Loose!!";
            }
            break;
        default:
            result = "Please check your input";
    }
    let report="Computer has chosen "+computerSelection+"<br><br>" + result;
    report=report.concat("<br><br>");
    if(result.search("Win") >= 0) {
        playerPoints++;
        report=report.concat("<br>Your Score : "+playerPoints+"<br>Computer's Score : "+computerPoints);
    } else if (result.search("Loose") >= 0) {
        computerPoints++;
        report=report.concat("<br>Your Score : "+playerPoints+"<br>Computer's Score : "+computerPoints);
    } else {
        report=report.concat("<br>Your Score : "+playerPoints+"<br>Computer's Score : "+computerPoints);
    }
    computerInfo.innerHTML = report;
    return result;
}


// Main program starts here
let playerPoints = 0;
let computerPoints = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const userInfo = document.querySelector('#userInfo');
const computerInfo = document.querySelector('#computerInfo');

btnRock.addEventListener('click', function (e) {
    userInfo.textContent = "You have chosen Rock";
    gamePlay("rock",computerPlay());
});

btnPaper.addEventListener('click', function (e) {
    userInfo.textContent = "You have chosen Paper";
    gamePlay("paper",computerPlay());
});

btnScissors.addEventListener('click', function (e) {
    userInfo.textContent = "You have chosen Scissors";
    gamePlay("scissors",computerPlay());
});
