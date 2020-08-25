
const questions = document.getElementById('question');
const answerButtons = document.getElementById('answer-btns')
const result = document.getElementById('result');


$(document).ready(function () {
   $("#question, #result").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question, #answer-btn-3, #answer-btn-4").toggle();
    
   });
});

 /*Fetch for shared questions at start game */

$(document).ready(function () {
  fetchData("shared.json");
});

  const fetchData = () => {
  return fetch(`assets/data/shared.json`)
    .then((res) => res.json())
    .then(gameData => {
      setGame(gameData.game);
    })
    .catch(() => {
      return 'There was a problem loading this data';
    }); 
  };

// Pull questions from shared json file in div's //

let state {}

function setGame {
    state {}
    buildGame(1)

}
function buildGame (showQuestion) {
    const game =
    game.find(game => game.id === showquestion)
    questions.innerText = game.question
    while
    (answerButtons.firstChild) {
        answerButtons.removeChild(answers.answerButtons.firstChild)
    }
}

/* Fetch for when a side is choosen
$(document).ready(function () {
  const fetchSide = (side) => {
  return fetch(`assets/data/${side}.json`)
    .then((res) => res.json())
    .catch(() => {
      return 'Huston we have a problem 🚀';
    });
};
const hordeJSON = fetchSide('horde');
const allianceJSON = fetchSide('alliance');
allianceJSON.then((data) => {
  // do stuff
});
hordeJSON.then((data) => {
  // do stuff
});
})
*/
