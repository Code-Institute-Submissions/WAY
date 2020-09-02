
const questionRef = document.querySelector('#question-info');
const answerButtonRef = document.querySelector('#answer-btns');
const resultButtonRef = document.querySelector('#result-info');



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
    .then((data)=>{
        questions(data);
    })
    .catch((err) => console.log(err));

  
function startGame(){
    showQuestion(1)
}

function showQuestion(questionIndex) {
    const questions = gameFile.find(questions=>questionId===questionIndex)
    questionRef.innerHTML = questions.question
   
   
    questions.answers.forEach(answer => {
        if(showAnswer(answer)){


           const button = $(`<div class="col-sm-12 col-lg-6 text-center mt-3"><a href="#" class="btn btn-danger answer-button" aria-label="Answer button">${answer.text}</a></div>`).appendTo(answerButtonRef)
            button.addEventListener('click', () => selectAnswer(answer))
            answer.text.appendTo(answerButtonRef)

        }
});

function selectAnswer(answer) {
    const nextQuestion = answers.nextQuestionId
    if(nextQuestion <= 0){
        return startGame()
    }
        showQuestion(nextQuestion)
    }
    }
}

startGame()


// Pull data from shared json file in div's 

// When a user clicks the enter anyway button, the game should start.
// Start by getting the first question with associated answers.
// when the user chooses red, the css of the next question should turn red, equally for blue
// Then get the next question according to the ID linked in previous answer.
// When a user does not answer yes to anything, this should lead to a restart the game
// When all questions have been answered, there should be a result displayed.
/*
function buildGame (gameFile, questionNumber) {
   const start = gameFile.find(game => game.id === questionNumber)
    

    questionRef.innerHTML = start.question
 
    start.answers.forEach(answer => {
        $(`<div class="col-sm-12 col-lg-6 text-center mt-3"><a href="#" class="btn btn-danger answer-button" aria-label="Answer button">${answer.text}</a></div>`).appendTo(answerButtonRef)
    console.log(answer)
    });
   console.log(start.question);
}
// an click event trigger to get to the next question?
// $("#answer-btns").click(function(){
//}
// nextQuestion = start.id
/*
function nextQuestion () {
    const nextQuestion = start.answers.nextQuestion
    if (nextQuestion ) {
       
    }
    }
    nextQuestion()
}
*/ 