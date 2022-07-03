const ENCRYPTION_KEY = 11

export default function xor (data) {
  return data.map(x => x ^ ENCRYPTION_KEY)
}
