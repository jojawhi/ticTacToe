

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
                    this.takeTurn(value, activePlayer); // replaced addOwnedSpace() with takeTurn()

                } else if (space.innerHTML === '' && this.playerTwo.myTurn === true) {

                    gameBoard.placeOh(space);
                    space.classList.add('p2');
                    this.takeTurn(value, activePlayer); // replaced addOwnedSpace() with takeTurn()

                } else {

                    alert('That one is taken! Pick an empty one!');

                }
            });
        }

        this.createButtons();

    }


    createPlayerOne() {

        const playerOne = new Player();
        this.playerOne = playerOne.generatePlayerOne();

    }

    createPlayerTwo() {

        const playerTwo = new Player();
        this.playerTwo = playerTwo.generatePlayerTwo();

    }

    addOwnedSpace(space, player) {

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

        //for checking which spaces are owned by players
        //console.log([this.playerOne.ownedSpaces, this.playerTwo.ownedSpaces])

        if (hasRow === true) {
            this.placeWinLine(row);
            this.increaseScore(player);
            this.updateScore(player);
        }

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

    placeWinLine(row) {

        const winLine = document.getElementById('winLine');

        winLine.classList.remove('hidden');
        winLine.classList.add(`${row}`);

    }


    increaseScore(player) {
        player.score++;
    }

    updateScore(player) {

        const playerOneScoreText = document.getElementById('playerOneScoreText');
        const playerTwoScoreText = document.getElementById('playerTwoScoreText');

        if (player === this.playerOne) {
            playerOneScoreText.textContent = this.playerOne.score;
        } else if (player === this.playerTwo) {
            playerTwoScoreText.textContent = this.playerTwo.score;
        }

        console.log([this.playerOne.score, this.playerTwo.score]);

    }

    resetScore() {

        this.playerOne.score = 0;
        this.playerTwo.score = 0;

    }

    setActivePlayer() {

        let activePlayer;

        if (this.playerOne.myTurn === true) {
            activePlayer = this.playerOne;
            playerOneText.classList.add('activePlayer');
        } else if (this.playerTwo === true) {
            activePlayer = this.playerTwo
            playerTwoText.classList.add('activePlayer');
        }

        return activePlayer;

    }

    updateActivePlayer() {

        const activePlayerIndicator = document.getElementById('activePlayerIndicator');

        this.playerOne.myTurn = !this.playerOne.myTurn;
        this.playerTwo.myTurn = !this.playerTwo.myTurn;

        if (this.playerOne.myTurn === true) {
            activePlayerIndicator.classList.remove('playerTwoActive');
            activePlayer = this.playerOne;
        } else if (this.playerTwo.myTurn === true) {
            activePlayerIndicator.classList.add('playerTwoActive');
            activePlayer = this.playerTwo;
        }

        console.log(activePlayer);

    }

    takeTurn(space, player) {

        // need to figure out how to access which space is clicked on in addOwnedSpace argument
        // Fix: added a parameter to takeTurn(), used as an argument in the event listener when the
        // board is generated. the same value is then accessed inside takeTurn() by addOwnedSpace()
        this.addOwnedSpace(space, player);
        this.updateActivePlayer();


    }

    /*

    endGame() {

        // if someone has won, alert who won, and instruct players to press play again to keep going
        // or reset to start again from 0
        // if no one has won (if playerOne.ownedSpaces.length === 5 && hasRow === false), alert that
        // the game is a tie and encourage the players to press play again

    }

    */

    createButtons() {
        const playAgainButton = document.getElementById('playAgainButton');
        const resetButton = document.getElementById('resetButton');

        playAgainButton.addEventListener('click', () => {

            this.playAgain();

        });

        resetButton.addEventListener('click', () => {

            this.resetGame();

        });
    }

    playAgain() {

        this.board.clearGameBoard();
        this.playerOne.resetOwnedSpaces();
        this.playerTwo.resetOwnedSpaces();

        if (winLine.className != '') {
            winLine.setAttribute('class', 'winLine hidden');
        }

    }

    resetGame() {

        this.playerOne.score = 0;
        this.playerTwo.score = 0;

        this.resetScore();
        this.updateScore(this.playerOne);
        this.updateScore(this.playerTwo);

        this.playAgain();

    }


}

const newGame = new Game();

newGame.createGameBoard();
newGame.createPlayerOne();
newGame.createPlayerTwo();
let activePlayer = newGame.setActivePlayer();

console.log(newGame);


/*
To do:

- complete endGame function that will show a modal with play again and reset buttons on win or tie
- need styles and dom elements for the endGame modal
- add AI player that will make specific moves

*/