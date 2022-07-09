# decryptLevel()

게임에서 플레이 가능한 레벨에 대한 정보를 담고 있는 인코딩된 레벨 데이터를 처리 가능한 데이터로 디코딩합니다.

## 불러오기
`@gdapi/crypto` 패키지에서 `import`문을 이용해서 함수를 불러오세요.
```js
import { decryptLevel } from '@gdapi/crypto'
```

## 구문

```
decryptLevel(levelData)
```

### 매게변수

`levelData`

  인코딩된 레벨 데이터 문자열. 게임 파일 내부 또는 게임 서버와 직접 통신하는 등의 방법으로 얻을 수 있습니다.

### 반환값
디코딩된 레벨 데이터 문자열을 돌려줍니다.

## 설명

게임은 레벨을 아래와 같은 '레벨 데이터'로 저장합니다. 이 데이터에는 오브젝트의 배치, 사용된 노래 등 레벨에 대한 정보를 담고 있습니다.

```
kS38,1_248_2_249_3_255_11_255_12_255_13_255_4_-1_6_1000_7_1_15_1_18_0_8_1|1_0_2_0_3_0_11_255_12_255_13_255_4_-1_6_1001_7_1_15_1_18_0_8_1|1_0_2_102_3_255_11_255_12_255_13_255_4_-1_6_1009_7_1_15_1_18_0_8_1|1_0_2_0_3_0_11_255_12_255_13_255_4_-1_6_1002_5_1_7_1_15_1_18_0_8_1|1_125_2_255_3_0_11_255_12_255_13_255_4_-1_6_1005_5_1_7_1_15_1_18_0_8_1|1_0_2_255_3_255_11_255_12_255_13_255_4_-1_6_1006_5_1_7_1_15_1_18_0_8_1|1_0_2_0_3_0_11_255_12_255_13_255_4_-1_6_1_7_1_15_1_18_0_8_1|1_0_2_0_3_0_11_255_12_255_13_255_4_-1_6_1004_7_1_15_1_18_0_8_1|,kA13,111,kA15,0,kA16,0,kA14,,kA6,13,kA7,1,kA17,1,kA18,0,kS39,0,kA2,0,kA3,0,kA8,0,kA4,0,kA9,0,kA10,0,kA11,0;1,11,2,1,3,45,57,1;1,1007,2,-29,3,225,36,1,51,1,10,0,35,0;1,1022,2,165,3,345,57,1;1,211,2,375,3,285,20,3,21,1;1,200,2,335,3,247,57,1,6,45,13,1;1,211,2,315,3,315,20,3,21,1;1,211,2,315,3,255,20,3;
(...more)
```

