class Deck {
  constructor(cardClass) {
      this.cards = [];
      this.initializeDeck(cardClass);
  }

  initializeDeck(cardClass) {
      // creates a deck of 52 cards
      const suits = [' ♠ ', ' ♣ ', ' ♥ ', ' ♦ '];
      const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      for (let suit of suits) {
          for (let value of values) {
              this.cards.push(new cardClass(value, suit));
          }
      }
      console.log(this.cards.length); // 52
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