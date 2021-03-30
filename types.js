var isWinter = false;
// types can be defined with the first letter capitalized or not
var nameX = "Daniel";
var age = 25;
var javascriptVarType = "also accept numbers as values";
javascriptVarType = 10;
// note that all the elements in the array have the same type
var fruits = ["banana", "apple", "pear"];
var array = [10, "hello", false];
var vals;
(function (vals) {
    vals[vals["VAL_1"] = 0] = "VAL_1";
    vals[vals["VAL_2"] = 1] = "VAL_2";
    vals[vals["VAL_3"] = 2] = "VAL_3";
})(vals || (vals = {}));
;
var enumVar = vals.VAL_1;
function doNothing() {
    console.log('look mom, without returning anything');
}
