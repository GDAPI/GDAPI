// load file(s) as text in browser environment
async function loadTextBrowser (fileOrFiles) {
  if (typeof fileOrFiles === 'string') {
    const res = await fetch(`/base/test/resource/${fileOrFiles}`)
    return res.text()
  }

  const files = []
  const results = []
  for (const file of files) {
    const res = await fetch(`/base/test/resource/${file}`)
    results.push(await res.text())
  }
  return results
}

// load file(s) as text in node environment
async function loadTextNode (fileOrFiles) {
  const { readFile } = await import('node:fs/promises')

  if (typeof fileOrFiles === 'string') {
    return await readFile(`test/resource/${fileOrFiles}`, { encoding: 'utf-8' })
  }

  const files = []
  const results = []
  for (const file of files) {
    const text = await readFile(`test/resource/${file}`, { encoding: 'utf-8' })
    results.push(text)
  }
  return results
}

export default async function loadText (fileOrFiles) {
  if (globalThis?.process?.env?.NODE_ENV === 'test') {
    // node environment
    return await loadTextNode(fileOrFiles)
  } else {
    // browser environment
    return await loadTextBrowser(fileOrFiles)
  }
}
