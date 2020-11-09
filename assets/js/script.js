//jshint esversion: 6

const questionRef = document.querySelector('#questions');
const answerButtonRef = document.querySelectorAll('.answer-button');
const imageRef = document.querySelectorAll('.image');

const factionRef = document.querySelector('.factions');
const roleRef = document.querySelector('.roles');
const classRef = document.querySelector('.classes');
const raceRef = document.querySelector('.races');

let quiz;


$(document).ready(function() {
    $("#WAY").fadeIn("slow");
    $("#game-container").toggle();
    $("#start-btn").click(function() {
        $("#landing-page, #game-container").toggle();
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
        };
    }
    /** Function for displaying
 * the final result by id
 */

const factions = questions.factions;
console.log(factions);    
    for (let i = 0; i < factionRef.length; i++) {
        if (i < factions.length) {
            if (questions[i].factions != null){
                factionRef[i].classList.remove("hide");        
                factionRef[i].innerHTML = 'Your faction is:' + questions.factions;
    }
    else {
                factionRef[i].classList.add("hide");
    };
}
    }

const roles = questions.roles;
console.log(roles);
    for (let i = 0; i < roleRef.length; i++) {
        if (i < roles.length) {
            if (questions[i].roles != null){
                roleRef[i].classList.remove("hide");
                roleRef[i].innerHTML = 'Your role is:' + questions.roles;
        }
        else {
                roleRef[i].classList.add("hide");
        };
    }
}
const classes = questions.classes;
console.log(classes);
    for (let i = 0; i < classRef.length; i++) {
        if (i < classes.length) {
            if (questions[i].classes != null){
                classRef[i].classList.remove("hide");    
                classRef[i].innerHTML = 'Your class is:' + questions.classes;
        }
        else {
            classRef[i].classList.add("hide");
        };
    }
}
const races = questions.races;
console.log(races);
    for (let i = 0; i < raceRef.length; i++) {
        if (i < races.length) {
            if (questions[i].races != null){
                raceRef[i].classList.remove("hide");    
                raceRef[i].innerHTML = 'Your race is:' + questions.races;
        }
        else {
            raceRef[i].classList.add("hide");
        };
    }        
    }         
}  

//imageRef[i].innerHTML = '<img src="' + questions[i].source + '" class="image">';


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
}