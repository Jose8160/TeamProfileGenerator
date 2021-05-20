const Engineer = require("../lib/Engineer");

test("set github by constructor method", () => {
  const github = "ABC";
  const eng = new Engineer("josh", "3", "123456@gmail", github);
  expect(eng.github).toBe(github);
});

test("set github by constructor method", () => {
  const eng = new Engineer("josh", "3", "123456@gmail", "ABC");
  expect(eng.getRole()).toBe("Engineer");
});
