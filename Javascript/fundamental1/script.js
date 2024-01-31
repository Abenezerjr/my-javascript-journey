// /*let js = "amazing";
// if (js === "amazing") alert("hgdf");
// console.log(40 + 8 - 23);
// //value is a pices of data //
// console.log("jonas"); // value

// let firstname = "jonas"; //declaing the valrible
// console.log(firstname);*/

// let javascript = true;
// console.log(typeof javascript);
// console.log("1" + 9);
// console.log(3 + 3);
// console.log("3" + "3");
// console.log(3 + +"3");
// console.log("3" + "3" - 3);
// the 3 typesof variabel Decelaration
/*
let used one pointe of the progrsm and assign a new value to in let
when we mutated the variable we useing let and it is block scope
//const we defind it a variable cannot be changed
//var
function scope the differnt of the let and var

*/

// let age = 30;
// age = 50;

// const bithYear = 1991;

// var jop = "programmer";
// jop = "teacher";
// challenge #1

// const markweights = 78;
// const markheight = 1.69;
// const johnweights = 95;
// const johnheight = 1.76;

// const Bmiofjohn = johnweights / johnheight ** 2;
// const Bmiofmark = markweights / markheight ** 2;
// const markHighBMi = Bmiofjohn > Bmiofmark;
// console.log(Bmiofjohn, Bmiofmark, markHighBMi);
/*
const firstName = "abenezer";
const job = "teacher";
const bithYear = 1991;
const year = 2023;
const abenezer =
  "i am " + firstName + " , a " + (year - bithYear) + " years old" + " " + job;

console.log(abenezer);

// template literals
const abenezerjb = `i'am ${firstName} ,a ${year - bithYear} years old ${job}`;
console.log(abenezerjb);
*/
// const age = 17;

// if (age >= 18) {
//   console.log("sara can start driving license 😁");
// } else {
//   console.log(`this is okay come after ${18 - age} years laters`);
// }

/// the second coding challinge
/*
const markweights = 78;
const markheight = 1.69;
const johnweights = 95;
const johnheight = 1.76;

const Bmiofjohn = johnweights / johnheight ** 2;
const Bmiofmark = markweights / markheight ** 2;

if (Bmiofjohn > Bmiofmark) {
  console.log(`Jonn BMI  ${Bmiofjohn} is higher than mark's ${Bmiofmark}`);
}
*/
// type convertion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(String(23));
// type coercion
// by defult javascrip change the Type

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * "2");
// console.log("23" / "2");
// console.log(2 + 3 + "5" - "10");
// console.log("10" - "4" - "3" - 2 + "5");

//Truthy and Falay
// in javascript 5 falsy values: 0, '' , undefined , null, NaN

// const money = 0;

// if (money) {
//   console.log("dont't spend it all ;");
// } else {
//   console.log("You should get a job ");
// }
/*
=== equal sigen is the strict equality operator.
because it does not perform type coercion only
:D(strict)
 true when the both are exactly the same
 == equel is type coercion
 D(losse)
*/
/*
const favourite = Number(prompt("what is your favouritte number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("cool 23 is an amazinge number");
} else if (favourite == 7) {
  console.log("yes you got it");
} else {
  console.log("it is not 23");
}
*/
/*
///// Logical Operatores ///
AND ----  he AND operator returns true if
both operands are true. Otherwise, it returns false
OR --- The OR operator returns true if at
 least one of the operands is true
NOT-----The NOT operator returns the opposite of
the operand’s truthiness.
If the operand is true, it returns false. If the operand is false, it returns true
**************************CODE******************
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

age = 16;

if (age >= 10 && age <= 18) {
  console.log("the is age is true");
} else if (age <= 18 || age >= 9) {
  console.log("this is the or function");
}
// else if ((age <= 18) || (age >= 9)) {
//   console.log("this is the or function");
// }

if (age >= 10 && age <= 18) {
  console.log("the is age is true");
} else if (age <= 18 || age >= 9) {
  console.log("this is the or function");
}
*/
//////////////// Challenge////////////////////
// code
// const aDolphins = 96,
//   bDolphins = 108,
//   cDolphins = 89;
// const aKoalas = 88,
//   bKoalas = 91,
//   cKoalas = 110;
/*
const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;

if (avgDolphins > avgKoalas) {
  console.log(`Dolphins is the winner`);
} else if (avgKoalas > avgDolphins) {
  console.log("Koalas is the winner");
} else if (avgKoalas === aDolphins) {
  console.log("Draw");
} else {
  console.log("this is no winer");
}
*/
////////////////Switch statement///////////
/*
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan courese structure");
    console.log("Go to coding meetup");
    break;
  case "tusday":
    console.log("Prepare therory videose");
    break;
  case "wednesday":
  case "thursay":
    console.log("write code example");
    break;
  case "friday":
    console.log("record video");
    break;
  case "saturday":
  case "suday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
    break;
}

if (day === "monday") {
  console.log("Plan courese structure");
  console.log("Go to coding meetup");
} else if (day === "tusday") {
  console.log("Prepare therory videose");
} else if (day === "wednesday" || day === "thursay") {
  console.log("write code example");
} else if (day === "friday") {
  console.log("record video");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend");
} else {
  console.log("Not a valid day");
}
*/
//// THe=E conditional(Terrnary) Opreator
// allwos to swrit something similar to and
//if/else statement in oneline

// const age = 23;
// // age >= 18
// //   ? console.log("I like to drink wine")
// //   : console.log("i like to drink water");

// const drinke = age >= 18 ? "wine" : "water";
// console.log(drinke);
///// codeing Challenge
/*
const bill = 275;
const tip1 = 0.15,
  tip2 = 0.2;

const paymentTip =
  bill >= 50 && bill <= 300
    ? `the bill was ${bill}, the tip was  ${tip1 * bill} the total value ${
        tip1 * bill + bill
      }`
    : `your tip payment is ${tip2 * bill}`;

console.log(paymentTip);
*/
