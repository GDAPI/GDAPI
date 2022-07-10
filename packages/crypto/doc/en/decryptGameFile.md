English | [한국어](../ko/decryptGameFile.md)

# decryptGameFile()

Receive gamefiles(`CCGameManager.dat`, `CCLocalLevels.dat`) as an input and decrypt its data. __NOTE__: This function is for gamefiles generated in Windows OS. Following descriptions applies to Windows only.

## Importing

Use `import` to import the function from the `@gdapi/crypto` package.
```js
import { decryptGameFile } from '@gdapi/crypto'
```

## Syntax

```
decryptGameFile(data)
```

### Parameters

- `data`

  A `Uint8Arrray`(browser) or a `Buffer`(Node.js) of a gamefile binary data. To obtain the binary data in the browser, `<input type="file">` HTML element or the `Response` object returned by the `fetch()` API can be used. In Node.js, call `fs.readFile()` without `encoding` parameter to read the gamefile as a `Buffer`.

### Return value

A `Promise` which resolves a decrypted string data.

## Description

### How gamefiles are encrypted

TBD

## Examples
### Obtaining gamefile data using `<input type="file">` for decryption on browser

```html
<input type="file" id="file" />

<!-- textarea displaying decrypted content of a gamefile -->
<textarea id="result" cols="50" rows="50"></textarea>
```

```js
import { decryptGameFile } from '@gdapi/crypto'

const fileElem = document.querySelector('#file')
const resultElem = document.querySelector('#result')

fileElem.addEventListener('change', async evt => {
  // get File from the fileElem.files array
  const file = evt.target.files[0]
  // load data as a ArrayBuffer
  const buffer = await file.arrayBuffer()
  // create a Uint8Array with the buffer as a underlying source
  const data = new Uint8Array(buffer)

  // decrypt the data and show result in the textarea
  resultElem.textContent = await decryptGameFile(data)
})
```

### Decrypting in Node.js
The following script demonstrates decrypting local computer's `CCGameManager.dat` file.

```js
import fs from 'node:fs/promises'
import path from 'path'
import { decryptGameFile } from '@gdapi/crypto'

const gameManagerPath = path.join(process.env['localappdata'], 'GeometryDash', 'CCGameManager.dat')

// read data as a Buffer
const data = await fs.readFile(gameManagerPath)

// decrypt the data and print the result to the console
const decryptedData = await decryptGameFile(data)
console.log(decryptedData)
```







