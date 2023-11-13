const Player = require('../src/player');
const Deck = require('../src/deck');
const Card = require('../src/card');

describe('Player class', () => {
  let player, deck;

  beforeEach(() => {
    player = new Player('John Doe', 'Human');
    deck = new Deck(Card);
    deck.shuffle();
  });

  it('should initialize with the correct name and type', () => {
    expect(player.name).toBe('John Doe');
    expect(player.type).toBe('Human');
  });

  it('should draw an initial hand of 8 cards', () => {
    player.drawInitialHand(deck);
    expect(player.hand.length).toBe(8);
  });

  // Additional tests for playCard, discardCard, etc.
});
