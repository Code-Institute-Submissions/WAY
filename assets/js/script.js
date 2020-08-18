/*const question = document.getElementById('question');
const quizProgress = document.getElementById('quizProgress');
const progressBarFull = document.getElementById('progressBarFull');

$(document).ready(function () {
  fetchData("game.json");
});
*/
$(document).ready(function () {
   $("#question").hide();
  $("#start-btn").click(function(){
    $("#landing-page").hide();
    $("#question").show();
  });
  
});
