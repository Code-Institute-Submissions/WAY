
const question = document.getElementById('question');
const answerButton4 = document.getElementById('answer-btn-4');
const answerButton3 = document.getElementById('answer-btn-3');
const answerButton2 = document.getElementById('answer-btn-2');
const answerButton1 = document.getElementById('answer-btn-1');
const result = document.getElementById('result');



let currentQuestion;
let factionQuestions;

$(document).ready(function () {
   $("#question, #result").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question, #answer-btn-3, #answer-btn-4").toggle();
    
   });
});

/* Fetch for shared questions at start game */

$(document).ready(function () {
  const fetchShared = () => {
  return fetch(`assets/data/shared.json`)
    .then((res) => res.json())
    .catch(() => {
      return 'Huston we have a problem 🚀';
    });
};

const shared = fetchShared();
shared.then((data) => {
    // Pull questions from shared json file in div's //
});






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
})