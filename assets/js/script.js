/*
const question = document.getElementById('question');
const answerButton4 = document.getElementById('answer-btn-4');
const answerButton3 = document.getElementById('answer-btn-3');
const answerButton2 = document.getElementById('answer-btn-2');
const answerButton1 = document.getElementById('answer-btn-1');
const result = document.getElementById('result');

*/

let currentQuestion;
let factionQuestions;

$(document).ready(function () {
   $("#question, #result").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question, #answer-btn-3, #answer-btn-4").toggle();
    
   });
});

$(document).ready(function () {
  fetchData("shared.json");
});
const fetchData = async () => {
  try {
        const res = await fetch(`assets/data/shared.json`);
        const gameData = await res.json();
        setGame(gameData.game);
    }
    catch (err) {
        return console.log(err);
    }
};

const setGame = (_quiz) => {


  currentQuestion = currentQuestion.factionQuestions[factionQuestions];


  };