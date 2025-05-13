// create unit tests for calculation.js
const {
  add,
  divide,
  multiply,
  subtract,
} = require("../../src/utils/calculation");

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});

describe("multiply", () => {
  it("should multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe("divide", () => {
  it("should divide two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });
});

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
