// We've made it pretty far into the Lighthouse Labs prep course. Let's celebrate by making some banana bread. Before we start baking, we'll need to write a script that prints out the ingredients for us. To spice things up a bit, we'll print the ingredients both in order and in reverse order.

// Challenge

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let item = 0;
while (item < ingredients.length) {
  console.log(ingredients[item])
  item++
}

// Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

// for:

for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i])
}

//  while:
item = ingredients.length;
while (item > 0) {
item--;
console.log(ingredients[item])
}