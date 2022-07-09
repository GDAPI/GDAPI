# encryptGameFile()

데이터를 받아서 게임이 불러올 수 있도록 암호화하는 함수입니다. 암호화된 데이터를 게임 파일로 저장하면 게임이 원하는 데이터를 불러오도록 할 수 있습니다. __주의__: 이 함수는 windows 운영체제에서 생성된 게임 파일의 형식으로만 암호화할 수 있으며 아래의 설명은 모두 windows 운영체제에만 적용됩니다.

## 불러오기
`@gdapi/crypto` 패키지에서 `import`문을 이용해서 함수를 불러오세요.
```js
import { encryptGameFile } from '@gdapi/crypto'
```

## 구문

```
encryptGameFile(data)
```

### 매게변수
`data`

  저장하려는 문자열 데이터.

### 반환값
암호화된 `data`의 내용을 담고 있는 `Uint8Array`(브라우저에서) 또는 `Buffer`(Node.js에서) 형식의 데이터. 이 데이터는 바로 게임 파일로 저장할 수 있습니다.

## 설명

게임이 데이터를 어떻게 암호화하는지 대한 자세한 설명은 `decryptGameFile()` 함수의 문서를 읽어보세요.


