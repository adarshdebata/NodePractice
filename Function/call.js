const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "Adarsh",
  lastName: "Debata",
};
console.log(person.fullName.call(person1));

const persons = {
  fullNames: function (state) {
    return this.firstName + " " + this.lastName + " " + this.state;
  },
};
const person2 = {
  firstName: "Random",
  lastName: "any",
};
console.log(persons.fullNames.call(person2, "Odisha"));
