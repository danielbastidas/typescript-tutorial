function test(stark) {
    console.log(stark.name);
    if (stark.age)
        console.log(stark.age);
}
test({ name: "Daniel" });
test({ name: "bastidas", age: 10 });
