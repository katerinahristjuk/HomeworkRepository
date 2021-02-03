class Dogs {
    constructor(name, breed, color, age) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.age = age;
    }

    nameDog() {
        console.log(`This is ${this.name}!`);
    }
    breedDog() {
        console.log(`Its breed is ${this.breed}. It is a beautiful ${this.color} puppy!`);
    }
    ageDog() {
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

module.exports = { Dogs }