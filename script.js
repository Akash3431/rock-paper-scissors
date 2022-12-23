const getComputerChoice = () =>
{
    let number = Math.random() * 3;

    if (number <= 1)
        return 'rock';
    else if (number <= 2)
        return 'paper';
    else
    {
        return 'scissors';
    }
}

// Function that takes in two string parameters (either rock, paper or scissors)
// Returns the result of the game depending on the user's input and the randomized computer selection
const playRound = (playerSelection, computerSelection) =>
{
    if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        return 'You win! Rock beats Scissors'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        return 'You lose! Paper beats Rock'
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock')
    {
        return 'It\'s a draw!! No one wins'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        return 'You win! Paper beats Rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper')
    {
        return 'It\'s a draw!! No one wins'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {
        return 'You lose! Scissors beats Paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    {
        return 'You lose! Rock beats Scissors'
    }    
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        return 'You win! Scissors beats Paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors')
    {
        return 'It\'s a draw!! No one wins'
    }

}

// Checks if user entered a valid input i.e. either rock, paper, or scissors
function checkIfValid()
{
    
    while (true)
    {   
        let string = prompt('Enter rock, paper, or scissors', ' ')
        string = string.toLowerCase()
        if (string === 'rock' || string === 'scissors' || string === 'paper')
        {
            return string
        }
        console.log('Invalid answer! Please enter rock, paper, or scissors')
    }
}
// One game lasts five rounds.
const game = () =>
{
    // for loop that allows the user to play the game five times
    for (let i =0; i < 5; i++)
    {
        let playerSelection = checkIfValid()
        let computerSelection = getComputerChoice()

        console.log(playRound(playerSelection, computerSelection))
    }
}

game()

//let example = prompt("Choose Rock, Paper, or Scissors")

//const playerSelection = 'rock';
//const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));
