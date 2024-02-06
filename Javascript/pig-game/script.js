"use strict";

// score of a players
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");

const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

//starting condition
let score, playing, currentScore, activePlayer;
///
const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
///
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//rolling dice function
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1 generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2 display a dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // check for rolled1: if true,
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();

      // switch to next player
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //1 add current score to active players score
    score[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2 chek if player's sceore is >=100
    if (score[activePlayer] >= 25) {
      playing = false;
      diceEl.classList.add("hidden");
      // finnish
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      //document.querySelector(`.player--${activePlayer}`).textContent =
      // ("Congra you win");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
