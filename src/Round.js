const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = ["empty"];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns++;
    let guessEvaluation = turn.evaluateGuess();
    if (!guessEvaluation) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    turn.giveFeedback();
    this.deck.cards.shift()


  }
};


module.exports = Round;
