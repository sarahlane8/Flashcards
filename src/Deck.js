class Deck {
  constructor(cards) {
    this.cards = cards;//an array of card objects
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
