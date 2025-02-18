const { log } = require("console");
const fs = require("fs");
const https = require("https");
const { loadavg } = require("os");

log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous function
fs.readFileSync("./file.txt", "utf-8");
log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("SetTimeout called after 5 seconds");
}, 5000);

// Async function
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}
var c = multiplyFn(a, b);
console.log("Multiplication result is : ", c);
