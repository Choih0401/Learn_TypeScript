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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.name;
    };
    return Person;
}());
exports.Person = Person;
