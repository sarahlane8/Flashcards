const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;//3
    this.incorrectGuesses = [];//2
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

  calculatePercentCorrect() {
    let correctGuesses = (this.turns - this.incorrectGuesses.length);
    let percentage = (correctGuesses / this.turns) * 100;
    return Math.round(percentage)
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }

}


module.exports = Round;
