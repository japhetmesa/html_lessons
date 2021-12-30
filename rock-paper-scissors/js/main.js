let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById ("user-score");
const computerScore_span = document.getElementById ("computer-score");
const scoreBoard_div = document.querySelector (".score-board");
const scoreMessage_p = document.querySelector (".score-message");
const action_p = document.querySelector(".action");
const rockBtn_img = document.getElementById("r");
const paperBtn_img = document.getElementById("p");
const scissorsBtn_img = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random ()*3);
    return choices[randomNumber];
}

function convertToReadable (letter){
    switch (letter){
        case "r":
            return "Rock";
            case "p":
                return "Paper";
                case "s":
                    return "Scissors";
    }
}

function win (userChoice, computerChoice){
    /*increase user score*/
    userScore++;
    /*display new user score*/
    userScore_span.innerHTML = userScore;
    /*display win message for user*/
    scoreMessage_p.innerHTML = convertToReadable(userChoice) + " beats " + convertToReadable(computerChoice);
    action_p.innerHTML = "You win!";
}

function lose (userChoice, computerChoice){
    /*increase computer score*/
    computerScore++;
    /*display new computer score*/
    computerScore_span.innerHTML = computerScore;
    /*display win message for user*/
    scoreMessage_p.innerHTML = convertToReadable(userChoice) + " loses to " + convertToReadable(computerChoice);
    action_p.innerHTML = "You lose!";
}

function tie (userChoice, computerChoice){
    scoreMessage_p.innerHTML = convertToReadable(userChoice) + " equals " + convertToReadable(computerChoice);
    action_p.innerHTML = "It's a tie!";
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        /*USER WINS*/
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
            /*COMPUTER WINS*/
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice, computerChoice);
                break;
                /*TIE*/
                case "rr":
                case "pp":
                case "ss":
                    tie(userChoice, computerChoice);
                    break;
    }
}

function main(){
    rockBtn_img.addEventListener('click', function(){
        game("r");
    })
    paperBtn_img.addEventListener('click', function(){
        game("p");
    })
    scissorsBtn_img.addEventListener('click', function(){
        game("s");
    })
}
 main();
