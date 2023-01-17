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

      let answerChosen1 = document.querySelector("input[name='answerOne']:checked").value;
      let answerChosen2 = document.querySelector("input[name='answerTwo']:checked").value;
      let answerChosen3 = document.querySelector("input[name='answerTwo']:checked").value;

const answersTotal = (parseInt(answerChosen1) + parseInt(answerChosen2) + parseInt(answerChosen3));


      // goes to swings, removes class=hidden attribute, which removes the css styles code saying .hidden =display: none//
     let hiddenOutcome = document.body.querySelector(
          "div#hidden");
      if (answersTotal === 3) {
      let  hiddenOutcome = window.document.querySelector("div#react");
              console.log(hiddenOutcome.getAttribute('id'));
         }
      else  if  (answersTotal > 3 && answersTotal < 9) {
          let  hiddenOutcome = window.document.querySelector("div#python")
              console.log(hiddenOutcome.getAttribute('id'));
      }
    else  if (answersTotal === 9)  {
            let    hiddenOutcome = window.document.querySelector("div#cSharp");
              console.log(hiddenOutcome.getAttribute('id'));
    }
else {
  return window.alert("error");
}
window.alert(hiddenOutcome)
}  
}


