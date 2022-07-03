import { decryptLevel } from '../build/index.js'
import loadText from './util/loadText.js'

async function testAgainstFile (fileName) {
  const typedArray = await loadText(fileName)
  return decryptLevel(typedArray)
}

describe('decryptLevel()', () => {
  it('should decrypt GZipped level', async () => {
    const result = await testAgainstFile('GZipped.level')
    expect(typeof result).toBe('string')
  })
})

// TODO: add case for level with zlib header
