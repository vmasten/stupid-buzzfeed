'use strict';

var quizItems = [];


var Quiz = function(name, quizItems, results) {
  this.name = name;
  this.score = 0;
  this.quizItems = quizItems;
  this.results = results;

  // quizzes.push(this);
};

function QuizItem(questionText, options, answerRanking, img) {
  this.questionText = questionText;
  this.options = options;
  this.answerRanking = answerRanking;
  this.img = img;

  quizItems.push(this);
}

var quiz1 = new Quiz('vQuiz', quizItems, ['oh god how did this get here i\'m bad at computers', 'You\'re the one, Neo', 'You\'re a wizard, Harry']);
var quiz2 = new Quiz('cQuiz', quizItems, ['low result', 'medium result', 'high result']);
var quiz3 = new Quiz('kQuiz', quizItems, ['Platypus', 'Liger', 'Elephant']);


function renderResults() {
  document.getElementById('greetingH2').textContent = 'Here are you results ' + localStorage.getItem('userName') + '!';
  document.getElementById('currentResult').textContent = 'Your result from the ' + 'quiz name' + ' quiz was: ' + 'result';

  if (localStorage.vQuiz) {
    document.getElementById('q1Result').textContent = quiz1.name + ' results: ' + localStorage.getItem(quiz1.name);
  }

  if (localStorage.cQuiz) {
    document.getElementById('q2Result').textContent = quiz2.name + ' results: ' + localStorage.getItem(quiz2.name);
  }

  if (localStorage.kQuiz) {
    document.getElementById('q3Result').textContent = quiz3.name + ' results: ' + localStorage.getItem(quiz3.name);
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