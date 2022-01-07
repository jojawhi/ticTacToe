
class Gameboard {

    constructor(spaces) {

        this.spaces = spaces

    }

    generateGameBoard() {

        this.spaces = [];

        const gameBoardSpaces = document.querySelectorAll('.boardSpace');

        for (const boardSpace of gameBoardSpaces) {

            this.spaces.push(boardSpace);

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