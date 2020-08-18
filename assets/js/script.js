/*
const question = document.getElementById('question');


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

