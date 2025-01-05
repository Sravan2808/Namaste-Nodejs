// a=100
// Last Line of the file
// process.nextTick
// Promise
// timer
// setImmediate
// File Reading CB

const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File Reading CB");
});

setTimeout(() => console.log("Time Expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
    console.log("a=", a);
}

printA();
console.log("Last Line of the file");

    
