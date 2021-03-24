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
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should have a property of currentCard', function() {
    expect(round).to.have.property('currentCard');
  });

  it('should have the first card in the deck as the currentCard at start of round', function() {
    expect(round.currentCard).to.deep.equal(round.deck.cards[0])
  })


  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
  })


  it('should increment the turns count', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);
  })

//NEED HELP WITH THIS ONE WHAT TO TEST?
  it.skip('should instantiate a new Turn after a guess is made', function() {

  })

  it('should change the current card to the next card in the deck', function() {
    let card1Id;
    let card2Id;
    card1Id = round.deck.cards[0].id
    round.takeTurn();
    card2Id = round.deck.cards[0].id
    expect(card1Id).to.not.equal(card2Id);
  })

  it.skip('should evaluate the user\'s guess', function() {

    round.takeTurn('Home');
    expect
    // round.takeTurn('method');
    //how do I test this??? return true or false, record the wrong answer id?

  })

  it('should add the card ID of incorrect answers to an array', function() {
    round.takeTurn('Everything');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  })

  it.skip('should give the user feedback after they guess', function() {

    round.takeTurn('Home');
    //how do I test the outcome of a method on another class?
  })

  it('should calculate the percentage of correct guesses', function() {

    round.takeTurn('Home');
    round.takeTurn('Adriana');
    round.takeTurn('Quebec');

    expect(round.calculatePercentCorrect()).to.equal(33);
  })

  it.skip('should tell the user when the round is over', function() {

    round.takeTurn('Home');
    round.takeTurn('Adriana');
    round.takeTurn('Quebec');

    round.endRound();
    //how do i test this?? I need to ensure it returns **Round over!** etc

  })

});
