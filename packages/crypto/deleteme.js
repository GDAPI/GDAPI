import { decryptLevel } from '@gdapi/crypto'
import fetch from 'node-fetch'

// fetch API를 이용해서 게임 서버에서 데이터를 가져옵니다.
const res = await fetch('http://boomlings.com/database/downloadGJLevel22.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    levelID: 60603962, // low death 레벨의 level ID
    secret: 'Wmfd2893gb7' // 이 url로 요청할땐 반드시 이게 필요합니다
  })
})

// text는 대충 아래처럼 생겼습니다.
// 1:62687277:2:Test:3:QSB0ZXN0IGxldmVsIGZvciB0aGUgR0QgRG9jcyE=:4:{levelData}:5:1:6:3935672:8:0:9:0:10:1:12:0:13:21:14:0:17::43:0:25::18:0:19:0:42:0:45:1:15:0:30:55610687:31:0:28:1 hour:29:1 hour:35:546561:36::37:0:38:0:39:50:46::47::40::27:AQcHBwEL#1bae6491cc87c72326abcbc0a7afaee139aa7088#f17c5a61f4ba1c7512081132459ddfaaa7c6f716
const text = await res.text()

// 위 택스트에서 레벨 데이터를 뽑아내봅시다
// 첫번째 capture group은 match 결과값의 1번 인덱스에 있습니다
const encodedLevelData = text.match(/:4:(.*?):/)[1]

// 데이터 디코딩
const decodedLevelData = decryptLevel(encodedLevelData)

// 첫 50자만 찍어보기
console.log(decodedLevelData.substring(0, 50))