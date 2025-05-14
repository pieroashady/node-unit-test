// add unit test
const { addFullName } = require("../../src/utils/string-manipulation");

describe("addFullName", () => {
  it("should add first name and last name", () => {
    expect(addFullName("John", "Doe")).toBe("John Doe");
  });
});

module.exports = addFullName;
