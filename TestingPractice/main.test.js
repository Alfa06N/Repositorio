import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main.js";

test("returns 'HELLO WORLD!'", () => {
  expect(capitalize("Hello world!")).toBe("HELLO WORLD!");
});

test("returns '!dlrow olleH'", () => {
  expect(reverseString("Hello world!")).toBe("!dlrow olleH");
});

test("perform mathematical calculations", () => {
  expect(calculator.add(5, 8)).toBe(13);
  expect(calculator.subtract(5, 8)).toBe(-3);
  expect(calculator.multiply(10, 5)).toBe(50);
  expect(calculator.divide(10, 5)).toBe(2);
});

test("returns Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("returns the correct object from an array", () => {
  // In order to past this test, i must change the match 'toBe' to 'toEqual'
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
