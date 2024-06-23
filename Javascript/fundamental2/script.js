// Start sat,22 june
"use strict";

let hasDriverLicense = false;
let passTest = true;

if (passTest) {
  passTest = false;
}

/* functions im js */

function logger() {
  console.log("i comming from function");
}

logger(); // invock caling runnig
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const a = fruitProcessor(3, 7);
console.log(a);
// add

function Add(a, b) {
  return a + b;
}

const resulat = Add(4, 8);

console.log(resulat);
// Function Declarations Vs Expressions
// const currentYear = new Date().getFullYear();
// console.log(currentYear);
function clacAge1(brithYear) {
  // Function Declarations
  const currentYear = new Date().getFullYear();
  const resulat = currentYear - brithYear;
  return resulat;
}

const H = clacAge1(2001);

console.log(H);

// function expression
const calcAge2 = function (brithYear) {
  //Ananomyes functions
  const currentYear = new Date().getFullYear();
  const resulat = currentYear - brithYear;
  return resulat;
};

const age2 = calcAge2(1991);
console.log(age2);
//Arrow function
const currentYear = new Date().getFullYear();
const age3 = (brithYear) => currentYear - brithYear;
const Sum = age3(1999);
console.log(Sum);

const yearsUntilRetirement = (brithYear) => {
  const age = currentYear - brithYear;
  const re = 65 - age;
  return re;
};

console.log(yearsUntilRetirement(1991));
//

const sum1 = (a, b) => {
  return a * b;
};

const re1 = sum1(3, 9);
console.log(re1);

//

const leftYears = (brithYear, name) => {
  const A = currentYear - brithYear;
  return `hello ${name} you are ${A} yaers to left to live this sutionstion`;
};

const R = leftYears(2023, "Abbab");

console.log(R);
