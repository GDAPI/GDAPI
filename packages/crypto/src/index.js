import pako from 'pako'
import xor from './xor.js'
import * as UTF8 from './utf8.js'
import padBase64 from './padBase64.js'
import Base64 from 'base64-js'
import toURLSafeBase64 from './toURLSafeBase64.js'
import PipeFunction from './util/PipeFunction.js'

export const decryptGameFile = new PipeFunction(
  xor,
  UTF8.decode,
  padBase64,
  toURLSafeBase64,
  Base64.toByteArray,
  pako.inflate,
  UTF8.decode
)

export const encryptGameFile = new PipeFunction(
  pako.deflate,
  Base64.fromByteArray,
  toURLSafeBase64,
  UTF8.encode,
  xor
)

export const decryptLevel = new PipeFunction(
  toURLSafeBase64,
  Base64.toByteArray,
  pako.inflate,
  UTF8.decode
)

export const encryptLevel = new PipeFunction(
  pako.deflate,
  Base64.fromByteArray,
  toURLSafeBase64
)
