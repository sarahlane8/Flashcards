const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Round', function() {
  it('should have a property of currentCard', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck(card);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(deck[0]);
  });

  it('should return the current card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck(card);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  })

  
});
