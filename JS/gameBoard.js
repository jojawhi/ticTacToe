
class Gameboard {

    constructor(spaces) {

        this.spaces = spaces

    }

    generateGameBoard() {

        this.spaces = [];

        const gameBoardSpaces = document.querySelectorAll('.boardSpace');

        for (const boardSpace of gameBoardSpaces) {

            //const value = boardSpace.getAttribute('value');
            //this.spaces[value] = value;
            //OR
            //this.spaces.push(value);
            this.spaces.push(boardSpace);

        }

        console.log(this.spaces);

    }

    placeEx(boardSpace) {

        const exDiv = document.createElement('div')
        exDiv.classList.add('exDiv');
        boardSpace.appendChild(exDiv);

    }

    placeOh(boardSpace) {

        const ohDiv = document.createElement('div')
        ohDiv.classList.add('ohDiv');
        boardSpace.appendChild(ohDiv);

    }

    clearGameBoard() {
        for (const boardSpace of this.spaces) {
            boardSpace.innerHTML = '';
            boardSpace.classList.remove('p1');
            boardSpace.classList.remove('p2');
        }
    }

}