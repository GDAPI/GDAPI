export default async function loadResource (fileOrFiles) {
  const files = []
  if (typeof fileOrFiles === 'string') {
    const res = await fetch(`/base/test/resource/${fileOrFiles}`)
    return new Uint8Array(await res.arrayBuffer())
  }

  const results = []
  for (const file of files) {
    const res = await fetch(`/base/test/resource/${file}`)
    results.push(new Uint8Array(await res.arrayBuffer()))
  }
  return results
}
