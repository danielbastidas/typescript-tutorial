"use strict";
exports.__esModule = true;
exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.name = "default value";
        this.lastName = MyClass.staticField;
    }
    MyClass.prototype.method = function (arg) {
        console.log(arg);
    };
    MyClass.prototype.getLastName = function () {
        return this.lastName;
    };
    MyClass.staticField = "Static value";
    return MyClass;
}());
exports.MyClass = MyClass;
