const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should take in a user\'s guess as an argument', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array');
    expect(turn.guess).to.equal('array');
  });

  it('should only accept a user\'s guess as an argument if it is a string', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array');
    expect(turn.guess).to.equal('array');
    const turn2 = new Turn(15);
    expect(turn2.guess).to.equal(undefined);
  })

  it('should know which card is currently in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.card).to.equal(card);
  })

  it('should have a method that returns the user\'s guess', function() {
    const turn = new Turn('array');
    expect(turn.returnGuess()).to.equal('array');
  })

  it('should have a method that returns the current Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.returnCard()).to.equal(card);
  })
})
