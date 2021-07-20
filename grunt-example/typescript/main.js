var Helper;
(function (Helper) {
    var Language = /** @class */ (function () {
        function Language() {
        }
        Language.Greeting = "Bonjour";
        return Language;
    }());
    Helper.Language = Language;
})(Helper || (Helper = {}));
/// < reference path="helper.ts"/>
console.log(Helper.Language.Greeting + " world");
