const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {
  let card

  beforeEach(() => {
    card = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
  })

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should have a unique id', () => {
    expect(card.id).to.equal(1);
  })

  it('should store a question', () => {
    expect(card.question).to.equal('What is Michael Buble\'s biggest hit?');
  });

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['Home', 'Everything', 'Feelin\' Good']);
  });

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('Home');
  });
});
