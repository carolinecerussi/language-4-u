window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let quiz = document.querySelector("div#quiz");

})



// User Interface Logic

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
    const questionOne = parseInt(document.querySelector("input#answerOne").checked.value);
    const questionTwo = parseInt(document.querySelector("input#answerTwo").checked.value);
    const questionThree = parseInt(document.querySelector("input#answerThree").checked.value);
     if (questionOne === "1" && questionTwo === "1" && questionThree==="1") {
      document.getElementById("react").removeAttribute("class");
      // goes to swings, removes class=hidden attribute, which removes the css styles code saying .hidden =display: none//
      // document.getElementById("python").removeAttribute("class");
      // document.getElementById("cSharp").removeAttribute("class");
      // document.getElementById("javaScript").removeAttribute("class");

    } 
  }
}