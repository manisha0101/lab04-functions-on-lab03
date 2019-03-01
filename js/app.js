"use strict";

var nbrOfCorrectGuesses = 0;
var nbrOfIncorrectGuesses = 0;
var nbrOfInvalidAnswers = 0;
var countriesToTravel = ['NewZealand', 'Norway', 'Jordan', 'South Africa', 'India' ];
var correctGuessFlg = false;
var correctGuess1 = 'Y';
var correctGuess2 = 'YES';

// Generic messages for Wrong and Invalid entries
var wrongGuessMessage = "Oops your guess is wrong!";
var invalidAnswerMessage = "Please answer either using Y/N or Yes/No.";

// Yes No questions for visitors
var ques1 = 'Do you think Maroon5 is my favorite band?';
var ques2 = 'Do you think AfroJack is my favorite DJ?';
var ques3 = 'Do you think Golgappa is my favorite dish?';
var ques4 = 'Do you think Norway, NewZealand, SouthAfrica and Jordan are the countries I want to visit?';
var ques5 = 'Do you think I have interest in Politics, reading books and Painting?';
var ques6 = 'Do you remember any country where I want to travel some day ?';
var ques7 = 'Can you guess my birth month? Please enter numbers between 1 to 12 to answer.';

// Responses for Visitor if they guess correct
var correctGuessMsgQues1 = 'Yipeee you guessed it right, Maroon5 is my favorite band!!!';
var correctGuessMsgQues2 = 'Yipeee you guessed it right, I love AfroJack!!!!';
var correctGuessMsgQues3 = 'Yipeee you guessed it right, I can eat golgappa anytime!!!';
var correctGuessMsgQues4 = 'Yipeee you guessed it right, all of these are in my bucketlist to visit!!!';
var correctGuessMsgQues5 = 'Yipeee you guessed it right, I like to be aware of whats happening around and books/painting are goto stuff for me.';

var visitorName = promptVisitorWithQuestion('Hello!! Thanks for visitng my page. Please tell me your name?'); 

if (visitorName.length > 0) {
    alert('Hi '+ visitorName + ' so my guess is you are also a fun loving person and try a lot of new stuff!!!' );
}

var visitorAnswer = promptVisitorWithQuestion('Do you wanna have some fun by playing a Guessing game to get to know about Me?');

if (visitorAnswer.length > 0 && (visitorAnswer.toUpperCase() === 'Y' || visitorAnswer.toUpperCase() === 'YES')) {

    console.log("Yayyy lets Start the game now!!!");
    alert("Yayyy lets Start the game now!!!");

    yesNoQuestion(ques1,correctGuessMsgQues1);
    yesNoQuestion(ques2,correctGuessMsgQues2);
    yesNoQuestion(ques3,correctGuessMsgQues3);
    yesNoQuestion(ques4,correctGuessMsgQues4);
    yesNoQuestion(ques5,correctGuessMsgQues5);

    compareUserEnteredResponse(ques6, countriesToTravel);

    var myBirthMonth = 0;
    var guessesAllowed = 0;
    checkNumberGuess(ques7, myBirthMonth, guessesAllowed);

    console.log("Correct Guesses so far: ", nbrOfCorrectGuesses);
    console.log("Incorrect Guesses: ", nbrOfIncorrectGuesses);
    console.log("Invalid responses: ", nbrOfInvalidAnswers);
    
    alert('You guessed ' + nbrOfCorrectGuesses + ' questions correctly and ' + nbrOfIncorrectGuesses +' questions incorrectly.');
    alert('You answered ' + nbrOfInvalidAnswers + ' questions with Invalid responses.');

} else if (visitorAnswer.length > 0 && (visitorAnswer.toUpperCase() === 'N' || visitorAnswer.toUpperCase() === 'NO') ) {
    console.log("No problem!!! Here are few things about Me which I like to do to have fun!!!");
    alert("No problem!!! Here are few things about Me which I like to do to have fun!!!");

} else {
    console.log(invalidAnswerMessage);
    alert(invalidAnswerMessage);
}

function promptVisitorWithQuestion(question) {
    var answer = prompt(question);
    console.log(question + " Answer by Visitor : "+ answer);
    return answer;
}

function yesNoQuestion(question, correctGuessMsg) {
    var userResponse = promptVisitorWithQuestion(question);
    console.log('question asked : ' + question + '   User Answer: ' + userResponse );

    if (userResponse.toUpperCase() === 'Y' || userResponse.toUpperCase() === 'YES') {
        nbrOfCorrectGuesses++;
        console.log(correctGuessMsg);
        alert(correctGuessMsg);
    } else if (userResponse.toUpperCase() === 'N' || userResponse.toUpperCase() === 'NO' ) {
        nbrOfIncorrectGuesses++;
        console.log(wrongGuessMessage);
        alert(wrongGuessMessage);
    } else {
        nbrOfInvalidAnswers++;
        console.log(invalidAnswerMessage);
        alert(invalidAnswerMessage);
    }  
}

function compareUserEnteredResponse(question, validChoices) {
    var userAnswer = promptVisitorWithQuestion(question);
    console.log('question asked : ' + question + '   User Answer: ' + userAnswer );

    for (var i = 0; i < validChoices.length; i++) {
        console.log('current iteration:', validChoices[i]);

            if (userAnswer.toUpperCase() === validChoices[i].toUpperCase()) {
                alert('Yayy you remember!!!');
                correctGuessFlg = true;
                nbrOfCorrectGuesses++;
                break;
            }
        }       
        if (!correctGuessFlg) {
            alert(wrongGuessMessage);
            nbrOfIncorrectGuesses++;
        }
}

function checkNumberGuess(question, userResponse, guessesAllowed) {
    
    correctGuessFlg = false;
   
    while (userResponse !== 1 && guessesAllowed <= 3) {
         userResponse  = parseInt(promptVisitorWithQuestion(question));
        console.log('myBirthMonth guessed: ', myBirthMonth);
    
        if (userResponse < 6 && userResponse >= 2)   {
            alert('you are close, guess further low.');
            guessesAllowed++;
        } else if (userResponse >= 6) {
            alert('you guessed too high');
            guessesAllowed++;
        } else if (isNaN(userResponse) || userResponse === null) {
            alert('please enter an actual number');
            guessesAllowed++;
        } else if (userResponse === 1) {
            alert('You guessed it right ! ');
            nbrOfCorrectGuesses++;
            correctGuessFlg = true;
        }
        console.log('guessesAllowed:', guessesAllowed);
    }
    
    if (!correctGuessFlg) { 
        nbrOfIncorrectGuesses++;
    }   
}