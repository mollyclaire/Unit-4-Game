$(document).ready(function() {
// Computer generates random number 
    var computerNumber = Math.floor(Math.random() * 102) + 19;
    console.log(computerNumber);

    // Display number in #randomNumber
    $("#randomNumber").text(computerNumber);

// Global variables
    var yourNumber = 0;
    var wins = 0;
    var losses = 0;

// Computer assigns random number (1-12) to each crystal
    var redNum = Math.floor(Math.random()*11+1);
    var yellowNum = Math.floor(Math.random()*11+1);
    var blueNum = Math.floor(Math.random()*11+1);
    var greenNum = Math.floor(Math.random()*11+1);

// Win function 
   function win() {
    wins++;
    $("#wins").text(wins);
    reset();
   }

// Lose function
    function lose() {
    losses++;
    $("#losses").text(losses);
    reset();
    }

// Reset funtion (computer randomly selects a new number for randomNumber and crystals)
    function reset() {
        computerNumber = Math.floor(Math.random() * 102) + 19;
        console.log(computerNumber); 
        redNum = Math.floor(Math.random()*11+1);
        yellowNum = Math.floor(Math.random()*11+1);
        blueNum = Math.floor(Math.random()*11+1);
        greenNum = Math.floor(Math.random()*11+1);
        yourNumber = 0;
        $("#randomNumber").text(computerNumber);
        // yourNumber resets to 0 on the page
        $("#yourNumber").text(parseInt("0"));
    }

// When the player clicks on red, the randomly selected number for that crystal is added to computerNumber
    $("#red").on("click", function() {
        yourNumber = yourNumber + redNum;
        console.log(yourNumber);
        $("#yourNumber").text(yourNumber);
        // If the number in #yourNumber equals the #randomNumber, the player wins
        if (yourNumber == computerNumber) {
            win();
        // If the number in #yourNumber > #randomNumber, the player loses
        } else if (yourNumber > computerNumber) {
            lose();
        }
    })

    $("#yellow").on("click", function() {
        yourNumber = yourNumber + yellowNum;
        console.log(yourNumber);
        $("#yourNumber").text(yourNumber);
        // If the number in #yourNumber equals the #randomNumber, the player wins
        if (yourNumber == computerNumber) {
            win();
        // If the number in #yourNumber > #randomNumber, the player loses    
        } else if (yourNumber > computerNumber) {
            lose();
        }
    })

    $("#blue").on("click", function() {
        yourNumber = yourNumber + blueNum;
        console.log(yourNumber);
        $("#yourNumber").text(yourNumber);
        // If the number in #yourNumber equals the #randomNumber, the player wins
        if (yourNumber == computerNumber) {
            win();
        // If the number in #yourNumber > #randomNumber, the player loses
        } else if (yourNumber > computerNumber) {
            lose();
        }
    })

    $("#green").on("click", function() {
        yourNumber = yourNumber + greenNum;
        console.log(yourNumber);
        $("#yourNumber").text(yourNumber);
        // If the number in #yourNumber equals the #randomNumber, the player wins
        if (yourNumber == computerNumber) {
            win();
        // If the number in #yourNumber > #randomNumber, the player loses    
        } else if (yourNumber > computerNumber) {
            lose();
        }
    })
});