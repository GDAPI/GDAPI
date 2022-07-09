# decryptGameFile()

암호화된 게임 파일(`CCGameManager.dat`, `CCLocalLevels.dat` 등)을 받아서 암호화를 해제하는 함수입니다. __주의__: 이 함수는 windows 운영체제에서 생성된 게임 파일만 해제할 수 있으며 아래의 설명은 모두 windows 운영체제에만 적용됩니다.

## 불러오기
`@gdapi/crypto` 패키지에서 `import`문을 이용해서 함수를 불러오세요.
```js
import { decryptGameFile } from '@gdapi/crypto'
```

## 구문

```
decryptGameFile(data)
```

### 매게변수
`data`

  `Uint8Array`(브라우저에서) 또는 `Buffer`(Node.js에서) 형식의 게임 파일 이진 데이터. 브라우저에서 게임 파일의 데이터를 불러오려면 `<input type="file">` 요소를 이용해서 얻을 수 있는 `File` 오브젝트를 이용하거나 `fetch()` API가 돌려주는 `Response` 오브젝트를 이용할 수 있습니다. Node.js에서는 `fs.readFile()`을 `encoding` 매게변수 없이 호출하면 `Buffer` 형식으로 데이터를 가져올 수 있습니다. 자세한 방법은 아래 예시들을 참조하세요.

### 반환값

문자열을 resolve하는 `Promise` 오브젝트를 돌려줍니다.

## 설명

Geometry Dash 게임의 게임 파일은 `.dat` 확장자를 가지고 있는 암호화된 파일로 Windows에서는 `%localappdata%\GeometryDash` 폴더 안에 있습니다. `CCGameManager.dat`은 게임의 세이브 파일이라고 생각할 수 있으며, 게임 플레이에 관한 데이터들이 모두 이 파일에 기록됩니다. `CCLocalLevels.dat`은 편집기로 만든 로컬 레벨들을 담고 있습니다.

이 파일들을 텍스트 에디터로 열어보면 깨지기만 하고 열리지 않는데 그 이유는 데이터가 암호화되어 있기 때문입니다. 예를 들어 아래와 같은 데이터를 게임이 저장하려고 한다고 해봅시다.

```xml
<?xml version="1.0"?><plist version="1.0" gjver="2.0"><dict><k>valueKeeper</k><d><k>gv_0002</k><s>1</s><k>gv_0001</k><s>1</s><k>gv_0026</k><s>1</s><k>gv_0027</k><s>1</s><k>gv_0023</k><s>1</s><k>gv_0038</k><s>1</s><k>gv_0043</k><s>1</s><k>gv_0044</k><s>1</s><k>gv_0050</k><s>2</s><k>gv_0049</k><s>6</s><k>gv_0046</k><s>1</s><k>gv_0036</k><s>1</s><k>gv_0030</k><s>1</s><k>gv_0019</k><s>1</s><k>gv_0013</k><s>1</s><k>gv_0018</k><s>1</s></d><k>unlockValueKeeper</k><d /><k>customObjectDict</k><d /><k>bg…<k>GS_5</k><d /><k>GS_6</k><d /><k>GS_7</k><d /><k>GS_23</k><d /><k>GS_8</k><d /><k>GS_9</k><d /><k>GS_10</k><d /><k>GS_16</k><d /><k>GS_17</k><d /><k>GS_18</k><d /><k>GS_24</k><d /><k>GS_11</k><d /><k>GS_22</k><d /><k>GS_25</k><d /><k>GS_12</k><d /><k>GS_15</k><d /><k>GS_14</k><d /><k>GS_19</k><d /><k>GS_21</k><d /><k>MDLM_001</k><d /><k>KBM_001</k><d /><k>KBM_002</k><d /><k>showSongMarkers</k><t /><k>clickedEditor</k><t /><k>binaryVersion</k><i>35</i><k>resolution</k><i>-1</i></dict></plist>
```

위 데이터는 실제 게임 파일의 내용을 가져온 것으로 plist를 간소화한 simplified plist(정식 명칭은 아니에요) 형식으로 데이터가 기록되 있는 걸 볼 수 있습니다.

이 데이터는 먼저 `zlib`을 이용해서 [DEFLATE](https://en.wikipedia.org/wiki/Deflate) 형식으로 압축됩니다. 그리고 압축된 데이터를 Base64 인코딩으로 인코딩합니다. 이때 사용되는 Base64 인코딩은 `+`를 `-`로, `/`를 `_`로 바꾸는 URLSafe Base64입니다.

위 압축과 인코딩 과정을 거치면 Base64로 인코딩된 문자열을 얻을 수 있습니다. 여기에 암호화를 적용하기 위해서 먼저 문자열을 UTF8로 인코딩하고, 인코딩된 데이터를 XOR 연산을 이용해서 암호화합니다.([XOR Ciper](https://en.wikipedia.org/wiki/XOR_cipher)) 이때 사용되는 키는 무려 `11`입니다. (이럴거면 암호화 왜 했는지 잘 모르겠네요...)

암호화까지 완료된 데이터는 `.dat` 형식으로 파일 시스템에 저장됩니다.

## 예시
### 브라우저에서 `<input type="file">`을 이용해서 게임 파일 불러오기

```html
<input type="file" id="file" />

<!-- 암호화가 해제된 데이터를 표시할 textarea -->
<textarea id="result" cols="50" rows="50"></textarea>
```

```js
import { decryptGameFile } from '@gdapi/crypto'

const fileElem = document.querySelector('#file')
const resultElem = document.querySelector('#result')

fileElem.addEventListener('change', async evt => {
  // fileElem.files로부터 File 오브젝트를 가져옵니다
  const file = evt.target.files[0]
  // arrayBuffer() 메소드를 이용해서 ArrayBuffer 형식으로 데이터를 불러옵니다.
  const buffer = await file.arrayBuffer()
  // ArrayBuffer를 이용해서 Uint8Array를 만듭니다.
  const data = new Uint8Array(buffer)

  // 데이터를 함수에 전달하고 그 결과를 표시합니다.
  resultElem.textContent = await decryptGameFile(data)
})
```

### Node.js에서 게임 파일 불러오기
`CCGameManager.dat`를 불러와봅시다.
```js
import fs from 'node:fs/promises'
import path from 'path'
import { decryptGameFile } from '@gdapi/crypto'

const gameManagerPath = path.join(process.env['localappdata'], 'GeometryDash', 'CCGameManager.dat')

// 데이터를 Buffer 형식으로 불러옵니다.
const data = await fs.readFile(gameManagerPath)

// 데이터의 암호화를 해제하고 그 결과를 콘솔에 출력합니다.
const decryptedData = await decryptGameFile(data)
console.log(decryptedData)
```