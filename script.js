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
