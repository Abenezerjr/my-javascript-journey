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

console.log("" == "0");
console.log(0 == "");
console.log(false == "false");
console.log(false == "0");
console.log(null == undefined);
console.log(undefined === null);

/*  logical opretores  */
