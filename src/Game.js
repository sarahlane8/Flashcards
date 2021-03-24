const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round.js');
const Card = require('../src/Card.js');

class Game {
  constructor() {
    this.currentRound = null;//what do i do with this
  }

  start() {
    let newDeck = prototypeData.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    const round = new Round(newDeck);
    printMessage(newDeck, round);
    printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
