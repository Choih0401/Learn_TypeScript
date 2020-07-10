# [Chapter01]

TypeScript 컴파일러(tsc)는 TypeScript 파일(.ts)을 자바스크립트 파일로 트랜스 파일링 한다

> 컴파일은 일반적으로 소스 코드를 바이트 코드로 변환하는 작업을 의미한다. TypeScript 컴파일러는 TypeScript 파일을 자바 스크립트 파일로 변환하므로 트랜스파일링(Transpiling)이 보다 적절한 표현이라고 한다.

트랜스파일링을 실행해보기 위해 아래와 같은 파일을 작성보았다.

```typescript
//person.ts

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
```

이제 트랜스파일링을 실행해보자. tsc 명령어 뒤에 트랜스파일링 대상 파일명을 지정하면 된다.

```bash
$ tsc person
```

트랜스파일링을 실행한 결과, 같은 디렉토리에 아래와 같은 자바스크립트 파일(person.js)이 생성된다.

```javascript
//person.js

var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.name;
    };
    return Person;
}());
var person = new Person('Choi');
console.log(person.sayHello());
```

이 때 트랜스파일링 된 person.js파일은 자바스크립트의 ES3 버전이다. 이는 TypeScript 컴파일 타겟 자바스크립트 기본 버전이 ES3이기 때문이다.

만약 자바스트립트 버전을 변경하려면 컴파일 옵션에 `--target` 또는 `-t` 를 사용한다.

> 현재 tsc가 지원하는 자바스크립트 버전은 'ES3'(default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ESNEXT'이다.

예를 들어, ES6 버전으로 트랜스파일링을 실행하려면 아래와 같이 옵션을 추가한다.

```bash
$ tsc person -t ES2015
```

```javascript
//person.js

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "Hello, " + this.name;
    }
}
const person = new Person('Choi');
console.log(person.sayHello());
```

트랜스파일링이 성공하여 자바스크립트 파일이 생성됐으면, Node.js REPL을 이용해 트랜스파일링된 person.js를 실행할 수 있다.

```bash
$ node person
Hello, Choi
```

매번 옵션을 지정하는 것이 불편하면 아래와 같은 명령어로 tsc 옵션 설정 파일을 생성할 수 있다.

```bash
$ tsc --init
message TS6071: Successfully created a tsconfig.json file.
```

그럼 아래와 같이 tsc 옵션 설정 파일인 tsconfig.json이 생성된다

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],
```

추가적으로 tsc 명령어 뒤에 파일명을 지정하면 tsconfig.json이 무시된다.

```bash
$ tsc person # tsconfig.json 설정이 무시된다.
```

tsconfig.json을 적용하기 위해서는 아래와 같이 이용하면 된다.

```bash
$ tsc
```

위와 같이 파일명을 지정하지 않으면 프로젝트 폴더 내의 모든 TypeScript 파일이 모두 트랜스파일링 된다.