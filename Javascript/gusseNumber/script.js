"use strict";

console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "correct number";
document.querySelector(".number").textContent = 19;
document.querySelector(".score").textContent = 18;
const guess = (document.querySelector(".guess").value = Math.trunc(
  Math.random() * 21 + 1
));
console.log(guess);
