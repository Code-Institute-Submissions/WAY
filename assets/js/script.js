/*
const question = document.getElementById('question');


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

