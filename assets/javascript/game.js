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
    
