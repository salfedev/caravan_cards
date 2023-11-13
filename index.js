// index.js
const readlineSync = require('readline-sync');
let Box = require("cli-box");

const logger = {
  readlineSync,
  Box  
}
const Card = require('./src/card.js');
const Deck = require('./src/deck.js');
const Game = require('./src/game.js');

function startGame() {
  const game = new Game(Card, Deck, logger);
  game.displayHand();
  game.play();
}

module.exports = { startGame };
