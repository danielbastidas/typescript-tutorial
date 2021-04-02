class MyClass {
	name: string = "default value";
	static staticField: String = "Static value";
	private lastName: String;

	constructor() {
		this.lastName = MyClass.staticField;
	}

	method(arg: String) {
		console.log(arg);
	}

	getLastName(): String {
		return this.lastName;
	}
}

export { MyClass }