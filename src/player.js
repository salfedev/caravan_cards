class Player {
  constructor(name, type) {
    console.log('player', this);
    this.name = name;
    this.type = type;
    this.hand = [];
    this.cash = 100;
  }

  drawInitialHand(deck) {
    for (let i = 0; i < 8; i++) {
      this.hand.push(deck.draw());
    }
  }

  introduce() {
    console.log(`Player: ${this.name}, Type: ${this.type}`);
  }

  // ... other methods if needed
}

module.exports = Player;