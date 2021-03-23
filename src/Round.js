class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = {};
    this.turns = 0;
  }

  returnCurrentCard() {
    this.currentCard = this.deck[0];
    return this.currentCard;
  }

  takeTurn() {
    this.turns++;
    //when a guess is made, a new Turn instance is created
    // this.currentCard = this.deck[i++];
  }
};
//evaluate guesses
//give feedback
//stores ids of incorrect guesses

module.exports = Round;
