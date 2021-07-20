var PersonUtility;
(function (PersonUtility) {
    function getFullName(firstName, lastName) {
        return firstName + lastName;
    }
    PersonUtility.getFullName = getFullName;
})(PersonUtility || (PersonUtility = {}));
/// <reference path="./namespace.ts">
console.log(PersonUtility.getFullName("Daniel", "Bastidas"));
