const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {
  let card
  let turn

  beforeEach(function() {
    card = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    turn = new Turn('Everything', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should take in a user\'s guess as an argument', function() {
    expect(turn.guess).to.equal('Everything');
  });

  it('should know which card is currently in play', function() {
    expect(turn.card).to.deep.equal(card);
  })

  it('should return the user\'s guess', function() {
    expect(turn.returnGuess()).to.equal('Everything');
  })

  it('should return the current Card', function() {
    expect(turn.returnCard()).to.equal(card);
  })

  it('should return true if the user\'s guess is correct', function() {
    turn = new Turn('Home', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if the user\'s guess is incorrect', function() {
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should tell the user if their answer is correct', function() {
    turn = new Turn('Home', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  })

  it('should tell the user if their answer is incorrect', function() {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  })

})
