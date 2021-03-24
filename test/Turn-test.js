// card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
// card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
// card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
// cards = [card1, card2, card3];


const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should take in a user\'s guess as an argument', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.guess).to.equal('array');
  });

  it('should only accept a user\'s guess as an argument if it is a string', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.guess).to.equal('array');
    const turn2 = new Turn(15);
    expect(turn2.guess).to.equal(undefined);
  })

  it('should know which card is currently in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.card).to.equal(card);
  })

  it('should return the user\'s guess', function() {
    const turn = new Turn('array');
    expect(turn.returnGuess()).to.equal('array');
  })

  it('should return the current Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.returnCard()).to.equal(card);
  })

  it('should return true if the user\'s guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if the user\'s guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should tell the user if their answer is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  })

  it('should tell the user if their answer is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  })

})
