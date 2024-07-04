const arr = [23, 34, 210, 27, 22, 120, 24, 34, 45, 56, 75, 11];

console.log(`Default Sort :`);
const sorted = arr.sort();
console.log(sorted);

console.log(`\nAscending Order :`);
const sortedAsc = arr.sort((a, b) => a - b);
console.log(sortedAsc);

console.log(`\nDescending Order :`);
const sortedDesc = arr.sort((a, b) => b - a);
console.log(sortedDesc);

const arr2 = [`Adasrh`, `Dipti`, `Stayjit`, 1, 2, 3, 3500];
const sortedArray2 = arr2.sort();
console.log(sortedArray2);

const sortedAsc2 = arr2.sort((a, b) => b - a);
console.log(sortedAsc2);

/* 
Average Case Time Complexity: O(𝑛log⁡𝑛)
Worst Case Time Complexity: O(𝑛log⁡𝑛)
Best Case Time Complexity: O(𝑛)
*/
