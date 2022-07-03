# GDAPI monorepo
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Monorepo for all `gdapi` packages.

# About GDAPI project
GDAPI is [my](https://github.com/Quasar-Kim) personal project to provide javascript packages to interact with client side data of the game Geometry Dash.
All packages are publish to npm under `@gdapi` scope.

Features
- **Works on both browser and Node.js environment**: All packages are tested against browser and node.js environment.
- **Modular architecture**: this project consists of various small packages instead of a giant one.

See README in each package for more information.
# Package Status
| Package | Status | About
| ----------| ------ | ------
| [`crypto`](https://github.com/GDAPI/GDAPI/tree/master/packages/crypto) | [![Published on npm](https://img.shields.io/npm/v/@gdapi/crypto.svg)](https://www.npmjs.com/package/@gdapi/crypto) | Encrypts/decrypts gamefiles and levels.
| [`plist`](https://github.com/GDAPI/GDAPI/tree/master/packages/plist) | [![Published on npm](https://img.shields.io/npm/v/@gdapi/plist.svg)](https://www.npmjs.com/package/@gdapi/plist) | Parse/stringify simplified plist inside gamefiles.
| [`gamefile`](https://github.com/GDAPI/GDAPI/tree/master/packages/gamefile) | **In development** | Parse/stringify gamefiles into readable javascript object using crypto and plist module.
| level-str | Planned | Encode/decode encoded raw level string.
| level | Planned | Parse/stringify encoded level string into readable javascript object using crypto and level-str module.

# Project structure

# Credit
Great thanks to [gddocs](https://github.com/gd-programming/gddocs) team for providing valuable reference.
