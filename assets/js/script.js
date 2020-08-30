
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
      buildGame(gameData, nextQuestion)
      
    })
    .catch(() => {
      return 'There was a problem loading this data';
    })
  };

// Pull questions from shared json file in div's //

//ToDo; dynamically change question number at top let gameFile in fetch set gamefile = gamedata buildgame, global var data and next question
//for id 1, change css color for next question depending on choice (red of blue)
//store outcome in variable
//for id 2, store outcome in variabel depending on choice (healer, dps, tank)
//for id 3-11, if yes, store in variabel and go to alli or horde, depending on choice made in id1 and id2
//if no continue to next question

function buildGame (quiz, questionNumber) {
   const start = quiz.find(game => game.id === questionNumber)
    

    questionRef.innerHTML = start.question
    //loop through anwers array
    //append text to answer buttons
    start.answers.forEach(answer => {
        $(`<div class="col-sm-12 col-lg-6 text-center mt-3"><a href="#" class="btn btn-danger answer-button" aria-label="Answer button">${answer.text}</a></div>`).appendTo(answerButtonRef)
    console.log(answer)
    });
   console.log(start.question);
}
function nextQuestion () {
    const nextQuestionId = answers.nextQuestion
    if (nextQuestionId <= 0) {
        return(nextQuestion)
    }
    }
    nextQuestion()

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
