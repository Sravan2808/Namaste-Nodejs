
function calculateMultiply(a, b) {
  const result = a * b;
  console.log(result);
}

setTimeout(() => {
  console.log("SetTimeout");
}, 3000);
module.exports = { calculateMultiply };
