'use strict'; //always

var quizzes = []; // variable that holds all quizzes
var quizzesPlayed = []; // variable that holds all quizzes played for localStorage
var quizId = [document.getElementById('quiz1'), document.getElementById('quiz2'), document.getElementById('quiz3')];
// variable that gives a quiz id to pass into html
var quizItems = []; // variable that holds each individual question + answer array
var quizQuestion = 0; // variable holding which question user is currently on
var submitID = 0; // variable that increments after each quiz is taken
var eventValue;
var quizNum;
var quizNames = [];

var Quiz = function(name, quizItems, results) { // object constructor for each Quiz
  this.name = name; // name of quiz
  this.score = 0; // user's current score
  this.quizItems = quizItems; // quiz questions
  this.results = results; // results of quiz after score factored in

  quizzes.push(this); // pushes quiz instance into var quizzes
  quizNames.push(this.name);
};

function QuizItem(questionText, options, answerRanking, img) { // object constructor for each quiz question
  this.questionText = questionText;  // question text
  this.options = options; // answer options
  this.answerRanking = answerRanking; // assigned score for each answer
  this.img = img; // img path (if available)

  quizItems.push(this); // pushes all questions into var quizItems
}

// QUIZ ONE
new QuizItem('What is your biggest fear?', ['Spiders', 'Heights', 'Death'], [4, 0, 2], '');
new QuizItem('Who is your idol?', ['Barack Obama', 'Dwayne Johnson', 'Taylor Swift'], [2, 3, 0], '');
new QuizItem('Where would you go on your dream vacation?', ['Tahiti', 'Paris', 'Tokyo'], [0, 1, 2], '');
new QuizItem('What is your favorite genre of video games?', ['Shooter', 'RPG', 'Platformer', 'video games are dumb'], [3, 2, 1, -1], '');
new QuizItem('If you were stuck on a desert island, what would be the one piece of media that gets you through it?', ['The movie Fight Club', 'The book Jurassic Park', 'The game The Witcher 3'], [1, 2, 3], 'imgs/island.jpg');
new QuizItem('Which do you prefer?', ['A small show with a loud band so I can run around in the pit', 'A large arena with a good sound system so I can take the spectacle in', 'Excuse me? All I need is a nice glass of wine and a quiet evening at home'], [4, 2, -1], '');
new QuizItem('My dream house...', ['Is gigantic', 'Has a huge yard/is a farm', 'I don\'t really think about it'], [2, 4, 0], '');
new QuizItem('Somebody...', ['stop me!', 'once told me the world is gonna roll me', 'told me that you had a boyfriend that looked like a girlfriend that I had in February of last year'], [0, 2, 3], '');
new QuizItem('What are you doing RIGHT NOW?', ['Taking this stupid quiz', 'Getting annoyed at all these questions', 'Wondering how my life led me to this'], [2, 1, 0], 'imgs/curious.jpg');
new QuizItem('Anything else we should know?', ['why are you asking me this', 'What is this, a job interview?', 'No, I think you\'ve pretty much covered it.'], [1, 0, 2], '');
var quiz1 = new Quiz('vQuiz', quizItems, ['oh god how did this get here i\'m bad at computers', 'You\'re the one, Neo', 'You\'re a wizard, Harry']);
quizItems = []; // resets quizItems for next quiz

// QUIZ TWO
new QuizItem('What dish sounds most appealing to you on a cold winter evening?', ['Stew', 'Raw onions', 'Ice Cream'], [3, 1, 2], '');
new QuizItem('When ordering food, what\'s your response to \"how spicy?\"', ['No spice, please', '2 chilis', 'Bring on the ghost peppers!'], [1, 2, 3], '');
new QuizItem('Fruits, vegetables, or meat?', ['Veggies', 'Fruits', 'I am a true carnivore, so pass the meat!'], [2, 1, 3], '');
new QuizItem('What condiment is best; ranch dressing or ketchup?', ['Ranch Dressing', 'Ketchup/Catsup', 'neither, those are disgusting'], [1, 2, 3], '');
new QuizItem('What tops your ice cream sundae?', ['Whipped cream', 'Chocolate syrup', 'Just one cherry'], [3, 2, 1], '');
new QuizItem('Tacos, burgers, or pizza?', ['Tacos', 'Burgers', 'Pizza'], [3, 1, 2], )
new QuizItem('Which is your favorite utensil?', ['Fork', 'Knife', 'Spoon'], [1, 2, 3], '');
new QuizItem('Would you rather cook dinner, order delivery, or eat out?', ['Cook at home', 'Order Delivery', 'Dining out'], [3, 1, 2], '');
new QuizItem('Do you prefer sweet, salty, or spicy?', ['spicy', 'salty', 'sweet'], [3, 2, 1], '');
new QuizItem('Choose the delicacy you are forced to eat:', ['Surströmming (fermented herring)', 'Balut (boiled developed bird egg)', 'Kiviak (Auk bird stuffed and fermented in seal carcass)'], [2, 1, 3], '');
var quiz2 = new Quiz('cQuiz', quizItems, ['low result', 'medium result', 'high result']);
quizItems = []; // resets quizItems for next quiz

