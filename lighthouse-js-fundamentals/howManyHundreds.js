/*

As humanity gets closer to living on Mars, we must start sending supplies to the red planet now, to prepare for our arrival. So Canada is going to start to send containers of maple syrup. Each container on the space ship can hold exactly 100 bottles of maple syrup. A container will only be sent if it's full.

Given a certain number of bottles, we need to determine how many containers can be filled and sent. In this challenge, we will write a function that determines how many hundreds can be made from a number.

Challenge
Instruction
Define a function howManyHundreds

When this function is given a number, it should return how many hundreds fit into that number.

For example:

code	output
howManyHundreds(1000);	10
howManyHundreds(894);	8
howManyHundreds(520);	5
howManyHundreds(99);	0
howManyHundreds(0);	0

*/


function howManyHundreds(number) {
  let num;
  if (number % 100 === 0) {
    num = number / 100;
  } else {
    number = number - (number % 100)
    num = number / 100;
  }
  return num;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);