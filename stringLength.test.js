const stringLength = require("./stringLength");

it("returns string characters count", () => {
  expect(stringLength("hello world")).toBe(true);
});

it("returns string characters count", () => {
  expect(stringLength("I love maths")).toBe(false);
});

it("returns string characters count", () => {
  expect(stringLength("I am a Civil Engineer")).toBe(false);
});
