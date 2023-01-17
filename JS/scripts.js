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

    let answerChosen = document.querySelector("input[name='answerOne']:checked").value;      
    console.log(answerChosen);
      // goes to swings, removes class=hidden attribute, which removes the css styles code saying .hidden =display: none//
     hiddenOutcome = document.body.querySelector(
          "div#hidden");
        console.log();
       if (answerChosen === '1') {
      let  hiddenOutcome = window.document.querySelector("div#react");
              console.log(hiddenOutcome.getAttribute('id'));
         }
      else  if  (answerChosen === '2') {
          let  hiddenOutcome = window.document.querySelector("div#python")
              console.log(hiddenOutcome.getAttribute('id'));
      }
    else  if (answerChosen === '3')  {
            let    hiddenOutcome = window.document.querySelector("div#cSharp");
              console.log(hiddenOutcome.getAttribute('id'));
    }
else {
  return window.alert("error");

}}
}  


