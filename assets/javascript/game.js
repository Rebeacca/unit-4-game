var wins= 0;
var losses= 0;
var totalScore= 0;

$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    
    $('#randomNumber').text(Random);
    
    var yellowGem= Math.floor(Math.random()*11+1)
    var greenGem= Math.floor(Math.random()*11+1)
    var blueGem= Math.floor(Math.random()*11+1)
    var pinkGem= Math.floor(Math.random()*11+1)
    
$('#wins').text(wins);
$('#losses').text(losses);

$('#y').on ('click', function(){
    totalScore = totalScore + yellowGem;
    console.log("New totalScore= " + totalScore);
    $('#guesses').text(totalScore); 
 
        if (totalScore == Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        }   
  })  
  $('#g').on ('click', function(){
    totalScore = totalScore + greenGem;
    console.log("New totalScore= " + totalScore);
    $('#guesses').text(totalScore); 
        if (totalScore == Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        } 
  })  
  $('#b').on ('click', function(){
    totalScore = totalScore + blueGem;
    console.log("New totalScore= " + totalScore);
    $('#guesses').text(totalScore);

          if (totalScore == Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        } 
  })  
  $('#p').on ('click', function(){
    totalScore = totalScore + pinkGem;
    console.log("New totalScore= " + totalScore);
    $('#guesses').text(totalScore); 
      
          if (totalScore == Random){
          winner();
        }
        else if ( totalScore > Random){
          loser();
        }
  })  
}); 
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    yellowGem= Math.floor(Math.random()*11+1);
    greenGem= Math.floor(Math.random()*11+1);
    blueGem= Math.floor(Math.random()*11+1);
    pinkGem= Math.floor(Math.random()*11+1);
    totalScore= 0;
    $('#guesses').text(totalScore);
    } 

    function winner(){
          wins++; 
          $('#wins').text(wins);
          reset();
        }
    
        function loser(){
          losses++;
          $('#losses').text(losses);
          reset()
        }