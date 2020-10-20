//jshint esversion: 6
//Some code structure ideas relating to how to display the next question and answer were referenced from: https://github.com/WebDevSimplified/JavaScript-Text-Adventure
const questionRef = document.querySelector('#question-info');
const answerButtonRef = document.querySelectorAll('.answer-button');
const resultButtonRef = document.querySelector('#result-info');
const imageRef = document.querySelectorAll('.image');
/** 
 * const factionRef = document.querySelector('#faction');
 * const roleRef = document.querySelector('#role');
 * const classRef = document.querySelector('#class');
 * const raceRef = document.querySelector('#race');
 */
let quiz;


$(document).ready(function() {
    $("#WAY").fadeIn("slow");
    $("#quiz-questions, #result").toggle();
    $("#start-btn").click(function() {
        $("#landing-page, #quiz-questions").toggle();
    });
    for (let i = 0; i < answerButtonRef.length; i++) {
        answerButtonRef[i].addEventListener("click", function(e) {
            selectAnswer(e.target.dataset.nextQuestion);

        });
    }
    fetchData("gamedata.json"); 
});

/**
 * Fetch for shared 
 * questions at start 
 * game 
 * 
 */
 
const fetchData = (jsonFile) => {
    return fetch(`assets/data/${jsonFile}`)
        .then((res) => res.json())
        .then((gameFile) => {
            quiz = gameFile;
            showQuestion(1);
        })
        .catch((err) => console.log(err));
};



/**
 * Function to get the
 * first question and answers
 * and inject them into their 
 * HTML element
 */

const showQuestion = (questionIndex) => {
    const questions = quiz.find(questions => questions.id === questionIndex);
    const answerStrings = questions.answers;

    questionRef.innerHTML = questions.question;
    for (let i = 0; i < answerButtonRef.length; i++) {
        if (questions.answers) {
            if (i < answerStrings.length) {
                answerButtonRef[i].classList.remove("hide");
                answerButtonRef[i].innerText = answerStrings[i].text;

                answerButtonRef[i].dataset.nextQuestion = answerStrings[i].nextQuestionId;
            } else {
                answerButtonRef[i].classList.add("hide");
            }
        };
    }
    
// When an image is available, this will make it visible in the DOM 
    const answers = questions.answers;
    for (let i = 0; i < imageRef.length; i++) {
        if (i < answers.length) {
            if (answers[i].source != null){
                imageRef[i].classList.remove("hide");
                imageRef[i].innerHTML = '<img src="' + answers[i].source + '" class="image">';
            }
            else {
// This is for when answers don't have sources
                imageRef[i].classList.add("hide");
            }  
        }   else {
// This is for when there are fewer answers than imageRefs
            imageRef[i].classList.add("hide");
        }
    }
};


 /** Function to get
 * the next question by id
 */
 
const selectAnswer = (id) => {
    nextQuestion = parseInt(id, 10);
    if (nextQuestion <= 0) {
        showQuestion(1);
    } else {
        showQuestion(nextQuestion);
    }
};
