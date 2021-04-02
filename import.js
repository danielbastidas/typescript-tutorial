"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
function test(stark) {
    console.log(stark.name);
    if (stark.age)
        console.log(stark.age);
}
test({ name: "Daniel" });
test({ name: "bastidas", age: 10 });
var myObject = new classes_1.MyClass();
console.log(myObject.getLastName());
myObject.method(myObject.name);
