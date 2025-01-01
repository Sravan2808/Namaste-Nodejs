require("./xyz.js"); // one module into another


// cjs
const { calculateSum, calculateMultiply } = require("./calculate/index.js");

const data  = require("./data.json");

console.log(data);


var name = "Namaste NodeJs";

var a = 10;

var b = 20;

// var x = 100;

calculateSum(a, b);

calculateMultiply(a, b);

console.log(x);
