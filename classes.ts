class MyClass {
	name: string ="default value";
	static staticField : String = "Static value";
	lastName : String;

	constructor() {
		this.lastName = MyClass.staticField;
	}

	method(arg:String) {
		console.log(arg);
	}
}

var myObject = new MyClass();
console.log(myObject.lastName);
myObject.method(myObject.name);
