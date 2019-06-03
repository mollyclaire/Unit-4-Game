$(document).ready(function() {
// Computer generates random number 
    var computerNumber = Math.floor(Math.random() * 102) + 19;
    console.log(computerNumber);

    // Display number in #randomNumber
    $("#randomNumber").text(computerNumber);

// Global variables
    var yourNumber = 0;

// For loop runs through a list of numbers (1-12) and assigns that number to a crystal image    
var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $(".img-thumbnail");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
}

// BROKEN: For every click on a specific image, a number/value is given and displayed in the "Your Number" box
$(".img-thumbnail").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = yourNumber + parseInt(crystalValue);
    console.log(crystalValue);
    $("#yourNumber").text(crystalValue);
}

// The number associated with the click of an image is added with the click of another image

// If "Your Number" is > "Random Number", user loses and the game resets

// If "Your Number" is = "Random Number", user wins and the game resets
    
)});    