function fibs(number) {
  let arr = [];

  if (number == 0) {
    return [];
  }
  if (number >= 1) {
    arr.push(0);
  }
  if (number >= 2) {
    arr.push(1);
  }

  for (let i = 3; i <= number; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  return arr;
}

function fibsRec(number, sequence = undefined) {
  const arr = Array.isArray(sequence) ? sequence : [];

  if (number > 0) {
    if (arr.length == 0) arr.push(0);
    else if (arr.length == 1) arr.push(1);
    else {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  } else {
    return arr;
  }

  return fibsRec(number - 1, arr);
}

console.log(fibs(8));
console.log(fibsRec(8));
