"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModel.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// overlay.addEventListener('click',function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
//   // modal.style.display = "block";
// });
