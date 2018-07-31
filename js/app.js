'use strict'; //always

// Vince's work below
var quizItems = [];

var Quiz = function(quizItems) {
  this.score = 0;
  this.quizItems = quizItems;
};

function QuizItem (questionText, options, answer, img) {
  this.questionText = questionText;
  this.options = options;
  this.answer = answer;
  this.img = img;

  quizItems.push(this);
}

new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
new QuizItem('is this a sample question?', ['option1', 'option2', 'option3'], 'option2', 'img/path');
var quiz1 = new Quiz(quizItems);
quizItems = [];

//prototype score tracker
//should eventually be modified to use an event listener
function correctAnswer(quiz) {
  //for loop to iterate through questions goes here
  if (quiz.quizItems[0].options[1] === quiz.quizItems[0].answer) {
    quiz.score++;
  }

}



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
  // document.getElementById('startDiv').appendChild(q1Div);
  // document.getElementById('startDiv').appendChild(q2Div);
  // document.getElementById('startDiv').appendChild(q3Div);
  // buttonSection.appendChild(startButton);
  // document.getElementById('startDiv').appendChild(buttonSection);
}



function renderQuiz() {
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
}


renderStart();
