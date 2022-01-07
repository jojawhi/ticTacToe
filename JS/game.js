

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

        for (const space of gameBoard.spaces) {

            space.addEventListener('click', () => {

                // console.log(this.spaces.indexOf(boardSpace));

                // console.log(boardSpace.innerHTML);


                if (space.innerHTML === '' && this.playerOne.myTurn === true) {

                    gameBoard.placeEx(space);

                } else if (space.innerHTML === '' && this.playerTwo.myTurn === true) {

                    gameBoard.placeOh(space);

                } else {

                    alert('That one is taken! Pick an empty one!');

                }
            });
        }


    }


    createPlayers() {

        const playerOne = new Player();
        const playerTwo = new Player();

        this.playerOne = playerOne.generatePlayerOne();
        this.playerTwo = playerTwo.generatePlayerTwo();

    }

    /*
    checkRow() {



    }

    updateScore() {

    }

    changeTurn() {

        this.playerOne.myTurn = !this.playerOne.myTurn;
        this.playerTwo.myTurn = !this.playerTwo.myTurn;

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