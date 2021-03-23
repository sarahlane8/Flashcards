const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Deck', function() {

  it('should be a function', function() {
  })

  it('should be instantiated with cards', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separate listed of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const cards = [card1, card2, card3];
    let deck = new Deck(cards);
    expect(deck.cards).to.equal(cards);
  })

  it('should know how many Cards are in the Deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separate listed of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const cards = [card1, card2, card3];
    let deck = new Deck(cards);
    expect(deck.countCards()).to.equal(3);
  })

})
