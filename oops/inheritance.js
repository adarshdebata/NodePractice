// Parent class
class Animals {
    constructor(name) {
        this.name = name;
    }
    
    animalName() {
        return `${this.name}`;
    }
}

// Pets extending the parent class
class Pets extends Animals {
    
    constructor(name) {
        super(name); // Call the parent class's constructor
        console.log(`Pet class is created`);
    }
}

// Example usage
const myPet = new Pets('Buddy');
console.log(myPet.animalName()); // Outputs: Buddy
