class Card {
  constructor(value, suit) {
      this.value = value;
      this.suit = suit;
      this.name = `${value}${suit}`;
  }
}

module.exports = Card;