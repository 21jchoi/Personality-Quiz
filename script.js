//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0; //questions answered
var avatarAangScore = 0;
var southernRaidersScore = 0;
var crossroadsScore = 0;
var talesScore = 0;

var result = document.getElementById("result");

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

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", avatarAang);
q1a2.addEventListener("click", southernRaiders);
q1a3.addEventListener("click", crossroads);
q1a4.addEventListener("click", tales);
q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);
q1a3.addEventListener("click", disableBtn1);
q1a4.addEventListener("click", disableBtn1);

q2a1.addEventListener("click", tales);
q2a2.addEventListener("click", avatarAang);
q2a3.addEventListener("click", crossroads);
q2a4.addEventListener("click", southernRaiders);
q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);
q2a3.addEventListener("click", disableBtn2);
q2a4.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", southernRaiders);
q3a2.addEventListener("click", crossroads);
q3a3.addEventListener("click", tales);
q3a4.addEventListener("click", avatarAang);
q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);
q3a3.addEventListener("click", disableBtn3);
q3a4.addEventListener("click", disableBtn3);

q4a1.addEventListener("click", southernRaiders);
q4a2.addEventListener("click", avatarAang);
q4a3.addEventListener("click", crossroads);
q4a4.addEventListener("click", tales);
q4a1.addEventListener("click", disableBtn4);
q4a2.addEventListener("click", disableBtn4);
q4a3.addEventListener("click", disableBtn4);
q4a4.addEventListener("click", disableBtn4);

//#TODO: Define quiz functions here
function avatarAang() {
  avatarAangScore += 1;
  questionCount += 1;
  //alert("one pt avatar aang");
  if (questionCount >= 4) {
    updateResult();
  }
}
function southernRaiders() {
  southernRaidersScore += 1;
  questionCount += 1;
  //alert("one pt southern raiders");
  if (questionCount >= 4) {
    updateResult();
  }
}
function crossroads() {
  crossroadsScore += 1;
  questionCount += 1;
  //alert("one pt crossroads");
  if (questionCount >= 4) {
    updateResult();
  }
}
function tales() {
  talesScore += 1;
  questionCount += 1;
  //alert("one pt tales");
  if (questionCount >= 4) {
    updateResult();
  }
}
function updateResult() {
  if (avatarAangScore >= 3) {
    result.innerHTML = "Your result is... Sozin's Comet Part 4: Avatar Aang (3x21)";
  } else if (southernRaidersScore >= 3) {
    result.innerHTML = "Your result is... The Southern Raiders (3x16)";
  } else if (crossroadsScore >= 3) {
    result.innerHTML = "Your result is... The Crossroads of Destiny (2x20)";
  } else if (talesScore >= 3) {
    result.innerHTML = "Your result is... The Tales of Ba Sing Se (2x15)";
  } else {
    result.innerHTML = "Your result is... you like all of them!";
  }
}
function disableBtn1() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
}
function disableBtn2() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
}
function disableBtn3() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
}
function disableBtn4() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}