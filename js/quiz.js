function Quiz(questionList) {
  this.questionIndex = 0;
  this.questionList = questionList;
}

Quiz.prototype.getQuestion = function () {
  return this.questionList[this.questionIndex];
};

Quiz.prototype.nextQuestion = function () {
  this.questionIndex++;
};
