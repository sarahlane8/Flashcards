class Round {
  constructor(deck) {
    this.currentCard = deck[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }
};


module.exports = Round;
