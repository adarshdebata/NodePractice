const myMap = new Map();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');
myMap.set('key4', 'value4');
myMap.set('key5', 'value5');
myMap.set('key6', 'value6');
myMap.set('key7', 'value7');
myMap.set('key8', 'value8');
myMap.set('key9', 'value9');
myMap.set('key10', 'value10');

console.log('Value for key1:', myMap.get('key1')); 
console.log('Value for key5:', myMap.get('key5'),'\n'); 

// Using the has method 
console.log('Map has key3:', myMap.has('key3')); 
console.log('Map has key11:', myMap.has('key11'),'\n');

// Using the size property 
console.log('Map size:', myMap.size); 

console.log('\nKeys in the map:');
for (let key of myMap.keys()) {
    console.log(key); 
}

console.log('\nValues in the map:');
for (let value of myMap.values()) {
    console.log(value); 
}

console.log('\nEntries in the map:');
for (let [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`); 
}

console.log('\nUsing forEach to log key-value pairs:');
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`); 
});

console.log('\nUsing for...of to log key-value pairs:');
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`); 
}

myMap.delete('key10');
console.log('\nMap size after deleting key10:', myMap.size); 

myMap.clear();
console.log('\nMap size after clearing:', myMap.size); 
