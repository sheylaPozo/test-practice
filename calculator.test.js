const Calculator = require("./calculator");
let calc = new Calculator();

describe("calculate", () => {
  test("add", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("add", () => {
    expect(calc.add(12, 3)).toBe(15);
  });

  test("add", () => {
    expect(calc.add(11, 4)).toBe(15);
  });

  test("subtract", () => {
    expect(calc.subtract(8, 5)).toBe(3);
  });

  test("subtract", () => {
    expect(calc.subtract(20, 5)).toBe(15);
  });

  test("subtract", () => {
    expect(calc.subtract(10, 5)).toBe(5);
  });

  test("divide", () => {
    expect(calc.divide(10, 4)).toBe(6);
  });

  test("divide", () => {
    expect(calc.divide(36, 6)).toBe(6);
  });

  test("divide", () => {
    expect(calc.divide(20, 2)).toBe(10);
  });

  test("multiply", () => {
    expect(calc.multiply(20, 2)).toBe(40);
  });

  test("multiply", () => {
    expect(calc.multiply(5, 6)).toBe(30);
  });

  test("multiply", () => {
    expect(calc.multiply(2, 6)).toBe(6);
  });
});