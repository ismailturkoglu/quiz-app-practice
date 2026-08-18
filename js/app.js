const randomIndex = Math.floor(Math.random() * questionLists.length);
const selectedQuestionList = questionLists[randomIndex];
const quiz = new Quiz(selectedQuestionList);
const ui = new UI();

// startQuizStatically();
startQuizDynamically();

function startQuizDynamically() {
  handleQuestionDynamically();
  ui.getQuestionBtn.addEventListener("click", handleQuestionDynamically);
}
function startQuizStatically() {
  handleQuestionStatically();
  ui.getQuestionBtn.addEventListener("click", handleQuestionStatically);
}
function handleQuestionStatically() {
  if (!isQuizOver()) {
    ui.displayQuestion(quiz.getQuestion(), quiz.questionIndex);
    logQuestion();
    ui.addAnswerListeners();
  } else {
    ui.disableQuestionBtn();
    console.log("Quiz is over.");
    console.log(quiz);
  }
}
function handleQuestionDynamically() {
  if (!isQuizOver()) {
    ui.createQuestion(quiz.getQuestion(), quiz.questionIndex);
    ui.displayQuestionProgress(quiz.questionIndex, quiz.questionList.length);
    logQuestion();
    ui.addAnswerListeners();
  } else {
    ui.disableQuestionBtn();
    console.log("Quiz is over.");
    console.log(quiz);
  }
}
function createAnswerHandler() {
  return function (event) {
    const selectedOption = event.currentTarget;

    const userAnswer = selectedOption.textContent[0];
    const question = quiz.getQuestion();
    const isAnswerRight = question.checkAnswer(userAnswer);

    ui.showAnswerResult(selectedOption, isAnswerRight);

    ui.disableAnswerOptions();

    quiz.nextQuestion();

    if (isQuizOver()) {
      ui.disableQuestionBtn();
    }
  };
}
function isQuizOver() {
  return quiz.questionIndex >= quiz.questionList.length;
}
function logQuestion() {
  console.log(quiz.getQuestion());
}
