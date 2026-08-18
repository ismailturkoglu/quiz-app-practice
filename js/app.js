let randomIndex;
let selectedQuestionList;
let quiz;
const ui = new UI();

// startQuizStatically();
startQuizDynamically();

function startQuizDynamically() {
  randomIndex = Math.floor(Math.random() * questionLists.length);
  selectedQuestionList = questionLists[randomIndex];
  quiz = new Quiz(selectedQuestionList);
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
    ui.displayQuestionProgress(quiz.questionIndex, quiz.questionList.length);
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
    ui.startQuizBtn.addEventListener("click", startQuiz);
    ui.replayBtn.addEventListener("click", replayQuiz);
    ui.quitBtn.addEventListener("click", quitQuiz);

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

    if (isAnswerRight) {
      quiz.correctAnswer++;
    }

    ui.showAnswerResult(selectedOption, isAnswerRight);
    ui.disableAnswerOptions();
    quiz.nextQuestion();

    if (isQuizOver()) {
      ui.disableQuestionBtn();
      ui.showScoreDiv();
      ui.addScoreText(quiz.correctAnswer, quiz.questionList.length);
      ui.showScoreText();
      ui.hideStartQuizBtn();
      ui.showReplayBtn();
      ui.showQuitBtn();
    }
  };
}
function isQuizOver() {
  return quiz.questionIndex >= quiz.questionList.length;
}
function logQuestion() {
  console.log(quiz.getQuestion());
}
function startQuiz() {
  ui.showQuestionDiv();
  ui.hideScoreDiv();
  ui.hideStartQuizBtn();
}
function replayQuiz() {
  quiz.questionIndex = 0;
  quiz.correctAnswer = 0;
  startQuizDynamically();
  ui.hideScoreDiv();
  ui.showQuestionDiv();
  ui.enableQuestionBtn();
}
function quitQuiz() {
  ui.hideQuestionDiv();
  ui.hideScoreText();
}
