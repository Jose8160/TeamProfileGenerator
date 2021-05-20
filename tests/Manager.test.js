const Manager = require("../lib/Manager");

test("set officeNumber by constructor method", () => {
  const officeNumber = 100;
  const m = new Manager("bob", "2", "12345@gmail", officeNumber);
  expect(m.officeNumber).toBe(officeNumber);
});

test("set getRole by constructor method", () => {
  const m = new Manager("bob", "2", "12345@gmail", "100");
  expect(m.getRole()).toBe("Manager");
});
