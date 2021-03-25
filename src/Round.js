const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
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
    this.deck.cards.shift()
    this.currentCard = this.deck.cards[0];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correctGuesses = (this.turns - this.incorrectGuesses.length);
    let percentage = (correctGuesses / this.turns) * 100;
    return Math.round(percentage)
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
