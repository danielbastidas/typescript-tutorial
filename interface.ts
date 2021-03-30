interface MyInterface {
	name: String;
	// the ? indicates the parameter is optional
	age?: Number;
}


function test(stark : MyInterface) {
	console.log(stark.name);
	if (stark.age) console.log(stark.age);
}

test({name:"Daniel"});
test({name:"bastidas", age:10});
