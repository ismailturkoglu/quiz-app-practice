"use strict";
function Question(questionText, options, result) {
  this.questionText = questionText;
  this.options = options;
  this.result = result;
}

Question.prototype.checkAnswer = function (userAnswer) {
  return userAnswer === this.result;
};
