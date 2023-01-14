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
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);
     if (age === 1 && height >= 60) {
      document.getElementById("react").removeAttribute("class");
      // goes to swings, removes class=hidden attribute, which removes the css styles code saying .hidden =display: none//
      document.getElementById("python").removeAttribute("class");
      document.getElementById("cSharp").removeAttribute("class");
      document.getElementById("javaScript").removeAttribute("class");

    } 
  }
}