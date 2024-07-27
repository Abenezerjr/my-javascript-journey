"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "correct number";
// document.querySelector(".number").textContent = 19;
// document.querySelector(".score").textContent = 18;
// const guess = (document.querySelector(".guess").value = Math.trunc(
//   Math.random() * 21 + 1
// ));
// console.log(guess);

//for generating randome number
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(number);
//let score_number = (document.querySelector(".score").textContent = score);
document.querySelector(".submit").addEventListener("click", function () {
  /*
  what is addeventListener ;- it is a javascript function that accept two parameter
  in order to list event and execute some function based on that that event is excuet



  */
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent =
      "please eneter  a number between 1 to 20";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "correct number";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
    }
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing,,,";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#ffff";
  document.querySelector(".number").style.width = "15";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
