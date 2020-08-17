const question = document.getElementById('question');
const quizProgress = document.getElementById('quizProgress');
const progressBarFull = document.getElementById('progressBarFull');

$(document).ready(function () {
    $("#landing-page").click(function() {
         $("#landing-page").hide("slow");
    $(".question").show("slow");
  });
})

async function loadJSON (url) {
  const res = await fetch(url);
  return await res.json();
}

loadJSON('shared.JSON').then(data => {
  console.log(data[0].name);
});


