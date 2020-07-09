//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0; //questions answered
var avatarAangScore = 0;
var southernRaidersScore = 0;
var crossroadsScore = 0;
var talesScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", avatarAang);
q1a2.addEventListener("click", southernRaiders);
q1a3.addEventListener("click", crossroads);
q1a4.addEventListener("click", tales);

q2a1.addEventListener("click", tales);
q2a2.addEventListener("click", avatarAang);
q2a3.addEventListener("click", crossroads);
q2a4.addEventListener("click", southernRaiders);

q3a1.addEventListener("click", southernRaiders);
q3a2.addEventListener("click", crossroads);
q3a3.addEventListener("click", tales);
q3a4.addEventListener("click", avatarAang);

//#TODO: Define quiz functions here
function avatarAang() {
  avatarAangScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function southernRaiders() {
  southernRaidersScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function crossroads() {
  crossroadsScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function tales() {
  talesScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function updateResult() {
  
}
