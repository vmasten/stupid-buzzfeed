'use strict';

function renderResults() {
  document.getElementById('greetingH2').textContent = 'Here are you results ' + localStorage.getItem('userName') + '!';
  document.getElementById('currentResult').textContent = 'Your result from the ' + 'quiz name' + ' quiz was: ' + 'result';

  if (localStorage.quiz1.name) {
    document.getElementById('q1Results').textContent = quiz1.name + ' results: ' + localStorage.getItem(quiz1.name);
  }

  if (localStorage.quiz2.name) {
    document.getElementById('q2Results').textContent = quiz2.name + ' results: ' + localStorage.getItem(quiz2.name);
  }

  if (localStorage.quiz3.name) {
    document.getElementById('q3Results').textContent = quiz3.name + ' results: ' + localStorage.getItem(quiz3.name);
  }

  if (quiz1.name === localStorage.recentQuiz[1]) {
    document.getElementById('q1Results').textContent = '';
  }

  if (quiz2.name === localStorage.recentQuiz[1]) {
    document.getElementById('q2Results').textContent = '';
  }

  if (quiz3.name === localStorage.recentQuiz[1]) {
    document.getElementById('q3Results').textContent = '';
  }
}





renderResults();