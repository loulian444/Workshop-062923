// FizzBuzz
// create for loop to create numbers from 1 to 100
for (i = 1; i <= 100; i++){
  if (i % 15 === 0) {
    // print multiples of 3 and 5 as "FizzBuzz"
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0){
    // print multiples of 3 as "Fizz"
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    // print multiples of 5 as "Buzz"
    console.log(`Buzz`);
  } else {
    // print each number on a new line
    console.log(i);
  }
}