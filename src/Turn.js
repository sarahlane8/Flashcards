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
}



module.exports = Turn;
