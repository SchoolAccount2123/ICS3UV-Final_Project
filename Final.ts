// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2026-1-14

// Constants

const POINTS_PER_CORRECT: number = 1;

// Variables
let score: number = 0;

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
  "Ottawa",
  "54",
  "Mars",
  "32",
  "12"
];


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
    console.log("Good job ", userName)
    score = score + POINTS_PER_CORRECT;
  } else {
    console.log("That is incorrect. The correct answer was: " + correctAnswer)
  }
}

