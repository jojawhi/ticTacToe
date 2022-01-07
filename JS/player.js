class Player {

    constructor(name, symbol, score, myTurn) {
        this.name = name,
        this.symbol = symbol,
        this.score = score,
        this.myTurn = myTurn
    }

    generatePlayerOne() {

        this.name = "playerOne";
        this.symbol = "x";
        this.score = 0;
        this.myTurn = true;

        return this;

    }

    generatePlayerTwo() {

        this.name = "playerTwo";
        this.symbol = "o";
        this.score = 0;
        this.myTurn = false;

        return this;

    }

}