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
  timeLeftSecond(10);
}
function endTimeLeft() {
  clearInterval(counterSecond);
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
function timeLeftSecond(second) {
  ui.timeSecondSpan.classList.add("text-info");
  ui.timeSecondSpan.parentElement.classList.remove("time-up");
  ui.timeTextSpan.textContent = "Time left:";
  ui.timeSecondSpan.textContent = `${second}`;

  // Determine time
  const totalTime = second * 1000;
  // Get start time
  const startTime = Date.now();

  // Timer function: Update screen for every 50 ms
  counterSecond = setInterval(() => {
    // Time passed
    const timePassed = Date.now() - startTime;
    // Remaining time
    const remain = Math.max(totalTime - timePassed, 0);
    // Remaining time in seconds
    const remainSecond = Math.ceil(remain / 1000);

    // Update time second
    ui.timeSecondSpan.textContent = remainSecond;

    // Get animation percentage
    const percentage = (remain / totalTime) * 100;
    console.log(percentage);

    // Update time animation
    ui.progressAnimationDiv.style.width = percentage + "%";

    if (remain <= 0) {
      clearInterval(counterSecond);

      ui.timeSecondSpan.classList.remove("text-info");
      ui.timeSecondSpan.parentElement.classList.add("time-up");
      ui.timeTextSpan.textContent = "Time's up!";
      ui.timeSecondSpan.textContent = 0;
      ui.disableAnswerOptions();
      quiz.nextQuestion();
      if (isQuizOver()) {
        endQuiz();
      } else {
        ui.show(ui.nextQuestionBtn);
      }
    }
  }, 30);
}
