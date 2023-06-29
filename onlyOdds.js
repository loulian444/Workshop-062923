// Only Odds
// create an array of numbers
const num = [2, 4, 6, 8, 11, 20, 15, 22];
//create an empty array for odd numbers
const oddNum = [];
// create loop that loops through an array
for (i = 0; i < num.length; i++) {
  //return new array of only odd numbers
  if (num[i] % 2 === 1) {
    oddNum.push(num[i]);
  }
}
console.log(oddNum);

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNum2 = [];
for (i = 0; i < num2.length; i++) {
  if (num2[i] % 2 === 1) {
    oddNum2.push(num2[i]);
  }
}
console.log(oddNum2);

const num3 = [70, 42, 55, 81, 21, 91, 34];
const oddNum3 = [];
for (i = 0; i < num3.length; i++) {
  if (num3[i] % 2 === 1) {
    oddNum3.push(num3[i]);
  }
}
console.log(oddNum3);

const num4 = [2, 4, 6, 8, 10, 11, 12];
const oddNum4 = [];
for (i = 0; i < num4.length; i++) {
  if (num4[i] % 2 === 1) {
    oddNum4.push(num4[i]);
  }
}
console.log(oddNum4);


