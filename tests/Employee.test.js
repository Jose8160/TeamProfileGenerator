const Employee = require("../lib/Employee");

test("create new Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("set name by constructor method", () => {
  const name = "jose";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("set id by constructor method", () => {
  const id = "24";
  const e = new Employee("jose", id);
  expect(e.id).toBe(id);
});

test("set email by constructor method", () => {
  const email = "123@gmail";
  const e = new Employee("jose", "24", email);
  expect(e.email).toBe(email);
});

test("set getRole by constructor method", () => {
  const e = new Employee("jose", "24", "123@gmail");
  expect(e.getRole()).toBe("Employee");
});

test("set getId by constructor method", () => {
  const id = "24";
  const e = new Employee("jose", "24", "123@gmail");
  expect(e.getId()).toBe(id);
});

test("set getEmail by constructor method", () => {
  const email = "123@gmail";
  const e = new Employee("jose", "24", email);
  expect(e.getEmail()).toBe(email);
});
