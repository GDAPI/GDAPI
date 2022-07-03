import { encryptGameFile, decryptGameFile } from '../build/index.js'
import loadText from './util/loadText.js'

describe('encryptGameFile()', () => {
  it('should encrypt file that can be decrypted again', async () => {
    const xml = await loadText('LocalLevels.xml')
    const encrypted = await encryptGameFile(xml)
    // this should not throw
    decryptGameFile(encrypted)
  })
})
