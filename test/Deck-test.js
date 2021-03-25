const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Deck', () => {
  let card1
  let card2
  let card3
  let cards
  let deck

  beforeEach(function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
  });

  it('should be a function', () => {
  })

  it('should be instantiated with cards', () => {
    expect(deck.cards).to.deep.equal(cards);
  })

  it('should know how many Cards are in the Deck', () => {
    expect(deck.countCards()).to.equal(3);
  })

})
