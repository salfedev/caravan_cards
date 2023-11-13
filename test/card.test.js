const Card = require('../src/card');

describe('Card class', () => {
  it('should create a card with the correct value and suit', () => {
    const card = new Card('A', '♠');
    expect(card.value).toBe('A');
    expect(card.suit).toBe('♠');
    expect(card.name).toBe('A♠');
  });
});
