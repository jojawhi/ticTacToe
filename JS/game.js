

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
        - 012 (first row)
        - 345 (second row)
        - 678 (third row)
        - 048 (diagonal left)
        - 246 (diagonal right)
        - 036 (first column)
        - 147 (second column)
        - 258 (third column)
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

            const value = space.getAttribute('value');

            space.addEventListener('click', () => {

                if (space.innerHTML === '' && this.playerOne.myTurn === true) {

                    gameBoard.placeEx(space);
                    space.classList.add('p1');
                    this.addOwnedSpace(value); // replace addOwnedSpace() with takeTurn()

                } else if (space.innerHTML === '' && this.playerTwo.myTurn === true) {

                    gameBoard.placeOh(space);
                    space.classList.add('p2');
                    this.addOwnedSpace(value); // replace addOwnedSpace() with takeTurn()

                } else {

                    alert('That one is taken! Pick an empty one!');

                }
            });
        }


    }


    createPlayerOne() {

        const playerOne = new Player();
        this.playerOne = playerOne.generatePlayerOne();

    }

    createPlayerTwo() {

        const playerTwo = new Player();
        this.playerTwo = playerTwo.generatePlayerTwo();

    }



    addOwnedSpace(space) {

        let row;
        let hasRow = false;

        if (this.playerOne.myTurn === true) {

            this.playerOne.ownedSpaces.push(space);
            row = this.checkForRow(this.playerOne.ownedSpaces);
            if (row) {
                hasRow = true;
            }
            console.log(row);
            console.log(hasRow);

        } else if (this.playerTwo.myTurn === true) {

            this.playerTwo.ownedSpaces.push(space);
            row = this.checkForRow(this.playerTwo.ownedSpaces);
            if (row) {
                hasRow = true;
            }
        }

        console.log([this.playerOne.ownedSpaces, this.playerTwo.ownedSpaces])

    }


    checkForRow(playerSpacesArray) {

        const rowCheck = {
            firstRow: ['0', '1', '2'],
            secondRow: ['3', '4', '5'],
            thirdRow: ['6', '7', '8'],
            diagonalLeft: ['0', '4', '8'],
            diagonalRight: ['2', '4', '6'],
            firstColumn: ['0', '3', '6'],
            secondColumn: ['1', '4', '7'],
            thirdColumn: ['2', '5', '8']
        };

        for (const row in rowCheck) {

            if (rowCheck[row].every(element => playerSpacesArray.includes(element)) === true) {

                return row;

            };

        }

    }

    /*
    placeWinLine(row) {

        // row parameter needs to match winLine css class

        const winLine = document.getElementById('winLine');

        winLine.classList.remove('hidden');
        winLine.classList.add(`${row}`);

    }

    updateScore(player) {

        player.score++;

    }

    changeTurn() {

        this.playerOne.myTurn = !this.playerOne.myTurn;
        this.playerTwo.myTurn = !this.playerTwo.myTurn;

    }

    takeTurn() {



    }



    newGame() {

        winLine.className = '';
        winLine.classList.add('hidden');

    }

    resetGame() {

        this.playerOne.score = 0;
        this.playerTwo.score = 0;
        winLine.className = '';
        winLine.classList.add('hidden');

    }

    */
}

const newGame = new Game();

newGame.createGameBoard();
newGame.createPlayerOne();
newGame.createPlayerTwo();

//let board = new Gameboard();

//board.generateGameBoard();


console.log(newGame);