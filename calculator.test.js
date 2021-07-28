const Calculator = require('./calculator.js');

describe('Unit tests', () => {
  test('add method', () => {
    const calc = new Calculator();
    calc.add(1);
    calc.add(2);
    calc.add(7);
    expect(calc.value).toBe(10);
  });
  test('subtract method', () => {
    const calc = new Calculator();
    calc.add(15);
    calc.subtract(8);
    calc.subtract(4);
    expect(calc.value).toBe(3);
  });
  test('multiple method', () => {
    const calc = new Calculator();
    calc.add(7);
    calc.subtract(2);
    calc.multiply(5);
    expect(calc.value).toBe(25);
  });
  test('divide method', () => {
    const calc = new Calculator();
    calc.add(44);
    calc.divide(2);
    expect(calc.value).toBe(22);
  });
});
