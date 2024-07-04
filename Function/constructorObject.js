function Person (name, ages,)  {
    this.name = name;
    this.age = ages;
}

const myself = new Person("Adarsh", 23);
console.log(myself.name +" "+myself.age)

// to bring a change in the function constructor prtotype keyword

Person.prototype.changeName = function(name) {
    this.name = name;
}
myself.changeName("Adarsh kumar Debata")
console.log("\nAfter Change \n"  + myself.name +" "+myself.age)