
var isWinter : boolean = false;

// types can be defined with the first letter capitalized or not
var nameX : String = "Daniel";

var age : Number = 25;

var javascriptVarType : any = "also accept numbers as values";
javascriptVarType = 10;

// note that all the elements in the array have the same type
var fruits : String[] = ["banana", "apple", "pear"];

var array : any[] = [10,"hello", false];

enum vals {VAL_1, VAL_2, VAL_3};
var enumVar : vals = vals.VAL_1;

function doNothing() : void {
	console.log('look mom, without returning anything');
}
