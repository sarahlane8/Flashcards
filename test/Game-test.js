const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game.js');
const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const data = require('../src/data.js');

describe('Game', function() {
  let game, prototypeQuestions, cards, deck, round

  beforeEach(function() {
    game = new Game;
    prototypeQuestions = data.prototypeData;
    cards = prototypeQuestions.map(( {id, question, answers, correctAnswer} ) => {
      return new Card(id, question, answers, correctAnswer)
    });
    deck = new Deck(cards);
    round = new Round(deck);
  })

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(null);
    game.start()
    expect(game.currentRound).to.deep.equal(round);
  })

  it('should instantiate cards', function() {
    game.start();
    expect(cards[0]).to.be.an.instanceof(Card);
  })

  it('should instantiate a new deck', function() {
    game.start();
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should instantiate a new round', function() {
    game.start();
    expect(round).to.be.an.instanceof(Round);
  })
})
