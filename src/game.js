const readlineSync = require('readline-sync');
const Player = require('./player');

class Game {
    constructor() {
        this.players = [];
        this.currentPlayerIndex = 0;
        this.caravans = [[], [], []];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    dealInitialHand() {
        this.players.forEach(player => {
            for (let i = 0; i < 8; i++) {
                player.drawCard();
            }
        });
    }

    switchPlayer() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    isValidMove(caravan, card, lastCard) {
        if (caravan.length === 0) {
            return !isNaN(card.value);
        }

        // Players can place Joker and King cards on any card
        if (card.value === 'Joker' || card.value === 'K') {
            return true;
        }

        // For other cards, they can only be placed on the last card of the caravan
        if (lastCard === caravan[caravan.length - 1]) {
            if (['J', 'Q'].includes(card.value)) {
                return true;
            }

            if (!isNaN(card.value)) {
                if (caravan.direction === 'ascending') {
                    return parseInt(card.value) > parseInt(lastCard.value);
                } else if (caravan.direction === 'descending') {
                    return parseInt(card.value) < parseInt(lastCard.value);
                }
            }
        }

        return false;
    }

    play() {
        let gameOver = false;
        let moveCount = 0;

        while (!gameOver) {
            if (this.currentPlayerIndex === 0) { // Player's turn
                console.log("Your turn:");
                // Display the player's hand and caravans

                let validMoveMade = false;
                while (!validMoveMade) {
                    const cardIndex = readlineSync.questionInt("Choose a card to play (index): ");
                    const caravanIndex = readlineSync.questionInt("Choose a caravan to place your card (0-2): ");

                    // First 3 moves: player must place a numbered card in each caravan
                    if (moveCount < 3 && isNaN(this.players[0].hand[cardIndex].value)) {
                        console.log("You must play a numbered card in each of the first three moves.");
                        continue;
                    }

                    // Check if move is valid
                    if (this.isValidMove(this.caravans[caravanIndex], this.players[0].hand[cardIndex], this.caravans[caravanIndex].slice(-1)[0])) {
                        const card = this.players[0].hand.splice(cardIndex, 1)[0];
                        this.caravans[caravanIndex].push(card);
                        validMoveMade = true;
                        moveCount++;
                    } else {
                        console.log("Invalid move. Try again.");
                    }
                }
            } else { // Computer's turn
                // Simple AI: Play the first valid card
                for (let i = 0; i < this.players[1].hand.length; i++) {
                    for (let j = 0; j < this.caravans.length; j++) {
                        if (this.isValidMove(this.caravans[j], this.players[1].hand[i], this.caravans[j].slice(-1)[0])) {
                            const card = this.players[1].hand.splice(i, 1)[0];
                            this.caravans[j].push(card);
                            console.log(`Computer played ${card.value} of ${card.suit} on caravan ${j}`);
                            break;
                        }
                    }
                }
            }

            this.switchPlayer();

            // Add logic to check for game over conditions
            // gameOver = this.checkForGameOver();

            // Additional game logic...
        }
    }
}

module.exports = Game;
