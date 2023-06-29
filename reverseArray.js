// Reverse Array
// create variable for array
const array = [1, 2, 3];	
// create empty array for the reverse numbers
const revArray = [];
// create for loop to look through array backwards
for (i = array.length - 1; i >= 0; i--) {
  // print each number to a new array
  revArray.push(array[i]);
}
console.log(revArray);

const array2 = [1, 3, 5, 7, 9, 11];	
const revArray2 = [];
for (i = array2.length - 1; i >= 0; i--) {
  revArray2.push(array2[i]);
}
console.log(revArray2);

const array3 = [20, 50, 30, 60, 200];	
const revArray3 = [];
for (i = array3.length - 1; i >= 0; i--) {
  revArray3.push(array3[i]);
}
console.log(revArray3);

const array4 = [1, -1, 2, -3, 5, -8, 13];	
const revArray4 = [];
for (i = array4.length - 1; i >= 0; i--) {
  revArray4.push(array4[i]);
}
console.log(revArray4);