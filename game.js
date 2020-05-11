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
                result = "You : "+capsDisplay(playerSelection)+"\nComputer : "+capsDisplay(computerSelection)+"\nPaper covers Rock. You Loose!!";
            } else if (computerSelection==="rock") {
                result = "You : "+capsDisplay(playerSelection)+"\nComputer : "+capsDisplay(computerSelection)+"\nTie Game!!";
            } else {
                result = "You : "+capsDisplay(playerSelection)+"\nComputer : "+capsDisplay(computerSelection)+"\nRock smashes scissors. You Win!!";
            }
            break;
        case "paper":
            if (computerSelection==="rock") {
                result = "You : "+capsDisplay(playerSelection)+"\nComputer : "+capsDisplay(computerSelection)+"\nPaper covers Rock. You Win!!";
            } else if (computerSelection==="paper") {
                result = "You : "+capsDisplay(playerSelection)+"\nComputer : "+capsDisplay(computerSelection)+"\nTie Game!!";
            } else {
                result = "You : "+capsDisplay(playerSelection)+"\nComputer : "+capsDisplay(computerSelection)+"\nScissors cuts paper. You Loose!!";
            }
            break;
        case "scissors":
            if (computerSelection==="paper") {
                result = "You : "+capsDisplay(playerSelection)+"\nComputer : "+capsDisplay(computerSelection)+"\nScissors cuts paper. You Win!!";
            } else if (computerSelection==="scissors") {
                result = "You : "+capsDisplay(playerSelection)+"\nComputer : "+capsDisplay(computerSelection)+"\nTie Game!!";
            } else {
                result = "You : "+capsDisplay(playerSelection)+"\nComputer : "+capsDisplay(computerSelection)+"\nRock smashes scissors. You Loose!!";
            }
            break;
        default:
            result = "Please check your input";
    }
    return result;
}

// This function is to invoke 5 rounds and to display the final results 
function game() {
	for (i = 0; i < 5; i++) {
		let choice=prompt("Choose your weapon wisely. Rock, Paper or Scissors?").toLowerCase();
		result = gamePlay(choice,computerPlay());
		console.log(result);
		if(result.search("Win") >= 0) {
			playerPoints++;
			console.log("Your Score : "+playerPoints+"\tComputer's Score : "+computerPoints);
		} else if (result.search("Loose") >= 0) {
			computerPoints++;
			console.log("Your Score : "+playerPoints+"\tComputer's Score : "+computerPoints);
		} else {
			console.log("Your Score : "+playerPoints+"\tComputer's Score : "+computerPoints);
		}
	}
	if (playerPoints >  computerPoints) {
		console.log("You're the champ!!");
	} else if (playerPoints <  computerPoints) {
		console.log("Haha.. What a Loser!!");
	} else {
		console.log("Even Stevens!!");
	}
}


// Main program starts here
let playerPoints = 0;
let computerPoints = 0;
alert("Please open your browser's console to play the game.")
game();