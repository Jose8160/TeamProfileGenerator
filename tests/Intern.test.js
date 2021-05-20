const intern = require("../lib/Intern");
const Intern = require("../lib/Intern");

test("set github by constructor method", () => {
  const school = "MIT";
  const i = new Intern("Mark", "4", "12@gmail", school);
  expect(i.school).toBe(school);
});

test("set github by constructor method", () => {
  const i = new Intern("Mark", "4", "12@gmail", "MIT");
  expect(i.getRole()).toBe("Intern");
});
