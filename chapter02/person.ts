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

export class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return "Hello, " + this.name;
    }
}