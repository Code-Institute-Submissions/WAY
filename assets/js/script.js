/*
const question = document.getElementById('question');
const answerButton4 = document.getElementById('answer-btn-4');
const answerButton3 = document.getElementById('answer-btn-3');
const answerButton2 = document.getElementById('answer-btn-2');
const answerButton1 = document.getElementById('answer-btn-1');
const result = document.getElementById('result');

*/

$(document).ready(function () {
   $("#question, #result").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question, #answer-btn-3, #answer-btn-4").toggle();
    
   });
});

$(document).ready(function () {
  fetch("shared.json")
  .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
});
function appendData(data) {
    let question = document.getElementById('question');
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = 'factionQuestions';
        question.appendChild(div);
    }
}
})