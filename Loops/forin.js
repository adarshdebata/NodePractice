// Listing Properties of an Object
const userProfile = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
    phone: '555-1234',
    occupation: 'Software Developer'
  };
  

for (const key in userProfile) {
    console.log(`${key} : ${userProfile[key]}`);
}