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
  
  it('should only accept a user\s guess as an argument if it is a string', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('array');
    expect(turn.guess).to.equal('array');
    let turn2 = new Turn(15);
    expect(turn2.guess).to.equal(undefined);
  })
})
