
class Gameboard {

    constructor(spaces) {
        this.spaces = spaces
    }

    generateGameBoard() {
        // const gameBoard = new Gameboard();
        this.spaces = [];
        const gameBoardSpaces = document.querySelectorAll('.boardSpace');

        for (const boardSpace of gameBoardSpaces) {
            this.spaces.push(boardSpace);
            boardSpace.addEventListener('click', () => {
                alert('Clicked!');
            });
        }

        console.log(this.spaces);

    }



}



/*
const generateGameBoard = () => {
    const gameBoard = {};
    gameBoard.spaces = [];
    const gameBoardSpaces = document.querySelectorAll('.boardSpace');

    for (const boardSpace of gameBoardSpaces) {
        gameBoard.spaces.push(boardSpace);
    }

    console.log(gameBoard.spaces[0]);

}

generateGameBoard();
*/