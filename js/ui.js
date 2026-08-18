function UI() {
  this.questionBodyDiv = document.querySelector(".question-body");
  this.getQuestionBtn = document.getElementById("get-question-btn");
  this.questionProgressSpan = document.querySelector(".question-progress");
  this.replayBtn = document.querySelector(".score-buttons .replay");
  this.startQuizBtn = document.querySelector(".score-buttons .start");
  this.quitBtn = document.querySelector(".score-buttons .quit");
  this.questionDiv = document.getElementById("question");
  this.scoreDiv = document.getElementById("score");
  this.scoreTextDiv = document.querySelector(".score-text");
  this.scoreText = document.querySelector(".score-text h5");

  /* 
  // Required for startQuizStatically() in app.js
  this.questionDiv = document.querySelector(".question-text");
  this.optionsUl = document.querySelector(".question-options ul"); 
  */
}

UI.prototype.createQuestion = function (question, questionIndex) {
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

  this.questionBodyDiv.innerHTML = "";

  const optionsList = Object.entries(question.options);

  // div.body
  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("body");

  // div.question-text
  const questionTextDiv = document.createElement("div");
  questionTextDiv.textContent = `${questionIndex + 1}) ${question.questionText}`;
  questionTextDiv.classList.add("question-text");

  // div.question-options
  const questionOptionsDiv = document.createElement("div");
  questionOptionsDiv.classList.add("question-options");

  // ul
  const ul = document.createElement("ul");
  this.questionOptionsUl = ul;

  // li
  for (let option of optionsList) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    // span içeriği
    span.textContent = `${option[0]}) ${option[1]}`;

    li.appendChild(span);
    ul.appendChild(li);
  }

  questionOptionsDiv.appendChild(ul);
  bodyDiv.appendChild(questionTextDiv);
  bodyDiv.appendChild(questionOptionsDiv);
  this.questionBodyDiv.appendChild(bodyDiv);
};

UI.prototype.displayQuestion = function (question, questionIndex) {
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
  const options = question.options;
  const optionsKeys = Object.keys(options);
  const optionsValues = Object.values(options);

  // div
  this.questionDiv.textContent = `${questionIndex + 1})  ${question.questionText}`;

  // ul
  this.optionsUl.children[0].textContent = `${optionsKeys[0]}) ${optionsValues[0]}`;
  this.optionsUl.children[1].textContent = `${optionsKeys[1]}) ${optionsValues[1]}`;
  this.optionsUl.children[2].textContent = `${optionsKeys[2]}) ${optionsValues[2]}`;
  this.optionsUl.children[3].textContent = `${optionsKeys[3]}) ${optionsValues[3]}`;
};

UI.prototype.addAnswerListeners = function () {
  const answerHandler = createAnswerHandler();

  for (let i = 0; i < this.questionOptionsUl.children.length; i++) {
    this.questionOptionsUl.children[i].addEventListener("click", answerHandler);
  }
};

UI.prototype.disableAnswerOptions = function () {
  for (let i = 0; i < this.questionOptionsUl.children.length; i++) {
    this.questionOptionsUl.children[i].classList.add("disabled");
  }
};

UI.prototype.showAnswerResult = function (selectedOption, isAnswerRight) {
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
};

// Edit property name
UI.prototype.disableQuestionBtn = function () {
  this.getQuestionBtn.disabled = true;
};
// Edit property name
UI.prototype.enableQuestionBtn = function () {
  this.getQuestionBtn.disabled = false;
};

UI.prototype.displayQuestionProgress = function (questionIndex, questionCount) {
  this.questionProgressSpan.textContent = `${questionIndex + 1} / ${questionCount}`;
};

UI.prototype.showScoreDiv = function () {
  this.scoreDiv.classList.remove("passive");
};
UI.prototype.hideScoreDiv = function () {
  ui.scoreDiv.classList.add("passive");
};
UI.prototype.showQuestionDiv = function () {
  ui.questionDiv.classList.add("active");
};
UI.prototype.hideQuestionDiv = function () {
  ui.questionDiv.classList.remove("active");
};

UI.prototype.showReplayBtn = function () {
  this.replayBtn.classList.remove("passive");
  this.replayBtn.classList.add("active");
};
UI.prototype.hideReplayBtn = function () {
  ui.replayBtn.classList.add("passive");
  ui.replayBtn.classList.remove("active");
};
UI.prototype.showQuitBtn = function () {
  ui.quitBtn.classList.add("active");
  ui.quitBtn.classList.remove("passive");
};
UI.prototype.hideQuitBtn = function () {
  ui.quitBtn.classList.remove("active");
  ui.quitBtn.classList.add("passive");
};
UI.prototype.showStartQuizBtn = function () {
  ui.startQuizBtn.classList.add("active");
  ui.startQuizBtn.classList.remove("passive");
};
UI.prototype.hideStartQuizBtn = function () {
  ui.startQuizBtn.classList.remove("active");
  ui.startQuizBtn.classList.add("passive");
};
UI.prototype.showScoreText = function () {
  this.scoreTextDiv.classList.remove("passive");
  this.scoreTextDiv.classList.add("active");
};
UI.prototype.hideScoreText = function () {
  this.scoreTextDiv.classList.remove("active");
  this.scoreTextDiv.classList.add("passive");
};
UI.prototype.addScoreText = function (correctAnswer, totalAnswer) {
  this.scoreText.textContent = `Toplam ${totalAnswer} sorudan ${correctAnswer} doğru cevap verdiniz.`;
};
