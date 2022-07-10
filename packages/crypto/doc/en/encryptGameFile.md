English | [한국어](../ko/encryptGameFile.md)

# encryptGameFile()

Encrypt data into a gamefile data. The encrypted data can be readily saved as a gamefile.

## Importing

Use `import` to import the function from the `@gdapi/crypto` package.
```js
import { encryptGameFile } from '@gdapi/crypto'
```

## Syntax

```
encryptGameFile(data)
```

- `data`

  A string data to be encrypted.

### Return value
A `Uint8Array`(browser) or a `Buffer`(Node.js) representing an encrypted data. This data can be directly saved as a gamefile.

## Description

For detailed description about how game encrypts data in gamefiles, please refer to the documentation of the `decryptGameFile()` function.

