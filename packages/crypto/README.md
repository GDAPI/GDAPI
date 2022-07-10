English | [한국어](README_ko.md)

## Module: crypto
[![Crypto Module Test](https://github.com/GDAPI/GDAPI/actions/workflows/crypto-test.yaml/badge.svg)](https://github.com/GDAPI/GDAPI/actions/workflows/crypto-test.yaml)
[![Published on npm](https://img.shields.io/npm/v/@gdapi/plist.svg)](https://www.npmjs.com/package/@gdapi/plist)

[Live Demo](https://stackblitz.com/edit/gdapi-crypto-demo?file=index.js)

Module for decrypting/encrypting client side gamefile of the game Geometry Dash. Also supports encoding/decoding of the level data.

## Install

Works on Chrome / Node.js with ES module support.

### NPM
Install `@gdapi/crypto` package.

```
npm i @gdapi/crypto
```

### CDN
On browser, you can directly import module from CDNs(jsdelivr/unpkg) without installing the package.
```js
// jsdelivr
import { decryptGameFile } from 'https://cdn.jsdelivr.net/npm/@gdapi/crypto/build/index.min.js'
// unpkg
import { decryptGameFile } from 'https://unpkg.com/@gdapi/crypto/build/index.min.js'
```


## Usage

Following functions are exposed by the package and can be imported to your code.
```js
import {
  decryptGameFile, // decrypt game file
  encryptGameFile, // encrypt game file
  decryptLevel, // decode encoded level data
  encryptLevel // encode decoded level data
} from '@gdapi/crypto'
```

- [decryptGameFile](doc/en/decryptGameFile.md)

  Receive gamefiles(`CCGameManager.dat`, `CCLocalLevels.dat`) as an input and decrypt its data.

- [encryptGameFile](doc/en/encryptGameFile.md) 

  Encrypt data into a gamefile data. The encrypted data can be readily saved as a gamefile.

- [decryptLevel](doc/en/decryptLevel.md)

  Decode an encoded level data.

- [encryptLevel](doc/en/encryptLevel.md)

  Encode a decoded level data.

## Contribute

Contributions are welcome. To contribute to this project, please open a pull request.

## License

This package is licensed under the ISC license. The full license text can be found in `LICENSE.md` file.