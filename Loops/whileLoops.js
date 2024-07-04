//Syntax and  simple example
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log(`After itteration : ` + i);

// another example
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let length = array.length;
i = 0;
console.log(`\nEven numbers in arrary: `);
while (i < length) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// Real life example
console.log(`\nwhile Real Life example :`);
const orders = [
  { id: 1, item: `Laptop`, quantity: 2 },
  { id: 2, item: `Laptop`, quantity: 5 },
  { id: 3, item: `Table`, quantity: 3 },
];
while (orders.length > 0) {
  let order = orders.shift();
  console.log("Processing order:", order);
}
