const question = document.getElementById('question');
const quizProgress = document.getElementById('quizProgress');

/***Check if DOM is ready for JavaScript***/
$(document).ready(function () {
    $("#start-btn").on("click", function() {
  
function startGame() {
  /***ON CLICK Enter at own risk BUTTON HIDE LANDING PAGE AND SHOW QUESTION IN QUIZ***/
  $("#start-btn").click(function () {
    $("#landing-page").hide("slow");
    $(".question").show("slow");
  });
}

fetch("../js/shared.json")
.then(res => res.json())
.then(data => console.log(data))
})})