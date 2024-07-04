function selectionSort(array) {
  let length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}
// calling for the Selection sort
const arr = [23, 34, 21, 27, 22, 12, 24, 34, 45, 56, 75, 11];
let sortedArray = selectionSort(arr);
console.log(sortedArray);

/*
Time Complex :
    best : O(n^2)
    wrost : O(n^2)

Space Complex : O(1)
*/
