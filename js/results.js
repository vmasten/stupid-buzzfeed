'use strict';

function renderResults() {
  var parsedRecent = JSON.parse(localStorage.recentQuiz);
  var parsedNames = JSON.parse(localStorage.quizNames);
  var recentImg = document.createElement('img');
  recentImg.src = parsedRecent[2];
  q1Img = document.createElement('img');
  q1Img.src = 
  q2Img = document.createElement('img');
  q2Img.src =
  q3Img = document.createElement('img');
  q3Img.src = 

  document.getElementById('greetingH2').textContent = 'Here are you results ' + localStorage.getItem('userName') + '!';
  document.getElementById('currentResult').textContent = 'Your result from the ' + parsedRecent[1] + ' quiz was: ' + parsedRecent[0];
  document.getElementById('asideDivLast').appendChild(recentImg);

  if (localStorage.vQuiz) {
    document.getElementById('q1Result').textContent = parsedNames[0] + ' results: ' + localStorage.vQuiz;
  }

  if (localStorage.cQuiz) {
    document.getElementById('q2Result').textContent = parsedNames[1] + ' results: ' + localStorage.cQuiz;
  }

  if (localStorage.kQuiz) {
    document.getElementById('q3Result').textContent = parsedNames[2] + ' results: ' + localStorage.kQuiz;
  }

  if (parsedNames[0] === parsedRecent[1]) {
    document.getElementById('q1Result').textContent = '';
  }

  if (parsedNames[1] === parsedRecent[1]) {
    document.getElementById('q2Result').textContent = '';
  }

  if (parsedNames[2] === parsedRecent[1]) {
    document.getElementById('q3Result').textContent = '';
  }
}


renderResults();