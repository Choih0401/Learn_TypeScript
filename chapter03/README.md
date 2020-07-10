# [Chapter03]

컴파일 할 때마다 다양한 옵션을 반복적으로 저장하는 것은 번거로운 일이므로 tsconfig.json을 사용하면 좋다. tsconfig.json은 TypeScript를 위한 프로젝트 단위의 환경 파일로써 컴파일 옵션과 컴파일 대상에 대한 설정 등을 기술한 것이다.

`compilerOptions` 프로퍼티에는 `컴파일 옵션` 을 설정한다. 생략한 경우에는 기본 컴파일 옵션이 사용된다.

```json
{
	"compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "soucreMap": true
  }
}
```

컴파일 대상을 지정하기 위해서 `files` 또는 `include` 프로퍼티를 사용한다. 만약 files 프로퍼티를 정의하였다면 include 프로퍼티는 무시된다.

`files` 프로퍼티에는 컴파일 대상 파일의 상대 경로 또는 절대 경로를 명시적으로 설정한다.

```json
{
  "files": [
    "src/file1.ts",
    "src/file2.ts"
  ]
}
```

`include` 프로퍼티에는 컴파일 대상 파일 리스트를 설정한다. `exclude` 프로퍼티에는 컴파일 대상에서 제외할 파일 리스트를 설정한다.

```json
{
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

`src/**/*`는 scr 폴더 내에 있는 모든 서브 폴더 내의 모든 파일(.ts, .tsx)을 의미한다. 컴파일 옵션 `"allowJs": true`를 설정하면 .js와 .jsx 파일도 컴파일 대상이 된다.

이제 아래와 같이 프로젝트 폴더에 tsconfig.json 파일을 생성하고 컴파일 설정을 편집해준다.

```json
{
  "compilerOption": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  }
}
```

이제 간단한 TypeScript 코드를 작성해보자!

```typescript
//HelloWorld.ts

class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}
```

TypeScript를 사용하는 이유는 여러가지가 있지만 가장 큰 장점은 다양한 도구의 지원을 받을 수 있다는 것이다. TypeScript는 정적 타입을 지원하므로 높은 수준의 IntelliSense나 리펙토링 등을 지원하며 이러한 도구의 지원은 대규모 프로젝트를 위한 필수적 요소이기도 하다.

프로젝트 내에는 필수적으로 다양한 라이브러리가 포함되는데 이 라이브러리들은 JavaScript로 작성되어 있다. TypeScript는 ES5의 상위 확장이므로 JavaScript를 그대로 사용할 수 있다. 하지만 정적 타입이 없는 JavaScript를 그대로 사용하면 VSCode에서 제공하는 IntelliSense와 같은 다양한 도구의 지원을 받을 수 없다.

따라서 외부 JavaScript 라이브러리에 대해서도 타입체크를 수행하려면 해당 라이브러리의 타입이 정의되어 있는 정의 파일을 제공해야 하는데 직접 수작업으로 만드는 것은 어려운 일이기 때문에 유틸리티 라이브러리인 lodash를 사용하겠다.

아래와 같이 lodash를 설치한다

```bash
$ npm init -y
$ npm install lodash --save
```

npm에서 lodash 정의 파일을 설치한다.

```bash
$ npm install @types/lodash --save-dev
```

이제 코드를 수정하면 lodash 라이브러리에 대해 IntelliSense가 작동하는 것을 확인할 수 있다.