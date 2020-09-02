
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

 /**Fetch for shared questions at start game **/


  const fetchData = () => {
  return fetch(`assets/data//shared.json`)
    .then((res) => res.json())
    .then((gameFile)=>{
        console.log(gameFile)
        console.log(questionIndex)
        questions(gameFile, questionIndex);
    })
    .catch((err) => console.log(err));

 //Make a big function:
function startGame(){
    showQuestion(1)
    
}
//Questions isnt defined, wrong scope?

//Make arrow function
function showQuestion(questionIndex) {
    const questions = gameFile.find(questions=>questions.id===questionIndex)
    questionRef.innerHTML = questions.question
   
   
    questions.answers.forEach(answer => {
        if(showAnswer(answer)){

            //changed below, bet this isnt working as it should
           const button = $(`<div class="col-sm-12 col-lg-6 text-center mt-3"><a href="#" class="btn btn-danger answer-button" aria-label="Answer button">${answer.text}</a></div>`).appendTo(answerButtonRef)
            button.addEventListener('click', () => selectAnswer(answer))
            answer.text.appendTo(answerButtonRef)
            
        }
});
//Make arrow function
function selectAnswer(answer) {
    const nextQuestion = answers.nextQuestionId
    if(nextQuestion <= 0){
        return startGame()
    }
        showQuestion(nextQuestion)
    }
startGame()
}

}


// For json file: for null no yes make a text with a new id that triggers a restart game on click. In that new id post a -1 id that triggers line 56-57
// For Json file(?): find images of used races, crop out profiles and make a button. Show that button in place of nulls in 'What appearance you like best-question
// That full image will be used in final result.
// Make a function that displays the final result.  

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