이 데이터는 저장공간을 절약하기 위해서 압축된 후 저장됩니다. 먼저 UTF8로 인코딩한 후 이 데이터를 `zlib`을 이용해 [DEFLATE](https://en.wikipedia.org/wiki/Deflate) 형식으로 압축힙니다. 그리고 Base64 인코딩을 통해서 압축된 데이터를 문자열로 인코딩합니다. 이때 사용되는 Base64 인코딩은 `+`를 `-`로, `/`를 `_`로 바꾸는 URLSafe Base64입니다.

인코딩이 완료된 데이터는 아래와 같이 생겼습니다.

```
H4sIAAAAAAAAA6Vbu47lNgz9Ic_CektYpNgUKQMkA2yANC5Szi_k42OJlK0HKQpIsfcudKgXeUiT9J2vTxMPdWkbL31_pstc2rlLKfjS8AWD9vpQl7_UeZ5XuNSlXP6I13nFS_2r7m99_zP3P2G6YqerU--dIP2_E-grz6SWUNpdMGljGccucz6LbFzGL5fZuND_U4Ylph9fP5Q5lFL5P-4485eHL3vcn_644a8f4SgC-BWzwKdJRU6XT1M-C_DDlk9A1Qlf6ji_q3ufQ99LmMO6w92L5aHzDPfgh073sNbuMPeWh7uBo8w1DmaeWue5_hY4zDtdlyVNyMM6ukOf-T8KsPPMmCmYDWXK4fPe-crvZFXWVMPkBrvVWLCyZnj2y8e4h_Uw7DQMl5XuK-UPe6RBynpOyvvm2Nr1xz7HZU5hs3IBm7akzI6U2hEKWyvt7SedPVRFyVKKVXonJekUNL9zeMMrovArG-Yh0sA9a0heltVhnsQ0kOKZ1kkJl4bTSERCKcGweDOBJHiuHSHJYrChwFwQkg5ldpiLUlvKwuAi3BBjmyS1RQjeC-4AowurbqFb8TZH4hx9MF4GGx4887JgJsdlZ48PFZ4QPy_xsNq5RoEDqwGTOIZSgglASuIYSgnMwDPvCG3tJxEDpBbEKJr0gdQkYKox9KBlmCdpGaUELYOUpGU4jRStQEqKViglODyeSzAZSPF6VueoZvWmLZMJXqI3BzVC_AIpybtRakuBUixEBe5oZkt9ku2DwPjC15DaPKvncjDN5UmM5jlgrrduezTYVKI4SEkURylBYyC1JSTtZ3bYhaoT2IVKFHgDUlsbSt6JUoKno3mEOIUq3ZNiTQ05d3TAmPLUejz6SbsL40AGlTWwEbC5DAkP1hnsrsiIo-IirK_DQ7jbCs-ZH8LanMNKgsXwPrwtys1SIP0MsDaZp7FEaSTNiTutkRQmFq8EN3Sc2rJOFuzcerX17s7PejMUNrfq3HUShEL7TDxX1WlIs5UtcOaGJlFywzhVUrZ3PbffkJwT7aXkhiVRcoMceM4dJU2lxfo-smlVk22OxlNzUstsp-ZEcym5o2jVJvi0JIQwpeJ7B_UUE-qbtTmU3bNu0VZShcBE5m7nxcYpA0pjBvRqUy9SaRSncwycuaNrPSebS8kdXespTVsKbhBQzznkUnLHnfWcCa_XXAYTMIpJi-hl5mSM2dCkXaOYOc9YSm7o2kzZICc4p3FLyR1VG7NrPtPm2DuSG-QxUzLJCNoph1kK7uxt54xnKbmjI-t2LWTlPPDWTu7DKNf64lNdppQx78fYmSdqFoLI55Fx44CZRjLP4WgDUnyFRIq_0UjgkFJ8PQj6tm8d6JkQ3FNaDEuFV6UkUgoNEikGoxHthhHFrmKJO4SZjs-sGOZT4SMx1jhdn4bnN1cehtqP0-fTxMDdKQbuBlHNZmjnUFqNgbNEfLJbEiBoEGuBMIxQNIs1GR9HAmGAOL9iaMA5hR7BzuufDVPiCJUMc_WEud8oSag8Gc4YyXBKSW9eSyOE0vEWbhhQhEVT4piTEse2lDjmpDQzB7We5ky-AefS4Y2oMNO_GijBdMSdW-N3HTwOhbSeEswa94HF39c3KzyucW_XeDgF3K_xKJwv8ud7Xxb1eKGBPl3_GMKBmalVcvYIRAhfQYTwFUQIX6lId4JCvXqCNLxxbsZnSiLIUhJxlpKIt5SsKuIoWXGOkvVIHCWrPt9ArFWYNQyPKYSqUsoDyoVv41TKBOqpWEiAoIAKHAVU4Myp3jqCRIhIh0gXtGKzlntexKt4DpOIUFeX4zfqQiq8TrhvpL7Bgrc239dvkAe83FNd6TWOd5ltA85V5Qh2Te6XGgDybAacZ7N6Xzgt8I7tyAZhCs92PDLLdtAUG8AqzgVAxNkAWnEuACPOBnDE2QdAxefzAcW06R_wOEDRXr_VHYlozSKEe2nDsV4T-X6LUMFCc3UFIkSVUhF2HyLC6KcOH5ISvE5XrDXg_GLoNRCAvM8AzvuMTmuf0e8rlAXOZhgVZwkGOE9QvB_rYKhs1kER5--XMCYsz8c7GOKCfngHR3zWD1DGcIUlIpQ_Ga7kRIR6ihjH-aCZS8_uAESOXeeMZQ_cGEDe4oDzjEKcZRTgvMUQZy0GOG8xxOf9TWrunnvLQ1dE2zDcbEBuhQ0jlKksV31XhF2fIoutFep4FkL0_YkfiRAVICJEYLVMoV5nEHHVvu_4SISK7PZ9rzaS1M6_RWzA-beTLwMA5BkMK_MxGXA-JiNPWIYDzjMccZbhgPMMR9uwMRNxNubi_dmYjfvz91NvnqZaljbFEUi6qaTWrpakDwcc0QwAX3Wlg6kN-OrIHUe0F_pNWA27Wre-pQzs5d70_sOWjtuHadJ8N7YQBoRKaxzXKsI5lFs6rpmDCOVKjuvD4BzKZd3zPpKewt6GA4bHTadtgs_gzG7-SWkDzr9wHVd2ceIX7_yudommIdYf3LrLU3HWH4Fa0FzvTqn4JU8GB39DODW_nm-sNg37zWEzD9dXq-CQPtIOiaf2Y5emf_T68mtQ7cfZLaq059a1rLb8-3vRBc4HdC-0abzQM_FCz8ULPRtf2zxLPAnnM8FNQ_wU_XIS9B_srP8Wme2GS4WxjzFsFbgatcfZx00QauQg1NhBqNGDUOMHoUcAeOLPN_bPaJxlRxDaKkFoywShBxKEHkoQejAhrNkLOM_eMHbISNwI-jXC_QhXAHZHiKWu5X1p-MX6yuMV9ZyLAMKFNthiDpvNNuUPfCjvikKBH4UCPwoFfhQK_CgU2FEosKNQYEeuwO5w3rvi2E-icZa9UWjARKGBE4UGSBQaIFFogEShAQI4711x7MSROO9dcXxzT-Pz_oXcydHkBlCLYF8SN0tSQFwtF-dZeIM09nCGGyah4ZGEhkcSGipJaIgkoSGShIZI4hoiHc57WBp_cEHiBIOy4s2pZsWXqGjOQEdFRG2D9ovRJsb1ZmLgUhDIU7N4znGfVypFUp3cYdUihNdpZlznnI4CQGDGp5dOdSFmvLyM4o6TK0EWLH-1xYJ2BYYFmEnCg2YElbn1Wf5EMqA58A_Mkirj5mkrGHX8ef7zywT5Av38-vn51-evv_3x8_e_v_8H_vqStOI-AAA=
```

## 예시
### 게임 서버에서 Low Death 불러와보기(Node.js)

브라우저에서는 아래 예시가 CORS 문제때문에 작동하지 않습니다.

__주의__: 아래 예시는 현재 롭탑이 막아서 작동하지 않습니다. 이렇게 쓰는구나 정도만 봐주세요.

```js
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
const decodedLevelData = await decryptLevel(encodedLevelData)

// 첫 50자만 찍어보기
console.log(decodedLevelData.substring(0, 50))
```





