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

