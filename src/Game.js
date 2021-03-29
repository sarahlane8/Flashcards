const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    const cards = prototypeQuestions.map( ({id, question, answers, correctAnswer}) => {
      return new Card(id, question, answers, correctAnswer)
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
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
