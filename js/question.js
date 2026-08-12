function Question(questionText, options, rightAnswer) {
  this.questionText = questionText;
  this.options = options;
  this.rightAnswer = rightAnswer;
}

Question.prototype.checkAnswer = function (userAnswer) {
  return userAnswer === this.rightAnswer;
};
