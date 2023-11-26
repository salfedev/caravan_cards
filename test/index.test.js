jest.mock('../src/game');
const Game = require('../src/game');
require('../index'); // This will call Game once

describe('Index - Application Entry Point', () => {
    it('should create a new Game instance', () => {
        // No additional instantiation of Game
        expect(Game).toHaveBeenCalledTimes(1);
    });
});
