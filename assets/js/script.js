
const question = document.getElementById('question');
const result = document.getElementById('result');



$(document).ready(function () {
   $("#question, #result").toggle();
  $("#start-btn").click(function(){
    $("#landing-page, #question, #answer-btn-3, #answer-btn-4").toggle();
    
   });
});

 /*Fetch for shared questions at start game */

$(document).ready(function () {
  fetchData("shared.json");
});

  const fetchData = () => {
  return fetch(`assets/data/shared.json`)
    .then((res) => res.json())
    .then(data => console.log(data))
   
    .catch(() => {
      return 'There was a problem loading this data';
      
    });
    
  };



// Pull questions from shared json file in div's //
/*const setGame = (game) => {
    $("factionQuestion").appendTo( $("question-info"));
    $("answer-btn-1").appendTo( $("answer-btn-1"));
    $("answer-btn-2").appendTo( $("answer-btn-2"));
   

}
*/

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
