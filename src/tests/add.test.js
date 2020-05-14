function add(num) {
  if (num === undefined || typeof num !== "number") {
    throw new Error("You must provied a number");
  }
  return num * num;
}

test("should throw an error if called without an arg", () => {
  expect(() => {
    add();
  }).toThrow("You must provied a number");
});
test("should throw an error if called without a number", () => {
  expect(() => {
    add("ed");
  }).toThrow("You must provied a number");
});
test("should return 16", () => {
  const result = add(4);
  expect(result).toBe(16);
  expect(result).toBeGreaterThan(3);
  expect(result).toBeGreaterThanOrEqual(3.5);
  expect(result).toBeLessThan(20);
  expect(result).toBeLessThanOrEqual(17);
});
function generateGreeting(name) {
  return `Hello ${name}`;
}

test("Chack for string result", () => {
  const name = generateGreeting("arie");
  expect(name).toBe("Hello arie");
});
