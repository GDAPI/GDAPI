export default function toURLSafeBase64 (str) {
  return str.replace(/\+|\//g, match => {
    if (match === '+') return '-'
    return '_'
  })
}
