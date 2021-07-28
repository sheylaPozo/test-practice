const capitalize = require("./capitalizeString");

describe("capitalize", () => {
  test("capitalize", () => {
    expect(capitalize("software-developer")).toBe("Software-Developer");
  });
});
