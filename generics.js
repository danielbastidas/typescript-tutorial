function printPersons(persons) {
    persons.forEach(function (person) { return console.log(person); });
}
var persons = [{
        name: 'Daniel',
        lastName: 'Bastidas',
        email: 'dabastidasg@gmail.com',
        age: 37
    },
    {
        name: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 1000
    }
];
printPersons(persons);
