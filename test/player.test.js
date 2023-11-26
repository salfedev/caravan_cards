const Player = require('../src/player');

describe('Player class', () => {
    let player;

    beforeEach(() => {
        player = new Player('John Doe');
    });

    it('should initialize with the correct name', () => {
        expect(player.name).toBe('John Doe');
    });

    it('should draw an initial hand of 8 cards', () => {
        for (let i = 0; i < 8; i++) {
            player.drawCard();
        }
        expect(player.hand.length).toBe(8);
    });
});
