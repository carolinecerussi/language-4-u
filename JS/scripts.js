// //   let form = document.querySelector("form#userInfo");
// //   let resetBtn = document.querySelector("button#reset");

// // })


// // // User Interface Logic

function hideResults(r) {
document.getElementById("react").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("javaScript").setAttribute("class", "hidden");
}
function showResults() {
  document.getElementById("react").setAttribute("class", "shown");
  document.getElementById("python").setAttribute("class", "shown");
  document.getElementById("cSharp").setAttribute("class", "shown");
  document.getElementById("javaScript").setAttribute("class", "shown");
}


window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();

    showResults();
      let answerChosen1 = document.querySelector("input[name='answerOne']:checked").value;
      let answerChosen2 = document.querySelector("input[name='answerTwo']:checked").value;
      let answerChosen3 = document.querySelector("input[name='answerThree']:checked").value;

const answersTotal = (parseInt(answerChosen1) + parseInt(answerChosen2) + parseInt(answerChosen3));
console.log(answersTotal);

      // goes to swings, removes class=hidden attribute, which removes the css styles code saying .hidden =display: none//
    
  
      if (answersTotal === 3) {
      let  hiddenOutcome = window.document.querySelector("p#react").getAttribute("id");
          window.alert(hiddenOutcome);
           }
      else  if  (answersTotal > 3 && answersTotal < 9) {
          let  hiddenOutcome = window.document.querySelector("p#python").getAttribute("id");
          window.alert(hiddenOutcome);
      }
    else  if (answersTotal === 9)  {
            let    hiddenOutcome = window.document.querySelector("p#cSharp").getAttribute("id");
          window.alert(hiddenOutcome);
    }
else {
  return window.alert("error");
}

}  
}


