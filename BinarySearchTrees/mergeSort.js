function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const newArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      newArray.push(left[i]);
      i++;
    } else {
      newArray.push(right[j]);
      j++;
    }
  }

  return newArray.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = { mergeSort };

console.log(mergeSort([5, 3, 4, 8, 9, 7, 1, 2, 6]));
