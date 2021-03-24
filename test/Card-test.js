const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should have a unique id', function() {
    const card = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    expect(card.id).to.equal(1);
  })

  it('should store a question', function() {
    const card = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    expect(card.question).to.equal('What is Michael Buble\'s biggest hit?');
  });

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    expect(card.answers).to.deep.equal(['Home', 'Everything', 'Feelin\' Good']);
  });

  it('should store the correct answer', function() {
    const card = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    expect(card.correctAnswer).to.equal('Home');
  });
});
