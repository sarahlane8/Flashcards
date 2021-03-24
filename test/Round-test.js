const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Round', function() {
  // let card1
  // let card2
  // let card3
  // let cards
  // let deck
  // let round
  //
  // beforeEach(function() {
  //   card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   card2 = new Card(2, 'What is a comma-separate listed of related values?', ['array', 'object', 'function'], 'array');
  //   card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  //   cards = [card1, card2, card3];
  //   deck = new Deck(cards);
  //   round = new Round(deck);
  // });

  it('should have a property of currentCard', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    // console.log(round.deck.cards)
    expect(round).to.have.property('currentCard');
    // expect(round.currentCard).to.deep.equal(round.deck.card[0]);
  });
  it('should have the first card in the deck as the currentCard at start of round', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    expect(round.currentCard).to.deep.equal(round.deck.cards[0])
  })


  it('should return the current card', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
  })


  it('should increment the turns count', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);
  })

//NEED HELP WITH THIS ONE WHAT TO TEST?
  it.skip('should instantiate a new Turn after a guess is made', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  })

  it('should change the current card to the next card in the deck', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    let card1Id;
    let card2Id;
    card1Id = round.deck.cards[0].id
    round.takeTurn();
    card2Id = round.deck.cards[0].id
    expect(card1Id).to.not.equal(card2Id);
  })

  it.skip('should evaluate the user\'s guess', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    round.takeTurn('Home');
    expect
    // round.takeTurn('method');
    //how do I test this??? return true or false, record the wrong answer id?

  })

  it('should add the card ID of incorrect answers to an array', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    round.takeTurn('Everything');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  })

  it.skip('should give the user feedback after they guess', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    round.takeTurn('Home');
    //how do I test the outcome of a method on another class?
  })

  it('should calculate the percentage of correct guesses', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);

    round.takeTurn('Home');
    round.takeTurn('Adriana');
    round.takeTurn('Quebec');

    expect(round.calculatePercentCorrect()).to.equal(33);
  })

  it.skip('should tell the user when the round is over', function() {
    card1 = new Card(1, 'What is Michael Buble\'s biggest hit?', ['Home', 'Everything', 'Feelin\' Good'], 'Home');
    card2 = new Card(2, 'What is Michael Buble\'s wife\'s name?', ['Adriana', 'Luisana', 'Mariana'], 'Luisana');
    card3 = new Card(3, 'Where is Michael Buble from?', ['Quebec', 'Montreal', 'Burnaby'], 'Burnaby');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);

    round.takeTurn('Home');
    round.takeTurn('Adriana');
    round.takeTurn('Quebec');

    round.endRound();
    //how do i test this?? I need to ensure it returns **Round over!** etc

  })

});
