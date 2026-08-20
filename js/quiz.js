"use strict";
function Quiz(questionList) {
  this.questionIndex = 0;
  this.questionList = questionList;
  this.correctAnswer = 0;
}

Quiz.prototype.getQuestion = function () {
  return this.questionList[this.questionIndex];
};

Quiz.prototype.nextQuestion = function () {
  this.questionIndex++;
};

Quiz.prototype.getCorrectNumber = function () {
  return this.correctAnswer;
};
