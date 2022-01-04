

/*

Player function

- Assign player name
- Choose player symbol

Player 1 object

Player 2 object

GameBoard function

- generate gameBoard
    - store spaces as array inside gameboard object

Game function

- Assign player symbol to square on click/tap
    - loop to add event listeners
    - append player symbol as child to 'this'
- Check if any player has a row
    - win conditions:
        - 123 (first row)
        - 456 (second row)
        - 789 (third row)
        - 159 (diagonal left)
        - 357 (diagonal right)
        - 147 (first column)
        - 258 (second column)
        - 369 (third column)
- Animate a line over the winning row
    - remove hidden class from winLine
    - add class for appropriate row
- Increase a player's score if they win
- Play again button
    - reset game board
    - preserve score
- Reset button
    - reset game board
    - reset score


*/

const generateGameBoard = () => {
    const gameBoard = {};
    gameBoard.spaces = [document.querySelectorAll('.boardSpace')];
    console.log(gameBoard.spaces[0]);
    console.log(this);
}

generateGameBoard();