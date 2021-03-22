class Turn {
  constructor(guess, card) {
    if (typeof guess === "string") {
      this.guess = guess;
      }
    this.card = card;
  }
}



module.exports = Turn;
