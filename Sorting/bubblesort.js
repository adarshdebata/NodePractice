const bubbleSort = (array) => {
  let length = array.length;
  let isSwaped;
  for (let i = 0; i < length; i++) {
    isSwaped = false;
    for (j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwaped = true;
      }
    }
    if (!isSwaped) {
      break;
    }
  }
  return array;
};

// calling for the bubble sort
const arr = [23, 34, 21, 27, 22, 12, 24, 34, 45, 56, 75, 11];
let sortedArray = bubbleSort(arr);
console.log(sortedArray);

/*
Time Complex :
    best : O(n)
    wrost : O(n^2)

Space Complex : O(1)
*/
