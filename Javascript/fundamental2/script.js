"use strict";
/*
let hasDriversLicense = false;
const hasGoodVision = true;

if (hasGoodVision) hasDriversLicense = true;
if (hasDriversLicense) console.log("who do you think you are");

function loggre() {
  console.log("my namei is abenezer ");
}

loggre();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = ` juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);

const appleAndorangeJuice = fruitProcessor(3, 4);
console.log(appleAndorangeJuice);


// Function declarationl ,,,,used before definding
function calcAge1(birthYeah) {
  const age = 2037 - birthYeah;
  return age;
  // return 2037 - birthYeah;
}

console.log(calcAge1(2000));

//Function expression
//function without the name is ananoyes function
calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};

const age2 = calcAge2(1990);
console.log(age2);
*/
// Arrow function
/*
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, fristname) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${fristname} retires in ${retirement}`;
};

const outofwork = yearsUntilRetirement(1991, "cala");
console.log(outofwork);


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  console.log(applePieces, orangePieces);
  const juice = ` juice with ${applePieces} apples and ${orangePieces} oranges.`;

  return juice;
}

const resulat = fruitProcessor(2, 4);
console.log(resulat);

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const calcRetirement = function (age, fristname) {
  const A = 65 - age;
  if (A <= 0) {
    return `${fristname} retires alrady`;
  } else {
    return `${fristname} retires in ${A}`;
  }
};
const yearsUntilRetirement = function (birthYeah, fristname) {
  const age = calcAge(birthYeah);
  const retirement = calcRetirement(age, fristname);

  return retirement;
  // return `${fristname} retires in ${retirement}`;
};
console.log(yearsUntilRetirement(1980, "feleke"));
console.log(yearsUntilRetirement(2000, "meneber"));
console.log(yearsUntilRetirement(1970, "abele"));

function yearsUntilRetirement1(birthYeah, fristname) {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${fristname} retires in ${retirement}`;
}
console.log(yearsUntilRetirement1(2000, "meneber"));

const yearsUntilRetirement2 = function (birthYeah, fristname) {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${fristname} retires in ${retirement}`;
};
console.log(yearsUntilRetirement2(2004, "abele"));

//coding chalinge one

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgD = calcAverage(44, 23, 71);
const avgK = calcAverage(65, 54, 40);

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(` Koalas win (${avgDolhins} vs ${avgKoalas})`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(avgD, avgK);
checkWinner1(avgD, avgK);
function checkWinner1(avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(` Koalas win (${avgDolhins} vs ${avgKoalas})`);
  } else {
    console.log("No team wins");
  }
}
*/
//Arry

const frindes = ["yise", "fker", "hayel", "chala"];

console.log(frindes);

const year = new Array(1991, 2009, 2020);
console.log(year[0]);
console.log(year.length);
console.log([frindes.length - 1]);

frindes[3] = "abereham";
console.log(frindes);
const fristname = "Abenezer";
const myProfile = [fristname, "Alemayehu", 2007 - 1991, "student", frindes];
console.log(myProfile);

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2008];
