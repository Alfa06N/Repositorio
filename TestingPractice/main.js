export function capitalize(str) {
  return str.toUpperCase();
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export function caesarCipher(str, shift) {
  const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newString = "";
  function shiftCharacter(character) {
    if (alphabetLower.includes(character)) {
      const characterIndex = alphabetLower.indexOf(character);
      return characterIndex + shift < alphabetLower.length
        ? alphabetLower[characterIndex + shift]
        : alphabetLower[characterIndex + shift - alphabetLower.length];
    } else if (alphabetUpper.includes(character)) {
      const characterIndex = alphabetUpper.indexOf(character);
      return characterIndex + shift < alphabetUpper.length
        ? alphabetUpper[characterIndex + shift]
        : alphabetUpper[characterIndex + shift - alphabetUpper.length];
    }

    return character;
  }

  str.split("").forEach((character) => {
    newString += shiftCharacter(character);
  });

  return newString;
}

export function analyzeArray(arr) {
  return {
    average: arr.reduce((total, current) => total + current) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
