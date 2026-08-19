let randomIndex;
let selectedQuestionList;
let quiz;
const ui = new UI();
addEventListeners();
startQuizDynamically();

function startQuizDynamically() {
  randomIndex = Math.floor(Math.random() * questionLists.length);
  selectedQuestionList = questionLists[randomIndex];
  quiz = new Quiz(selectedQuestionList);
  handleQuestionDynamically();
}
function handleQuestionDynamically() {
  if (!isQuizOver()) {
    ui.createQuestion(quiz.getQuestion(), quiz.questionIndex);
    ui.displayQuestionProgress(quiz.questionIndex, quiz.questionList.length);
    ui.addAnswerListeners();
  } else {
    ui.disableNextQuestionBtn();
  }
}
function addEventListeners() {
  ui.startQuizBtn.addEventListener("click", showQuiz);
  ui.replayBtn.addEventListener("click", replayQuiz);
  ui.quitBtn.addEventListener("click", quitQuiz);
  ui.nextQuestionBtn.addEventListener("click", handleQuestionDynamically);
}

function createAnswerHandler() {
  return function (event) {
    const selectedOption = event.currentTarget;

    const userAnswer = selectedOption.textContent[0];
    const question = quiz.getQuestion();
    const isAnswerRight = question.checkAnswer(userAnswer);

    if (isAnswerRight) {
      quiz.correctAnswer++;
    }

    ui.showAnswerResult(selectedOption, isAnswerRight);
    ui.disableAnswerOptions();
    quiz.nextQuestion();

    if (isQuizOver()) {
      ui.disableNextQuestionBtn();
      ui.show(ui.scoreDiv);
      ui.addScoreText(quiz.correctAnswer, quiz.questionList.length);
      ui.show(ui.scoreText);
      ui.hide(ui.startQuizBtn);
      ui.show(ui.replayBtn);
      ui.show(ui.quitBtn);
    }
  };
}
function isQuizOver() {
  return quiz.questionIndex >= quiz.questionList.length;
}
function showQuiz() {
  ui.show(ui.scoreTextDiv);
  ui.show(ui.questionDiv);
  ui.hide(ui.scoreDiv);
  ui.hide(ui.startQuizBtn);
}
function replayQuiz() {
  startQuizDynamically();
  showQuiz();
  ui.enableNextQuestionBtn();
}
function quitQuiz() {
  ui.enableNextQuestionBtn();
  ui.hide(ui.questionDiv);
  ui.hide(ui.scoreDiv);
  ui.hide(ui.replayBtn);
  ui.hide(ui.quitBtn);
  ui.show(ui.startQuizBtn);
  ui.show(ui.nextQuestionBtn);
  startQuizDynamically();
}
