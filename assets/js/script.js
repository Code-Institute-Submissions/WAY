
const questionRef = document.querySelector('#question-info');
const answerButtonRef = document.querySelector('#answer-btns');



$(document).ready(function () {
   $("#question, #result").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question, #answer-btn-3, #answer-btn-4").toggle();
    
   });
    fetchData("shared.json");
});

 /*Fetch for shared questions at start game */


  function fetchData(filename) {
  return fetch(`assets/data/${filename}`)
    .then((res) => res.json())
    .then(gameData => {
      buildGame(gameData, 2);
    })
    .catch(() => {
      return 'There was a problem loading this data';
    })
  };

// Pull questions from shared json file in div's //

//ToDo; dynamically change question number at top let gameFile in fetch set gamefile = gamedata buildgame, global vat data and next question

function buildGame (quiz, questionNumber) {
   const start = quiz.find(game => game.id === questionNumber)
    //Insert question into div and answers into buttons
    //hide answer buttons that arent being used
    //button needs to go to right next question
    //if it comes to end of shared, insert into a result file for later use
    questionRef.innerHTML = start.question
    //loop through anwers array
    //append text to answer buttons
    start.answers.forEach(answer => {
        $(`<div class="col-sm-12 col-lg-6 text-center mt-3"><a href="#" class="btn btn-danger answer-button" aria-label="Answer button">${answer.text}</a></div>`).appendTo(answerButtonRef)
    console.log(answer)
    });
   console.log(start.question);
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
