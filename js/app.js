const randomIndex = Math.floor(Math.random() * questionLists.length);
const selectedQuestionList = questionLists[randomIndex];
const getQuestionBtn = document.getElementById("get-question");
const quiz = new Quiz(selectedQuestionList);

getQuestionBtn.addEventListener("click", showQuestion);

function showQuestion() {
  if (quiz.questionIndex < quiz.questionList.length) {
    console.log(quiz.getQuestion());
  } else {
    console.log("Quiz is over.");
    console.log(quiz);
    getQuestionBtn.disabled = true;
  }
}
