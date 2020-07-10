# [Chapter02]

아래와 같이 상속 관계에 있는 두 개의 TypeScript class를 작성한다.

```typescript
//person.ts

export class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return "Hello, " + this.name;
    }
}
```

```typescript
// student.ts

import { Person } from './person';

class Student extends Person {
    study(): string {
        return `${this.name} is studing.`;
    }
}

const student = new Student('Choi');

console.log(student.sayHello());
console.log(student.study());
```

위 코드들을 아래의 명령으로 한번에 트랜스파일링 한다.

```bash
$ tsc
$ node student
Hello, Choi
Choi is studying.
```

`--watch` 또는 `-w` 옵션을 사용하면 트랜스파일링 대상 파일의 내용이 변경되었을 때 이를 감지하여 자동으로 트랜스 파일링을 해준다.

```bash
$ tsc --watch
[오전 1:22:35] Starting compilation in watch mode...

[오전 1:22:35] Found 0 errors. Watching for file changes.
```

또는 아래와 같이 tsconfig.json에 watch 옵션을 추가할 수도 있다.

```json
{
  //...
  "watch": true
}
```

그럼 student.js를 변경해 watch기능이 동작하는지 확인해보자

```typescript
//student.ts

import { Person } from './person';

class Student extends Person {
    study(): string {
        return `${this.name} is studing.`;
    }
}

const student = new Student('w00kiki2'); // 'Choi' -> 'w00kiki2'

console.log(student.sayHello());
console.log(student.study());
```

아래와 같이 bash에 파일 변경이 감지 되고 자동으로 트랜스파일링이 실행된다.

```bash
[오전 1:28:21] File change detected. Starting incremental compilation...

[오전 1:28:21] Found 0 errors. Watching for file changes.
```

```bash
$ node student
Hello, w00kiki2
w00kiki2 is studing.
```

