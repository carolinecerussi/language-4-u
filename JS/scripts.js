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
    const answerChosen = document.querySelector("input[name='answer']:checked").value;      
      // goes to swings, removes class=hidden attribute, which removes the css styles code saying .hidden =display: none//
      document.getElementById("react").removeAttribute("class");
      // document.getElementById("python").removeAttribute("class");
      // document.getElementById("cSharp").removeAttribute("class");
      // document.getElementById("javaScript").removeAttribute("class");

    } 
}