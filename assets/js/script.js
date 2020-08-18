/*
const question = document.getElementById('question');
const answerButton4 = document.getElementById('answer-btn-4');
const answerButton3 = document.getElementById('answer-btn-3');
const answerButton2 = document.getElementById('answer-btn-2');
const answerButton1 = document.getElementById('answer-btn-1');
*/

$(document).ready(function () {
   $("#question").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question, #answer-btn-3, #answer-btn-4").toggle();
   });
});
/*
$(document).ready(function () {
  fetchData("shared.json");
});

const fetchData = () => {
  return fetch(`assets/data/shared.json`)
    .then((res) => res.json())
    .then(gameData => {
      setGame(gameData.game);
    })
    .catch((err) => console.log(err));
};
*/

