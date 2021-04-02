// showing how to work with rest parameters in functions
function getNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    numbers.forEach(function (num) { return console.log(num); });
}
getNumbers(1, 2, 3, 4);
function defaultParameter(param) {
    if (param === void 0) { param = "default value"; }
    console.log(param);
}
defaultParameter();
defaultParameter('with value');
// Arrow functions allows type definition in the parameters too
var myArrowFunc = function (param1, param2) { return console.log("param1:" + param1 + " param2:" + param2); };
myArrowFunc('a', 1);
