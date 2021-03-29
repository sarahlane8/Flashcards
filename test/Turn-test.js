const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', () => {
  let card, turn

  beforeEach( () => {
    card = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    turn = new Turn('Everything', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should take in a user\'s guess as an argument', () => {
    expect(turn.guess).to.equal('Everything');
  });

  it('should know which card is currently in play', () => {
    expect(turn.card).to.deep.equal(card);
  })

  it('should return the user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('Everything');
  })

  it('should return the current Card', () => {
    expect(turn.returnCard()).to.equal(card);
  })

  it('should return true if the user\'s guess is correct', () => {
    turn = new Turn('Home', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if the user\'s guess is incorrect', () => {
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should tell the user if their answer is correct', () => {
    turn = new Turn('Home', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  })

  it('should tell the user if their answer is incorrect', () => {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  })
})
