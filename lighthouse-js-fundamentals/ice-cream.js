/*
The freezer at Lighthouse Labs is overflowing with Ice Cream so we need to have an ice cream party for all the students so it can be eaten. But before we can do that, we need determine which flavours of ice cream we have, and we'll need to organize them for easy access.

Array of Flavours
We'll start by creating an array of iceCreamFlavours with flavours we've seen so far, then we'll update the array and read from it as we need to.

Instruction
Create an array of iceCreamFlavours
*/

// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...

//Add a Flavor
// Instruction
// Add the flavour "root beer" to the array without modifying the original array. Then console.log the value of the entire array.

iceCreamFlavours.push("root beer");

console.log(iceCreamFlavours)

// Get the First Flavour
// Someone wants the first flavour of ice cream.

// Instruction
// console.log the first flavour in the array.

// This should come out to be "chocolate". Index it from the array, do not hard-code the value by just doing console.log("chocolate").

console.log(iceCreamFlavours[0])

// // Get the Last Flavour
// Someone wants the last flavour of ice cream.

// Instruction
// console.log the last flavour in the array

// This should come out to be "root beer". Index it from the array, do not hard-code the value by just doing console.log("root beer").

console.log(iceCreamFlavours.slice(-1)[0]);

// Total Number of Flavours
// Someone wants to know how many options there are.

// Instruction
// console.log the resulting number of flavours in the array

// This should come out to be 6 at that point. Again, do it programatically by asking the array for its size, do not hard-code the value by just doing console.log(6).

console.log(iceCreamFlavours.length)