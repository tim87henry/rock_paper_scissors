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
    if(playerPoints === 5) {
        report=report.concat("<br><br>Congratulations. You won the battle.<br><br>");
    } else if (computerPoints === 5) {
        report=report.concat("<br><br>Sorry, you lost this battle. But the war isn't over.<br><br>");
    }
    computerInfo.innerHTML = report;
    if(playerPoints === 5 || computerPoints === 5) {
        endGame();      
    }
    return result;
}

function endGame () {
    playerPoints = 0;
    computerPoints = 0;
    activeGame = false;
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('id','restartGame');
    restartBtn.textContent = "Restart Game";
    restartBtn.style.backgroundColor = 'darkgreen';
    restartBtn.style.color = 'white';
    restartBtn.style.border = 0;
    restartBtn.style.height = '40px';
    restartBtn.style.textAlign = 'center';
    restartBtn.style.cursor = 'pointer';
    restartBtn.style.paddingLeft = '20px';
    restartBtn.style.paddingRight = '20px';
    restartBtn.style.fontSize = '16px';
    computerInfo.appendChild(restartBtn);
    
    restartBtn.addEventListener('click', function (e) {
        activeGame = true;
        userInfo.textContent = "";
        computerInfo.textContent = "";
    });
}

// Main program starts here
let playerPoints = 0;
let computerPoints = 0;
let activeGame = true;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const userInfo = document.querySelector('#userInfo');
const computerInfo = document.querySelector('#computerInfo');

btnRock.addEventListener('click', function (e) {
    if (activeGame) {
        userInfo.textContent = "You have chosen Rock";
        gamePlay("rock",computerPlay());
    }
});

btnPaper.addEventListener('click', function (e) {
    if (activeGame) {
        userInfo.textContent = "You have chosen Paper";
        gamePlay("paper",computerPlay());
    }
});

btnScissors.addEventListener('click', function (e) {
    if (activeGame) {
        userInfo.textContent = "You have chosen Scissors";
        gamePlay("scissors",computerPlay());
    }
});
