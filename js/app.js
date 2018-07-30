'use strict'; //always

// Vince's work below
var quizItems = [];

var Quiz = function(quizItems) {
  this.quizItems = quizItems;
};


function QuizItem (questionText, answer, img) {
  this.questionText = questionText;
  this.answer = answer;
  this.img = img;

  quizItems.push(this);
}

var quiz1 = {
  questions: ['q1', 'q2', 'q3', 'q4', 'q5'],
  answers: ['a1', 'a2', 'a3', 'a4', 'a5'],
  imgs: ['img/path1', 'img/path2', 'img/path3', 'img/path4', 'img/path5']
};

var quizMaker = function(quiz) {
  for (var i in quiz.questions) {
    new QuizItem(quiz.questions[i], quiz.answers[i], quiz.imgs[i]);
  }

};

quizMaker(quiz1);


// Kris's work below

function renderStart() {
  var q1Div = document.createElement('div');
  var q2Div = document.createElement('div');
  var q3Div = document.createElement('div');
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
  document.getElementById('main').appendChild(q1Div);
  document.getElementById('main').appendChild(q2Div);
  document.getElementById('main').appendChild(q3Div);
  buttonSection.appendChild(startButton);
  document.getElementById('main').appendChild(buttonSection);
}


function renderQuiz() {
  //stuff
}


renderStart();
