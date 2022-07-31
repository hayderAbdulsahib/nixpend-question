const arr = ["A", "A", "A", "B", "C", "C", "C", "D", "E"];

const obj = {};

const arrWithOccurrence = [];

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
}

for (key in obj) {
  console.log(`the letter ${key} has occurred ${obj[key]} times`);
  arrWithOccurrence.push([key, obj[key]]);
}

arrWithOccurrence.sort(function (a, b) {
  return b[1] - a[1];
});

console.log(arrWithOccurrence);
