# [Server01]

### node.js 프로젝트 생성하기

아래 코드를 이용해서 프로젝트를 생성한다.

```bash
$ mkdir node_typescript
$ npm init -y
```

그리고 편의를 위하여 사전에 설치되어 있어야 하는 패키지들이 있다.

- npx: global로 패키지를 설치하지 않더라도 프로젝트 내에서 사용할 수 있게 해준다.
- nodemon: 파일이 변화할 때마다 재실행해준다.
- typescript: typescript로 구성한 코드를 javascript로 트랜스파일링 해준다.
- npm-run-all: 여러 npm 실행 명령을 병렬로 실행할 수 있게 해준다.
- webpack: 요즘 각광받는 모듈 번들러
- webpack-cli: webpack 명령을 사용하기 위한 CLI도구
- souce-map-support: typescript로 개발시 source-map을 지원해준다.
- @types/express: express 모듈에 대한 type을 지원해준다.

```bash
$ npm install -g npx
$ npm install --save-dev typescript ts-loader npm-run-all webpack @types/express nodemon webpack-cli
$ npm install --save express source-map-support
```

### 기본 설정하기

아래와 같이 typescript에 대한 기본 설정을 한다.

```bash
$ npx tsc --init
```

tsconfig.json와 같은 파일이 생성되는데 안에 주석처리 되어 있는 "inlineSourceMap"을 true로 주석을 풀어준다.

```json
{
  "compilerOptions": {
    "lib": [
      "es5",
      "es6"
    ],
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./build",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true
  }
}
```

이제 아래와 같이 루트 디렉토리에 webpack.config.js 파일을 생성하여 아래의 코드를 입력한다

```javascript
const path = require('path');

module.exports = {
  entry: './src/www.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  target: 'node',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

작성을 완료 했다면 아래와 같이 src/App.ts파일을 생성하고 아래 코드를 입력한다.

```typescript
import * as express from "express";

class App {
  public app: express.Application;

  public static bootstrap (): App {
    return new App();
  }

  constructor () {
    this.app = express();
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("Hello world");
    });
  }
}

export default App;
```

이제 위 express server를 실행하는 코드를 아래와 같이 src/www.ts에 작성한다.

```typescript
import 'source-map-support/register'; // soucre-map을 사용하기 위해 추가함.
import App from "./App";
import * as express from "express";

const port: number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;

app.listen(port, () => {
    console.log(`Express erver listening at ${port}`);
}).on('error', err => {
    console.log(err);
});
```

이제 package.json에 scripts에 다음 설정도 추가해준다.

```json
"scripts": {
  "start": "nodemon --watch src --delay 1 --exec 'ts-node' src/www.ts",
  "build": "webpack --config webpack.config.js"
},
```

그리고 yarn start를 하면 코드가 바뀔 때마다 재시작 하는 것을 볼 수 있다. 여기서 nodemon을 실행할 때 ts-node를 사용해서 typescript로 작성된 코드를 바로 동작시킨다.

```bash
$ yarn start
yarn run v1.22.4
$ nodemon --watch src --delay 1 --exec 'ts-node' src/www.ts
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/www.ts`
Express erver listening at 3000
```

실제로 배포할 때는 컴파일 된 bundle file 하나만 배포하게 된다. 다음과 같은 명령어로 실앻가능한 서버 하나의 파일을 생성하고 실행할 수 있다.

```bash
# Webpack을 사용하여 번들링한다.

$ npm run build

> server01@1.0.0 build /Users/w00kiki2/Documents/Choih0401/Learn_TypeScript/server01
> webpack --config webpack.config.js

# Bundled file을 실행해본다.
$ node dist/bundle.js
Express erver listening at 3000
```

