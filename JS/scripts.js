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
      let hiddenOutcome = window.document.querySelector(
          "div#hidden");
       if (answerChosen.value = 1) {
         hiddenOutcome = window.document.querySelector(
          "div#react");
        console.log(hiddenOutcome);
       } 
      else if  (answerChosen.value = 2) {
               hiddenOutcome = window.document.querySelector(
          "div#python");
              console.log(hiddenOutcome);
      }
          else if  (answerChosen .value= 3) {
               hiddenOutcome = window.document.querySelector(
          "div#cSharp");
              console.log(hiddenOutcome);
      }
      else {
      return  window.alert("oops");}
      }
      // document.getElementById("python").removeAttribute("class");
      // document.getElementById("cSharp").removeAttribute("class");
      // document.getElementById("javaScriptgit").removeAttribute("class");

}
