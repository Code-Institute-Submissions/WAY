/*const question = document.getElementById('question');
const quizProgress = document.getElementById('quizProgress');

*/
$(document).ready(function () {
  fetchData("shared.json");
});

$(document).ready(function () {
   $("#question").hide();
  $("#start-btn").click(function(){
    $("#landing-page").hide();
    $("#question").show();
  });
});
