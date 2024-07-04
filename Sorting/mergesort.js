function merge(left, right) {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let leftLength = left.length;
  let rightLength = right.length;

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function mergeSort(array) {
  let length = array.length;
  if (length <= 1) {
    return array;
  }

  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const arr = [23, 34, 21, 27, 22, 12, 24, 34, 45, 56, 75, 11];
let sortedArray = mergeSort(arr);
console.log(sortedArray);

/*
Time Complex :
    best : O(nlog(n))
    wrost : O(nlog(n))

Space Complex : O(n)
*/