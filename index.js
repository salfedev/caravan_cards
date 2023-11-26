const Game = require('./src/game');
const Player = require('./src/player');

const game = new Game();
const player = new Player("Player 1");
const computer = new Player("Computer");

game.addPlayer(player);
game.addPlayer(computer);

game.dealInitialHand();
game.play();
