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
