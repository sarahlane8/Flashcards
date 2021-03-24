class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    // console.log(this.card.correctAnswer);
    // console.log(this.guess);
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      // console.log('correct')
      return 'correct!';
    } else {
      // console.log('incorrect')
      return 'incorrect!';
    }
  }
}



module.exports = Turn;
