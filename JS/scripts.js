function addTotal(currentTotal,newTotal) {
  return currentTotal + newTotal;
}

let currentTotal = 0;
 let checkedAnswerVal = (document.getElementsByName('quizForm').checked);
 let newTotal = currentTotal + checkedAnswerVal;
console.log(checkedAnswerVal);
console.log(newTotal);




// document.getElementById('answer1').value;
// document.getElementById('answer2').value;
// document.getElementById('answer3').value;


function quizTotal() {
if (selectedAnswer[checked] && selectedAnswer === answerWorthArray[1] ) {
  return currentTotal;
} else if  (selectedAnswer[checked] = true && selectedAnswer === answerWorthArray[2] ) {
  return currentTotal;
} else if (selectedAnswer[checked] = true && selectedAnswer === answerWorthArray[3] ) {
  return currentTotal;

}
  console.log(selectedAnswer);
quizTotal();
}




function saySomething(whatToSay) {
  window.alert(whatToSay);
}

function findOutcome(selectedAnswer){

  return selectedAnswer;
}

function add(number1, number2) {
  return number1 + number2;
}





// $(document).ready(function() {
//   $("#form1").submit(function(event) {
//     const q1 = $("input:radio[name=q1]:checked").val();
//     const q2 = $("input:radio[name=q2]:checked").val();
//     const q3 = $("input:radio[name=q3]:checked").val();
//     const q4 = $("input:radio[name=q4]:checked").val();
//     const q5 = $("input:radio[name=q5]checked").val();
//     const q6 = $("input:radio[name=q6]:checked").val();
//     if (q1 === "a") {
//       $(".formContainer").hide()
//       $(".cSharp").show()
//     } if (q1 === "b") {
//       $(".formContainer").hide()
//       $(".ruby").show()
//     } if (q1 === "c") {
//       $(".formContainer").hide()
//       $(".python").show()
//     }
//     event.preventDefault()
//    })
// });
  

