"use strict";

// const { name } = require("pug");

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

// arrayMethode

const frindes = ["yise", "fker", "hayel", "chala"];
//push element add in the array
frindes.push("bob");
console.log(frindes);
*/
//JAVASCRIPT OF REACT//
/*
you have to konw 6 core thinges for javascrip in order to learn react
1 arrow function
2 terneay opraters
3 array
4 asyci wait
5


//arrow function
export const Dosometing = () => {};
//
// Ananomasy function is a function defind with out name
// you may find itsome timess like this
<button onClick={() => {}}></button>;
// working with tharnay with condional
let age = 10;
let name = age > 10 ? "abebe" : "Jack";
// in react when  we went to returen some componate like some html tag
// yhe we use tetnary opraters
const someComeponant = () => {
  return age > 10 ? <div>Pedro </div> : <div>jack</div>;
};
// Object
const person = {
  name: "abenezr",
  age: 23,
  Isreationshipe: false,
};
// destracureing peoperty of object
const person2 = { ...person, name: "jack" };

const names = ["abebe", "chala", "fantahun"];
const names2 = [...name, "mertayehu"];

const names = ["abebe", "chala", "fantahun", "abebe", "abebe"];
// used .map() .fileter() funtion used

names.map((name) => {
  console.log(name);
});

// thhis uisng seacting and filetering
names.filter((name) => {
  return names != "abebe";
});


// ASYNC + Await + Fetch
/* BASCI ARRAY OPERATION
const names = ["abebe", "chala", "fantahun"];

const newlLength = names.push("ab"); // add an element in the array
console.log(newlLength);

names.unshift("fantahun"); // add in element in the the bigginge of arry

names.pop(); // delet Last last elemnt  in the arrye

names.indexOf("chala"); // find the index of the arrye
names.includes("fantahun"); // it rentun Boolean if the name is in the array

// Object

const myData = {
  fname: "abebe",
  lname: "chube",
  age: "20",
  jop: "teacher",
  frindes: ["Michael", "chala", "mertayehu"],
};

console.log(myData);
// How to retrive data in object element using .Dot vs Bracket Notation
// Dot notation

console.log(myData.lname);

// barcket notaion
console.log(myData["lname"]);

const nameKay = "name";
console.log(myData["f" + nameKay]);
console.log(myData["l" + nameKay]);

// Add in object
myData.location = "AddisAbeba";
console.log(myData);
/// Prom
// const interstedIn = prompt("what do you went know about abebe?");

// if (myData[interstedIn]) {
//   console.log(myData[interstedIn]);
// } else {
//   console.log("place enter approprate filed");
// }
//using dot
console.log(
  `${myData.fname} has ${myData.frindes.length} frindes and his best friend is called ${myData.frindes[0]}`
);
// using Bracket
console.log(
  `${myData["fname"]} has ${myData["frindes"].length} frindes and his best friend is called ${myData["frindes"][0]}`
);

/// Object methodes
const myData = {
  fname: "abebe",
  lname: "chube",
  birthYeah: 1991,
  jop: "teacher",
  frindes: ["Michael", "chala", "mertayehu"],
  hasDriversLicense: true,
  //   calcAge: function (birthYeah) {
  //     return 2024 - birthYeah;
  //   },
  // };
  // calcAge: function () {
  //   // this. kayword pointes to the object callinge method
  //   return 2024 - this.birthYeah;
  // },
  //////// This is the function calling of ///////
  ///console.log(myData.calcAge())
  calcAge: function () {
    // this. kayword pointes to the object callinge method
    this.age = 2024 - this.birthYeah;

    return this.age;
  },
  /// the function callinge of this function is
  // console.log(myData.age);
  summer: function () {
    return `${this.fname} is a ${this.calcAge()} years old ${this.jop}`;
  },
};
// method one
console.log(myData.summer());
// when ever you call the function dont forget ()


// loops or itreation

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// looping Arrays
const myData = [
  "abebe",
  "chube",
  "20",
  "teacher",
  ["Michael", "chala", "mertayehu"],
];
// looping 1 st start defining the varable

for (let i = 0; i < myData.length; i++) {
  console.log(myData[i]);
}

const years = [1990, 1967, 2002, 2010, 2008];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
*/
// const calcAge3 = (birthYeah) => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const sum = (a, b) => a + b;
// const add = sum(2, 3);
// console.log(add);
