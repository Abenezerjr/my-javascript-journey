// import { apiKey } from "./util.js";

// const { it } = require("node:test");

// console.log(apiKey);
/// Varibles
// function sum(a, b) {
//   return (add = a + b);
// }

// console.log(sum(1, 3));

//Arrow function
const result = (number) => {
  return number * 3;
};

// const a=result(5)

console.log(result(5));
///
//object

const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello!");
  },
};

console.log(user.name);
user.greet();
/// Array method

const hobbies = ["football", "codeding", "cooking"];
// console.log(hobbies[1]);
hobbies.push("woriking");
console.log(hobbies);
const index = hobbies.findIndex((item) => item === "woriking");
console.log(index);

/// Map
// it creat a new array used an existing arrye

const newhobbies = hobbies.map((item) => item + "!");

console.log(newhobbies);
// destractiring
// Array destructring
const [fristname, secodename] = ["Abebeb", " chala"];

console.log(fristname);

// Object destracuroing

const { name, fathername } = {
  name: "abebe",
  fathername: "chala",
};

console.log(fathername);
