$(document).ready(function(){

var targetScore=0;
var score=0;
var wins=0;
var losses=0;
var redGemValue=0;
var blueGemValue=0;
var greenGemValue=0;
var yellowGemValue=0;

    //generate a random score number between 19 and 120
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //alert (targetScore);
    $('#targetScore').text(targetScore);
    

    //generate gem random number between 1 and 12
    redGemValue=Math.floor(Math.random() * 12) + 1;  
    blueGemValue=Math.floor(Math.random() * 12) + 1;  
    greenGemValue=Math.floor(Math.random() * 12) + 1;  
    yellowGemValue=Math.floor(Math.random() * 12) + 1;  

function reset (){
    //generate a random score number between 19 and 120
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('#targetScore').text(targetScore);
    //generate gem random number between 1 and 12
    redGemValue=Math.floor(Math.random() * 12) + 1;  
    blueGemValue=Math.floor(Math.random() * 12) + 1;  
    greenGemValue=Math.floor(Math.random() * 12) + 1;  
    yellowGemValue=Math.floor(Math.random() * 12) + 1;  
    //reset score
    score=0;
    $('#score').text(score);
}
function youWin (){
    wins++;
    $('#wins').text(wins);
    alert("You win!");
    reset();
}
function youLose(){
    losses++;
    $('#losses').text(losses);
    alert("You lose!");
    reset();
}
function evaluate(){
    if (score===targetScore){
        youWin();
    }
    else if (score >targetScore){
        youLose();
    }
}
$("#green").click(function(){
    score =score+greenGemValue;
      $('#score').text(score);
    evaluate();    
});
$("#red").click(function(){
    score =score+redGemValue;
      $('#score').text(score);
    evaluate();    
});
$("#blue").click(function(){
    score =score+blueGemValue;
      $('#score').text(score);
    evaluate();    
});
$("#yellow").click(function(){
    score =score+yellowGemValue;
      $('#score').text(score);
    evaluate();    
});
});