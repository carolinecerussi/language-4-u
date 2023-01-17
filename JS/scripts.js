// // window.addEventListener("load", function() {
// //   let form = document.querySelector("form#userInfo");
// //   let resetBtn = document.querySelector("button#reset");

// // })


// // // User Interface Logic

function hideResults() {
  document.getElementById("react").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("javaScript").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const answerChosen = document.querySelector("input[name='answerOne']:checked");      
    console.log(answerChosen);
      // goes to swings, removes class=hidden attribute, which removes the css styles code saying .hidden =display: none//
      document.getElementById("react").removeAttribute("class");
      // document.getElementById("python").removeAttribute("class");
      // document.getElementById("cSharp").removeAttribute("class");
      // document.getElementById("javaScript").removeAttribute("class");

    } 
}

// const form = document.querySelector("form#userInfo");
// const log = document.querySelector("#log");

// form.addEventListener(
//   "submit",
//   (event) => {
//     const data = new FormData(form);
//     let output = "";
//     for (const entry of data) {
//       output = `${output}${entry[0]}=${entry[1]}\r`;
//     }
//     log.innerText = output;
//     event.preventDefault();
//   },
//   false
// );

//Radio Button Selections
function selectionOne(){
		var chosen = "";
		if (document.quiz.question1[0].checked){
			chosen = document.quiz.question1[0].value;
		}
		else if (document.quiz.question1[1].checked){
			chosen =  document.quiz.question1[1].value;
		}
		else{
			chosen = document.quiz.question1[2].value;
		}
	}

  function selectionTwo(){
  		var chosen = "";
  		if (document.quiz.question2[0].checked){
  			chosen = document.quiz.question2[0].value;
  		}
  		else if (document.quiz.question2[1].checked){
  			chosen =  document.quiz.question2[1].value;
  		}
  		else{
  			chosen = document.quiz.question2[2].value;
  		}
  	}

function selectionThree(){
		var chosen = "";
		if (document.quiz.question3[0].checked){
			chosen = document.quiz.question3[0].value;
		}
		else if (document.quiz.question3[1].checked){
			chosen =  document.quiz.question3[1].value;
		}
		else{
			chosen = document.quiz.question3[2].value;
		}
	}

//Create Objects with Questions and Answers In
var Q1={
  question: "What is one of the keyboard shortcuts for copy?",
    1: "Ctrl + C",
    2: "Ctrl + V",
    3: "Shift + C",
    answer: 1,
    };

var Q2={
  question: "What element of the browser enables you to get additional features?",
    1: "Browser Addons",
    2: "More Features",
    3: "Browser Extensions",
    answer: 3,
    };

var Q3={
  question: "What is one of the keyboard shortcuts for paste?",
    1: "Ctrl + P",
    2: "Ctrl + V",
    3: "Shift + V",
    answer: 2,
    };

var Q4={
  question: "What's the quickest way to find specific text on this page?",
    1: "Look for it",
    2: "Ctrl + F",
    3: "Ctrl + L",
    answer: 2,
    };

  var Q5={
  question: "What computer component is featured on the front page?",
  1: "Motherboard",
  2: "Graphics Card",
  3: "Hard Drive",
  answer: 1,
  };

//Create array to store Objects (Questions and Answers)
var quiz = new Array(6);
  userInfo[0] = Q1;
  userInfo[1] = Q2;
  userInfo[2] = Q3;
  userInfo[3] = Q4;
  userInfo[4] = Q5;

//Generate Random question
var question1 = userInfo[Math.floor(Math.random() * userInfo.length)];
var question2 = userInfo[Math.floor(Math.random() * userInfo.length)];
var question3 = userInfo[Math.floor(Math.random() * userInfo.length)];