var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
var company = 'Asadullohs';
var isPublished = true;
// anything
var x = "hello";
// anything
var ids = [1, 2, 3, 4, 5, 6];
var arr = [1, 'Hello', true];
// Tuple
var person = [1, 'Asadulloh', true];
// Tuple array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'Brad'],
    [3, 'Brad'],
];
// Union
var idm;
idm = '22';
// Enum
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 0] = "Up";
    direction1[direction1["Down"] = 1] = "Down";
    direction1[direction1["Left"] = 2] = "Left";
    direction1[direction1["Right"] = 3] = "Right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
    direction2["Right"] = "Right";
})(direction2 || (direction2 = {}));
console.log(direction1.Up);
var user = {
    id: 1,
    name: "John"
};
// Type Assertion
var cid = 1;
// let customerId = <number>id
var customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 10));
// Void
function log(message) {
    return console.log("Asadulloh");
}
log('hello');
var user1 = {
    id: 1,
    name: 'Asadulloh is the most powerful person in the world',
};
user1.id = 5;
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x + y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var asadulloh = new Person(1, "Asadulloh");
var asadbek = new Person(2, "Asadbek");
console.log(asadulloh.register());
console.log(asadulloh, asadbek);
// Extending classes (SubClasses)
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var ischi = new Employee(2, "Shown", "Developer");
console.log(ischi);
console.log(ischi.register());
// Generics
/*
  Generics are a TypeScript feature that
  allows us to pass in various
  types of data and create reusable code
  to handle different inputs.
  They allow us to define placeholder
  types which are then replaced when the
  code is executed with the actual types passed in.
*/
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4, 5, 6]);
var strArray = getArray(['Asadulloh', 'Asadbek', "Someone"]);
