'use strict'; //always

// var Quiz = function(quizItems) {
//   this.quizItems = quizItems;
// };

// Quiz.prototype.addItem = function(item) {
  
// };





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

renderStart();