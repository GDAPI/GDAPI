export default function padBase64 (b64Str) {
  const padLength = 4 - (b64Str.length % 4)
  if (padLength === 4) return b64Str

  let pad = ''
  for (let i = 1; i <= padLength; i++) {
    pad += '='
  }
  return b64Str + pad
}
