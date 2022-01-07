

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

class Game {
    constructor(board, playerOne, playerTwo) {
        this.board = board,
        this.playerOne = playerOne,
        this.playerTwo = playerTwo
    }

    createGameBoard() {
        const gameBoard = new Gameboard();
        gameBoard.generateGameBoard();
        this.board = gameBoard;
    }


    createPlayers() {
        const playerOne = new Player();
        this.playerOne = playerOne;
        const playerTwo = new Player();
        this.playerTwo = playerTwo;

        playerOne.name = "playerOne";
        playerOne.symbol = "x";
        playerOne.score = 0;
        playerOne.myTurn = true;

        playerTwo.name = "playerTwo";
        playerTwo.symbol = "o";
        playerTwo.score = 0;
        playerTwo.myTurn = false;
    }

    /*
    updateScore() {

    }

    takeTurn() {

    }

    newGame() {

    }

    resetGame() {



    }
    */
}

const newGame = new Game();

newGame.createGameBoard();
newGame.createPlayers();

//let board = new Gameboard();

//board.generateGameBoard();


console.log(newGame);