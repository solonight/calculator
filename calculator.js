function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(arr) {
  let product = 1;
  arr.forEach((num) => {
    product *= num;
  });
  return product;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

let numOne = 0;
let numTwo = 0;
let operator = "";

