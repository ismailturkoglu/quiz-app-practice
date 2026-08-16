function UI() {
  this.questionBodyDiv = document.querySelector(".question-body");
  this.getQuestionBtn = document.getElementById("get-question-btn");

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
