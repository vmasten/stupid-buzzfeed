'use strict'; //always

var quizzes = [];
var quizzesPlayed = [];
var quizId = [document.getElementById('quiz1'), document.getElementById('quiz2'), document.getElementById('quiz3')];

// Vince's work below
var quizItems = [];
var quizQuestion = 0;
var submitID = 0;

var Quiz = function (name, quizItems) {
  this.name = name;
  this.score = 0;
  this.quizItems = quizItems;

  quizzes.push(this);
};

function QuizItem(questionText, options, answer, img) {
  this.questionText = questionText;
  this.options = options;
  // this.answerRanking = answerRanking;
  this.img = img;

  quizItems.push(this);
}

new QuizItem('What is your biggest fear?', ['Spiders', 'Heights', 'Death'], [2, 0, 1], 'img/path');
new QuizItem('Who is your idol?', ['Barack Obama', 'Dwayne Johnson', 'Taylor Swift'], [1, 2, 0], 'img/path');
new QuizItem('Where would you go on your dream vacation?', ['Tahiti', 'Paris', 'Tokyo'], [0, 1, 2], 'img/path');
new QuizItem('What is your favorite genre of video games?', ['Shooter', 'RPG', 'Platformer', 'video games are dumb'], [3, 2, 1, -1], 'img/path');
new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
var quiz1 = new Quiz('quiz1', quizItems);
var quiz2 = new Quiz('quiz2', quizItems);
var quiz3 = new Quiz('quiz3', quizItems);
// var quiz4 = new Quiz('quiz4', quizItems);
// var quiz5 = new Quiz('quiz5', quizItems);
quizItems = [];

//prototype score tracker
//should eventually be modified to use an event listener
// function correctAnswer(quiz) {
//   //for loop to iterate through questions goes here
//   if (quiz.quizItems[0].options[1] === quiz.quizItems[0].answer) {
//     quiz.score++;
//   }

// }


var startButton = document.createElement('button');
function renderStart() {
  if (localStorage.userName) {
    // do nothing
  } else {
    var userNameInput = prompt('Hi! What is your name?');
    localStorage.setItem('userName', userNameInput);
  }

  if (localStorage.quizzesPlayedArray) {
    quizzesPlayed = JSON.parse(localStorage.getItem('quizzesPlayedArray'));
  }

  for (var i = 0; i < quizId.length; i++) {
    var qh3 = document.createElement('h3');
    qh3.textContent = quizzes[i].name;
    quizId[i].appendChild(qh3);
    var qPic = document.createElement('img');
    qPic.src = 'http://via.placeholder.com/300x100';
    quizId[i].appendChild(qPic);
    var quizText = document.createElement('p');
    quizText.textContent = 'Click Here!';
    quizId[i].appendChild(quizText);
  }

  // if (quizzesPlayed.length < quizzes.length) {
  //   startButton.addEventListener('click', renderQuiz);
  // }
}


function randomQuiz() {
  return quizzes[Math.floor(Math.random() * quizzes.length)];
}


function chooseQuiz() {
  var chosenQuiz = randomQuiz();

  while (quizzesPlayed.includes(chosenQuiz)) {
    chosenQuiz = randomQuiz();
  }

  quizzesPlayed.push(chosenQuiz);
  saveToLocalStorage();
}


function renderQuiz() {
  chooseQuiz();
  document.getElementById('startDiv').style.display = 'none';

  for (var i in quiz1.quizItems) {
    var newDiv = document.createElement('div');
    var createH3 = document.createElement('h3');
    createH3.textContent = quiz1.quizItems[i].questionText;
    newDiv.appendChild(createH3);

    for (var j = 0; j < quiz1.quizItems[i].options.length; j++) {
      var createOptions = document.createElement('INPUT');
      createOptions.setAttribute('type', 'radio');
      createOptions.setAttribute('id', 'button' + j);
      var createLabel = document.createElement('label');
      createLabel.setAttribute('for', 'button' + j);
      createLabel.textContent = quiz1.quizItems[i].options[j];
      createOptions.appendChild(createLabel);
      // createOptions.setAttribute('value', quiz1.quizItems[i].options[j]);
      //createOptions.textContent = quiz1.quizItems[i].options[j];
      //x.appendChild(createOptions);
      newDiv.appendChild(createOptions);
    }

    document.getElementById('main').appendChild(newDiv);

    // document.getElementById('main').
  }


  var submitEl = document.createElement('INPUT');
  submitEl.setAttribute('type', 'submit');
  submitEl.setAttribute('value', 'Next');
  submitEl.setAttribute('id', 'question' + submitID);

  newDiv.appendChild(submitEl);
  submitEl.addEventListener('click', nextQuestion);


  function renderResult() {
    var greetingH2 = document.createElement('h2');
    greetingH2.textContent = 'Here are you results ' + localStorage.getItem(username) + '!';
    document.getElementById('main').appendChild(greetingH2);
    var thisResult = document.createElement('p');
    thisResult.textContent = 'Your result from the ' + 'quiz name' + ' quiz was: ' + 'result';
    document.getElementById('main').appendChild(thisResult);
    var previousH3 = document.createElement('h3');
    previousH3.textContent = 'Previous Results:';
    document.getElementById('main').appendChild(previousH3);
    // create elements for and append results
  }


  //working prototype

  // for (var i in quiz1.quizItems) {
  //   var newDiv = document.createElement('div');
  //   var createH3 = document.createElement('h3');
  //   createH3.textContent = quiz1.quizItems[i].questionText;
  //   newDiv.appendChild(createH3);
  //   var createOptions = document.getElementById('INPUT');
  //   // for (var j = 0; j < quiz1.quizItems[i].options.length; j++) {
  //   var createOptions = document.createElement('INPUT');
  //   createOptions.setAttribute('type', 'radio');
  //   createOptions.setAttribute('id', 'button' + j);
  //   createOptions.setAttribute('name', quiz1.quizItems[i].questionText);
  //   var createLabel = document.createElement('label');
  //   createLabel.setAttribute('for', 'button' + j);
  //   createLabel.textContent = quiz1.quizItems[i].options[j];
  //   newDiv.appendChild(createLabel);
  //   newDiv.appendChild(createOptions);
  // }
  document.getElementById('main').appendChild(newDiv);

  // document.getElementById('main').
}

function nextQuestion(score) {
  if (document.getElementById('button0').checked) {
    quiz1.score += parseInt(document.getElementById('button0').value);
  }
  else if (document.getElementById('button1').checked) {
    quiz1.score += parseInt(document.getElementById('button1').value);
  }
  else {
    quiz1.score += parseInt(document.getElementById('button2').value);
  }
  console.log(quiz1.score);
  document.getElementById('question' + submitID).style.display = 'none';
  submitID++;
  quizQuestion++;
  renderQuiz();
}



function saveToLocalStorage() {
  localStorage.setItem('result')
  // localStorage.setItem('quizzesPlayedArray', JSON.stringify(quizzesPlayed));
}


renderStart();
