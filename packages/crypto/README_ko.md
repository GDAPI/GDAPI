[English](README.md) | 한국어

## Module: crypto
[![Crypto Module Test](https://github.com/GDAPI/GDAPI/actions/workflows/crypto-test.yaml/badge.svg)](https://github.com/GDAPI/GDAPI/actions/workflows/crypto-test.yaml)
[![Published on npm](https://img.shields.io/npm/v/@gdapi/plist.svg)](https://www.npmjs.com/package/@gdapi/plist)

[데모 보기](https://stackblitz.com/edit/gdapi-crypto-demo?file=index.js)

Geometry Dash 클라이언트 게임 파일의 암호화를 해제하고 반대로 데이터를 암호화하는 기능을 제공하는 모듈입니다. 레벨 데이터의 인코딩 및 디코딩 또한 지원합니다.

## 설치하기

ES Module을 지원하는 최신 크롬 브라우저 / Node.js 환경에서 작동합니다.

### NPM
`@gdapi/crypto` 패키지를 설치하세요.

```
npm i @gdapi/crypto
```

### CDN
브라우저에서는 설치 없이 jsdelivr/unpkg 같은 CDN을 이용할 수 있습니다.
```js
// jsdelivr
import { decryptGameFile } from 'https://cdn.jsdelivr.net/npm/@gdapi/crypto/build/index.min.js'
// unpkg
import { decryptGameFile } from 'https://unpkg.com/@gdapi/crypto/build/index.min.js'
```


## 사용하기

`import`문을 이용해서 아래 함수들을 불러올 수 있습니다.
```js
import {
  decryptGameFile, // 게임 파일의 암호화를 해제합니다.
  encryptGameFile, // 데이터를 다시 암호화합니다.
  decryptLevel, // 레벨 데이터를 디코딩합니다. (사실 레벨 데이터에는 암호화가 걸려있지 않아요)
  encryptLevel // 레벨 데이터를 인코딩합니다.
} from '@gdapi/crypto'
```

`[decryptGameFile](doc/ko/decryptGameFile.md)` 

  암호화된 게임 파일(`CCGameManager.dat`, `CCLocalLevels.dat` 등)을 받아서 암호화를 해제하는 함수입니다.

`[encryptGameFile](doc/ko/encryptGameFile.md)` 

  데이터를 받아서 게임이 불러올 수 있도록 암호화하는 함수입니다. 암호화된 데이터를 게임 파일로 저장하면 게임이 원하는 데이터를 불러오도록 할 수 있습니다.

`[decryptLevel](doc/ko/decryptLevel.md)`

  게임에서 플레이 가능한 레벨에 대한 정보를 담고 있는 인코딩된 레벨 데이터를 처리 가능한 데이터로 디코딩합니다.

`[encryptLevel](doc/ko/encryptLevel.md)`

  디코딩된 레벨 데이터를 게임이 불러올 수 있는 인코딩된 레벨 데이터로 인코딩합니다.

## 개발에 도움 주기

Pull Request를 통해서 개발에 도움을 주실 수 있습니다.

## 라이선스

ISC 라이선스에 따라서 이용하실 수 있습니다. 라이선스 전문은 `LICENSE.md`에 있습니다.