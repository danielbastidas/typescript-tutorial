var MyClass = /** @class */ (function () {
    function MyClass() {
        this.name = "default value";
        this.lastName = MyClass.staticField;
    }
    MyClass.prototype.method = function (arg) {
        console.log(arg);
    };
    MyClass.staticField = "Static value";
    return MyClass;
}());
var myObject = new MyClass();
console.log(myObject.lastName);
myObject.method(myObject.name);
