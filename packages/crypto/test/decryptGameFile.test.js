import { decryptGameFile } from '../build/index.js'
import loadResource from './util/loadResource.js'

async function testAgainstFile (fileName) {
  const typedArray = await loadResource(fileName)
  return decryptGameFile(typedArray)
}

describe('decryptGameFile()', () => {
  it('should decrypt CCGameManager', async () => {
    const result = await testAgainstFile('CCGameManager.dat')
    expect(typeof result).toBe('string')
  })

  it('should decrypt CCGameManager2', async () => {
    const result = await testAgainstFile('CCGameManager2.dat')
    expect(typeof result).toBe('string')
  })

  it('should decrypt LocalLevels', async () => {
    const result = await testAgainstFile('CCLocalLevels.dat')
    expect(typeof result).toBe('string')
  })

  it('should decrypt LocalLevels2', async () => {
    const result = await testAgainstFile('CCLocalLevels2.dat')
    expect(typeof result).toBe('string')
  })
})
