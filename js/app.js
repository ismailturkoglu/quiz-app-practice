const randomIndex = Math.floor(Math.random() * questionLists.length);
const selectedQuestionList = questionLists[randomIndex];
const getQuestionBtn = document.getElementById("get-question");
const quiz = new Quiz(selectedQuestionList);
handleQuestion();

getQuestionBtn.addEventListener("click", handleQuestion);

function handleQuestion() {
  wayOne();
}
function isQuizOver() {
  return quiz.questionIndex >= quiz.questionList.length;
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
function showQuestion() {
  if (!isQuizOver()) {
    /* <!-- HTML Structure -->
    <div class="body">
      <div class="question-text"></div>
      <div class="question-options">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div> */

    const question = quiz.getQuestion();
    const options = question.options;
    const optionsKeys = Object.keys(options);
    const optionsValues = Object.values(options);

    // div
    const questionDiv = document.querySelector(".question-text");
    questionDiv.textContent = `${quiz.questionIndex + 1})  ${question.questionText}`;

    // ul
    const optionsUl = document.querySelector(".question-options ul");

    optionsUl.children[0].textContent = `${optionsKeys[0]}) ${optionsValues[0]}`;
    optionsUl.children[1].textContent = `${optionsKeys[1]}) ${optionsValues[1]}`;
    optionsUl.children[2].textContent = `${optionsKeys[2]}) ${optionsValues[2]}`;
    optionsUl.children[3].textContent = `${optionsKeys[3]}) ${optionsValues[3]}`;
  }
}
function wayOne() {
  logQuestion();
  showQuestion();
  nextQuestion();
  checkQuestionBtnState();
}
