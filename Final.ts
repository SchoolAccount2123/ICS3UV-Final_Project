// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2026-1-14

// Constants

const POINTS_PER_CORRECT: number = 1;



// Variables
let score: number = 0;
let counter: number = 5; 




// Question arrays

let questions = [
  "What is the capital of Ontario?",
  "What is 9 * 6?",
  "What planet has been told to be similar to earth and is red?",
  "What is 2 - 8?",
  "How many months are in a year?"
];


// The correct answers
let answers = [
  "Toronto",
  "54",
  "Mars",
  "-6",
  "12"
];

// Random congratulating messages

let congrats = [
  "Good job!",
  "Way to Go!",
  "Well done!"
];

let randomize = Math.floor(Math.random() * congrats.length);

// Storing and asking the users name for later use.

let userName = prompt("Hello, please enter your name.");

if (userName === null || userName === "") {
  userName = "Player";
}

// Intro to the game and instructions

console.log("Welcome, " + userName + "!\n\n" +
  "This trivia game is for fun and education.\n" +
  "You will answer questions about Canada, math, and fun facts.\n" +
  "You earn points for each correct answer, and feedback for incorrect ones.");

// Function to check answer

function checkAnswer(userAnswer: string, correctAnswer: string){
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("Correct!");
    let randomize = Math.floor(Math.random() * congrats.length);
    console.log(congrats[randomize], userName);
    score = score + POINTS_PER_CORRECT;
  } else {
    console.log("That is incorrect. The correct answer was: " + correctAnswer)
  }
}

// endgame function

// function endGame(){
//   console.log("Thats all! thank you for playing!")
// }


// Loop through questions

for (let counter = 0; counter < questions.length; counter++) {
  console.log("")
  let userAnswer = prompt(questions[counter]);

  if (userAnswer !== null) {
    checkAnswer(userAnswer, answers[counter]);
  } 

  // if (userAnswer.toLowerCase() === "end"){
  //   endGame()
  // }

  console.log("Current Score: " + score);
}

// ending the game

console.log("That Marks the end of the game! Thank you for playing! your final score is...", score)