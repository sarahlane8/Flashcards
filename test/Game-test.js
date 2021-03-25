const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game.js');
const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const data = require('../src/data.js');

describe('Game', function() {
  it('should keep track of the current round', function() {
    const game = new Game;
    const prototypeQuestions = data.prototypeData;
    const cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(game.currentRound).to.equal(null);
    game.start()
    expect(game.currentRound).to.deep.equal(round);
  })

it.skip('should instantiate cards', function() {
  const game = new Game;
  const prototypeQuestions = data.prototypeData;
  const cards = prototypeQuestions.map(card => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer)
  });
  const deck = new Deck(cards);
  const round = new Round(deck);
  game.start();
  expect(cards).to.be.an.instanceof(Card);
})

it.skip('should instantiate a new deck', function() {
  // const game = new Game;
  // const prototypeQuestions = data.prototypeData;
  // const cards = prototypeQuestions.map(card => {
  //   return new Card(card.id, card.question, card.answers, card.correctAnswer)
  // });
  // const deck = new Deck(cards);
  // const round = new Round(deck);
  game.start();
  expect(deck).to.be.an.instanceof(Deck);
})

it.skip('should instantiate a new round', function() {
  const game = new Game;
  const prototypeQuestions = data.prototypeData;
  const cards = prototypeQuestions.map(card => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer)
  });
  const deck = new Deck(cards);
  const round = new Round(deck);
  game.start();
  expect(round).to.be.an.instanceof(Round);
})


})

//start method creates cards
//puts cards in a deck
//instantiates round using Deck
//






// it('should start the game with a new round', function() {
  //   const game = new Game();
  //   expect
  // })
