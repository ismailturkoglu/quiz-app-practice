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
    addAnswerListeners();
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
    addAnswerListeners();
  } else {
    disableQuestionBtn();
    console.log("Quiz is over.");
    console.log(quiz);
  }
}
function addAnswerListeners() {
  const questionOptionsUl = document.querySelector(".question-options ul");

  for (let i = 0; i < questionOptionsUl.children.length; i++) {
    questionOptionsUl.children[i].addEventListener("click", function (event) {
      const selectedOption = event.currentTarget;

      const userAnswer = selectedOption.textContent[0];
      const question = quiz.getQuestion();
      const isAnswerRight = question.checkAnswer(userAnswer);

      if (isAnswerRight) {
        selectedOption.classList.add("correct");

        const correctIcon = document.createElement("i");
        correctIcon.className = "bi bi-check-circle";

        selectedOption.insertAdjacentElement("beforeend", correctIcon);
      } else {
        selectedOption.classList.add("incorrect");

        const incorrectIcon = document.createElement("i");
        incorrectIcon.className = "bi bi-x-circle";

        selectedOption.insertAdjacentElement("beforeend", incorrectIcon);
      }

      for (let i = 0; i < questionOptionsUl.children.length; i++) {
        questionOptionsUl.children[i].classList.add("disabled");
      }
      nextQuestion();
    });
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
