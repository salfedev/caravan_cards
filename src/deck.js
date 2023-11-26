
const Card = require('./card');

class Deck {
    constructor() {
        this.cards = this.initializeDeck();
        this.shuffle();
    }

    initializeDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let deck = [];

        for (let suit of suits) {
            for (let value of values) {
                deck.push(new Card(value, suit));
            }
        }

        return deck;
    }

shuffle() {
      // shuffles the deck
      for (let i = this.cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
  }

  draw() {
      // removes and returns a card from the deck
      return this.cards.pop();
  }
}

module.exports = Deck;
