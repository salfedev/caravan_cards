const Deck = require('../src/deck');
const Card = require('../src/card');

describe('Deck class', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck(Card);
  });

  it('should create a deck of 52 cards', () => {
    expect(deck.cards.length).toBe(52);
  });

  it('should shuffle the deck', () => {
    const originalOrder = deck.cards.map(card => card.name);
    deck.shuffle();
    const newOrder = deck.cards.map(card => card.name);
    expect(newOrder).not.toEqual(originalOrder);
  });

  it('should draw a card from the deck', () => {
    const originalLength = deck.cards.length;
    const drawnCard = deck.draw();
    expect(deck.cards.length).toBe(originalLength - 1);
    expect(drawnCard).toBeInstanceOf(Card);
  });
});
