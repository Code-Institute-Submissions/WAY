
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
      buildGame(gameData, 1)
      
    })
    .catch(() => {
      return 'There was a problem loading this data';
    })
  };

// Pull data from shared json file in div's //

//ToDo; dynamically change question number at top let gameFile in fetch set gamefile = gamedata buildgame, global var data and next question
//for id 1, change css color for next question depending on choice (red of blue)
//store outcome in variable


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

/*
function nextQuestionID () {
    const nextQuestion = start.answers.nextQuestion
    if (nextQuestionId <= 0) {
        console.log(nextQuestion)
    }
    }
    nextQuestion()
}
*/