new QuizItem('How much outside space do you have?', ['A little', 'A lot', 'Way to much'], [1, 2, 3], '');
new QuizItem('What is your Ideal enviroment?', ['PNW', 'An Island', 'The Desert'], [0, 1, 3], '');
new QuizItem('What would you prefer to eat?', ['Shrimp', 'Steak', 'Salad'], [0, 2, 3], '');
new QuizItem('What kind of move would you watch?', ['Romance', 'Action', 'Documentary'], [1, 2, 3], '')
new QuizItem('What is your form of transportation?', ['Public Transportation', 'Car/Truck', 'Walk/Bike'], [0, 1, 3], '');
new QuizItem('What is your choice of spirits?', ['Whiskey', 'Tequila', 'Gin'], [0, 2, 3], '');
new QuizItem('Train a whole party of Pokemon, or train one overpowered Pokemon?', ['What?', 'A Whole Party', 'One Pokemon'], [0, 1, 3], '');
new QuizItem('What skill would you want to learn?', ['Fishing', 'Hunting', 'Foraging'], [0, 2, 3], '');
new QuizItem('Which artis do you appreciate most?', ['Salvador Dali', 'Vincent van Gogh', 'Bob Ross'], [1, 2, 3], '');
new QuizItem('Are you a morning person?', ['Only because I never went to sleep last night', 'Yes', 'No'], [0, 1, 3], '');
var quiz3 = new Quiz('kQuiz', quizItems, ['Platypus', 'Liger', 'Elephant']);
quizItems = [];

