//wait until HTML is completely loaded
$(document).ready(function(){

var randomNumber = 0,
    numberWins = 0,
    numberLosses = 0,
    playerScore = 0,
    newGame = true;

//Reminder: check if any vars need parseInt

console.log ("playerScore = " + playerScore);
//define a function for a user win
function reStartWin() {
    numberWins++;
    $("#wins").text("Wins: " + numberWins);
    alert("You win!");
}
//define a function for a user loss
function reStartLose() {
    numberLosses++;
    $("#losses").text("Losses: " + numberLosses);
    alert("You lose");
}
// Generate randomNumber for this round
randomNumberinJS = Math.floor(Math.random() * 100 + 19);
console.log(randomNumberinJS);
$("#randomNumber").text(randomNumberinJS);
console.log("rn = " + parseInt(randomNumberinJS));

//Generate values for each crystal button
//
randomForCrystal1 = Math.floor(Math.random() * 12 + 1);
randomForCrystal2 = Math.floor(Math.random() * 12 + 1);
randomForCrystal3 = Math.floor(Math.random() * 12 + 1);
randomForCrystal4 = Math.floor(Math.random() * 12 + 1);
console.log(randomForCrystal1,randomForCrystal2,randomForCrystal3,randomForCrystal4);
// 
//
//if a crystal is clicked, increment user's total score by its assigned amount
console.log("I got to 91");
//console.log(playerScore);
console.log("Random for Cyrstal1 = " + randomForCrystal1);
//playerScore = 200;
console.log("Current total score = " + playerScore);
$("#currentScore").text(playerScore);
$("#crystals").on("click","#imageCrystal1", function() {
    console.log("I got to 98 - crystal-1 clicked");
    playerScore += randomForCrystal1;
    console.log("playerScore = "+ playerScore);
    $("#currentScore").text(playerScore);
    checkScore();
})
$("#crystals").on("click","#imageCrystal2", function() {
    console.log("I got farther - crystal-2 clicked");
    playerScore += randomForCrystal2;
    console.log("playerScore = "+ playerScore);
    $("#currentScore").text(playerScore);
    checkScore();
})
$("#crystals").on("click","#imageCrystal3", function() {
    console.log("I got farther - crystal-3 clicked");
    playerScore += randomForCrystal3;
    console.log("playerScore = "+ playerScore);
    $("#currentScore").text(playerScore);
    checkScore();
})
$("#crystals").on("click","#imageCrystal4", function() {
    console.log("I got farther - crystal-4 clicked");
    playerScore += randomForCrystal4;
    console.log("playerScore = "+ playerScore);
    $("#currentScore").text(playerScore);
    checkScore();
})

//check if user's total score = randomNumber

function checkScore() {
    console.log(randomNumberinJS);

    console.log("I got to section to test for win");
    if (playerScore === randomNumberinJS) {
        reStartWin();
    }
    //
    //check if user's total score > randomNumber
    console.log("I got to section to test for loss");
    if (playerScore > randomNumberinJS) {
        reStartLose();
    }
}

});