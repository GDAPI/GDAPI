# encryptLevel()

디코딩된 레벨 데이터를 게임이 불러올 수 있는 인코딩된 레벨 데이터로 인코딩합니다.

## 불러오기
`@gdapi/crypto` 패키지에서 `import`문을 이용해서 함수를 불러오세요.
```js
import { encryptLevel } from '@gdapi/crypto'
```

## 구문

```
encryptLevel(levelData)
```

### 매게변수

`levelData`

  디코딩된 레벨 데이터 문자열.

### 반환값

디코딩된 레벨 데이터 문자열을 돌려줍니다.

## 설명

게임이 레벨 데이터를 저장하는 방식에 대한 설명은 `decryptLevel()` 함수 문서를 읽어보세요.
