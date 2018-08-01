'use strict';

// NOTE: 'quiz name' from localStorage
function renderResults() {
  var parsedRecent = JSON.parse(localStorage.recentQuiz);
  document.getElementById('greetingH2').textContent = 'Here are you results ' + localStorage.getItem('userName') + '!';
  document.getElementById('currentResult').textContent = 'Your result from the ' + parsedRecent[1] + ' quiz was: ' + parsedRecent[0];

  if (localStorage.vQuiz) {
    document.getElementById('q1Result').textContent = quiz1.name + ' results: ' + localStorage.vQuiz;
  }

  if (localStorage.cQuiz) {
    document.getElementById('q2Result').textContent = quiz2.name + ' results: ' + localStorage.cQuiz;
  }

  if (localStorage.kQuiz) {
    document.getElementById('q3Result').textContent = quiz3.name + ' results: ' + localStorage.kQuiz;
  }
// NOTE: recentQuiz check needs to be refactored
  if (quiz1.name === parsedRecent[1]) {
    document.getElementById('q1Result').textContent = '';
  }

  if (quiz2.name === parsedRecent[1]) {
    document.getElementById('q2Result').textContent = '';
  }

  if (quiz3.name === parsedRecent[1]) {
    document.getElementById('q3Result').textContent = '';
  }
}


renderResults();