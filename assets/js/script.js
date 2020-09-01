
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

// Pull data from shared json file in div's 

// When a user clicks the enter anyway button, the game should start.
// when the user chooses red, the css of the next question should turn red, equally for blue
// When a user does not answer yes to anything, this should lead to a restart the game
// When all questions have been answered, there should be a result displayed.

function buildGame (gameFile, questionNumber) {
   const start = gameFile.find(game => game.id === questionNumber)
    

    questionRef.innerHTML = start.question
 
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