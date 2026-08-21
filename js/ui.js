"use strict";
function UI() {
  this.progressAnimationDiv = document.querySelector(".progress-animation");
  this.timeSecondSpan = document.querySelector(".time-second");
  this.timeTextSpan = document.querySelector(".time-text");
  this.questionBodyDiv = document.querySelector(".question-body");
  this.nextQuestionBtn = document.getElementById("next-question-btn");
  this.questionProgressSpan = document.querySelector(".question-progress");
  this.replayBtn = document.querySelector(".score-buttons .replay");
  this.startQuizBtn = document.querySelector(".start");
  this.quitBtn = document.querySelector(".score-buttons .quit");
  this.questionDiv = document.getElementById("question");
  this.scoreDiv = document.getElementById("score");
  this.scoreTextDiv = document.querySelector(".score-text");
  this.scoreText = document.querySelector(".score-text h5");
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
UI.prototype.addAnswerListeners = function () {
  const answerHandler = createAnswerHandler();

  for (let i = 0; i < this.questionOptionsUl.children.length; i++) {
    this.questionOptionsUl.children[i].addEventListener("click", answerHandler);
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
UI.prototype.displayQuestionProgress = function (questionIndex, questionCount) {
  this.questionProgressSpan.textContent = `${questionIndex + 1} / ${questionCount}`;
};
UI.prototype.disableAnswerOptions = function () {
  for (let i = 0; i < this.questionOptionsUl.children.length; i++) {
    this.questionOptionsUl.children[i].classList.add("disabled");
  }
};
UI.prototype.addScoreText = function (correctAnswer, totalAnswer) {
  this.scoreText.textContent = `Toplam ${totalAnswer} sorudan ${correctAnswer} doğru cevap verdiniz.`;
};
UI.prototype.hide = function (element) {
  element.classList.add("hidden");
};
UI.prototype.show = function (element) {
  element.classList.remove("hidden");
};
