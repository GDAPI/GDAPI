English | [한국어](../ko/decryptLevel.md)

# decryptLevel()

Decode an encoded level data.

## Importing

Use `import` to import the function from the `@gdapi/crypto` package.
```js
import { decryptLevel } from '@gdapi/crypto'
```

## Syntax

```
decryptLevel(levelData)
```

### Parameters

- `levelData`

  An encoded level data string. You can retrieve it from the decrypted gamefile or by communicating with game server.

### Return value
A decoded level data string.

## Description

TBD

## Example
### Loading level data of Low Death from game server

__NOTE__: Following example no longer since it is blocked by Robtop. 

```js
import { decryptLevel } from '@gdapi/crypto'
import fetch from 'node-fetch'

// load level data using fetch API
const res = await fetch('http://boomlings.com/database/downloadGJLevel22.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    levelID: 60603962, // level ID of the Low Death
    secret: 'Wmfd2893gb7' // required for this endpoint
  })
})

// the resulting text looks like this:
// 1:62687277:2:Test:3:QSB0ZXN0IGxldmVsIGZvciB0aGUgR0QgRG9jcyE=:4:{levelData}:5:1:6:3935672:8:0:9:0:10:1:12:0:13:21:14:0:17::43:0:25::18:0:19:0:42:0:45:1:15:0:30:55610687:31:0:28:1 hour:29:1 hour:35:546561:36::37:0:38:0:39:50:46::47::40::27:AQcHBwEL#1bae6491cc87c72326abcbc0a7afaee139aa7088#f17c5a61f4ba1c7512081132459ddfaaa7c6f716
const text = await res.text()

// extract level string from the text
const encodedLevelData = text.match(/:4:(.*?):/)[1]

// decoding
const decodedLevelData = await decryptLevel(encodedLevelData)
console.log(decodedLevelData.substring(0, 50))
```


