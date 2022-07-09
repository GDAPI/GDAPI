// load file(s) as Uint8Array in browser environment
async function loadTextBrowser (fileOrFiles) {
  if (typeof fileOrFiles === 'string') {
    const res = await fetch(`/base/test/resource/${fileOrFiles}`)
    return new Uint8Array(await res.arrayBuffer())
  }

  const files = []
  const results = []
  for (const file of files) {
    const res = await fetch(`/base/test/resource/${file}`)
    results.push(new Uint8Array(await res.arrayBuffer()))
  }
  return results
}

// load file(s) as Buffer(which is compatible with Uint8Array interface) in node environment
async function loadTextNode (fileOrFiles) {
  const { readFile } = await import('node:fs/promises')

  if (typeof fileOrFiles === 'string') {
    return await readFile(`test/resource/${fileOrFiles}`)
  }

  const files = []
  const results = []
  for (const file of files) {
    const buffer = await readFile(`test/resource/${file}`)
    results.push(buffer)
  }
  return results
}

export default async function loadResource (fileOrFiles) {
  if (globalThis?.process?.env?.NODE_ENV === 'test') {
    // node environment
    return await loadTextNode(fileOrFiles)
  } else {
    // browser environment
    return await loadTextBrowser(fileOrFiles)
  }
}
