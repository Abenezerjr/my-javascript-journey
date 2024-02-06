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
// handling an ESC_KEYPRESS EVENT or Global event
// 1 event listerner 1 clikc
// 2 event listener 2 keydown
// ! not contains
// hwne ever you went to lisen a event listener on a keborad use parameter
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
