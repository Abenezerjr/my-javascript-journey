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
