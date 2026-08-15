const randomIndex = Math.floor(Math.random() * questionLists.length);
const selectedQuestionList = questionLists[randomIndex];
const getQuestionBtn = document.getElementById("get-question");
const quiz = new Quiz(selectedQuestionList);

// startQuizStatically();
startQuizDynamically();

function startQuizDynamically() {
  handleQuestionDynamically();
  getQuestionBtn.addEventListener("click", handleQuestionDynamically);
}
function startQuizStatically() {
  handleQuestionStatically();
  getQuestionBtn.addEventListener("click", handleQuestionStatically);
}
function handleQuestionStatically() {
  logQuestion();
  displayQuestion();
  nextQuestion();
  checkQuestionBtnState();
}
function handleQuestionDynamically() {
  logQuestion();
  createQuestion();
  nextQuestion();
  checkQuestionBtnState();
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
function displayQuestion() {
  if (!isQuizOver()) {
    /* <!-- This HTML Structure has to be in the index.html -->
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
function createQuestion() {
  /* 
<!-- This HTML Structure will be createted -->
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
</div> 
*/
  const question = quiz.getQuestion();
  const optionsList = Object.entries(question.options);
  console.log(optionsList);

  const questionBodyDiv = document.querySelector(".question-body");
  questionBodyDiv.innerHTML = "";

  // div.body
  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("body");

  // div.question-text
  const questionTextDiv = document.createElement("div");
  questionTextDiv.textContent = `${quiz.questionIndex + 1}) ${question.questionText}`;
  questionTextDiv.classList.add("question-text");

  // div.question-options
  const questionOptionsDiv = document.createElement("div");
  questionOptionsDiv.classList.add("question-options");

  // ul
  const ul = document.createElement("ul");

  // li
  for (let option of optionsList) {
    const li = document.createElement("li");
    // li'nin içeriği
    li.textContent = `${option[0]}) ${option[1]}`;
    ul.appendChild(li);
  }

  questionOptionsDiv.appendChild(ul);
  bodyDiv.appendChild(questionTextDiv);
  bodyDiv.appendChild(questionOptionsDiv);
  questionBodyDiv.appendChild(bodyDiv);
}
