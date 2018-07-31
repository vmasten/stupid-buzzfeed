'use strict'; //always

// Vince's work below
var quizItems = [];
var quizQuestion = 0;
var submitID = 0;

var Quiz = function(quizItems) {
  this.score = 0;
  this.quizItems = quizItems;
};

function QuizItem (questionText, options, answerRanking, img) {
  this.questionText = questionText;
  this.options = options;
  this.answerRanking = answerRanking;
  this.img = img;

  quizItems.push(this);
}

new QuizItem('What is your biggest fear?', ['Spiders', 'Heights', 'Death'], [2, 0, 1], 'img/path');
new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
var quiz1 = new Quiz(quizItems);
quizItems = [];

//prototype score tracker
//should eventually be modified to use an event listener
// function correctAnswer(quiz) {
//   //for loop to iterate through questions goes here
//   if (quiz.quizItems[0].options[1] === quiz.quizItems[0].answer) {
//     quiz.score++;
//   }

// }



// Kris's work below

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
  document.getElementById('startDiv').style.display = 'none';
  var newDiv = document.createElement('div');
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



renderStart();
