const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Round', function() {
  let card1
  let card2
  let card3
  let cards
  let deck
  let round

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separate listed of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should have a property of currentCard', function() {
    expect(round.currentCard).to.deep.equal(deck[0]);
  });


  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
  })


  it('should have a takeTurn method that updates the turns count', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);
  })

  //test for making a new Turn instance when a guess is made

  it('should have a takeTurn method that change the current card to the next card in the deck', function() {
    expect(round.currentCard).to.deep.equal(deck[0]);
    round.takeTurn();
    expect(round.currentCard).to.deep.equal(deck[1]);
  })
});
