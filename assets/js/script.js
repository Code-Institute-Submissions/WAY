//jshint esversion: 6
const questionRef = document.querySelector("#questions");
const answerButtonRef = document.querySelectorAll(".answer-button");
const imageRef = document.querySelectorAll(".image");
const resultImageRef = document.querySelector(".result-image");
const resultRef = document.getElementById("result");
const factionRef = document.getElementById("factions");
const roleRef = document.getElementById("roles");
const classRef = document.getElementById("classes");
const raceRef = document.getElementById("races");

let quiz;

$(document).ready(function () {
  $("#game-container").toggle();
  $("#start-btn").click(function () {
    $("#landing-page, #game-container").toggle();
  });
  for (let i = 0; i < answerButtonRef.length; i++) {
    answerButtonRef[i].addEventListener("click", function (e) {
      selectAnswer(e.target.dataset.nextQuestion);
    });
  }
  fetchData("gamedata.json");
});

/**
 * Fetch for shared
 * questions at start
 * game
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
  const questions = quiz.find((questions) => questions.id === questionIndex);
  const answerStrings = questions.answers;
  questionRef.innerHTML = questions.question;
  for (let i = 0; i < answerButtonRef.length; i++) {
    if (questions.answers) {
      if (i < answerStrings.length) {
        answerButtonRef[i].classList.remove("hide");
        answerButtonRef[i].innerText = answerStrings[i].text;
        answerButtonRef[i].dataset.nextQuestion =
          answerStrings[i].nextQuestionId;
      } else {
        answerButtonRef[i].classList.add("hide");
      }
    }
  }
  showImages(questions);
};
// When an image is available, this will make it visible in the DOM
const showImages = (questions) => {
  const answers = questions.answers;
  for (let i = 0; i < imageRef.length; i++) {
if (answers){
    if (i < answers.length) {
      if (answers[i].source != null) {
        imageRef[i].classList.remove("hide");
        imageRef[i].innerHTML =
          '<img src="' + answers[i].source + '" class="image">';
      } else {
        imageRef[i].classList.add("hide");
      }
    } else {
      if (answers === undefined) {
        displayResult(questions);
        imageRef[i].classList.add("hide");
        for (let j = 0; j < answerButtonRef.length; j++) {
          answerButtonRef[j].classList.add("hide");
        }
      } else {
        imageRef[i].classList.add("hide");
      }
    }
}
  };
};
/**
 * Displaying the
 * results
 */

const displayResult = (questions) => {
  if (questions.question === "The results are in!") {
    factionRef.innerHTML = "<b>Your faction is:</b> <br>" + questions.factions;
    roleRef.innerHTML = "<b>Your role is:</b> <br>" + questions.roles;
    classRef.innerHTML = "<b>Your class is:</b> <br>" + questions.classes;
    raceRef.innerHTML = "<b>Your race is:</b> <br>" + questions.races;
    resultImageRef.innerHTML =
      '<img src="' + questions.source + '" class="result-image">';
    resultRef.classList.remove("hide");
    questionRef.classList.add("hide");
  } else {
    resultRef.classList.add("hide");
  }
};

/**
 * Function to get
 * the next question
 * by id
 */

const selectAnswer = (id) => {
  nextQuestion = parseInt(id, 10);
  if (nextQuestion <= 0) {
    showQuestion(1);
  } else {
    showQuestion(nextQuestion);
  }
};
