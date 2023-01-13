
const questions = [ "whats your favorite color","whats up", "hows it going?"];
function answerOutcome {
  const answerWorth = [1,2,3];
  let selectedAnswer = document.getElementsById('quizQuestions').checked;
  console.log(selectedAnswer);
}

$(document).ready(function() {
  $("#form1").submit(function(event) {
    const q1 = $("input:radio[name=q1]:checked").val();
    const q2 = $("input:radio[name=q2]:checked").val();
    const q3 = $("input:radio[name=q3]:checked").val();
    const q4 = $("input:radio[name=q4]:checked").val();
    const q5 = $("input:radio[name=q5]checked").val();
    const q6 = $("input:radio[name=q6]:checked").val();
    if (q1 === "a") {
      $(".formContainer").hide()
      $(".cSharp").show()
    } if (q1 === "b") {
      $(".formContainer").hide()
      $(".ruby").show()
    } if (q1 === "c") {
      $(".formContainer").hide()
      $(".python").show()
    }
    event.preventDefault()
   })
});
  

