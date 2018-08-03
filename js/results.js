'use strict';

var parsedNames = JSON.parse(localStorage.quizNames);
var recentImg = document.createElement('img');
var q1Img = document.createElement('img');
var q2Img = document.createElement('img');
var q3Img = document.createElement('img');

function findParsedRecent() {
  return JSON.parse(localStorage.recentQuiz);
}

function renderResults() {

  document.getElementById('greetingH2').textContent = 'Here are you results ' + localStorage.getItem('userName') + '!';

  if (localStorage.recentQuiz) {
    var parsedRecent = findParsedRecent();
    recentImg.src = parsedRecent[2];
    document.getElementById('currentResult').textContent = 'Your result from the ' + parsedRecent[1] + ' quiz was: ' + parsedRecent[0];
    document.getElementById('asideDivLast').appendChild(recentImg);
  } else {
    document.getElementById('lastResultDiv').style.display = 'none';
  }

  if (localStorage.vQuiz) {
    q1Img.src = JSON.parse(localStorage.vQuiz)[1];
    document.getElementById('q1Result').textContent = parsedNames[0] + ' results: ' + JSON.parse(localStorage.vQuiz)[0];
    document.getElementById('asideDiv1').appendChild(q1Img);
  }

  if (localStorage.cQuiz) {
    q2Img.src = JSON.parse(localStorage.cQuiz)[1];
    document.getElementById('q2Result').textContent = parsedNames[1] + ' results: ' + JSON.parse(localStorage.cQuiz)[0];
    document.getElementById('asideDiv2').appendChild(q2Img);
  }

  if (localStorage.kQuiz) {
    q3Img.src = JSON.parse(localStorage.kQuiz)[1];
    document.getElementById('q3Result').textContent = parsedNames[2] + ' results: ' + JSON.parse(localStorage.kQuiz)[0];
    document.getElementById('asideDiv3').appendChild(q3Img);
  }

  if (localStorage.recentQuiz && parsedNames[0] === parsedRecent[1]) {
    document.getElementById('resultsDiv1').style.display = 'none';
  }

  if (localStorage.recentQuiz && parsedNames[1] === parsedRecent[1]) {
    document.getElementById('resultsDiv2').style.display = 'none';
  }

  if (localStorage.recentQuiz && parsedNames[2] === parsedRecent[1]) {
    document.getElementById('resultsDiv3').style.display = 'none';
  }

  clearRecentQuiz();
}

function clearRecentQuiz() {
  localStorage.removeItem('recentQuiz');
}

renderResults();