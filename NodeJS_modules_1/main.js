var person = require('./person');

person.name("John");
person.age();

// дефинирајте JSON object кој што ќе го именувате како person, 
// додадете одредени податоци кои се соодветни за тој објект,
// и да ги извршите сите фунции кои ги нуди person.js.
var person = {
    "person": [
        { "name": "Miki", "surname": "K", "age": "30" }
    ]
};
console.log(person);