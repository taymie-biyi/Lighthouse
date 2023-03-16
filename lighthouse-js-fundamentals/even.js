// Declaring and Calling Functions

//  Two main varieties of functions:
//  One that produces a side effect, as in it does something. Example in @hello.js
// One that produces a result, as in it calculates and returns a value we can use in further code. Example: 

const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));