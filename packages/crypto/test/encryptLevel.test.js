import { decryptLevel, encryptLevel } from '../build/index.js'
import loadText from './util/loadText.js'

describe('encryptGameFile()', () => {
  it('should encrypt file that can be decrypted again', async () => {
    const xml = await loadText('decrypted.level')
    const encrypted = await encryptLevel(xml)
    // this should not throw
    decryptLevel(encrypted)
  })
})
