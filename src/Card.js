class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id;//refactor class default values
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;
