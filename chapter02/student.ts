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

import { Person } from './person';

class Student extends Person {
    study(): string {
        return `${this.name} is studing.`;
    }
}

const student = new Student('w00kiki2');

console.log(student.sayHello());
console.log(student.study());