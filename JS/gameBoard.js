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