jest.mock('cli-box', () => ({
  Box: jest.fn().mockImplementation(() => ({
    toString: jest.fn().mockReturnValue('Mocked Box')
  }))
}));

jest.mock('readline-sync', () => ({
  question: jest.fn().mockReturnValue('Mocked Input'),
  questionInt: jest.fn().mockReturnValue(1)
}));

jest.mock('../src/game'); // Mock Game class

const { startGame } = require('../index');
const Game = require('../src/game');

describe('Index - Application Entry Point', () => {
  it('should create a new Game instance', () => {
    startGame();
    expect(Game).toHaveBeenCalledTimes(1);
  });
});
