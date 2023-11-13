

class Game {
  constructor(cardClass, deckClass, logger) {
    this.deck = new deckClass(cardClass);
    this.deck.shuffle();
    this.readline = logger.readlineSync;
    this.Box = logger.Box;
    this.playerHand = [];
    this.dealInitialHand();
  }

  dealInitialHand() {
    for (let i = 0; i < 8; i++) {
      this.playerHand.push(this.deck.draw());
    }
  }

  displayHand() {
    console.log("Your hand:");
    const handDisplay = this.playerHand.map((card) => card.name);
    const displayCards = handDisplay.map((card) => this.Box("10x5", card).toString());

    for (let i = 0; i < displayCards[0].split('\n').length; i++) {
      let line = '';
      for (const element of displayCards) {
        line += element.split('\n')[i].padEnd(10);
      }
      console.log(line);
    }
  }
  play() {
    let gameOver = false;
    while (!gameOver) {
      console.log("\nYour turn:");
      this.displayHand();

      const action = this.readline.question(
        "Choose an action (play/discard/end): "
      );

      switch (action.toLowerCase()) {
        case "play":
        case "p":
          this.playCard();
          break;
        case "discard":
        case "d":
          this.discardCard();
          break;
        case "end":
        case "e":
          console.log("Ending game.");
          gameOver = true;
          break;
        default:
          console.log(
            "Invalid action. Please choose 'play', 'discard', or 'end'."
          );
          break;
      }

      // Add logic here for the opponent's turn
    }

    // opponentTurn() {
    //   for (let i = 0; i < this.opponentHand.length; i++) {
    //     const card = this.opponentHand[i];
    //     // Check if the card is a valid play. This will depend on the rules of your game.
    //     if (this.isValidPlay(card)) {
    //       // Play the card and remove it from the opponent's hand
    //       console.log(`Opponent played ${card.name}`);
    //       this.opponentHand.splice(i, 1);
    //       // Add the card to the game context
    //       this.playCard(card);
    //       return;
    //     }
    //   }

    //   // If no valid plays, discard a card
    //   const discardedCard = this.opponentHand.splice(0, 1)[0];
    //   console.log(`Opponent discarded ${card.name}`);
    //   this.discardCard(discardedCard);
    // }

    console.log("Game over.");
  }

  playCard() {
    const cardIndex = this.readline.questionInt(
      "Enter the index of the card to play (0 to " +
        (this.playerHand.length - 1) +
        "): "
    );
    if (cardIndex >= 0 && cardIndex < this.playerHand.length) {
      const card = this.playerHand.splice(cardIndex, 1)[0]; // Remove the card from the player's hand
      console.log(`Played ${card.name}`);
      // Add logic to handle played card in the game context
    } else {
      console.log("Invalid card index.");
    }
  }

  discardCard() {
    const cardIndex = this.readline.questionInt(
      "Enter the index of the card to discard (0 to " +
        (this.playerHand.length - 1) +
        "): "
    );
    if (cardIndex >= 0 && cardIndex < this.playerHand.length) {
      const card = this.playerHand.splice(cardIndex, 1)[0];
      console.log(`Discarded ${card.name}`);
      // Add logic to handle discarded card
    } else {
      console.log("Invalid card index.");
    }
  }

  // ... Other methods
}

module.exports = Game;
