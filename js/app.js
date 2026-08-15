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
    nextQuestion();
  } else {
    disableQuestionBtn();
    console.log("Quiz is over.");
    console.log(quiz);
  }
}
function handleQuestionDynamically() {
  if (!isQuizOver()) {
    ui.createQuestion(quiz.getQuestion(), quiz.questionIndex);
    logQuestion();
    nextQuestion();
  } else {
    disableQuestionBtn();
    console.log("Quiz is over.");
    console.log(quiz);
  }
}
function isQuizOver() {
  return quiz.questionIndex >= quiz.questionList.length;
}
function logQuestion() {
  console.log(quiz.getQuestion());
}
function nextQuestion() {
  quiz.nextQuestion();
}
function disableQuestionBtn() {
  ui.getQuestionBtn.disabled = true;
}
