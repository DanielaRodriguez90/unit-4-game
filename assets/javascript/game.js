$(document).ready(function(){

// global variable
var wins = 0;
var losses = 0;

// set gem variables to create random number
var green = Math.floor(Math.random() * 12);
var red = Math.floor(Math.random() * 12);
var blue = Math.floor(Math.random() * 12);
var yellow = Math.floor(Math.random() * 12);
var randomNumber = Math.floor(Math.random() * 101)+19;
var totalScore = 0;


//reusable functions

$("#randomNumber").text(randomNumber);

function gameReset(){
    randomNumber = Math.floor(Math.random() * 101) +19;
    $('#randomNumber').text(randomNumber);
    green = Math.floor(Math.random() * 12)+ 1;
    red = Math.floor(Math.random() * 12) + 1;
    blue = Math.floor(Math.random() * 12) + 1; 
    yellow = Math.floor(Math.random() * 12) + 1;
    totalScore = 0;
    $('#total-score-number').text(totalScore);
}

//wins + 1
function winner(){
    wins = wins + 1;
    $('#winsTotal').text(wins);
        gameReset();
}

//losses ++
function loser(){
    losses = losses + 1;
    $('#lossesTotal').text(losses);
        gameReset();
}

//click events that create number values for gems/ Main game

$('#green').click(function (){
    totalScore = totalScore + green;
    $('#total-score-number').text(totalScore);
        if (totalScore == randomNumber){
            winner()
        } else if(totalScore > randomNumber){
            loser();
        }
})

$('#red').click(function (){
    totalScore = totalScore + red;
    $('#total-score-number').text(totalScore);
        if (totalScore == randomNumber){
            winner()
        } else if(totalScore > randomNumber){
            loser();
        }
})

$('#blue').click(function (){
    totalScore = totalScore + blue;
    $('#total-score-number').text(totalScore);
        if (totalScore == randomNumber){
            winner()
        } else if(totalScore > randomNumber){
            loser();
        }
})

$('#yellow').click(function (){
    totalScore = totalScore + yellow;
    $('#total-score-number').text(totalScore);
        if (totalScore == randomNumber){
            winner()
        } else if(totalScore > randomNumber){
            loser();
        }
})

$("#winsTotal").text(wins);
$("#lossesTotal").text(losses);

});