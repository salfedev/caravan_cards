const Deck = require('./deck');

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.deck = new Deck();
    }

    drawCard() {
        const card = this.deck.draw();
        this.hand.push(card);
        return card;
    }
}

module.exports = Player;
