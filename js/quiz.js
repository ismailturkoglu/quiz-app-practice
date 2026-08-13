function Quiz(questionList) {
  this.questionIndex = 0;
  this.questionList = questionList;
}

Quiz.prototype.getQuestion = function () {
  const question = this.questionList[this.questionIndex];
  this.questionIndex++;
  return question;
};
