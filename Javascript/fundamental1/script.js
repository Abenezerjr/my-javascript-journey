// // start javascript 6/13/2024

const console = require("console");

// console.log("hello javascript");

// console.log(0 + 1);
// console.log(0 + "0");
// console.log(typeof "0");
// console.log(0 == 0);
// console.log(0 > "1");

// let js = "amazing";

// // if (js === "amazing") alert("Javascript is Fun");
// console.log(js);

// console.log(typeof "abenezer");

// /* what is value is the smaliest information of  what wehave
//     varibles is they hold or assign a value in memeore or they are memory refresnes

// */

// let name = "bob";

// console.log(name);

let age = 30; // it okay declary a variable one and re assign a new value to a varible
age = 34;

console.log(age);

console.log(10 - 7);
console.log(10 + 7);
console.log(10 * 7);
console.log(10 ** 7);
console.log(10 / 7);
console.log(107);
let x = 10 + 5;
x += 15;

console.log(x);

// challenge 1

const markMass = 78;
const markHigher = 1.67;
const johnMass = 92;
const johnhieight = 1.95;

const markBmi = markMass / (markHigher * markHigher);
console.log(markBmi);

const johnBmi = johnMass / (johnhieight * johnhieight);

console.log(johnBmi);

const markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);

if (markBmi > johnBmi) {
  console.log(`Mark BMI ${markBmi} is higher than John ${johnBmi}`);
} else {
  console.log(`Mark BMI ${johnBmi} is higher than John ${markBmi}`);
}

// Template literals
const fristName = "Abenezer";
const job = "teacher";
const age1 = 27;

const fullname1 = `im ${fristName} a ${age1} years old ${job}`;
console.log(fullname1);
console.log("hi dude");

console.log(`${5 + 5}`);

// new line \n\
console.log(`
  multiple
  line
  add

  `);

/// Taking Decisions  if else Statements

if (age >= 18) {
  console.log("wow");
} else {
  console.log("wow");
}

console.log(typeof NaN);
// NaN stand for not number
console.log(NaN);

const itCool = false;
// boolne value also come as a result of comparisons
if (itCool) {
  console.log("hi man your a cool");
} else {
  console.log("oh your are not cool ..");
}

const ageofcat = 8;

if (ageofcat < 8) {
  console.log("she will be dead soon");
} else {
  console.log("she will live a couplu of years");
}
// objects

const person = {
  name: "jon",
  age: 25,
};

console.log(person);

//extract a specific value from the given object

console.log(person.name);

console.log(5 == "5");
console.log(5 === "5");
// strictly equal in javascript interpreter compares the values as well as their types and only returens ture when both are the same
console.log(typeof "");
console.log(typeof "0");

console.log("" === "0");
console.log(0 == "");
console.log(false == "false");
console.log(false == "0");
console.log(null == undefined);
console.log(undefined === null);
console.log(undefined === undefined);

/*  logical opretores  */
/* in javascript  ther are 3 types of logical oprater
AND && this both conditon must true
Or || atlest one true
Not !

*/

const birthYear = 1998;
let century; // used let and didit assign a value

if (birthYear >= 2000) {
  century = 20;
} else {
  century = 21;
}

//conditionly assign
console.log(century);
//// challenge \\
//// Type Converision

console.log("I am" + 23 + 2 + "years old");
console.log("23" - "10" + 3);
// 5 falsy value Nan 0 undefind ' ' null
// any ting with out this value is true

console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

const money = 0;

if (money) {
  console.log("Dont spand it all");
} else {
  console.log("You shold get a job!");
}
// logical Boolena

const shouldDrive = false;

const averageScoreDolphins = (96 + 108 + 89) / 3;

console.log(averageScoreDolphins);

const averageScoreKoalas = (88 + 91 + 110) / 3;
console.log(averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("the winner of the competitions is Dolphins");
} else if (
  averageScoreDolphins < averageScoreKoalas &&
  averageScoreKoalas >= 100
) {
  console.log("the winner of the commpetitions is Koalas");
} else {
  console.log("draw");
}

const day = "monday";

switch (day) {
  case "monday":
    console.log("see football");
    break;
  case "tusday":
    console.log("go church");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("see football");
} else if (day === "tusday" || day == "wednesday") {
  console.log("Write code with exmpla");
} else {
  console.log("Not a valid day!");
}
