"use strict";
let counterSecond;
let counterAnimation;
let randomIndex;
let selectedQuestionList;
let quiz;
const ui = new UI();
addEventListeners();
startQuizDynamically();

function startQuizDynamically() {
  randomIndex = Math.floor(Math.random() * questionLists.length);
  selectedQuestionList = questionLists[randomIndex];
  quiz = new Quiz(selectedQuestionList);
  handleQuestionDynamically();
}
function handleQuestionDynamically() {
  if (!isQuizOver()) {
    ui.createQuestion(quiz.getQuestion(), quiz.questionIndex);
    ui.displayQuestionProgress(quiz.questionIndex, quiz.questionList.length);
    ui.addAnswerListeners();
  }
}
function addEventListeners() {
  ui.startQuizBtn.addEventListener("click", showQuiz);
  ui.replayBtn.addEventListener("click", replayQuiz);
  ui.quitBtn.addEventListener("click", quitQuiz);
  ui.nextQuestionBtn.addEventListener("click", nextQuestion);
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
    ui.show(ui.nextQuestionBtn);
    endTimeLeft();

    if (isQuizOver()) {
      endQuiz();
    }
  };
}
function endQuiz() {
  ui.hide(ui.nextQuestionBtn);
  ui.hide(ui.startQuizBtn);
  ui.addScoreText(quiz.correctAnswer, quiz.questionList.length);
  ui.show(ui.scoreDiv);
  ui.show(ui.scoreText);
  ui.show(ui.replayBtn);
  ui.show(ui.quitBtn);
}
function isQuizOver() {
  return quiz.questionIndex >= quiz.questionList.length;
}
function showQuiz() {
  ui.show(ui.scoreTextDiv);
  ui.show(ui.questionDiv);
  startTimeLeft();
  ui.hide(ui.scoreDiv);
  ui.hide(ui.startQuizBtn);
  ui.hide(ui.nextQuestionBtn);
}
function startTimeLeft() {
  let second = 10;
  timeLeftSecond(second, 1000);
  timeLeftAnimation(second);
}
function endTimeLeft() {
  clearInterval(counterSecond);
  clearInterval(counterAnimation);
}
function replayQuiz() {
  startQuizDynamically();
  showQuiz();
  ui.hide(ui.nextQuestionBtn);
}
function quitQuiz() {
  ui.hide(ui.questionDiv);
  ui.hide(ui.scoreDiv);
  ui.hide(ui.replayBtn);
  ui.hide(ui.quitBtn);
  ui.show(ui.startQuizBtn);
  ui.show(ui.nextQuestionBtn);
  startQuizDynamically();
}
function nextQuestion() {
  handleQuestionDynamically();
  ui.hide(ui.nextQuestionBtn);
  startTimeLeft();
}
function timeLeftSecond(second, interval) {
  ui.timeSecondSpan.classList.add("text-info");
  ui.timeSecondSpan.parentElement.classList.remove("time-up");
  ui.timeTextSpan.textContent = "Time left:";
  ui.timeSecondSpan.textContent = `${second}`;

  counterSecond = setInterval(() => {
    ui.timeSecondSpan.textContent = `${second - 1}`;
    second--;
    if (second < 1) {
      ui.timeSecondSpan.textContent = "0";
      ui.timeSecondSpan.classList.remove("text-info");
      ui.timeSecondSpan.parentElement.classList.add("time-up");
      ui.timeTextSpan.textContent = "Time's up!";
      clearInterval(counterSecond);
      ui.disableAnswerOptions();
      quiz.nextQuestion();
      if (isQuizOver()) {
        endQuiz();
      } else {
        ui.show(ui.nextQuestionBtn);
      }
    }
  }, interval);
}
function timeLeftAnimation(interval) {
  let x = 1000;
  counterAnimation = setInterval(() => {
    ui.progressAnimationDiv.style.width = x / 10 + "%";
    x--;
    if (x < 0) {
      clearInterval(counterAnimation);
    }
  }, interval);
}
