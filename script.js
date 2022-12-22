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

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
