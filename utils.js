var Utilities;
(function (Utilities) {
    var Utility = /** @class */ (function () {
        function Utility() {
        }
        Utility.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return Utility;
    }());
    Utilities.Utility = Utility;
})(Utilities || (Utilities = {}));
/// <reference path="utils.ts" />
var utils = new Utilities.Utility();
console.log(utils.timesTwo(9));
