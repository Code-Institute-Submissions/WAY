/***HIDE QUESTION SECTION WHEN THE PAGE IS LOADED***/
$(document).ready(function () {
  $(".question").hide();
});


function startGame() {
  /***ON CLICK Start Quiz BUTTON HIDE LANDING PAGE AND SHOW QUESTION IN QUIZ***/
  $("#start-btn").click(function () {
    $("#landing-page").hide("slow");
    $(".question").show("slow");
  });
}