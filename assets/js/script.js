
const questionRef = document.querySelector('#question-info');
const answerButtonRef = document.querySelector('#answer-btns');
const resultButtonRef = document.querySelector('#result-info');
let quiz


$(document).ready(function () {
   $("#question, #result").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question, #answer-btn-3, #answer-btn-4").toggle();
    
   });
    fetchData("shared.json");
});

 /**Fetch for shared questions at start game **/


  const fetchData = (jsonFile) => {
  return fetch(`assets/data/${jsonFile}`)
    .then((res) => res.json())
    .then((gameFile)=>{
        console.log(gameFile)
        quiz=gameFile
        showQuestion(1);
    })
    .catch((err) => console.log(err));

  }
//Replace dave and move the let

//Make arrow function
const showQuestion = (questionIndex)=>{
    const questions = quiz.find(questions=>questions.id===questionIndex)
    questionRef.innerHTML = questions.question
   
   console.log(questions)
    questions.answers.forEach(answer => {

        
        /*answerButtonRef.innerHTML = answer.text*/
         
           $(`<div class="col-sm-12 col-lg-6 text-center mt-3"><a href="#" class="btn btn-danger answer-button" aria-label="Answer button">${answer.text}</a></div>`).appendTo(answerButtonRef)

           $('.answer-button').click(function(){
               selectAnswer(answer.nextQuestionId)
           })
        
});
}

//Make arrow function
function selectAnswer(nextQuestion) {
    
    if(nextQuestion <= 0){
        showQuestion(1)
    }
    else{
        showQuestion(nextQuestion) 
    }
}



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

