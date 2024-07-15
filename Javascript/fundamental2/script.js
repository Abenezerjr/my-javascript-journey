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
/*
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

/// 3 tyeps of function in js

//1 function declaration

function addTwoNumber(a, b) {
  return a + b;
}

const answre = addTwoNumber(9, 10);
console.log(answre);

//2 function exprations

const addTwoNumberwithD = function (a, b) {
  return a + b;
};

const answre2 = addTwoNumber(100, 1);
console.log(answre2);

// Arrow function

const addTwoNumberA = (a, b) => {
  return a + b;
};

console.log(addTwoNumberA(100, 2));

// caling function to another function
function cutfruit(fruit) {
  return fruit * 4;
}

function fruitProcessorF(apples, oranges) {
  const applePieces = cutfruit(apples);
  const orangesPieces = cutfruit(oranges);
  console.log(apples, oranges);
  const juice = `juice with ${applePieces}pieces of apples and ${orangesPieces} pieces of oranges.`;

  return juice;
}

console.log(fruitProcessorF(2, 4));

const calcAge3 = function (brithYear) {
  const age = 2037 - brithYear;
  const retirement = 65 - age;

  return retirement;
};
/*
const yearsUntilRetirementE = function (brithYear, name) {
  const re2 = calcAge3(brithYear);

  if (re2 > 0) {
    // returen retiremnt
    return `${name} retires in ${re2}`;
  } else {
    return `this man is already return`;
  }
};

console.log(yearsUntilRetirementE(1991, "chala"));
console.log(yearsUntilRetirementE(1971, "mana"));
// function challenge

const calcAverage = (score1, score2, score3) => {
  const resulat = (score1 + score2 + score3) / 3;
  return resulat;
};

const avgKoalas = calcAverage(85, 54, 41);
const avgDolhins = calcAverage(23, 34, 27);

console.log(avgDolhins);
console.log(avgKoalas);

const checkwinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins > avgKoalas && avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolhins && avgKoalas >= 2 * avgDolhins) {
    console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`);
  } else {
    console.log("no tema wins");
  }
};

checkwinner(avgDolhins, avgKoalas);
/// Arrays in Js

const frindes = ["jon", "don", "peter"];

const years = new Array(1992, 1986, 2008, 2020);

console.log(frindes);
console.log(years);
console.log(frindes.length);
console.log(frindes[frindes.length - 1]);

const fristName = "ababe";
const chala = [fristName, "chala", 2023 - 1990, frindes];

console.log(chala);

const calcAgeusingArry = function (brithYear) {
  return 2037 - brithYear;
};

const years1 = [1990, 1967, 2002, 2010];
// Array oprations(methods)

years1.push(1899);

console.log(years1);
// used in oedre to chack  the element in array or not used strict equlity
console.log(years1.includes("bob"));

if (frindes.includes("petre")) {
  console.log("you have afrinde name petre");
} else {
  console.log("he is not in your firnd list");
}

//challenge array
// arrow functions with conditional stetement using if else
// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };
//arrow function

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const billArray = [125, 555, 44];
const tips = [
  calcTip(billArray[0]),
  calcTip(billArray[1]),
  calcTip(billArray[billArray.length - 1]),
];
const total = [
  billArray[0] + calcTip(billArray[0]),
  billArray[1] + calcTip(billArray[1]),
  billArray[billArray.length - 1] + calcTip(billArray[billArray.length - 1]),
];

console.log(billArray);
console.log(tips);
console.log(total);
// Object
// key value

const objectOne = {
  name: "Ababa",
  faterName: "Jonas",
  age: 2037 - 1991,
  job: "farmer",
  frindes: ["Michael", "chala", "Abera"],
};

const add0 = (a, b) => {
  return a + b;
};

console.log(add0(4, 10));

/// for loop keep runing while the condition is true

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition  ${rep}`);
// }

// const arryesNames = ["A", "B", "C", "D"];

// function numberSquare(number) {
//   return number * number;
// }
*/
const years2 = [1990, 1967, 2002, 2010];

for (let i = 0; i <= years2.length; i) {
  console.log(i);
}
