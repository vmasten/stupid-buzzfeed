'use strict'; //always

var quizzes = [];
var quizzesPlayed = [];
var quizId = [document.getElementById('quiz1'), document.getElementById('quiz2'), document.getElementById('quiz3')];

// Vince's work below
var quizItems = [];
var quizQuestion = 0;
var submitID = 0;

var Quiz = function(name, quizItems, results) {
  this.name = name;
  this.score = 0;
  this.quizItems = quizItems;
  this.results = results;

  quizzes.push(this);
};

function QuizItem(questionText, options, answerRanking, img) {
  this.questionText = questionText;
  this.options = options;
  this.answerRanking = answerRanking;
  this.img = img;

  quizItems.push(this);
}

new QuizItem('What is your biggest fear?', ['Spiders', 'Heights', 'Death'], [4, 0, 2], '');
new QuizItem('Who is your idol?', ['Barack Obama', 'Dwayne Johnson', 'Taylor Swift'], [2, 3, 0], '');
new QuizItem('Where would you go on your dream vacation?', ['Tahiti', 'Paris', 'Tokyo'], [0, 1, 2], '');
new QuizItem('What is your favorite genre of video games?', ['Shooter', 'RPG', 'Platformer', 'video games are dumb'], [3, 2, 1, -1], '');
new QuizItem('If you were stuck on a desert island, what would be the one piece of media that gets you through it?', ['The movie Fight Club', 'The book Jurassic Park', 'The game The Witcher 3'], [1, 2, 3], 'imgs/island.jpg');
new QuizItem('Which do you prefer?', ['A small show with a loud band so I can run around in the pit', 'A large arena with a good sound system so I can take the spectacle in', 'Excuse me? All I need is a nice glass of wine and a quiet evening at home'], [4, 2, -1], '');
new QuizItem('My dream house...', ['Is gigantic', 'Has a huge yard/is a farm', 'I don\'t really think about it'], [2, 4, 0], '');
new QuizItem('Somebody...', ['stop me!', 'once told me the world is gonna roll me', 'told me that you had a boyfriend that looked like a girlfriend that I had in February of last year'], [0, 2, 3], '');
new QuizItem('What are you doing RIGHT NOW?', ['Taking this stupid quiz', 'Getting annoyed at all these questions', 'Wondering how my life led me to this'], [2, 1, 0], 'imgs/curious.jpg');
new QuizItem('Anything else we should know?', ['why are you asking me this', 'What is this, a job interview?', 'No, I think you\'ve pretty much covered it.'], [1, 0, 2], '');
var quiz1 = new Quiz('vQuiz', quizItems, ['oh god how did this get here i\'m bad at computers', 'You\'re the one, Neo', 'You\'re a wizard, Harry']);
// var quiz2 = new Quiz('quiz2', quizItems)
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

  for (var i = 0; i < quizzes.length; i++) {
    var qh3 = document.createElement('h3');
    qh3.textContent = quizzes[i].name;
    quizId[i].appendChild(qh3);
    var qPic = document.createElement('img');
    qPic.src = 'http://via.placeholder.com/300x100';
    quizId[i].appendChild(qPic);
    var quizText = document.createElement('p');
    quizText.textContent = 'Click Here!';
    quizId[i].appendChild(quizText);
    quizId[i].addEventListener('click', renderQuiz);
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

function renderStart() {
  var q1Div = document.createElement('div');
  q1Div.setAttribute('class', 'quizDiv');
  var q2Div = document.createElement('div');
  q2Div.setAttribute('class', 'quizDiv');
  var q3Div = document.createElement('div');
  q3Div.setAttribute('class', 'quizDiv');
  var buttonSection = document.createElement('section');
  var q1Img = document.createElement('img');
  q1Img.src = 'http://via.placeholder.com/350x150';
  var q2Img = document.createElement('img');
  q2Img.src = 'http://via.placeholder.com/350x150';
  var q3Img = document.createElement('img');
  q3Img.src = 'http://via.placeholder.com/350x150';
  var startButton = document.createElement('button');
  startButton.textContent = 'Take a Quiz!';
  startButton.addEventListener('click', renderQuiz);

  q1Div.appendChild(q1Img);
  q2Div.appendChild(q2Img);
  q3Div.appendChild(q3Img);
  document.getElementById('startDiv').appendChild(q1Div);
  document.getElementById('startDiv').appendChild(q2Div);
  document.getElementById('startDiv').appendChild(q3Div);
  buttonSection.appendChild(startButton);
  document.getElementById('startDiv').appendChild(buttonSection);
}

function renderQuiz() {
  chooseQuiz();
  document.getElementById('startDiv').style.display = 'none';
  var newDiv = document.createElement('div');
  if (quiz1.quizItems[quizQuestion].img !== '') {
    var img = document.createElement('img');
    img.src = quiz1.quizItems[quizQuestion].img;
    newDiv.appendChild(img);

  }
  var createH3 = document.createElement('h3');
  createH3.textContent = quiz1.quizItems[quizQuestion].questionText;
  newDiv.appendChild(createH3);
  for (var j = 0; j < quiz1.quizItems[quizQuestion].options.length; j++) {
    var divEl = document.createElement('p');
    var inputEl = document.createElement('INPUT');

    inputEl.setAttribute('type', 'radio');
    inputEl.setAttribute('id', 'button' + j);
    inputEl.setAttribute('value', quiz1.quizItems[quizQuestion].answerRanking[j]);
    inputEl.setAttribute('name', quiz1.quizItems[quizQuestion].questionText);

    var createLabel = document.createElement('label');
    createLabel.setAttribute('for', 'button' + j);
    createLabel.textContent = quiz1.quizItems[quizQuestion].options[j];

    divEl.appendChild(inputEl);
    divEl.appendChild(createLabel);
    newDiv.appendChild(divEl);
  }


  var submitEl = document.createElement('INPUT');
  submitEl.setAttribute('type', 'submit');
  submitEl.setAttribute('value', 'Next');
  submitEl.setAttribute('id', 'question' + submitID);

  newDiv.appendChild(submitEl);
  submitEl.addEventListener('click', nextQuestion);

}

function nextQuestion() {

  document.getElementById('question' + submitID).style.display = 'none';
  submitID++;
  quizQuestion++;
  if (quizQuestion < quiz1.quizItems.length)
  {
    renderQuiz();
  }
  else {
    var scoreAdder = document.getElementsByTagName('input');
    for (var i in scoreAdder) {
      if (scoreAdder[i].checked)
        quiz1.score += parseInt(scoreAdder[i].value);
    }
  }
  quizResult();
}

function quizResult() {
  if (quiz1.score < 10) {
    localStorage.setItem(quiz1.name, quiz1.results[0]);
    localStorage.setItem('recentQuiz', JSON.stringify([quiz1.results[0], quiz1.name]));
  }
  else if (quiz1.score < 20) {
    localStorage.setItem(quiz1.name, quiz1.results[1]);
    localStorage.setItem('recentQuiz', JSON.stringify([quiz1.results[1], quiz1.name]));
  }
  else {
    localStorage.setItem(quiz1.name, quiz1.results[2]);
    localStorage.setItem('recentQuiz', JSON.stringify([quiz1.results[2], quiz1.name]));
  }
}

renderStart();
