const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck[0];
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    let turn = new Turn(guess, this.currentCard);
    turn.evaluateGuess();//hang onto the return somehow
    //if false, store ID in a wrong answer array incorrectGuesses
    turn.giveFeedback();
    //shift the deck array

  }
};


module.exports = Round;
