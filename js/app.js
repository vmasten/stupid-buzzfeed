'use strict'; //always

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