var startButton = document.createElement('button'); // button that starts the quiz when clicked
function renderStart() { // function that starts the quiz flow
  localStorage.setItem('quizNames', JSON.stringify(quizNames));
  if (localStorage.userName) { // if user has already been to site, skip asking their name
    // do nothing
  } else {
    var userNameInput = prompt('Hi! What is your name?'); // user's first time, ask for their name via pop-up
    localStorage.setItem('userName', userNameInput); // saving user name into localStorage
  }

  if (localStorage.quizzesPlayedArray) { // if there is data in localStorage
    quizzesPlayed = JSON.parse(localStorage.getItem('quizzesPlayedArray')); // parse it into quizzedPlayedArray for results to feed off of
  }

  for (var i = 0; i < quizzes.length; i++) { // loop to create html elements for the quizzes on index.html
    var qh3 = document.createElement('h3'); // creating h3 element
    qh3.textContent = quizzes[i].name; // h3 w/quiz name
    quizId[i].appendChild(qh3); // append h3 to quizId which is a div that already lives on html
    var qPic = document.createElement('img'); // qPic = img element
    qPic.src = 'http://via.placeholder.com/300x100'; // img placeholder for the quiz
    quizId[i].appendChild(qPic); // appending img element to the identified div for quiz
    var quizText = document.createElement('p'); // create a p element for text under picture in quiz card
    quizText.textContent = 'Click Here!'; // text content for p
    quizText.setAttribute('value', quizzes[i].name);
    quizText.addEventListener('click', function(event) {
      eventValue = event.target.getAttribute('value');
      console.log(eventValue, 'eventvalue');
      renderQuiz(eventValue);
    })// adds an eventListener to watch for a click on quiz
    quizId[i].appendChild(quizText); // appending p element to identified div for quiz
  }
}
// event.target.value()
function renderQuiz(eventValue) { // function to render the quiz questions after selection
  for (var i =0; i < quizzes.length; i++) {
    if (quizzes[i].name === eventValue) {
      quizNum = quizzes[i];
      console.log('quznumb', quizNum);
    }
  }

  document.getElementById('startDiv').style.display = 'none'; // finding div that will be under the quiz
  var newDiv = document.createElement('div'); // creating a new div that will hold the quiz questions


  if (quizNum.quizItems[quizQuestion].img !== '') { // if there is an img for the quiz question
    var img = document.createElement('img'); // create an img element
    img.src = quizNum.quizItems[quizQuestion].img; // set element to be the img for the question
    newDiv.appendChild(img); // append img element to the newDiv to hold the quiz questions
  }

  var createH3 = document.createElement('h3'); // creates an h3 element
  createH3.textContent = quizNum.quizItems[quizQuestion].questionText; // sets text content to the question text
  newDiv.appendChild(createH3); // append the h3 element to the newDiv to hold the quiz question itself
  for (var j = 0; j < quizNum.quizItems[quizQuestion].options.length; j++) { // for each of the options on the quiz question
    var divEl = document.createElement('p'); // create a p element
    var inputEl = document.createElement('input'); // and create an input element

    inputEl.setAttribute('type', 'radio'); // set attribute of input type=radio
    inputEl.setAttribute('id', 'button' + j); // set attribute of input id=button
    inputEl.setAttribute('value', quizNum.quizItems[quizQuestion].answerRanking[j]); // set attribute of input value=answer rank
    inputEl.setAttribute('name', quizNum.quizItems[quizQuestion].questionText); // set attribute of input name=questionText

    var createLabel = document.createElement('label'); // create a label element
    createLabel.setAttribute('for', 'button' + j); // set attribute of label for=button#
    createLabel.textContent = quizNum.quizItems[quizQuestion].options[j]; //set text of label to question option

    divEl.appendChild(inputEl); // append radio button to p element in quiz question
    divEl.appendChild(createLabel); // append label to p element in quiz question
    newDiv.appendChild(divEl); // append the p element (with its children) to quiz div
  }

  var submitEl = document.createElement('INPUT'); // create input element
  submitEl.setAttribute('type', 'submit'); // set attribute of input type=submit
  submitEl.setAttribute('value', 'Next'); // set attribute of input value=Next
  submitEl.setAttribute('id', 'question' + submitID); // set attribute of input id=question#

  newDiv.appendChild(submitEl); // append input to quiz div
  submitEl.addEventListener('click', function(event) {
    console.log(eventValue, 'eventvalue');
    nextQuestion(quizNum);
  }); // add an eventListener for a click on the submit, runs nextQuestion() function

  document.getElementById('main').appendChild(newDiv); // append the quiz div to the main
}


function nextQuestion(quizNum) { // function to display next question when submit button clicked

  document.getElementById('question' + submitID).style.display = 'none'; // sets the input element of last question to disappear
  submitID++; // next submitId for next question
  quizQuestion++; // next quiz question for next selections
  if (quizQuestion < quizNum.quizItems.length) // if the quiz question number is less than number of questions
  {
    renderQuiz(); // display the quiz by running renderQuiz()
  }
  else { // if the quiz question is equal to or greater than the number of questions
    var scoreAdder = document.getElementsByTagName('input'); // variable that gets the input
    for (var i in scoreAdder) { // for each index in scoreAdder
      if (scoreAdder[i].checked) // if scoreAdder has been checked/selected
        quizNum.score += parseInt(scoreAdder[i].value); // add to quiz score value of scoreAdder (option selected)
    }
    quizResult(quizNum);
  }
}


function quizResult(quizNum) { // function to display the quiz results
  if (quizNum.score < 10) { // if the user's score is less than 10
    localStorage.setItem(quizNum.name, quizNum.results[0]); // add to localStorage the result from the quiz object's results
    localStorage.setItem('recentQuiz', JSON.stringify([quizNum.results[0], quizNum.name])); // add to local storage that this result is for recent quiz
  }
  else if (quizNum.score < 20) { // if the user's score is 10-19
    localStorage.setItem(quizNum.name, quizNum.results[1]); // add to localStorage the result from the quiz object's results
    localStorage.setItem('recentQuiz', JSON.stringify([quizNum.results[1], quizNum.name])); // add to local storage that this result is for recent quiz
  }
  else { // if the user's scrore is 20+
    localStorage.setItem(quizNum.name, quizNum.results[2]); // add to localStorage the result from the quiz object's results
    localStorage.setItem('recentQuiz', JSON.stringify([quizNum.results[2], quizNum.name])); // add to local storage that this result is for recent quiz
  }
  location.href = 'results.html';
}

renderStart(); // run the renderStart() function
