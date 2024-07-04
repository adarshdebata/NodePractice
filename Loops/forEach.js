const orders = [
    { id: 1, item: 'Laptop', status: 'pending' },
    { id: 2, item: 'Mouse', status: 'pending' },
    { id: 3, item: 'Keyboard', status: 'pending' }
  ];
  
  orders.forEach(order => {
    order.status = 'processed';
    console.log(`Order ${order.id} (${order.item}) has been processed`);
  });
  

//   another example
console.log(`\nanother example`);
const productPrices = [19.99, 29.99, 39.99, 49.99];

productPrices.forEach(price => {
  const newPrice = price * 1.1; // Apply a 10% price increase
  console.log(`New price: ${newPrice.toFixed(2)}`);
});
