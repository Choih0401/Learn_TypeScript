"use strict";
/*

            ___   ___  _    _ _    _ ___
           / _ \ / _ \| |  (_) |  (_)__ \
 __      _| | | | | | | | ___| | ___   ) |
 \ \ /\ / / | | | | | | |/ / | |/ / | / /
  \ V  V /| |_| | |_| |   <| |   <| |/ /_
   \_/\_/  \___/ \___/|_|\_\_|_|\_\_|____|
                                          
                                          
[compile option]

tsc init = Make tsconfig.json
tsc = Change all file to javascript

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.study = function () {
        return this.name + " is studing.";
    };
    return Student;
}(person_1.Person));
var student = new Student('w00kiki2');
console.log(student.sayHello());
console.log(student.study());
