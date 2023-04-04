const args = process.argv.slice(2);
const sum = function(args) {
  let ans = 0;
  for (let i = 0; i < args.length; i++) {
    ans += Number(args[i]);
  }
  return ans;
};
  
console.log(sum(args));