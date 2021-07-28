const reverseString = require("./reverseString");

it("returns reverse string", () => {
  expect(reverseString("developer")).toBe("repoleved");
});

it("returns reverse string", () => {
  expect(reverseString("I am a software developer")).toBe("erpoleved erawrfos a ma I");
});
