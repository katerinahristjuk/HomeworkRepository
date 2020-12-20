const person = {
    name: function(name) {
        console.log(`The name is ${name}`);
    },
    surname: function(surname) {
        console.log(`The surname is ${surname}`);
    },
    age: function() {
        console.log(`The age is 30`);
    }
}

module.exports = person;