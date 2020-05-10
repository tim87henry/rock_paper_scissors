const weapons=["Rock","Paper","Scissors"]

function computerPlay() {
    return weapons[Math.floor(Math.random()*3)];
}

function gamePlay(playerSelection,computerSelection) {
    let result;
    switch(playerSelection) {
        case "Rock":
            if (computerSelection==="Paper") {
                result = "YOU : "+playerSelection+"\nComputer : "+computerSelection+"\nPaper covers Rock. You Loose!!";
            } else if (computerSelection==="Rock") {
                result = "YOU : "+playerSelection+"\nComputer : "+computerSelection+"\nTie Game!!";
            } else {
                result = "YOU : "+playerSelection+"\nComputer : "+computerSelection+"\nRock smashes scissors. You Win!!";
            }
            break;
        case "Paper":
            if (computerSelection==="Rock") {
                result = "YOU : "+playerSelection+"\nComputer : "+computerSelection+"\nPaper covers Rock. You Win!!";
            } else if (computerSelection==="Paper") {
                result = "YOU : "+playerSelection+"\nComputer : "+computerSelection+"\nTie Game!!";
            } else {
                result = "YOU : "+playerSelection+"\nComputer : "+computerSelection+"\nScissors cuts paper. You Loose!!";
            }
            break;
        case "Scissors":
            if (computerSelection==="Paper") {
                result = "YOU : "+playerSelection+"\nComputer : "+computerSelection+"\nScissors cuts paper. You Win!!";
            } else if (computerSelection==="Scissors") {
                result = "YOU : "+playerSelection+"\nComputer : "+computerSelection+"\nTie Game!!";
            } else {
                result = "YOU : "+playerSelection+"\nComputer : "+computerSelection+"\nRock smashes scissors. You Loose!!";
            }
            break;
        default:
            result = "Please check your input";
    }
    return result;
}

let choice=prompt("What do you choose?")
alert(gamePlay(choice,computerPlay()));
