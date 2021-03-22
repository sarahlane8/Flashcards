class Turn {
  constructor(guess, card) {
    if (typeof guess === "string") {
      this.guess = guess;
      }
    this.card = card;

  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
}



module.exports = Turn;
