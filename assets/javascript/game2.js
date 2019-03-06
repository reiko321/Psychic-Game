$(document).ready(function () {

    $("#divTitle").html("<h1> The Psychic Game! </h1>");

    $("#divInstr").html("<p> Guess what letter I am thinking of: <p>");

    $("#guessed").html("<p> Letters Guessed:</p>");

    var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;


    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-text");

    // var letterGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    for (i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");

        letterBtn.addClass("letter-button");
        letterBtn.addClass("letter");
        letterBtn.addClass("letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
    }

    $(".letter-button").on("click", function () {
        var letterGuess = $("<div>"); event.key;

        letterGuess.addClass("letter");
        letterGuess.addClass("letter-guess");
        letterGuess.text($(this).attr("data-letter"));
        $("#display").append(letterGuess);

    })

    $("#clear").on("click", function () {
        $("#display").empty();

    })

    
});
