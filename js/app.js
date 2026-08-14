const randomIndex = Math.floor(Math.random() * questionLists.length);
const selectedQuestionList = questionLists[randomIndex];
const getQuestionBtn = document.getElementById("get-question");
const quiz = new Quiz(selectedQuestionList);

getQuestionBtn.addEventListener("click", handleQuestion);

function handleQuestion() {
  logQuestion();
  nextQuestion();
  checkQuestionBtnState();
}
function isQuizOver() {
  return quiz.questionIndex === quiz.questionList.length;
}
function logQuestion() {
  if (!isQuizOver()) {
    console.log(quiz.getQuestion());
  } else {
    console.log("Quiz is over.");
    console.log(quiz);
  }
}
function nextQuestion() {
  quiz.nextQuestion();
}
function checkQuestionBtnState() {
  if (isQuizOver()) {
    getQuestionBtn.disabled = true;
  }
}
