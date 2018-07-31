'use strict';

function renderResults() {
  document.getElementById('greetingH2').textContent = 'Here are you results ' + localStorage.getItem(username) + '!';
  document.getElementById('currentResult').textContent = 'Your result from the ' + 'quiz name' + ' quiz was: ' + 'result';
  
  // if (localStorage.)
  document.getElementById('previousResultsH3').textContent = 'Previous Results:';
  document.getElementById('q1Result').textContent = 'Result';
}





renderResults();