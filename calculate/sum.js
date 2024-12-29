// Modules protecte their variables and functions from leaking

console.log("Sum Module Executed");


 x = "Hello World";

 function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
}

console.log(module.exports);

// common js modules(cjs)
module.exports = {
  x, // x: x
  calculateSum //  calculateSum: calculateSum
};

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;


