const person = {
    firstName: "Adarsh",
    lastName: "Debata",
    age: 23
  };
  
  // Destructuring
  let {firstName, lastName} = person;
  console.log(firstName);
  console.log(lastName);

  let {lastName :name }=person;
  console.log(name);


  //self Destructing
let Word = "Adarsh";
let [a1, a2, a3, a4, a5] = Word;
console.log(a1,a2,a3);