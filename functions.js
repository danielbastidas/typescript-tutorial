// showing how to work with rest parameters in functions
function getNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    numbers.forEach(function (num) { return console.log(num); });
}
getNumbers(1, 2, 3, 4);
