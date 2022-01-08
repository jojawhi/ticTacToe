class Player {

    constructor(name, symbol, score, myTurn, ownedSpaces) {
        this.name = name,
        this.symbol = symbol,
        this.score = score,
        this.myTurn = myTurn,
        this.ownedSpaces = ownedSpaces
    }

    generatePlayerOne() {

        this.name = "playerOne";
        this.symbol = "x";
        this.score = 0;
        this.myTurn = true;
        this.ownedSpaces = [];

        return this;

    }

    generatePlayerTwo() {

        this.name = "playerTwo";
        this.symbol = "o";
        this.score = 0;
        this.myTurn = false;
        this.ownedSpaces = [];

        return this;

    }

}

// Git check comment