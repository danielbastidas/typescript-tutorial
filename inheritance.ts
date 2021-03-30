class Person {
	name:String;
	constructor(name:String) {
		this.name = name;
	}

	dance() {
		console.log(`${this.name} is dancing`);
	}

}

var person1 = new Person("jon");
person1.dance();

class AwesomePerson extends Person {
	dance() {
		console.log("Awesome dancing");
		super.dance();
	}
}

var person2 = new AwesomePerson("doe");
person2.dance();
