
const question = document.getElementById('question');
const answerButton4 = document.getElementById('answer-btn-4');
const answerButton3 = document.getElementById('answer-btn-3');
const answerButton2 = document.getElementById('answer-btn-2');
const answerButton1 = document.getElementById('answer-btn-1');
const result = document.getElementById('result');



$(document).ready(function () {
   $("#question, #result").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question, #answer-btn-3, #answer-btn-4").toggle();
    
   });
});

 /*Fetch for shared questions at start game */


  const fetchShared = () => {
  return fetch(`assets/data/shared.json`)
    .then((res) => res.json())
   
    .catch(() => {
      return 'Huston we have a problem 🚀';
    });
};
// Pull questions from shared json file in div's //
/*const setGame = (game) => {
    $("factionQuestion").appendTo( $("question-info"));
    $("answer-btn-1").appendTo( $("answer-btn-1"));
    $("answer-btn-2").appendTo( $("answer-btn-2"));
   

}
*/
console.log(fetchShared);


/* Fetch for when a side is choosen
$(document).ready(function () {
  const fetchSide = (side) => {
  return fetch(`assets/data/${side}.json`)
    .then((res) => res.json())
    .catch(() => {
      return 'Huston we have a problem 🚀';
    });
};
const hordeJSON = fetchSide('horde');
const allianceJSON = fetchSide('alliance');
allianceJSON.then((data) => {
  // do stuff
});
hordeJSON.then((data) => {
  // do stuff
});
})
*/
