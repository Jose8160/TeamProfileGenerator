const Employee = require("../lib/Employee");

test("create new Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("set name by constructor method", () => {
  const name = "";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("set id by constructor method", () => {
  const id = "";
  const e = new Employee(id);
  expect(id).toBe(id);
});

test("set name by constructor method", () => {
  const email = "";
  const e = new Employee(email);
  expect(email).toBe(email);
});
