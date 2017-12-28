//put all display functions that must have lower elements loaded in the "display()" function

var roof = 4; //exclusive, how many options
var mathRoof = 0; //how far the randomizer will go to make problem. changes per type
var htmlOut = ""; //what
var n1 = 0; //1st number
var n2 = 0; //2nd number
var index = -1; //which function to operate with those numbers
var correctAns = 0; //correct answer
var inAnswer = 0; //input
var correct = true; //ready to continue to next question
var points = 0; //pts
//var phrase = ["yeet","come on","blah","go!","looool!"]
//toggleDiv("main","explanation");
document.getElementById("main").style.display = "block";
console.log(document.getElementById("main").style.display);
//document.getElementById("explanation").style.display = "none";
if(document.getElementById("main").style.display == "block"){
  newProblem();
} else {
  document.getElementById("restitle").innerHTML = "Internal error. Reload browser and try again!";
}
function toggleDiv(div1,div2){
  console.log(div1);
  var e1 = document.getElementById(div1);
  var e2 = document.getElementById(div2);
  if(e1.style.display == "block"){
    e2.style.display = "block";
    e1.style.display = "none";
    display();
  } else {
    e1.style.display = "block";
    e2.style.display = "none";
    display();
  }
}
function display(){
  if(document.getElementById("main").style.display == "block"){
    document.getElementById("points").innerHTML = "Points: "+points;
    newProblem();
  } else {
    if(correct){
      document.getElementById("restitle").innerHTML = "You're right!";
      document.getElementById("resinfo").innerHTML = "Correct; the answer is " +correctAns +"!";
      console.log("correct");
    } else {
      document.getElementById("restitle").innerHTML = "You're wrong...";
      document.getElementById("resinfo").innerHTML = "Uh oh! You answered " +inAnswer +", but the correct answer is " +correctAns +".";
      console.log("wrong");
    }
  }
}
/*
Adding submitAnswer() because I need to set correctAns after submission.
This is because if I did it on newProblem() correctAns would already be set
when the user is about to type in the answer and thus they can simply look to
see what it is in the console. Don't want that!
*/
function submitAnswer(){
  console.log(index);
  inAnswer = document.getElementById("inAns").value;
  if(inAnswer != ""){
    if(index == 0){ //addition
      correctAns = n1 + n2;
      check();
    }
    if(index == 1){ //subtraction
      correctAns = n1 - n2;
      check();
    }
    if(index == 2){ //multiplication
      correctAns = n1 * n2;
      check();
    }
    if(index == 3){ //division
      correctAns = n1 / n2;
      check();
    }
  } else alert("You have to put something in the box!");
}
function check(statement){
  if(inAnswer == correctAns){
    gotRight()
  } else gotWrong();
}
function gotRight(){
  //alert("good job!");
  correct = true;
  points++;
  init();
}

function gotWrong(){
  //alert("nope, the answer is " +correctAns +" not " +inAnswer);
  correct = false;
  init();
}

function init(){
  document.getElementById("inAns").value = "";
  toggleDiv("main","results");
}

function newProblem(){
  index = Math.floor((Math.random()*roof));
  if(index == -1 || index >= roof){
    htmlOut = "Internal error. Reload browser and try again!"
    document.getElementById("question").innerHTML = htmlOut;
  }
  if(index == 0){
    mathRoof = 1000;
    add();
  }
  if(index == 1){
    mathRoof = 1000;
    subt();
  }
  if(index == 2){
    mathRoof = 100;
    mult();
  }
  if(index == 3){
    mathRoof = 10;
    div();
  }
  if(index != -1 || index < roof){
    htmlOut += " = ?";
  }
  document.getElementById("question").innerHTML = htmlOut;
}

function add(){
  n1 = Math.floor((Math.random()*mathRoof));
  n2 = Math.floor((Math.random()*n1));
  htmlOut = n1+" + "+n2;
}

function subt(){
  n1 = Math.floor((Math.random()*mathRoof));
  n2 = Math.floor((Math.random()*n1));
  htmlOut = n1+" - "+n2;
}

function mult(){
  n1 = Math.floor((Math.random()*mathRoof));
  n2 = Math.floor((Math.random()*n1));
  htmlOut = n1+" &times "+n2;
}

function div(){
  n2 = Math.floor((Math.random()*(mathRoof-1)))+1;
  n1 = n2*Math.floor((Math.random()*12));
  htmlOut = n1+" &divide "+n2;
}
