# Quiz App - Practice

A simple quiz application built with HTML, CSS, JavaScript, and Bootstrap.

This project was developed as a JavaScript practice project to improve DOM manipulation, event handling, object-oriented programming concepts, dynamic UI creation, and timer management.

## Live Demo

https://ismailturkoglu.github.io/quiz-app-practice/

## Features

* Randomly selects a quiz question list when the quiz starts
* Dynamically creates questions and answer options
* Displays the current question progress
* Provides immediate feedback for correct and incorrect answers
* Disables answer options after an answer is selected
* Includes a countdown timer for each question
* Displays a visual progress animation for the timer
* Automatically handles time expiration
* Displays the final score
* Supports replaying the quiz
* Supports quitting the quiz
* Responsive layout for smaller screens

## Technologies

* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstrap 5.3.8
* Bootstrap Icons 1.13.1

## Project Structure

```text
quiz-app-practice/
│
├── css/
│   ├── style.css
│   └── mobile.css
│
├── js/
│   ├── question.js
│   ├── quiz.js
│   ├── data.js
│   ├── ui.js
│   └── app.js
│
├── index.html
└── README.md
```

## How It Works

The application is organized into separate files according to their responsibilities.

### Question

`question.js` contains the `Question` constructor function.

Each question contains:

* Question text
* Answer options
* Correct answer

The `checkAnswer()` prototype method is used to check the user's answer.

### Quiz

`quiz.js` manages the quiz state.

It keeps track of:

* Current question index
* Question list
* Number of correct answers

It also provides methods for retrieving the current question and moving to the next question.

### Data

`data.js` contains the question data.

Multiple question lists are defined, and one list is randomly selected when a quiz starts.

The project also includes an alternative approach for practice purposes. In `questionList_4`, question objects are created directly using object literals instead of the `Question` constructor.

### UI

`ui.js` is responsible for DOM manipulation and user interface operations.

It handles:

* Creating questions dynamically
* Creating answer options
* Displaying question progress
* Showing correct and incorrect answers
* Disabling answer options
* Displaying the final score
* Showing and hiding UI elements

### App

`app.js` controls the overall application flow.

It handles:

* Starting the quiz
* Selecting a random question list
* Processing answers
* Moving between questions
* Managing the timer
* Ending the quiz
* Replaying the quiz
* Quitting the quiz

## Timer

Each question has a countdown timer.

The timer uses `setInterval()` together with `Date.now()` to calculate the actual elapsed time.

A visual progress bar is updated according to the remaining time.

When the timer reaches zero:

* Answer options are disabled
* The question is completed
* The user can move to the next question
* If there are no remaining questions, the final score is displayed

## JavaScript Concepts Practiced

This project was created to practice several JavaScript concepts:

* Constructor Functions
* Prototype Methods
* Object Literals
* Objects and Arrays
* DOM Manipulation
* `createElement()`
* `appendChild()`
* `insertAdjacentElement()`
* `querySelector()` and `getElementById()`
* Event Listeners
* Event Objects
* `event.currentTarget`
* Closures
* Template Literals
* `Object.entries()`
* `Math.random()`
* `Math.floor()`
* `setInterval()`
* `clearInterval()`
* `Date.now()`
* `classList`
* Dynamic UI Updates

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ismailturkoglu/quiz-app-practice.git
```

Open the project folder and run `index.html` using a local development server such as VS Code Live Server.

Alternatively, open the live version:

[Quiz App - Live Demo](https://ismailturkoglu.github.io/quiz-app-practice/)

## Purpose

The main purpose of this project is to practice JavaScript fundamentals by building a functional application rather than isolated exercises.

The project focuses on understanding how different JavaScript components can work together to create an interactive web application.
