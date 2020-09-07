
const questionRef = document.querySelector('#question-info');
const answerButtonRef = document.querySelectorAll('.answer-button');
const resultButtonRef = document.querySelector('#result-info');
let quiz;


$(document).ready(function () {
   $("#question, #result").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question").toggle(); 
   });
   for (let i = 0; i < answerButtonRef.length; i++){
       console.log("for");
       answerButtonRef[i].addEventListener("click", function (e) {
           selectAnswer(e.target.dataset.nextQuestion);
       });
   }

    fetchData("shared.json");
});

/**
  * Fetch for shared 
  * questions at start 
  *  game 
*/

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
//move quiz let

// code taken from: https://github.com/WebDevSimplified/JavaScript-Text-Adventure

/**
 * Function to get the
 * first question and answers
 * and inject them into their 
 * HTML element
 */
const showQuestion = (questionIndex)=>{
    const questions = quiz.find(questions=>questions.id===questionIndex)
    questionRef.innerHTML = questions.question;
    const answerStrings = questions.answers;
    questionRef.innerHTML = questions.question;
    for (let i = 0; i < answerButtonRef.length; i++) {
        if(questions.answer) {
            if(i < answerStrings.length) {
                answerButtonRef[i].text;
                answerButtonRef[i].dataset.nextQuestion = answerStrings[i].nextQuestionId;
            } else {
                answerButtonRef[i].classList.add("hide");
            }
            }
        }
    };

/**
 * Function to get
 * the next question by id
 */

//ToDo Make arrow function
function selectAnswer(id) {
    nextQuestion = parseInt(id, 10);    
    if (nextQuestion <= 0){
        showQuestion(1)
    }
    else {
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

