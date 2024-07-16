// const { timeStamp } = require("console");

const years = [1991, 1999, 1998, 2002];

for (let i = 0; i < years.length; i++) {
  console.log(years[i]);
}

const age = [];
const currentYear = 2024;
for (let i = 0; i < years.length; i++) {
  const clacAge1 = currentYear - years[i];
  console.log(clacAge1);
  age.push(clacAge1);
}

console.log(age);

for (let i = years.length - 1; i >= 0; i--) {
  console.log(years[i]);
}
console.log(years.length);

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you oad of a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
// coding challing tip calc

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tips[i] + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);
