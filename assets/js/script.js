const question = document.getElementById('question');
const quizProgress = document.getElementById('quizProgress');
const progressBarFull = document.getElementById('progressBarFull');

$(document).ready(function () {
    $("#landing-page").click(function() {
         $("#landing-page").hide("slow");
    $(".question").show("slow");
  });
})


fetch("../js/shared.json")
.then(res => res.json())
.then(data => console.log(data))

   .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

