// in order to compile this file including the dependencies you only have to execute the following command:
// tsc import.ts

import { MyInterface } from "./interface";
import { MyClass } from "./classes";

function test(stark: MyInterface) {
    console.log(stark.name);
    if (stark.age) console.log(stark.age);
}

test({ name: "Daniel" });
test({ name: "bastidas", age: 10 });

var myObject = new MyClass();
console.log(myObject.getLastName());
myObject.method(myObject.name);