export function decode (data) {
  return new TextDecoder('utf-8').decode(data)
}

export function encode (data) {
  return new TextEncoder('utf-8').encode(data)
}
