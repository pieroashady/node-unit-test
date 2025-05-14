function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function isOddOrEven(number) {
  return number % 2 === 0 ? "even" : "odd";
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  isOddOrEven,
};
