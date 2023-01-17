// //   let form = document.querySelector("form#userInfo");
// //   let resetBtn = document.querySelector("button#reset");

// // })


// // // User Interface Logic

function hideResults() {
 document.getElementById("react").setAttribute("class", "hidden");
 document.getElementById("python").setAttribute("class", "hidden");
 document.getElementById("cSharp").setAttribute("class", "hidden");
}






window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    
      let answerChosen1 = document.querySelector("input[name='answerOne']:checked").value;
      let answerChosen2 = document.querySelector("input[name='answerTwo']:checked").value;
      let answerChosen3 = document.querySelector("input[name='answerThree']:checked").value;

const answersTotal = (parseInt(answerChosen1) + parseInt(answerChosen2) + parseInt(answerChosen3));


      // goes to swings, removes class=hidden attribute, which removes the css styles code saying .hidden =display: none//
    

      let hiddenOutcome = document.body.querySelector(
          "hidden");
      if (answersTotal === 3) {
      let  hiddenOutcome = window.document.querySelector("div#react");
              window.alert(hiddenOutcome.getAttribute('id'));
              showResults();
         }
      else  if  (answersTotal > 3 && answersTotal < 9) {
          let  hiddenOutcome = window.document.querySelector("div#python")
              console.log(hiddenOutcome.getAttribute('id'));
              window.alert(hiddenOutcome.getAttribute('id'));
              showResults();

      }
    else  if (answersTotal === 9)  {
            let    hiddenOutcome = window.document.querySelector("div#cSharp");
                  window.alert(hiddenOutcome.getAttribute('id'));
              showResults();
    }
else {
  return window.alert("error");
}


function showResults() {
  if (hiddenOutcome = "react") { 
    document.querySelector("div#react").setAttribute("class", "reactShown");
} else if 
  (hiddenOutcome = "python") {
    document.querySelector("div#python").setAttribute("class", "pythonShown");
} else {
      document.querySelector("div#cSharp").setAttribute("class", "cSharpShown");
}
showResults;
};


}

}
