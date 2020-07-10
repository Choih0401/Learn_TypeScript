/*

            ___   ___  _    _ _    _ ___  
           / _ \ / _ \| |  (_) |  (_)__ \ 
 __      _| | | | | | | | ___| | ___   ) |
 \ \ /\ / / | | | | | | |/ / | |/ / | / / 
  \ V  V /| |_| | |_| |   <| |   <| |/ /_ 
   \_/\_/  \___/ \___/|_|\_\_|_|\_\_|____|
                                          
                                          
[compile option]

tsc person = Converting to ES3
tsc person -t ES5 = Converting to ES5
tsc person -t ES2015 = Converting to ES6

*/

class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return "Hello, " + this.name;
    }
}

const person = new Person('Choi');

console.log(person.sayHello());