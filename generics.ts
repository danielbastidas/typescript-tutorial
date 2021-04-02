interface Person {
    name: String;
    lastName: String;
    // the ? indicates the parameter is optional
    age?: Number;
    email: String;
}


function printPersons(persons: Array<Person>) {
    persons.forEach(person => console.log(person))
}

let persons: Array<Person> = [{
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
]

printPersons(persons)