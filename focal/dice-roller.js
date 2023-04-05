
const args = process.argv.slice(2);
let rolledDice = [];
for (let i = 0; i < args; i++) {
  let randNum = Math.floor(Math.random() * 6);
  rolledDice.push(randNum);
}
console.log(`Rolled ${args} dice: ${rolledDice.join(', ')}`);


