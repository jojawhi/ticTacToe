
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

                // console.log(this.spaces.indexOf(boardSpace));

                // console.log(boardSpace.innerHTML);

                if (boardSpace.innerHTML === '') {
                    this.placeOh(boardSpace);
                } else {
                    alert('Oops! That one is taken!');
                }
            });
        }

        console.log(this.spaces);

    }

    placeEx(boardSpace) {
        const exDiv = document.createElement('div')
        exDiv.classList.add('exDiv');
        const ex = document.createElement('span');
        ex.innerHTML = '&#x2715;';
        ex.classList.add('ex');
        exDiv.appendChild(ex);
        boardSpace.appendChild(exDiv);
    }

    placeOh(boardSpace) {
        const ohDiv = document.createElement('div')
        ohDiv.classList.add('ohDiv');
        boardSpace.appendChild(ohDiv);
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